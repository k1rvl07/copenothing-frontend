import type { WithChildren, WithClassName, WithHref, WithMotionProps } from "@/types/types";

export type LinkProps = Partial<
  WithChildren<
    {
      as?: "a";
    } & WithClassName &
      WithMotionProps &
      WithHref
  >
>;
