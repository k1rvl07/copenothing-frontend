import type { WithChildren, WithClassName, WithMotionProps, WithOnClick } from "@/types/types";

export type BoxProps = Partial<WithChildren<WithClassName & WithMotionProps & WithOnClick>>;
