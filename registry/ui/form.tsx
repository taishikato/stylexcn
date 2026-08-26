import * as stylex from "@stylexjs/stylex";
import { Label as LabelPrimitive, Slot } from "radix-ui";
import {
  createContext,
  useContext,
  useId,
  type ComponentProps,
} from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { tokens } from "@/lib/tokens.stylex";
import { labelBase, labelDisabled } from "@/components/ui/label";

/**
 * React Hook Form bindings as StyleX tables.
 * Official Form is FormProvider + Controller; it does not compose Field.
 * FormLabel merges Label tables (wrapping cannot add data-error color).
 */
const item = stylex.create({
  on: {
    display: "grid",
    gap: "0.5rem",
    fontFamily: "inherit",
  },
});

const formLabel = stylex.create({
  on: {
    color: {
      default: null,
      '[data-error="true"]': tokens["--destructive"],
    },
  },
});

const description = stylex.create({
  on: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
});

const message = stylex.create({
  on: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: tokens["--destructive"],
    fontFamily: "inherit",
  },
});

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

export type FormItemProps = ComponentProps<"div">;
export type FormLabelProps = ComponentProps<typeof LabelPrimitive.Root>;
export type FormControlProps = ComponentProps<typeof Slot.Root>;
export type FormDescriptionProps = ComponentProps<"p">;
export type FormMessageProps = ComponentProps<"p">;

function FormItem(props: FormItemProps) {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" {...props} {...stylex.props(item.on)} />
    </FormItemContext.Provider>
  );
}

function FormLabel(props: FormLabelProps) {
  const { error, formItemId } = useFormField();

  return (
    <LabelPrimitive.Root
      data-slot="form-label"
      data-error={!!error}
      htmlFor={formItemId}
      {...props}
      {...stylex.props(labelBase.root, labelDisabled.on, formLabel.on)}
    />
  );
}

function FormControl(props: FormControlProps) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot.Root
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

function FormDescription(props: FormDescriptionProps) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      {...props}
      {...stylex.props(description.on)}
    />
  );
}

function FormMessage({ children, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      {...props}
      {...stylex.props(message.on)}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};

export const formItemStyles = item;
export const formLabelStyles = formLabel;
export const formDescriptionStyles = description;
export const formMessageStyles = message;
