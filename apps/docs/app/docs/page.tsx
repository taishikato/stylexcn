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
        Implemented StyleX components. Each page is a live demo — click, type,
        and open overlays. Visual target is official shadcn/ui New York v4.
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
