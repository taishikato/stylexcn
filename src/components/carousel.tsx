import * as stylex from "@stylexjs/stylex";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "./button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

/**
 * Carousel family as StyleX tables. Official item is embla-carousel-react
 * plus Button outline/icon for Previous/Next. Do not switch the primitive.
 */
const root = stylex.create({
  on: {
    position: "relative",
    boxSizing: "border-box",
  },
});

const viewport = stylex.create({
  on: {
    overflow: "hidden",
  },
});

const content = stylex.create({
  on: {
    display: "flex",
  },
  horizontal: {
    marginLeft: "-1rem",
  },
  vertical: {
    marginTop: "-1rem",
    flexDirection: "column",
  },
});

const item = stylex.create({
  on: {
    boxSizing: "border-box",
    minWidth: 0,
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: "100%",
  },
  horizontal: {
    paddingLeft: "1rem",
  },
  vertical: {
    paddingTop: "1rem",
  },
});

const control = stylex.create({
  on: {
    position: "absolute",
    boxSizing: "border-box",
    width: "2rem",
    height: "2rem",
    borderRadius: "9999px",
    ":not(#\\0) svg": {
      pointerEvents: "none",
      flexShrink: 0,
    },
    ":not(#\\0) svg:not([class*='size-'])": {
      width: "1rem",
      height: "1rem",
    },
  },
  horizontalPrev: {
    top: "50%",
    left: "-3rem",
    transform: "translateY(-50%)",
  },
  horizontalNext: {
    top: "50%",
    right: "-3rem",
    transform: "translateY(-50%)",
  },
  verticalPrev: {
    top: "-3rem",
    left: "50%",
    transform: "translateX(-50%) rotate(90deg)",
  },
  verticalNext: {
    bottom: "-3rem",
    left: "50%",
    transform: "translateX(-50%) rotate(90deg)",
  },
});

const srOnly = stylex.create({
  on: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
});

function mergeSx(
  sx: { className?: string; style?: CSSProperties },
  className?: string,
  style?: CSSProperties,
) {
  return {
    className: [sx.className, className].filter(Boolean).join(" "),
    style: style ? { ...sx.style, ...style } : sx.style,
  };
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  style,
  children,
  ...props
}: ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  const sx = mergeSx(stylex.props(root.on), className, style);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
        className={sx.className}
        style={sx.style}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  className,
  style,
  ...props
}: ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();
  const sx = mergeSx(
    stylex.props(
      content.on,
      orientation === "horizontal" ? content.horizontal : content.vertical,
    ),
    className,
    style,
  );

  return (
    <div
      ref={carouselRef}
      data-slot="carousel-content"
      {...stylex.props(viewport.on)}
    >
      <div {...props} className={sx.className} style={sx.style} />
    </div>
  );
}

function CarouselItem({ className, style, ...props }: ComponentProps<"div">) {
  const { orientation } = useCarousel();
  const sx = mergeSx(
    stylex.props(
      item.on,
      orientation === "horizontal" ? item.horizontal : item.vertical,
    ),
    className,
    style,
  );

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      {...props}
      className={sx.className}
      style={sx.style}
    />
  );
}

type CarouselButtonProps = Omit<
  ComponentProps<typeof ButtonPrimitive>,
  "className" | "style"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  style?: CSSProperties;
};

function CarouselPrevious({
  className,
  style,
  variant = "outline",
  size = "icon",
  ...props
}: CarouselButtonProps) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const sx = mergeSx(
    stylex.props(
      buttonBase.root,
      buttonVariants[variant],
      buttonSizes[size],
      control.on,
      orientation === "horizontal"
        ? control.horizontalPrev
        : control.verticalPrev,
    ),
    className,
    style,
  );

  return (
    <ButtonPrimitive
      data-slot="carousel-previous"
      data-variant={variant}
      data-size={size}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
      className={sx.className}
      style={sx.style}
    >
      <ArrowLeft />
      <span {...stylex.props(srOnly.on)}>Previous slide</span>
    </ButtonPrimitive>
  );
}

function CarouselNext({
  className,
  style,
  variant = "outline",
  size = "icon",
  ...props
}: CarouselButtonProps) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const sx = mergeSx(
    stylex.props(
      buttonBase.root,
      buttonVariants[variant],
      buttonSizes[size],
      control.on,
      orientation === "horizontal"
        ? control.horizontalNext
        : control.verticalNext,
    ),
    className,
    style,
  );

  return (
    <ButtonPrimitive
      data-slot="carousel-next"
      data-variant={variant}
      data-size={size}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
      className={sx.className}
      style={sx.style}
    >
      <ArrowRight />
      <span {...stylex.props(srOnly.on)}>Next slide</span>
    </ButtonPrimitive>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};

export const carouselRoot = root;
export const carouselViewport = viewport;
export const carouselContent = content;
export const carouselItem = item;
export const carouselControl = control;
