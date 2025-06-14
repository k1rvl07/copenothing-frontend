import type { WithChildren, WithClassName, WithMotionProps } from "@types";

export type NavProps = Partial<WithChildren<WithClassName & WithMotionProps>>;
