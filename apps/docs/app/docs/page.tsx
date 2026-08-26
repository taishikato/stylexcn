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
        and open overlays. Pixel-perfect with official shadcn/ui.
      </p>
      <h2 {...stylex.props(chrome.sectionTitle)}>Install</h2>
      <p {...stylex.props(chrome.note)}>
        Add a component with the official shadcn CLI. The consumer project must
        already compile StyleX (<code>@stylexjs/stylex</code> plus a bundler
        plugin). Tailwind init is not enough.
      </p>
      <pre {...stylex.props(chrome.code)}>
        <code>{`pnpm dlx shadcn@latest add https://stylexcn.vercel.app/r/input.json`}</code>
      </pre>
      <p {...stylex.props(chrome.note)}>Optional namespace:</p>
      <pre {...stylex.props(chrome.code)}>
        <code>{`pnpm dlx shadcn@latest registry add @stylexcn=https://stylexcn.vercel.app/r/{name}.json
pnpm dlx shadcn@latest add @stylexcn/button`}</code>
      </pre>
      <p {...stylex.props(chrome.note)}>List the catalog:</p>
      <pre {...stylex.props(chrome.code)}>
        <code>{`pnpm dlx shadcn@latest list https://stylexcn.vercel.app/r/registry.json`}</code>
      </pre>
      <h2 {...stylex.props(chrome.sectionTitle)}>Catalog</h2>
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
