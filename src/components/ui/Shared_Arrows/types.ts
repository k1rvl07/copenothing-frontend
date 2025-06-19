import type { WithChildren, WithClassName } from "@types";
import type { HTMLMotionProps } from "framer-motion";

export type ArrowsProps = WithChildren &
  WithClassName & {
    onNext?: () => void;
    onPrev?: () => void;
    motionProps?: HTMLMotionProps<"button">;
    isFirst?: boolean;
    isLast?: boolean;
  };

export type RenderArrowButtonProps = {
  direction: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
};
