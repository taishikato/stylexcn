import * as stylex from "@stylexjs/stylex";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPONENTS } from "../../src/catalog";
import { chrome } from "../../src/chrome.stylex";

export const metadata: Metadata = {
  title: "Components",
};

export default function DocsIndexPage() {
  return (
    <>
      <h1 {...stylex.props(chrome.pageTitle)}>Components</h1>
      <p {...stylex.props(chrome.lead)}>
        実装済みの StyleX コンポーネントです。各ページで実際にクリック、入力、開閉できます。見た目の基準は shadcn/ui New York v4 です。
      </p>
      <div {...stylex.props(chrome.catalog)}>
        {COMPONENTS.map((item) => (
          <Link
            key={item.slug}
            href={`/docs/${item.slug}`}
            {...stylex.props(chrome.catalogCard)}
          >
            <span {...stylex.props(chrome.catalogName)}>{item.name}</span>
            <span {...stylex.props(chrome.catalogDesc)}>{item.description}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
