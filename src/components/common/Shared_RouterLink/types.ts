import type { WithChildren, WithClassName, WithHref, WithMotionProps, WithOnClick } from "@types";

export type RouterLinkProps = Partial<WithChildren<WithClassName & WithMotionProps & WithHref & WithOnClick>>;
