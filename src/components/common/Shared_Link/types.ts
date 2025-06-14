import type { WithChildren, WithClassName, WithHref, WithMotionProps } from "@types";

export type LinkProps = Partial<WithChildren<WithClassName & WithMotionProps & WithHref>>;
