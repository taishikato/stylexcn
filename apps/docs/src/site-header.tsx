"use client";

import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import { Button } from "@stylexcn/components/button";
import { chrome } from "./chrome.stylex";
import { useTheme } from "./theme-provider";

export function SiteHeader() {
  const { dark, toggle } = useTheme();

  return (
    <header {...stylex.props(chrome.header)}>
      <Link href="/" {...stylex.props(chrome.brand)}>
        <span {...stylex.props(chrome.brandMark)}>stylexcn</span>
        <span {...stylex.props(chrome.brandHint)}>StyleX × shadcn New York</span>
      </Link>
      <div {...stylex.props(chrome.headerActions)}>
        <Link href="/docs" {...stylex.props(chrome.ghostLink)}>
          Docs
        </Link>
        <Button variant="outline" size="sm" onClick={toggle} type="button">
          {dark ? "Light" : "Dark"}
        </Button>
      </div>
    </header>
  );
}
