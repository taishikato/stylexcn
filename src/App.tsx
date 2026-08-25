import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonSize, type ButtonVariant } from "./components/button";
import { Input } from "./components/input";
import { darkTheme } from "./theme";
import { Harness, parseCaptureParams, SIZES, VARIANTS } from "./visual/harness";
import { OfficialButton } from "./visual/official-button";
import { OfficialInput } from "./visual/official-input";

const styles = stylex.create({
  page: {
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
  },
  heading: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
  },
  sub: {
    color: "var(--muted-foreground)",
    marginBottom: "2rem",
    fontSize: "0.875rem",
  },
  section: {
    marginBottom: "2rem",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.75rem",
    marginTop: "0.75rem",
  },
  label: {
    fontSize: "0.75rem",
    width: "6rem",
    color: "var(--muted-foreground)",
  },
  inputWell: {
    width: "12rem",
  },
});

function Playground() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 {...stylex.props(styles.heading)}>stylexcn playground</h1>
      <p {...stylex.props(styles.sub)}>
        StyleX Button and Input vs official shadcn New York baseline. Visual
        capture lives at query-param harness URLs (see README).
      </p>
      {([false, true] as const).map((isDark) => (
        <ThemeBlock key={String(isDark)} dark={isDark} />
      ))}
    </div>
  );
}

function ThemeBlock({ dark }: { dark: boolean }) {
  return (
    <div
      className={dark ? "dark" : undefined}
      {...stylex.props(dark && darkTheme, styles.section)}
    >
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX
      </h2>
      {VARIANTS.map((variant) => (
        <div key={variant} {...stylex.props(styles.row)}>
          <span {...stylex.props(styles.label)}>{variant}</span>
          {SIZES.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {buttonLabel(variant, size)}
            </Button>
          ))}
          <Button variant={variant} size="default" disabled>
            Disabled
          </Button>
        </div>
      ))}
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn baseline
      </h2>
      {VARIANTS.map((variant) => (
        <div key={variant} {...stylex.props(styles.row)}>
          <span {...stylex.props(styles.label)}>{variant}</span>
          {SIZES.map((size) => (
            <OfficialButton key={size} variant={variant} size={size}>
              {buttonLabel(variant, size)}
            </OfficialButton>
          ))}
          <OfficialButton variant={variant} size="default" disabled>
            Disabled
          </OfficialButton>
        </div>
      ))}
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Input
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <Input defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Input defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Input defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Input
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput defaultValue="Email" aria-invalid />
        </div>
      </div>
    </div>
  );
}

function buttonLabel(variant: ButtonVariant, size: ButtonSize) {
  if (size === "icon") return "→";
  return variant;
}

export function App() {
  const params = parseCaptureParams(window.location.search);
  if (params) {
    return <Harness {...params} />;
  }
  return <Playground />;
}
