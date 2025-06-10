import type { WithChildren, WithClassName, WithMotionProps } from "@/types/types";

export type TextProps = Partial<
  WithChildren<
    {
      as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
    } & WithClassName &
      WithMotionProps
  >
>;
