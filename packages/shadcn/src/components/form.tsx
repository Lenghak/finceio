"use client";

import type { Root as LabelPrimitiveRoot } from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Label } from "@packages/shadcn/components/label";
import { cn } from "@packages/shadcn/lib/utils";
import { XIcon } from "lucide-react";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = React.memo(
  <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  >({
    render,
    ...props
  }: ControllerProps<TFieldValues, TName>) => {
    const memoizedValue = React.useMemo(
      () => ({ name: props.name }),
      [props.name],
    );
    const memoizedRender = React.useCallback(render, []);
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const memoizedProps = React.useMemo(() => props, [props]);

    const memoizedController = React.useMemo(
      () => (
        <Controller
          {...memoizedProps}
          render={memoizedRender}
        />
      ),
      [memoizedProps, memoizedRender],
    );

    return (
      <FormFieldContext.Provider value={memoizedValue}>
        {memoizedController}
      </FormFieldContext.Provider>
    );
  },
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

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

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  const value = React.useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={value}>
      <div
        className={cn("space-y-2", className)}
        ref={ref}
        {...props}
      />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = forwardRef<
  React.ElementRef<typeof LabelPrimitiveRoot>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitiveRoot>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return React.useMemo(
    () => (
      <Label
        className={cn(error && "text-destructive", className)}
        htmlFor={formItemId}
        ref={ref}
        {...props}
      />
    ),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [error, className, formItemId, props, ref],
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      aria-describedby={
        error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`
      }
      aria-invalid={!!error}
      id={formItemId}
      ref={ref}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      className={cn("text-muted-foreground text-sm", className)}
      id={formDescriptionId}
      ref={ref}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      className={cn(
        "ml-4 inline-flex items-center gap-2 font-semibold text-destructive text-sm",
        className,
      )}
      id={formMessageId}
      ref={ref}
      {...props}
    >
      <XIcon className="size-3" />
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form as FormProvider,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
