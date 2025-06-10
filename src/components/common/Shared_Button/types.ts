import type { WithChildren, WithClassName, WithDisabled, WithMotionProps, WithOnClick } from "@/types/types";

export type ButtonProps = Partial<
  WithChildren<
    {
      type?: "button" | "submit" | "reset";
    } & WithClassName &
      WithMotionProps &
      WithOnClick &
      WithDisabled
  >
>;
