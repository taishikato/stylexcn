import type { Metadata } from "next";
import "./globals.css";
import { DataFastInit } from "../src/datafast-init";
import { SiteHeader } from "../src/site-header";
import { ThemeProvider } from "../src/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "stylexcn",
    template: "%s · stylexcn",
  },
  description:
    "A StyleX port of shadcn/ui - same look, StyleX instead of Tailwind.",
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
          <DataFastInit />
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
