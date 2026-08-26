import * as stylex from "@stylexjs/stylex";
import { chrome } from "../../src/chrome.stylex";
import { DocsMobileNav, DocsSidebar } from "../../src/docs-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div {...stylex.props(chrome.layout)}>
      <DocsSidebar />
      <div {...stylex.props(chrome.contentColumn)}>
        <DocsMobileNav />
        <div {...stylex.props(chrome.main)}>{children}</div>
      </div>
    </div>
  );
}
