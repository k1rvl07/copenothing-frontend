import type { WithChildren, WithClassName, WithMotionProps } from "@types";

export type ListProps = Partial<
  WithChildren<
    {
      as?: "ul" | "ol";
    } & WithClassName &
      WithMotionProps
  >
>;
