import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../src/site-header";
import { ThemeProvider } from "../src/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "stylexcn",
    template: "%s · stylexcn",
  },
  description:
    "shadcn/ui-compatible components styled with StyleX. Visual target: New York v4.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
