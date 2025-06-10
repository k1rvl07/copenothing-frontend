import type { WithChildren, WithClassName, WithMotionProps } from "@/types/types";

export type LabelProps = Partial<
  WithChildren<
    {
      htmlFor: string;
    } & WithClassName &
      WithMotionProps
  >
>;
