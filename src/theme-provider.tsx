'use client';

import * as stylex from '@stylexjs/stylex';
import {
  ThemeProvider as NextThemesProvider,
  useTheme,
  type ThemeProviderProps as NextThemesProviderProps,
} from 'next-themes';
import { useEffect, type ReactNode } from 'react';
import { darkTheme } from './theme';

const darkThemeClassNames =
  stylex.props(darkTheme).className?.split(/\s+/).filter(Boolean) ?? [];

function applyStyleXTheme(dark: boolean) {
  for (const className of darkThemeClassNames) {
    document.documentElement.classList.toggle(className, dark);
  }
}

function StyleXThemeSync({ forcedTheme }: { forcedTheme?: string }) {
  const { resolvedTheme } = useTheme();
  const activeTheme = forcedTheme ?? resolvedTheme;

  useEffect(() => {
    applyStyleXTheme(activeTheme === 'dark');
  }, [activeTheme]);

  return null;
}

function initialThemeScript(
  storageKey: string,
  defaultTheme: string,
  enableSystem: boolean,
  forcedTheme: string | undefined,
) {
  return `(() => { try { const stored = localStorage.getItem(${JSON.stringify(storageKey)}); const theme = ${JSON.stringify(forcedTheme)} ?? stored ?? ${JSON.stringify(defaultTheme)}; const dark = theme === 'dark' || (${JSON.stringify(enableSystem)} && theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches); for (const className of ${JSON.stringify(darkThemeClassNames)}) document.documentElement.classList.toggle(className, dark); } catch {} })()`;
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
          __html: initialThemeScript(
            storageKey,
            resolvedDefaultTheme,
            enableSystem,
            forcedTheme,
          ),
        }}
        nonce={nonce}
        suppressHydrationWarning
      />
      <StyleXThemeSync forcedTheme={forcedTheme} />
      {children}
    </NextThemesProvider>
  );
}

export { useTheme };
