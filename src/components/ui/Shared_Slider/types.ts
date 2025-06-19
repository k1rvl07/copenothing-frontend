import type { WithChildren, WithClassName, WithMotionProps } from "@types";
import type { RefObject } from "react";

export type SliderProps = Partial<
  WithChildren<
    {
      windowClassName?: string;
      slidesClassName?: string;
      slideClassName?: string;
      slidesRef?: RefObject<HTMLDivElement | null>;
      windowRef?: RefObject<HTMLDivElement | null>;
    } & WithClassName &
      WithMotionProps
  >
>;
