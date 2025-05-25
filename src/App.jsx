import { useState } from "react";
import "./App.css";

const Menu = (props) => {
  const decrement = () => {
    props.onDecrement(props.menuId);
  };
  const increment = () => {
    props.onIncrement(props.menuId);
  };

  return (
    <li>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      {props.name} ({props.price}円 ☓ {props.count}個)
    </li>
  );
};

function App() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const menus = [
    { id: 0, name: "ハンバーガー", price: 400 },
    { id: 1, name: "チーズハンバーガー", price: 500 },
    { id: 2, name: "チキンハンバーガー", price: 600 },
  ];
  const total = menus.reduce((total, menu) => {
    return total + menu.price * counts[menu.id];
  }, 0);
  const decrementMenu = (menuId) => {
    if (counts[menuId] > 0) {
      const newCounts = [...counts];
      newCounts[menuId]--;
      setCounts(newCounts);
    }
  };
  const incrementMenu = (menuId) => {
    const newCounts = [...counts];
    newCounts[menuId]++;
    setCounts(newCounts);
  };

  const menuItems = menus.map((menu) => {
    return (
      <Menu
        key={menu.id}
        menuId={menu.id}
        count={counts[menu.id]}
        name={menu.name}
        price={menu.price}
        onDecrement={decrementMenu}
        onIncrement={incrementMenu}
      />
    );
  });
  return (
    <>
      <h1>メニュー</h1>
      <ul className="menus">{menuItems}</ul>
      <p>合計: {total}円</p>
    </>
  );
}

export default App;
