# stylexcn docs

Next.js App Router のドキュメントサイト。既存の `src/components` を import して、ライブの StyleX コンポーネントをブラウザで触ります。

ルートの Vite playground と `npm run visual:diff` は別物です。このアプリはそれらを置き換えません。

## 起動

リポジトリのルートから:

```bash
npm install
npm run docs
```

http://localhost:3000

本番ビルド:

```bash
npm run docs:build
```

`apps/docs` から直接:

```bash
npm run dev -w stylexcn-docs
npm run build -w stylexcn-docs
```
