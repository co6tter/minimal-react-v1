# minimal-react-v1

## Overview

シンプルなハンバーガーショップのメニュー注文システムです。React の基本的な状態管理とコンポーネント設計を学習するためのミニマルなプロジェクトです。

主な機能：
- メニューアイテムの数量調整（増減ボタン）
- リアルタイムの合計金額計算
- シンプルで直感的なUI

## Tech Stack

- **React** 19.1.0 - UIライブラリ
- **Vite** 6.3.5 - ビルドツール・開発サーバー
- **ESLint** 9.25.0 - コード品質管理

## Setup

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd minimal-react-v1
```

2. 依存関係をインストール:
```bash
pnpm install
```

または npm/yarn を使用:
```bash
npm install
# or
yarn install
```

## Usage

### 開発サーバーの起動
```bash
pnpm dev
```

ブラウザで `http://localhost:5173` を開くとアプリケーションが表示されます。

### ビルド
```bash
pnpm build
```

### プレビュー
```bash
pnpm preview
```

### Lint
```bash
pnpm lint
```

## Directory Structure

```
minimal-react-v1/
├── public/
│   └── vite.svg          # Viteのロゴ
├── src/
│   ├── assets/           # 静的アセット
│   │   └── react.svg
│   ├── App.jsx           # メインアプリケーションコンポーネント
│   ├── App.css           # アプリケーションスタイル
│   ├── main.jsx          # エントリーポイント
│   └── index.css         # グローバルスタイル
├── index.html            # HTMLテンプレート
├── vite.config.js        # Vite設定
├── eslint.config.js      # ESLint設定
└── package.json          # プロジェクト設定
```

## License

This repository is for personal/private use only.
