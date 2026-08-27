import * as stylex from "@stylexjs/stylex";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { useEffect, useRef, type ComponentProps } from "react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker";
import { tokens } from "../tokens.stylex";
import {
  buttonBase,
  buttonVariants,
  type ButtonVariant,
} from "./button";

const MIX_RING_50 = "color-mix(in oklab, var(--ring) 50%, transparent)";
const SHADOW_XS = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
const RING = `0 0 0 3px ${MIX_RING_50}`;
const RING_AND_SHADOW = `${RING}, ${SHADOW_XS}`;
const MD = "@media (min-width: 48rem)";
const FOCUSED_DAY = ':is([data-focused="true"] *)';

/**
 * Calendar as StyleX tables. Official item is react-day-picker DayPicker
 * plus Button ghost/icon DayButton. Do not switch the primitive.
 */
const chrome = stylex.create({
  root: {
    boxSizing: "border-box",
    backgroundColor: {
      default: tokens["--background"],
      ":is([data-slot='card-content'] *)": "transparent",
      ":is([data-slot='popover-content'] *)": "transparent",
    },
    padding: "0.75rem",
    "--cell-size": "2rem",
    ":not(#\\0)[dir='rtl'] .rdp-button_next > svg": {
      transform: "rotate(180deg)",
    },
    ":not(#\\0)[dir='rtl'] .rdp-button_previous > svg": {
      transform: "rotate(180deg)",
    },
  },
});

const root = stylex.create({
  fit: {
    width: "fit-content",
  },
});

const months = stylex.create({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: {
      default: "column",
      [MD]: "row",
    },
    gap: "1rem",
  },
});

const month = stylex.create({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "1rem",
  },
});

const nav = stylex.create({
  root: {
    position: "absolute",
    insetInline: 0,
    top: 0,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.25rem",
  },
});

const navButton = stylex.create({
  root: {
    boxSizing: "border-box",
    width: "var(--cell-size)",
    height: "var(--cell-size)",
    padding: 0,
    userSelect: "none",
    opacity: {
      default: 1,
      "[aria-disabled=true]": 0.5,
    },
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
});

const monthCaption = stylex.create({
  root: {
    display: "flex",
    height: "var(--cell-size)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: "var(--cell-size)",
    boxSizing: "border-box",
  },
});

const dropdowns = stylex.create({
  root: {
    display: "flex",
    height: "var(--cell-size)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    boxSizing: "border-box",
  },
});

const dropdownRoot = stylex.create({
  root: {
    position: "relative",
    borderRadius: tokens["--radius-md"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: tokens["--input"],
      ":has(:focus)": tokens["--ring"],
    },
    boxShadow: {
      default: SHADOW_XS,
      ":has(:focus)": RING_AND_SHADOW,
    },
    boxSizing: "border-box",
  },
});

const dropdown = stylex.create({
  root: {
    position: "absolute",
    inset: 0,
    backgroundColor: tokens["--popover"],
    opacity: 0,
  },
});

const captionLabel = stylex.create({
  base: {
    fontWeight: 500,
    userSelect: "none",
  },
  label: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  dropdown: {
    display: "flex",
    height: "2rem",
    alignItems: "center",
    gap: "0.25rem",
    borderRadius: tokens["--radius-md"],
    paddingRight: "0.25rem",
    paddingLeft: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    ":not(#\\0) > svg": {
      width: "0.875rem",
      height: "0.875rem",
      color: tokens["--muted-foreground"],
    },
  },
});

const monthGrid = stylex.create({
  root: {
    width: "100%",
    borderCollapse: "collapse",
  },
});

const weekdays = stylex.create({
  root: {
    display: "flex",
  },
});

const weekday = stylex.create({
  root: {
    flex: "1 1 0%",
    borderRadius: tokens["--radius-md"],
    fontSize: "0.8rem",
    fontWeight: 400,
    color: tokens["--muted-foreground"],
    userSelect: "none",
  },
});

const week = stylex.create({
  root: {
    marginTop: "0.5rem",
    display: "flex",
    width: "100%",
  },
});

const weekNumberHeader = stylex.create({
  root: {
    width: "var(--cell-size)",
    userSelect: "none",
  },
});

const weekNumber = stylex.create({
  root: {
    fontSize: "0.8rem",
    color: tokens["--muted-foreground"],
    userSelect: "none",
  },
  inner: {
    display: "flex",
    width: "var(--cell-size)",
    height: "var(--cell-size)",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
  },
});

const day = stylex.create({
  root: {
    position: "relative",
    aspectRatio: "1 / 1",
    height: "100%",
    width: "100%",
    padding: 0,
    textAlign: "center",
    userSelect: "none",
    boxSizing: "border-box",
  },
});

const range = stylex.create({
  start: {
    borderTopLeftRadius: tokens["--radius-md"],
    borderBottomLeftRadius: tokens["--radius-md"],
    backgroundColor: tokens["--accent"],
  },
  middle: {
    borderRadius: 0,
  },
  end: {
    borderTopRightRadius: tokens["--radius-md"],
    borderBottomRightRadius: tokens["--radius-md"],
    backgroundColor: tokens["--accent"],
  },
});

const today = stylex.create({
  root: {
    borderRadius: {
      default: tokens["--radius-md"],
      '[data-selected="true"]': 0,
    },
    backgroundColor: tokens["--accent"],
    color: tokens["--accent-foreground"],
  },
});

const outside = stylex.create({
  root: {
    color: {
      default: tokens["--muted-foreground"],
      "[aria-selected=true]": tokens["--muted-foreground"],
    },
  },
});

const disabled = stylex.create({
  root: {
    color: tokens["--muted-foreground"],
    opacity: 0.5,
  },
});

const hidden = stylex.create({
  root: {
    visibility: "hidden",
  },
});

const chevron = stylex.create({
  root: {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
    pointerEvents: "none",
  },
});

const dayButton = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    aspectRatio: "1 / 1",
    width: "100%",
    height: "auto",
    minWidth: "var(--cell-size)",
    padding: 0,
    gap: "0.25rem",
    lineHeight: 1,
    fontWeight: 400,
    boxSizing: "border-box",
    position: {
      default: null,
      [FOCUSED_DAY]: "relative",
    },
    zIndex: {
      default: null,
      [FOCUSED_DAY]: 10,
    },
    borderColor: {
      default: tokens["--border"],
      ":focus-visible": tokens["--ring"],
      [FOCUSED_DAY]: tokens["--ring"],
    },
    boxShadow: {
      default: "none",
      ":focus-visible": RING,
      [FOCUSED_DAY]: RING,
    },
    backgroundColor: {
      default: "transparent",
      '[data-selected-single="true"]': tokens["--primary"],
      '[data-range-start="true"]': tokens["--primary"],
      '[data-range-end="true"]': tokens["--primary"],
      '[data-range-middle="true"]': tokens["--accent"],
    },
    color: {
      default: "inherit",
      ":hover": tokens["--accent-foreground"],
      ":is(.dark *):hover": tokens["--accent-foreground"],
      '[data-selected-single="true"]': tokens["--primary-foreground"],
      '[data-range-start="true"]': tokens["--primary-foreground"],
      '[data-range-end="true"]': tokens["--primary-foreground"],
      '[data-range-middle="true"]': tokens["--accent-foreground"],
    },
    borderRadius: {
      default: tokens["--radius-md"],
      '[data-range-middle="true"]': 0,
    },
    borderTopLeftRadius: {
      default: null,
      '[data-range-start="true"]': tokens["--radius-md"],
      '[data-week-start="true"][data-range-middle="true"]': tokens["--radius-md"],
      '[data-week-start="true"][data-selected-single="true"]':
        tokens["--radius-md"],
      '[data-week-start="true"][data-range-end="true"]': tokens["--radius-md"],
    },
    borderBottomLeftRadius: {
      default: null,
      '[data-range-start="true"]': tokens["--radius-md"],
      '[data-week-start="true"][data-range-middle="true"]': tokens["--radius-md"],
      '[data-week-start="true"][data-selected-single="true"]':
        tokens["--radius-md"],
      '[data-week-start="true"][data-range-end="true"]': tokens["--radius-md"],
    },
    borderTopRightRadius: {
      default: null,
      '[data-range-end="true"]': tokens["--radius-md"],
      '[data-week-end="true"][data-range-middle="true"]': tokens["--radius-md"],
      '[data-week-end="true"][data-selected-single="true"]':
        tokens["--radius-md"],
      '[data-week-end="true"][data-range-start="true"]': tokens["--radius-md"],
    },
    borderBottomRightRadius: {
      default: null,
      '[data-range-end="true"]': tokens["--radius-md"],
      '[data-week-end="true"][data-range-middle="true"]': tokens["--radius-md"],
      '[data-week-end="true"][data-selected-single="true"]':
        tokens["--radius-md"],
      '[data-week-end="true"][data-range-start="true"]': tokens["--radius-md"],
    },
    ":not(#\\0) > span": {
      fontSize: "0.75rem",
      opacity: 0.7,
    },
  },
});

function mergeClass(extra: string | undefined, ...styles: any[]) {
  const sx = stylex.props(...styles);
  return [sx.className, extra].filter(Boolean).join(" ");
}


export type CalendarProps = ComponentProps<typeof DayPicker> & {
  buttonVariant?: ButtonVariant;
};

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  style,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();
  const chromeSx = stylex.props(chrome.root);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={[chromeSx.className, className].filter(Boolean).join(" ")}
      style={{ ...chromeSx.style, ...style }}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: mergeClass(defaultClassNames.root, root.fit),
        months: mergeClass(defaultClassNames.months, months.root),
        month: mergeClass(defaultClassNames.month, month.root),
        nav: mergeClass(defaultClassNames.nav, nav.root),
        button_previous: mergeClass(
          defaultClassNames.button_previous,
          buttonBase.root,
          buttonVariants[buttonVariant],
          navButton.root,
        ),
        button_next: mergeClass(
          defaultClassNames.button_next,
          buttonBase.root,
          buttonVariants[buttonVariant],
          navButton.root,
        ),
        month_caption: mergeClass(
          defaultClassNames.month_caption,
          monthCaption.root,
        ),
        dropdowns: mergeClass(defaultClassNames.dropdowns, dropdowns.root),
        dropdown_root: mergeClass(
          defaultClassNames.dropdown_root,
          dropdownRoot.root,
        ),
        dropdown: mergeClass(defaultClassNames.dropdown, dropdown.root),
        caption_label: mergeClass(
          defaultClassNames.caption_label,
          captionLabel.base,
          captionLayout === "label" ? captionLabel.label : captionLabel.dropdown,
        ),
        month_grid: mergeClass(defaultClassNames.month_grid, monthGrid.root),
        weekdays: mergeClass(defaultClassNames.weekdays, weekdays.root),
        weekday: mergeClass(defaultClassNames.weekday, weekday.root),
        week: mergeClass(defaultClassNames.week, week.root),
        week_number_header: mergeClass(
          defaultClassNames.week_number_header,
          weekNumberHeader.root,
        ),
        week_number: mergeClass(defaultClassNames.week_number, weekNumber.root),
        day: mergeClass(defaultClassNames.day, day.root),
        range_start: mergeClass(defaultClassNames.range_start, range.start),
        range_middle: mergeClass(defaultClassNames.range_middle, range.middle),
        range_end: mergeClass(defaultClassNames.range_end, range.end),
        today: mergeClass(defaultClassNames.today, today.root),
        outside: mergeClass(defaultClassNames.outside, outside.root),
        disabled: mergeClass(defaultClassNames.disabled, disabled.root),
        hidden: mergeClass(defaultClassNames.hidden, hidden.root),
        ...classNames,
      }}
      components={{
        Root: ({ className: rootClassName, rootRef, style: rootStyle, ...rootProps }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={rootClassName}
              style={rootStyle}
              {...rootProps}
            />
          );
        },
        Chevron: ({ className: chevronClassName, orientation, size: _size, ...chevronProps }) => {
          const sx = stylex.props(chevron.root);
          const merged = [sx.className, chevronClassName].filter(Boolean).join(" ");
          if (orientation === "left") {
            return (
              <ChevronLeftIcon
                className={merged}
                style={sx.style}
                {...chevronProps}
              />
            );
          }
          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={merged}
                style={sx.style}
                {...chevronProps}
              />
            );
          }
          return (
            <ChevronDownIcon
              className={merged}
              style={sx.style}
              {...chevronProps}
            />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...weekNumberProps }) => {
          return (
            <td {...weekNumberProps}>
              <div {...stylex.props(weekNumber.inner)}>{children}</div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

export function CalendarDayButton({
  className,
  day,
  modifiers,
  style,
  ...props
}: ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const sx = stylex.props(
    buttonBase.root,
    buttonVariants.ghost,
    dayButton.root,
  );

  return (
    <ButtonPrimitive
      ref={ref}
      data-slot="button"
      data-variant="ghost"
      data-size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-week-start={day.date.getDay() === 0}
      data-week-end={day.date.getDay() === 6}
      {...props}
      className={[sx.className, defaultClassNames.day, className]
        .filter(Boolean)
        .join(" ")}
      style={{ ...sx.style, ...style }}
    />
  );
}

export const calendarChrome = chrome;
export const calendarRoot = root;
export const calendarMonths = months;
export const calendarMonth = month;
export const calendarNav = nav;
export const calendarNavButton = navButton;
export const calendarDayButton = dayButton;
