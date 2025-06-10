import type { WithChildren, WithClassName, WithMotionProps } from "@/types/types";

export type NavProps = Partial<
  WithChildren<
    {
      as?: "nav";
    } & WithClassName &
      WithMotionProps
  >
>;
