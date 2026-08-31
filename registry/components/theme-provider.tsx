'use client';

import * as stylex from '@stylexjs/stylex';
import {
  ThemeProvider as NextThemesProvider,
  useTheme,
  type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes';
import { useEffect, type ReactNode } from 'react';
import { darkTheme } from '@/lib/theme.stylex';

const darkThemeClassNames =
  stylex.props(darkTheme).className?.split(/\s+/).filter(Boolean) ?? [];

function applyStyleXTheme(dark: boolean) {
  for (const className of darkThemeClassNames) {
    document.documentElement.classList.toggle(className, dark);
  }
}

function StyleXThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    applyStyleXTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return null;
}

function initialThemeScript() {
  return `(() => { try { const root = document.documentElement; const dark = root.classList.contains('dark'); for (const className of ${JSON.stringify(darkThemeClassNames)}) root.classList.toggle(className, dark); } catch {} })()`;
}

export type ThemeProviderProps = Omit<
  NextThemesProviderProps,
  'attribute' | 'value'
> & {
  children: ReactNode;
};

export function ThemeProvider({
  children,
  defaultTheme,
  enableSystem = true,
  forcedTheme,
  nonce,
  storageKey = 'stylexcn-theme',
  ...props
}: ThemeProviderProps) {
  const resolvedDefaultTheme = defaultTheme ?? (enableSystem ? 'system' : 'light');

  return (
    <NextThemesProvider
      {...props}
      attribute='class'
      defaultTheme={resolvedDefaultTheme}
      enableSystem={enableSystem}
      forcedTheme={forcedTheme}
      nonce={nonce}
      storageKey={storageKey}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: initialThemeScript(),
        }}
        nonce={nonce}
        suppressHydrationWarning
      />
      <StyleXThemeSync />
      {children}
    </NextThemesProvider>
  );
}

export { useTheme };
