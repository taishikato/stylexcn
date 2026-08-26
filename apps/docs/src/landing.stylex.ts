import * as stylex from "@stylexjs/stylex";
import { tokens } from "@stylexcn/tokens.stylex";

const SM = "@media (min-width: 40rem)";
const MD = "@media (min-width: 48rem)";
const LG = "@media (min-width: 64rem)";

export const landing = stylex.create({
  page: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 3.5rem)",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingInline: "1.25rem",
    paddingTop: {
      default: "4.5rem",
      [SM]: "7rem",
    },
    paddingBottom: {
      default: "3.5rem",
      [SM]: "5rem",
    },
  },
  heroInner: {
    maxWidth: "44rem",
  },
  title: {
    fontSize: {
      default: "2.5rem",
      [SM]: "3.75rem",
    },
    lineHeight: 1.05,
    letterSpacing: "-0.06em",
    fontWeight: 700,
    marginBottom: "1.25rem",
    textWrap: "balance",
  },
  copy: {
    fontSize: {
      default: "1.0625rem",
      [SM]: "1.1875rem",
    },
    lineHeight: 1.7,
    color: tokens["--muted-foreground"],
    marginBottom: "2rem",
    textWrap: "pretty",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.75rem",
  },
  galleryWrap: {
    paddingInline: {
      default: "1rem",
      [SM]: "1.5rem",
    },
    paddingBottom: {
      default: "4rem",
      [SM]: "6rem",
    },
    maxWidth: "80rem",
    width: "100%",
    marginInline: "auto",
  },
  gallery: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: {
      default: "1fr",
      [MD]: "repeat(6, minmax(0, 1fr))",
      [LG]: "repeat(12, minmax(0, 1fr))",
    },
  },
  span4: {
    gridColumn: {
      default: "1 / -1",
      [MD]: "span 3",
      [LG]: "span 4",
    },
    minWidth: 0,
  },
  span6: {
    gridColumn: {
      default: "1 / -1",
      [MD]: "span 6",
      [LG]: "span 6",
    },
    minWidth: 0,
  },
  span8: {
    gridColumn: {
      default: "1 / -1",
      [MD]: "span 6",
      [LG]: "span 8",
    },
    minWidth: 0,
  },
  span12: {
    gridColumn: "1 / -1",
    minWidth: 0,
  },
  tile: {
    height: "100%",
    minHeight: "16rem",
  },
  tileBody: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  metric: {
    fontSize: "1.75rem",
    fontWeight: 650,
    letterSpacing: "-0.04em",
    lineHeight: 1.1,
  },
  navBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.15rem",
  },
  navHeading: {
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: tokens["--muted-foreground"],
    marginBottom: "0.35rem",
  },
  chatLog: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    minHeight: "10rem",
  },
  bubble: {
    maxWidth: "90%",
    borderRadius: tokens["--radius-lg"],
    padding: "0.625rem 0.85rem",
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  bubbleIn: {
    alignSelf: "flex-start",
    backgroundColor: tokens["--muted"],
    color: tokens["--foreground"],
  },
  bubbleOut: {
    alignSelf: "flex-end",
    backgroundColor: tokens["--primary"],
    color: tokens["--primary-foreground"],
  },
  chatComposer: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
    minWidth: 0,
  },
  strip: {
    marginTop: "3rem",
  },
  stripTitle: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: tokens["--muted-foreground"],
    marginBottom: "0.75rem",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  chip: {
    textDecorationLine: "none",
  },
  footer: {
    marginTop: "auto",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: tokens["--border"],
    paddingInline: {
      default: "1rem",
      [SM]: "1.5rem",
    },
    paddingBlock: "1.25rem",
  },
  footerInner: {
    maxWidth: "80rem",
    marginInline: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem",
  },
  footerName: {
    fontWeight: 600,
    letterSpacing: "-0.03em",
    textDecorationLine: "none",
    color: tokens["--foreground"],
  },
  footerLinks: {
    display: "flex",
    gap: "1rem",
  },
  iconBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2rem",
    height: "2rem",
    color: tokens["--muted-foreground"],
    textDecorationLine: "none",
    borderRadius: tokens["--radius-md"],
    ":hover": {
      color: tokens["--foreground"],
      backgroundColor: tokens["--accent"],
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    width: "100%",
    maxWidth: "80rem",
    marginInline: "auto",
  },
  headerNav: {
    display: "flex",
    alignItems: "center",
    gap: "0.125rem",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    marginLeft: "auto",
  },
  goalRow: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  goalMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.875rem",
  },
  mutedSm: {
    fontSize: "0.8125rem",
    lineHeight: 1.45,
    color: tokens["--muted-foreground"],
  },
  prefRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
});
