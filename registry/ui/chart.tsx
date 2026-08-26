import * as stylex from "@stylexjs/stylex";
import {
  createContext,
  useContext,
  useId,
  useMemo,
  type ComponentProps,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
} from "react";
import * as RechartsPrimitive from "recharts";
import type { TooltipValueType } from "recharts";
import { tokens } from "@/lib/tokens.stylex";

const MIX_BORDER_50 = "color-mix(in oklab, var(--border) 50%, transparent)";
const SHADOW_XL =
  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";

const THEMES = { light: "", dark: ".dark" } as const;

const INITIAL_DIMENSION = { width: 320, height: 200 } as const;
type TooltipNameType = number | string;

/**
 * Chart family as StyleX tables. Official item is a Recharts wrapper
 * (ChartContainer / ChartTooltip / ChartLegend). Do not switch the primitive.
 */
const container = stylex.create({
  root: {
    display: "flex",
    aspectRatio: "16 / 9",
    justifyContent: "center",
    boxSizing: "border-box",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontFamily: "inherit",
    ":not(#\\0) .recharts-cartesian-axis-tick text": {
      fill: tokens["--muted-foreground"],
    },
    ":not(#\\0) .recharts-cartesian-grid line[stroke='#ccc']": {
      stroke: MIX_BORDER_50,
    },
    ":not(#\\0) .recharts-curve.recharts-tooltip-cursor": {
      stroke: tokens["--border"],
    },
    ":not(#\\0) .recharts-dot[stroke='#fff']": {
      stroke: "transparent",
    },
    ":not(#\\0) .recharts-layer": {
      outline: "none",
    },
    ":not(#\\0) .recharts-polar-grid [stroke='#ccc']": {
      stroke: tokens["--border"],
    },
    ":not(#\\0) .recharts-radial-bar-background-sector": {
      fill: tokens["--muted"],
    },
    ":not(#\\0) .recharts-rectangle.recharts-tooltip-cursor": {
      fill: tokens["--muted"],
    },
    ":not(#\\0) .recharts-reference-line [stroke='#ccc']": {
      stroke: tokens["--border"],
    },
    ":not(#\\0) .recharts-sector": {
      outline: "none",
    },
    ":not(#\\0) .recharts-sector[stroke='#fff']": {
      stroke: "transparent",
    },
    ":not(#\\0) .recharts-surface": {
      outline: "none",
    },
  },
});

const tooltip = stylex.create({
  root: {
    display: "grid",
    minWidth: "8rem",
    alignItems: "flex-start",
    gap: "0.375rem",
    boxSizing: "border-box",
    borderRadius: tokens["--radius"],
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: MIX_BORDER_50,
    backgroundColor: tokens["--background"],
    paddingInline: "0.625rem",
    paddingBlock: "0.375rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    boxShadow: SHADOW_XL,
    fontFamily: "inherit",
  },
  label: {
    fontWeight: 500,
    fontFamily: "inherit",
  },
  body: {
    display: "grid",
    gap: "0.375rem",
  },
  row: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "stretch",
    gap: "0.5rem",
    ":not(#\\0) > svg": {
      height: "0.625rem",
      width: "0.625rem",
      color: tokens["--muted-foreground"],
    },
  },
  rowDot: {
    alignItems: "center",
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "2px",
    borderStyle: "solid",
    borderColor: "var(--color-border)",
    backgroundColor: "var(--color-bg)",
  },
  indicatorDot: {
    height: "0.625rem",
    width: "0.625rem",
  },
  indicatorLine: {
    width: "0.25rem",
  },
  indicatorDashed: {
    width: 0,
    borderWidth: "1.5px",
    borderStyle: "dashed",
    backgroundColor: "transparent",
  },
  indicatorDashedNested: {
    marginBlock: "0.125rem",
  },
  item: {
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "0%",
    justifyContent: "space-between",
    lineHeight: 1,
  },
  itemNested: {
    alignItems: "flex-end",
  },
  itemFlat: {
    alignItems: "center",
  },
  itemCopy: {
    display: "grid",
    gap: "0.375rem",
  },
  itemName: {
    color: tokens["--muted-foreground"],
    fontFamily: "inherit",
  },
  itemValue: {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontWeight: 500,
    color: tokens["--foreground"],
    fontVariantNumeric: "tabular-nums",
  },
});

const legend = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    fontFamily: "inherit",
  },
  top: {
    paddingBottom: "0.75rem",
  },
  bottom: {
    paddingTop: "0.75rem",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    ":not(#\\0) > svg": {
      height: "0.75rem",
      width: "0.75rem",
      color: tokens["--muted-foreground"],
    },
  },
  swatch: {
    height: "0.5rem",
    width: "0.5rem",
    flexShrink: 0,
    borderRadius: "2px",
  },
});

export type ChartConfig = Record<
  string,
  {
    label?: ReactNode;
    icon?: ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>;

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = createContext<ChartContextProps | null>(null);

function useChart() {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

function mergeSx(
  sx: { className?: string; style?: CSSProperties },
  className?: string,
  style?: CSSProperties,
) {
  return {
    className: [sx.className, className].filter(Boolean).join(" ") || undefined,
    style: { ...sx.style, ...style },
  };
}

export function ChartContainer({
  id,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  style,
  ...props
}: ComponentProps<"div"> & {
  config: ChartConfig;
  children: ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
  initialDimension?: {
    width: number;
    height: number;
  };
}) {
  const uniqueId = useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;
  const sx = mergeSx(stylex.props(container.root), className, style);

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        {...props}
        className={sx.className}
        style={sx.style}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer
          initialDimension={initialDimension}
        >
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

export const ChartStyle = ({
  id,
  config,
}: {
  id: string;
  config: ChartConfig;
}) => {
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme ?? itemConfig.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

export const ChartTooltip = RechartsPrimitive.Tooltip;

export function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
  style,
}: ComponentProps<typeof RechartsPrimitive.Tooltip> &
  ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  } & Omit<
    RechartsPrimitive.DefaultTooltipContentProps<
      TooltipValueType,
      TooltipNameType
    >,
    "accessibilityLayer"
  >) {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? (config[label]?.label ?? label)
        : itemConfig?.label;

    const labelSx = mergeSx(stylex.props(tooltip.label), labelClassName);

    if (labelFormatter) {
      return (
        <div className={labelSx.className} style={labelSx.style}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return (
      <div className={labelSx.className} style={labelSx.style}>
        {value}
      </div>
    );
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";
  const rootSx = mergeSx(stylex.props(tooltip.root), className, style);

  return (
    <div className={rootSx.className} style={rootSx.style}>
      {!nestLabel ? tooltipLabel : null}
      <div {...stylex.props(tooltip.body)}>
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color ?? item.payload?.fill ?? item.color;
            const rowSx = stylex.props(
              tooltip.row,
              indicator === "dot" && tooltip.rowDot,
            );
            const indicatorSx = stylex.props(
              tooltip.indicator,
              indicator === "dot" && tooltip.indicatorDot,
              indicator === "line" && tooltip.indicatorLine,
              indicator === "dashed" && tooltip.indicatorDashed,
              nestLabel &&
                indicator === "dashed" &&
                tooltip.indicatorDashedNested,
            );

            return (
              <div key={index} className={rowSx.className} style={rowSx.style}>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={indicatorSx.className}
                          style={{
                            ...indicatorSx.style,
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as CSSProperties}
                        />
                      )
                    )}
                    <div
                      {...stylex.props(
                        tooltip.item,
                        nestLabel ? tooltip.itemNested : tooltip.itemFlat,
                      )}
                    >
                      <div {...stylex.props(tooltip.itemCopy)}>
                        {nestLabel ? tooltipLabel : null}
                        <span {...stylex.props(tooltip.itemName)}>
                          {itemConfig?.label ?? item.name}
                        </span>
                      </div>
                      {item.value != null && (
                        <span {...stylex.props(tooltip.itemValue)}>
                          {typeof item.value === "number"
                            ? item.value.toLocaleString()
                            : String(item.value)}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export const ChartLegend = RechartsPrimitive.Legend;

export function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
  style,
}: ComponentProps<"div"> & {
  hideIcon?: boolean;
  nameKey?: string;
} & RechartsPrimitive.DefaultLegendContentProps) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  const rootSx = mergeSx(
    stylex.props(
      legend.root,
      verticalAlign === "top" ? legend.top : legend.bottom,
    ),
    className,
    style,
  );

  return (
    <div className={rootSx.className} style={rootSx.style}>
      {payload
        .filter((item) => item.type !== "none")
        .map((item, index) => {
          const key = `${nameKey ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div key={index} {...stylex.props(legend.item)}>
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className={stylex.props(legend.swatch).className}
                  style={{
                    ...stylex.props(legend.swatch).style,
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
}

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}
