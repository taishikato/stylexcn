import * as stylex from "@stylexjs/stylex";
import { Button, type ButtonSize, type ButtonVariant } from "./components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/card";
import { Checkbox } from "./components/checkbox";
import { Input } from "./components/input";
import { Label } from "./components/label";
import { RadioGroup, RadioGroupItem } from "./components/radio-group";
import { Switch } from "./components/switch";
import { Textarea } from "./components/textarea";
import { darkTheme } from "./theme";
import { Harness, parseCaptureParams, SIZES, VARIANTS } from "./visual/harness";
import { OfficialButton } from "./visual/official-button";
import {
  OfficialCard,
  OfficialCardAction,
  OfficialCardContent,
  OfficialCardDescription,
  OfficialCardFooter,
  OfficialCardHeader,
  OfficialCardTitle,
} from "./visual/official-card";
import { OfficialCheckbox } from "./visual/official-checkbox";
import { OfficialInput } from "./visual/official-input";
import { OfficialLabel } from "./visual/official-label";
import {
  OfficialRadioGroup,
  OfficialRadioGroupItem,
} from "./visual/official-radio-group";
import { OfficialSwitch } from "./visual/official-switch";
import { OfficialTextarea } from "./visual/official-textarea";

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
  checkRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  cardWell: {
    width: "20rem",
  },
});

function Playground() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 {...stylex.props(styles.heading)}>stylexcn playground</h1>
      <p {...stylex.props(styles.sub)}>
        StyleX Button, Input, Label, Textarea, Checkbox, Switch, Radio Group,
        and Card vs official shadcn New York baseline. Visual capture lives at
        query-param harness URLs (see README).
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
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Label
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <Label htmlFor={`${dark ? "d" : "l"}-stylex-email`}>Email</Label>
          <Input id={`${dark ? "d" : "l"}-stylex-email`} defaultValue="Email" />
        </div>
        <div className="group" data-disabled="true">
          <div {...stylex.props(styles.inputWell)}>
            <Label>Disabled group</Label>
            <Input defaultValue="Email" disabled />
          </div>
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <input className="peer" defaultValue="Email" disabled />
          <Label>Peer disabled</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Label
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-email`}>
            Email
          </OfficialLabel>
          <OfficialInput
            id={`${dark ? "d" : "l"}-shadcn-email`}
            defaultValue="Email"
          />
        </div>
        <div className="group" data-disabled="true">
          <div {...stylex.props(styles.inputWell)}>
            <OfficialLabel>Disabled group</OfficialLabel>
            <OfficialInput defaultValue="Email" disabled />
          </div>
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialInput className="peer" defaultValue="Email" disabled />
          <OfficialLabel>Peer disabled</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Textarea
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <Textarea defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Textarea defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <Textarea defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Textarea
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialTextarea defaultValue="Email" />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialTextarea defaultValue="Email" disabled />
        </div>
        <div {...stylex.props(styles.inputWell)}>
          <OfficialTextarea defaultValue="Email" aria-invalid />
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Checkbox
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox id={`${dark ? "d" : "l"}-stylex-cb`} />
          <Label htmlFor={`${dark ? "d" : "l"}-stylex-cb`}>Accept terms</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox defaultChecked />
          <Label>Checked</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox disabled />
          <Label>Disabled</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Checkbox aria-invalid />
          <Label>Invalid</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Checkbox
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox id={`${dark ? "d" : "l"}-shadcn-cb`} />
          <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-cb`}>
            Accept terms
          </OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox defaultChecked />
          <OfficialLabel>Checked</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox disabled />
          <OfficialLabel>Disabled</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialCheckbox aria-invalid />
          <OfficialLabel>Invalid</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Switch
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <Switch id={`${dark ? "d" : "l"}-stylex-sw`} />
          <Label htmlFor={`${dark ? "d" : "l"}-stylex-sw`}>Airplane mode</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Switch defaultChecked />
          <Label>Checked</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Switch disabled />
          <Label>Disabled</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <Switch defaultChecked disabled />
          <Label>Checked disabled</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Switch
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch id={`${dark ? "d" : "l"}-shadcn-sw`} />
          <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-sw`}>
            Airplane mode
          </OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch defaultChecked />
          <OfficialLabel>Checked</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch disabled />
          <OfficialLabel>Disabled</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialSwitch defaultChecked disabled />
          <OfficialLabel>Checked disabled</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Radio Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <RadioGroup defaultValue="one">
          <div {...stylex.props(styles.checkRow)}>
            <RadioGroupItem value="one" id={`${dark ? "d" : "l"}-stylex-rg-1`} />
            <Label htmlFor={`${dark ? "d" : "l"}-stylex-rg-1`}>One</Label>
          </div>
          <div {...stylex.props(styles.checkRow)}>
            <RadioGroupItem value="two" id={`${dark ? "d" : "l"}-stylex-rg-2`} />
            <Label htmlFor={`${dark ? "d" : "l"}-stylex-rg-2`}>Two</Label>
          </div>
        </RadioGroup>
        <div {...stylex.props(styles.checkRow)}>
          <RadioGroup>
            <RadioGroupItem value="off" disabled />
          </RadioGroup>
          <Label>Disabled</Label>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <RadioGroup>
            <RadioGroupItem value="bad" aria-invalid />
          </RadioGroup>
          <Label>Invalid</Label>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Radio Group
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <OfficialRadioGroup defaultValue="one">
          <div {...stylex.props(styles.checkRow)}>
            <OfficialRadioGroupItem
              value="one"
              id={`${dark ? "d" : "l"}-shadcn-rg-1`}
            />
            <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-rg-1`}>
              One
            </OfficialLabel>
          </div>
          <div {...stylex.props(styles.checkRow)}>
            <OfficialRadioGroupItem
              value="two"
              id={`${dark ? "d" : "l"}-shadcn-rg-2`}
            />
            <OfficialLabel htmlFor={`${dark ? "d" : "l"}-shadcn-rg-2`}>
              Two
            </OfficialLabel>
          </div>
        </OfficialRadioGroup>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialRadioGroup>
            <OfficialRadioGroupItem value="off" disabled />
          </OfficialRadioGroup>
          <OfficialLabel>Disabled</OfficialLabel>
        </div>
        <div {...stylex.props(styles.checkRow)}>
          <OfficialRadioGroup>
            <OfficialRadioGroupItem value="bad" aria-invalid />
          </OfficialRadioGroup>
          <OfficialLabel>Invalid</OfficialLabel>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · StyleX Card
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.cardWell)}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              A short body of copy that wraps at this width.
            </CardContent>
            <CardFooter>Need help?</CardFooter>
          </Card>
        </div>
        <div {...stylex.props(styles.cardWell)}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
              <CardAction>Action</CardAction>
            </CardHeader>
            <CardContent>
              A short body of copy that wraps at this width.
            </CardContent>
            <CardFooter>Need help?</CardFooter>
          </Card>
        </div>
      </div>
      <h2 {...stylex.props(styles.heading)}>
        {dark ? "Dark" : "Light"} · shadcn Card
      </h2>
      <div {...stylex.props(styles.row)}>
        <span {...stylex.props(styles.label)}>default</span>
        <div {...stylex.props(styles.cardWell)}>
          <OfficialCard>
            <OfficialCardHeader>
              <OfficialCardTitle>Login to your account</OfficialCardTitle>
              <OfficialCardDescription>
                Enter your email below to login to your account
              </OfficialCardDescription>
            </OfficialCardHeader>
            <OfficialCardContent>
              A short body of copy that wraps at this width.
            </OfficialCardContent>
            <OfficialCardFooter>Need help?</OfficialCardFooter>
          </OfficialCard>
        </div>
        <div {...stylex.props(styles.cardWell)}>
          <OfficialCard>
            <OfficialCardHeader>
              <OfficialCardTitle>Login to your account</OfficialCardTitle>
              <OfficialCardDescription>
                Enter your email below to login to your account
              </OfficialCardDescription>
              <OfficialCardAction>Action</OfficialCardAction>
            </OfficialCardHeader>
            <OfficialCardContent>
              A short body of copy that wraps at this width.
            </OfficialCardContent>
            <OfficialCardFooter>Need help?</OfficialCardFooter>
          </OfficialCard>
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
