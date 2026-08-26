"use client";

import * as stylex from "@stylexjs/stylex";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { darkTheme } from "@stylexcn/theme";

type ThemeContextValue = {
  dark: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyHtmlTheme(dark: boolean) {
  const html = document.documentElement;
  const sx = stylex.props(darkTheme);
  const themeClasses = sx.className?.split(/\s+/).filter(Boolean) ?? [];

  html.classList.toggle("dark", dark);
  for (const cls of themeClasses) {
    html.classList.toggle(cls, dark);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("stylexcn-theme");
    const next = stored === "dark";
    setDark(next);
    applyHtmlTheme(next);
  }, []);

  const toggle = useCallback(() => {
    setDark((current) => {
      const next = !current;
      window.localStorage.setItem("stylexcn-theme", next ? "dark" : "light");
      applyHtmlTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return value;
}
