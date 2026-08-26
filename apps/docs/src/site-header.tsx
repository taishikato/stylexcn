"use client";

import * as stylex from "@stylexjs/stylex";
import { Github, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { Button } from "@stylexcn/components/button";
import { chrome } from "./chrome.stylex";
import { landing } from "./landing.stylex";
import { useTheme } from "./theme-provider";

const GITHUB = "https://github.com/taishikato/stylexcn";

export function SiteHeader() {
  const { dark, toggle } = useTheme();

  return (
    <header {...stylex.props(chrome.header)}>
      <div {...stylex.props(landing.headerInner)}>
        <Link href="/" {...stylex.props(chrome.brand)}>
          <span {...stylex.props(chrome.brandMark)}>stylexcn</span>
        </Link>
        <nav {...stylex.props(landing.headerNav)}>
          <Link href="/docs" {...stylex.props(chrome.ghostLink)}>
            Docs
          </Link>
          <Link href="/docs" {...stylex.props(chrome.ghostLink)}>
            Components
          </Link>
        </nav>
        <div {...stylex.props(landing.headerRight)}>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            type="button"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            {...stylex.props(landing.iconBtn)}
            aria-label="GitHub repository"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer {...stylex.props(landing.footer)}>
      <div {...stylex.props(landing.footerInner)}>
        <Link href="/" {...stylex.props(landing.footerName)}>
          stylexcn
        </Link>
        <div {...stylex.props(landing.footerLinks)}>
          <Link href="/docs" {...stylex.props(chrome.ghostLink)}>
            Docs
          </Link>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            {...stylex.props(chrome.ghostLink)}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
