"use client";

import React from "react";

export type OptionValue = string | number | boolean;

export interface OptionObject {
  [key: string]: OptionValue | undefined;
}

export type OptionType = OptionValue | OptionObject;

export interface SegmentsProps<T extends OptionType>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: T extends OptionObject ? T[keyof T] : T;
  onChange?: (value: T extends OptionObject ? T[keyof T] : T) => void;
  options: T[];
  valueKey?: keyof T & string;
  labelKey?: keyof T & string;
  disabledKey?: keyof T & string;
  radioClassName?: string;
  highlighterClassName?: string;
  highlighterIncludeMargin?: boolean;
  highlighterStyle?: React.CSSProperties;
  disabledOptions?: Array<T extends OptionObject ? T[keyof T] : T>;
  renderOption?: (props: {
    option: T extends OptionObject
      ? T & { label: string; value: OptionValue; disabled: boolean }
      : { label: string; value: T; disabled: boolean };
    isSelected: boolean;
    getOptionProps: () => Record<string, unknown>;
  }) => React.ReactNode;
}

export function Segments<T extends OptionType>({
  options,
  valueKey = "value" as keyof T & string,
  labelKey = "label" as keyof T & string,
  disabledKey = "disabled" as keyof T & string,
  value,
  onChange,
  radioClassName,
  highlighterClassName,
  highlighterIncludeMargin = false,
  highlighterStyle: customHighlighterStyle,
  disabledOptions = [],
  renderOption,
  ...props
}: SegmentsProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const radioRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const getOptionValue = React.useCallback(
    (option: T): OptionValue => {
      if (typeof option !== "object") {
        return option;
      }
      return option[valueKey] as OptionValue;
    },
    [valueKey],
  );

  const getOptionLabel = React.useCallback(
    (option: T): string => {
      if (typeof option !== "object") {
        return String(option);
      }
      return String(option[labelKey]);
    },
    [labelKey],
  );

  const isOptionDisabled = React.useCallback(
    (option: T): boolean => {
      const optionValue = getOptionValue(option);
      if (
        disabledOptions.includes(
          optionValue as T extends OptionObject ? T[keyof T] : T,
        )
      ) {
        return true;
      }
      if (typeof option === "object" && disabledKey in option) {
        return Boolean(option[disabledKey]);
      }
      return false;
    },
    [disabledOptions, getOptionValue, disabledKey],
  );

  const memoizedOptions = React.useMemo(
    () =>
      options.map((option) => ({
        ...(typeof option === "object" ? option : {}),
        label: getOptionLabel(option),
        value: getOptionValue(option),
        disabled: isOptionDisabled(option),
      })) as Array<
        T extends OptionObject
          ? T & { label: string; value: OptionValue; disabled: boolean }
          : { label: string; value: T; disabled: boolean }
      >,
    [options, getOptionValue, getOptionLabel, isOptionDisabled],
  );

  const [activeIndex, setActiveIndex] = React.useState(() => {
    if (value === undefined) {
      return 0;
    }

    const index = memoizedOptions.findIndex((option) => option.value === value);
    if (index === -1) {
      return 0;
    }
    return index;
  });

  const [highlighterStyle, setHighlighterStyle] = React.useState({
    height: 0,
    width: 0,
    transform: "translate(0, 0)",
  });

  const updateSegments = React.useCallback(() => {
    const selectedElement = radioRefs.current[activeIndex];
    const container = containerRef.current;

    if (selectedElement && container) {
      const containerRect = container.getBoundingClientRect();
      const selectedRect = selectedElement.getBoundingClientRect();

      const containerStyle = window.getComputedStyle(container);
      const selectedStyle = window.getComputedStyle(selectedElement);

      const containerPadding = {
        left: Number.parseFloat(containerStyle.paddingLeft),
        top: Number.parseFloat(containerStyle.paddingTop),
      };
      const containerBorder = {
        left: Number.parseFloat(containerStyle.borderLeftWidth),
        top: Number.parseFloat(containerStyle.borderTopWidth),
      };
      const selectedMargin = {
        left: Number.parseFloat(selectedStyle.marginLeft),
        right: Number.parseFloat(selectedStyle.marginRight),
        top: Number.parseFloat(selectedStyle.marginTop),
        bottom: Number.parseFloat(selectedStyle.marginBottom),
      };

      const translateX =
        selectedRect.left -
        containerRect.left -
        containerPadding.left -
        containerBorder.left -
        (highlighterIncludeMargin ? selectedMargin.left : 0);

      const translateY =
        selectedRect.top -
        containerRect.top -
        containerPadding.top -
        containerBorder.top -
        selectedMargin.top;

      setHighlighterStyle({
        height: selectedRect.height,
        width:
          selectedRect.width +
          (highlighterIncludeMargin
            ? selectedMargin.left + selectedMargin.right
            : 0),
        transform: `translate(${translateX}px, ${translateY}px)`,
      });
    }
  }, [activeIndex, highlighterIncludeMargin]);

  const handleChange = React.useCallback(
    (index: number) => {
      if (!memoizedOptions[index]?.disabled) {
        radioRefs.current[index]?.focus();
        setActiveIndex(index);
        onChange?.(
          memoizedOptions[index]?.value as T extends OptionObject
            ? T[keyof T]
            : T,
        );
      }
    },
    [memoizedOptions, onChange],
  );

  const renderOptionContent = React.useCallback(
    (option: (typeof memoizedOptions)[0], index: number) => {
      const isSelected = index === activeIndex;

      if (renderOption) {
        return renderOption({
          option,
          isSelected,
          getOptionProps: () => ({
            ref: (el: HTMLDivElement | null) => {
              radioRefs.current[index] = el;
            },
            role: "radio",
            "aria-checked": isSelected,
            tabIndex: isSelected && !option.disabled ? 0 : -1,
            onClick: () => handleChange(index),
            className: radioClassName,
            ...(isSelected ? { "data-checked": true } : {}),
            ...(option.disabled
              ? { "aria-disabled": true, "data-disabled": true }
              : {}),
            "aria-label": `${option.label} option`,
          }),
        });
      }

      return (
        <div
          aria-checked={isSelected}
          className={radioClassName}
          onClick={() => handleChange(index)}
          ref={(el) => {
            radioRefs.current[index] = el;
          }}
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="radio"
          tabIndex={isSelected && !option.disabled ? 0 : -1}
          {...(isSelected ? { "data-checked": true } : {})}
          {...(option.disabled
            ? { "aria-disabled": true, "data-disabled": true }
            : {})}
          aria-label={`${option.label} option`}
        >
          {option.label}
        </div>
      );
    },
    [activeIndex, renderOption, radioClassName, handleChange],
  );

  React.useEffect(() => {
    updateSegments();
  }, [updateSegments]);

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver(updateSegments);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [updateSegments]);

  React.useEffect(() => {
    const newIndex = memoizedOptions.findIndex(
      (option) => option.value === value,
    );
    if (newIndex !== -1 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  }, [value, memoizedOptions, activeIndex]);

  return (
    <div
      aria-label="Segments options"
      onKeyDown={(e) => {
        props.onKeyDown?.(e);

        if (!e.defaultPrevented) {
          switch (e.key) {
            case "ArrowDown":
            case "ArrowRight": {
              e.preventDefault();
              const nextIndex = (activeIndex + 1) % options.length;
              handleChange(nextIndex);
              break;
            }
            case "ArrowUp":
            case "ArrowLeft": {
              e.preventDefault();
              const prevIndex =
                (activeIndex - 1 + options.length) % options.length;
              handleChange(prevIndex);
              break;
            }
            default:
              break;
          }
        }
      }}
      ref={containerRef}
      role="radiogroup"
      {...props}
    >
      <div
        aria-hidden="true"
        className={highlighterClassName}
        data-highlighter={true}
        style={{
          position: "absolute",
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "300ms",
          ...highlighterStyle,
          ...customHighlighterStyle,
        }}
      />

      {memoizedOptions.map((option, index) => (
        <React.Fragment key={option.value.toString()}>
          {renderOptionContent(option, index)}
        </React.Fragment>
      ))}

      <div
        aria-live="polite"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        {memoizedOptions[activeIndex]?.label} selected
      </div>
    </div>
  );
}

Segments.displayName = "Segments";