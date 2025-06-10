import type { WithChildren, WithClassName, WithHref, WithMotionProps, WithOnClick } from "@/types/types";

export type RouterLinkProps = Partial<
  WithChildren<
    {
      href: string;
      as?: "a";
    } & WithClassName &
      WithMotionProps &
      WithHref &
      WithOnClick
  >
>;
