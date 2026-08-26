import * as stylex from "@stylexjs/stylex";
import { Label as LabelPrimitive, Separator as SeparatorPrimitive } from "radix-ui";
import { useMemo, type ComponentProps, type ReactNode } from "react";
import { tokens } from "../tokens.stylex";
import { labelBase, labelDisabled, type LabelProps } from "./label";
import { separatorRoot } from "./separator";

const MIX_PRIMARY_5 = "color-mix(in oklab, var(--primary) 5%, transparent)";
const MIX_PRIMARY_10 = "color-mix(in oklab, var(--primary) 10%, transparent)";
const FIELD_MD = "@container field-group (min-width: 28rem)";

/**
 * Field family as StyleX tables. Official Field composes Label + Separator;
 * FieldLabel / FieldSeparator merge those tables (wrapping cannot).
 * `@md/field-group` is the named container query at 28rem.
 */
const fieldSet = stylex.create({
  on: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    minWidth: 0,
    padding: 0,
    borderWidth: 0,
    fontFamily: "inherit",
    gap: {
      default: "1.5rem",
      ":has(> [data-slot=checkbox-group])": "0.75rem",
      ":has(> [data-slot=radio-group])": "0.75rem",
    },
    ":not(#\\0) > [data-variant='legend'] + [data-slot='field-description']": {
      marginTop: "-0.375rem",
    },
  },
});

const legend = stylex.create({
  on: {
    marginBottom: "0.75rem",
    padding: 0,
    fontWeight: 500,
    fontFamily: "inherit",
    fontSize: {
      default: null,
      '[data-variant="legend"]': "1rem",
      '[data-variant="label"]': "0.875rem",
    },
    lineHeight: {
      default: null,
      '[data-variant="legend"]': "1.5rem",
      '[data-variant="label"]': "1.25rem",
    },
    /* Official `[[data-variant=legend]+&]:-mt-1.5` on FieldDescription. */
    ":not(#\\0)[data-variant='legend'] + [data-slot='field-description']": {
      marginTop: "-0.375rem",
    },
  },
});

const group = stylex.create({
  on: {
    containerName: "field-group",
    containerType: "inline-size",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    fontFamily: "inherit",
    gap: {
      default: "1.75rem",
      '[data-slot="checkbox-group"]': "0.75rem",
    },
    ":not(#\\0) > [data-slot=field-group]": {
      gap: "1rem",
    },
  },
});

const field = stylex.create({
  base: {
    display: "flex",
    width: "100%",
    gap: "0.75rem",
    fontFamily: "inherit",
    color: {
      default: "inherit",
      '[data-invalid="true"]': tokens["--destructive"],
    },
  },
  vertical: {
    flexDirection: "column",
    ":not(#\\0) > *": {
      width: "100%",
    },
    ":not(#\\0) > .sr-only": {
      width: "auto",
    },
  },
  horizontal: {
    flexDirection: "row",
    alignItems: {
      default: "center",
      ":has(> [data-slot=field-content])": "flex-start",
    },
    ":not(#\\0) > [data-slot=field-label]": {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: "auto",
    },
    ":not(#\\0):has(> [data-slot=field-content]) > [role=checkbox]": {
      marginTop: "1px",
    },
    ":not(#\\0):has(> [data-slot=field-content]) > [role=radio]": {
      marginTop: "1px",
    },
  },
  responsive: {
    flexDirection: {
      default: "column",
      [FIELD_MD]: "row",
    },
    alignItems: {
      default: "stretch",
      [FIELD_MD]: "center",
    },
    ":not(#\\0) > *": {
      width: {
        default: "100%",
        [FIELD_MD]: "auto",
      },
    },
    ":not(#\\0) > .sr-only": {
      width: "auto",
    },
    ":not(#\\0) > [data-slot=field-label]": {
      flexGrow: {
        default: null,
        [FIELD_MD]: 1,
      },
      flexShrink: {
        default: null,
        [FIELD_MD]: 1,
      },
      flexBasis: {
        default: null,
        [FIELD_MD]: "auto",
      },
    },
    [`:not(#\\0):has(> [data-slot=field-content])`]: {
      alignItems: {
        default: "stretch",
        [FIELD_MD]: "flex-start",
      },
    },
    ":not(#\\0):has(> [data-slot=field-content]) > [role=checkbox]": {
      marginTop: {
        default: null,
        [FIELD_MD]: "1px",
      },
    },
    ":not(#\\0):has(> [data-slot=field-content]) > [role=radio]": {
      marginTop: {
        default: null,
        [FIELD_MD]: "1px",
      },
    },
  },
});

const content = stylex.create({
  on: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    flexDirection: "column",
    gap: "0.375rem",
    lineHeight: 1.375,
    fontFamily: "inherit",
  },
});

const fieldLabel = stylex.create({
  on: {
    width: {
      default: "fit-content",
      ":has(> [data-slot=field])": "100%",
    },
    flexDirection: {
      default: "row",
      ":has(> [data-slot=field])": "column",
    },
    gap: "0.5rem",
    lineHeight: 1.375,
    boxSizing: "border-box",
    borderRadius: {
      default: null,
      ":has(> [data-slot=field])": tokens["--radius-md"],
    },
    borderWidth: {
      default: null,
      ":has(> [data-slot=field])": "1px",
    },
    borderStyle: {
      default: null,
      ":has(> [data-slot=field])": "solid",
    },
    borderColor: {
      default: null,
      ":has(> [data-slot=field])": tokens["--border"],
      ":has([data-state=checked])": tokens["--primary"],
    },
    backgroundColor: {
      default: null,
      ":has([data-state=checked])": MIX_PRIMARY_5,
      ":is(.dark *):has([data-state=checked])": MIX_PRIMARY_10,
    },
    opacity: {
      default: 1,
      ":is([data-slot=field][data-disabled=true] *)": 0.5,
    },
    ":not(#\\0) > [data-slot=field]": {
      padding: "1rem",
    },
  },
});

const title = stylex.create({
  on: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    lineHeight: 1.375,
    fontWeight: 500,
    fontFamily: "inherit",
    opacity: {
      default: 1,
      ":is([data-slot=field][data-disabled=true] *)": 0.5,
    },
  },
});

const description = stylex.create({
  on: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    fontWeight: 400,
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
    textWrap: {
      default: null,
      ":is([data-slot=field]:has([data-orientation=horizontal]) *)": "balance",
    },
    marginTop: {
      default: null,
      ":nth-last-child(2)": "-0.25rem",
      ":last-child": 0,
    },
    ":not(#\\0) > a": {
      textDecorationLine: "underline",
      textUnderlineOffset: "4px",
    },
    ":not(#\\0) > a:hover": {
      color: tokens["--primary"],
    },
  },
});

const fieldSeparator = stylex.create({
  root: {
    position: "relative",
    marginTop: "-0.5rem",
    marginBottom: {
      default: "-0.5rem",
      ":is([data-slot=field-group][data-variant=outline] *)": "-0.5rem",
    },
    height: "1.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontFamily: "inherit",
  },
  line: {
    position: "absolute",
    top: "50%",
    right: 0,
    bottom: 0,
    left: 0,
  },
  content: {
    position: "relative",
    marginInline: "auto",
    display: "block",
    width: "fit-content",
    backgroundColor: tokens["--background"],
    paddingInline: "0.5rem",
    color: tokens["--muted-foreground"],
  },
});

const error = stylex.create({
  on: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
    color: tokens["--destructive"],
    fontFamily: "inherit",
  },
  list: {
    marginLeft: "1rem",
    display: "flex",
    listStyleType: "disc",
    flexDirection: "column",
    gap: "0.25rem",
  },
});

export type FieldOrientation = "vertical" | "horizontal" | "responsive";
export type FieldLegendVariant = "legend" | "label";

export type FieldSetProps = ComponentProps<"fieldset">;
export type FieldLegendProps = ComponentProps<"legend"> & {
  variant?: FieldLegendVariant;
};
export type FieldGroupProps = ComponentProps<"div">;
export type FieldProps = ComponentProps<"div"> & {
  orientation?: FieldOrientation;
};
export type FieldContentProps = ComponentProps<"div">;
export type FieldLabelProps = LabelProps;
export type FieldTitleProps = ComponentProps<"div">;
export type FieldDescriptionProps = ComponentProps<"p">;
export type FieldSeparatorProps = ComponentProps<"div"> & {
  children?: ReactNode;
};
export type FieldErrorProps = ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
};

export function FieldSet(props: FieldSetProps) {
  return (
    <fieldset data-slot="field-set" {...props} {...stylex.props(fieldSet.on)} />
  );
}

export function FieldLegend({
  variant = "legend",
  ...props
}: FieldLegendProps) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      {...props}
      {...stylex.props(legend.on)}
    />
  );
}

export function FieldGroup(props: FieldGroupProps) {
  return (
    <div data-slot="field-group" {...props} {...stylex.props(group.on)} />
  );
}

export function Field({
  orientation = "vertical",
  ...props
}: FieldProps) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      {...props}
      {...stylex.props(field.base, field[orientation])}
    />
  );
}

export function FieldContent(props: FieldContentProps) {
  return (
    <div
      data-slot="field-content"
      {...props}
      {...stylex.props(content.on)}
    />
  );
}

export function FieldLabel(props: FieldLabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="field-label"
      {...props}
      {...stylex.props(labelBase.root, labelDisabled.on, fieldLabel.on)}
    />
  );
}

export function FieldTitle(props: FieldTitleProps) {
  return (
    <div data-slot="field-label" {...props} {...stylex.props(title.on)} />
  );
}

export function FieldDescription(props: FieldDescriptionProps) {
  return (
    <p
      data-slot="field-description"
      {...props}
      {...stylex.props(description.on)}
    />
  );
}

export function FieldSeparator({ children, ...props }: FieldSeparatorProps) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      {...props}
      {...stylex.props(fieldSeparator.root)}
    >
      <SeparatorPrimitive.Root
        data-slot="separator"
        decorative
        orientation="horizontal"
        {...stylex.props(separatorRoot.base, fieldSeparator.line)}
      />
      {children ? (
        <span
          data-slot="field-separator-content"
          {...stylex.props(fieldSeparator.content)}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
}

export function FieldError({
  children,
  errors,
  ...props
}: FieldErrorProps) {
  const contentNode = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((item) => [item?.message, item])).values(),
    ];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul {...stylex.props(error.list)}>
        {uniqueErrors.map(
          (item, index) =>
            item?.message && <li key={index}>{item.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!contentNode) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      {...props}
      {...stylex.props(error.on)}
    >
      {contentNode}
    </div>
  );
}

export const fieldSetStyles = fieldSet;
export const fieldLegendStyles = legend;
export const fieldGroupStyles = group;
export const fieldStyles = field;
export const fieldContentStyles = content;
export const fieldLabelStyles = fieldLabel;
export const fieldTitleStyles = title;
export const fieldDescriptionStyles = description;
export const fieldSeparatorStyles = fieldSeparator;
export const fieldErrorStyles = error;
