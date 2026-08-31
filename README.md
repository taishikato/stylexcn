# stylexcn

Shadcn UI, but with StyleX instead of Tailwind CSS.

![stylexcn - StyleX components with the shadcn look](apps/docs/public/opengraph-image-v2.png)

## Documentation

Visit https://stylexcn.vercel.app/docs to view the documentation.

## Usage

```bash
pnpm dlx shadcn@latest add https://stylexcn.vercel.app/r/button.json
```

After [registering the optional namespace](https://stylexcn.vercel.app/docs):

```bash
pnpm dlx shadcn@latest add @stylexcn/button
```

StyleX must already be set up.
See the [documentation](https://stylexcn.vercel.app/docs) for the rest.

## Dark mode

Install the ThemeProvider for persistent light, dark, and system modes.
The dark StyleX theme is included automatically:

```bash
pnpm dlx shadcn@latest add @stylexcn/theme-provider
```

Wrap the application root.
In Next.js, add `suppressHydrationWarning` because the provider updates the root element's classes:

```tsx
import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

To manage dark mode yourself instead, install only the theme:

```bash
pnpm dlx shadcn@latest add @stylexcn/theme
```

Apply the StyleX theme class and the `dark` class to the same ancestor:

```tsx
import * as stylex from '@stylexjs/stylex';
import { darkTheme } from '@/lib/theme.stylex';

const themeProps = stylex.props(darkTheme);

export function DarkSurface({ children }: { children: React.ReactNode }) {
  return (
    <div
      {...themeProps}
      className={`dark ${themeProps.className ?? ''}`}
    >
      {children}
    </div>
  );
}
```
