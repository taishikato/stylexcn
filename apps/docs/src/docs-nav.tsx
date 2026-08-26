"use client";

import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPONENTS } from "./catalog";
import { chrome } from "./chrome.stylex";

function NavList() {
  const pathname = usePathname();

  return (
    <nav>
      <div {...stylex.props(chrome.navLabel)}>Components</div>
      <ul {...stylex.props(chrome.navList)}>
        {COMPONENTS.map((item) => {
          const href = `/docs/${item.slug}`;
          const active = pathname === href;
          return (
            <li key={item.slug}>
              <Link
                href={href}
                {...stylex.props(chrome.navLink, active && chrome.navLinkActive)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function DocsSidebar() {
  return (
    <aside {...stylex.props(chrome.sidebar)}>
      <NavList />
    </aside>
  );
}

export function DocsMobileNav() {
  return (
    <div {...stylex.props(chrome.mobileNav)}>
      <NavList />
    </div>
  );
}
