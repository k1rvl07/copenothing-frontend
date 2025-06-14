import type { WithChildren, WithClassName, WithCustom, WithMotionProps } from "@types";

export type ItemProps = Partial<WithChildren<WithClassName & WithMotionProps & WithCustom>>;
