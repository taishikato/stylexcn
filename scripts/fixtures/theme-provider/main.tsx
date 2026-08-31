import * as stylex from '@stylexjs/stylex';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, useTheme } from '../../../src/theme-provider';
import { darkTheme } from '../../../src/theme';

const styleXThemeClasses = stylex.props(darkTheme).className ?? '';

function ThemeState() {
  const { resolvedTheme } = useTheme();

  return (
    <div
      data-resolved-theme={resolvedTheme}
      data-stylex-theme-classes={styleXThemeClasses}
      data-theme-state
    />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider forcedTheme='system'>
      <ThemeState />
    </ThemeProvider>
  </StrictMode>,
);
