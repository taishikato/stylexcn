import * as stylex from "@stylexjs/stylex";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPONENTS } from "../../src/catalog";
import { chrome } from "../../src/chrome.stylex";
import { InstallCommand } from "../../src/install-command";
import { CodeBlock } from "../../src/code-block";
import { createPageMetadata } from "../../src/site-metadata";
import {
  addNamespaceCommand,
  addUrlCommand,
  listRegistryCommand,
  registerNamespaceCommand,
} from "../../src/install";

export const metadata: Metadata = createPageMetadata({
  title: "Components",
  description:
    "Explore live, interactive StyleX implementations of shadcn/ui components and install them with the shadcn CLI.",
  path: "/docs",
});

export default function DocsIndexPage() {
  return (
    <>
      <h1 {...stylex.props(chrome.pageTitle)}>Components</h1>
      <p {...stylex.props(chrome.lead)}>
        Implemented StyleX components. Each page is a live demo - click, type,
        and open overlays. Pixel-perfect with official shadcn/ui.
      </p>
      <h2 {...stylex.props(chrome.sectionTitle)}>Install</h2>
      <p {...stylex.props(chrome.note)}>
        Add a component with the official shadcn CLI. The consumer project must
        already compile StyleX (<code>@stylexjs/stylex</code> plus a bundler
        plugin). Tailwind init is not enough.
      </p>
      <InstallCommand command={addUrlCommand("button")} />
      <p {...stylex.props(chrome.note)}>Optional namespace:</p>
      <InstallCommand
        command={registerNamespaceCommand()}
        secondary={addNamespaceCommand("button")}
      />
      <h2 {...stylex.props(chrome.sectionTitle)}>Dark mode</h2>
      <p {...stylex.props(chrome.note)}>
        Add the optional theme item to install the dark StyleX token values.
        Apply its theme class and the <code>dark</code> class to the same
        ancestor.
      </p>
      <InstallCommand
        command={addUrlCommand('theme')}
        secondary={addNamespaceCommand('theme')}
      />
      <CodeBlock code={`import * as stylex from '@stylexjs/stylex';
import { darkTheme } from '@/lib/theme.stylex';

const themeProps = stylex.props(darkTheme);

<div
  {...themeProps}
  className={['dark', themeProps.className].filter(Boolean).join(' ')}
/>`} />
      <p {...stylex.props(chrome.note)}>List the catalog:</p>
      <InstallCommand command={listRegistryCommand()} />
      <section {...stylex.props(chrome.catalogBlock)}>
        <h2 {...stylex.props(chrome.sectionTitle, chrome.catalogHeading)}>
          Catalog
        </h2>
        <div {...stylex.props(chrome.catalog)}>
          {COMPONENTS.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/${item.slug}`}
              {...stylex.props(chrome.catalogCard)}
            >
              <span {...stylex.props(chrome.catalogName)}>{item.name}</span>
              <span {...stylex.props(chrome.catalogDesc)}>
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
