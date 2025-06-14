import type { WithChildren, WithClassName, WithMotionProps, WithOnClick } from "@types";

export type BoxProps = Partial<WithChildren<WithClassName & WithMotionProps & WithOnClick>>;
