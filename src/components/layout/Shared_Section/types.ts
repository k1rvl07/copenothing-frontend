import type { WithChildren, WithClassName, WithId, WithMotionProps, WithOnClick } from "@/types/types";

export type SectionTagName = "section" | "div" | "main" | "article" | "aside" | "header" | "footer";

export type SectionProps = Partial<
  WithChildren<
    {
      as?: SectionTagName;
      containerClassName?: string;
      isHasContainer?: boolean;
      key?: string | number;
    } & WithClassName &
      WithMotionProps &
      WithId &
      WithOnClick
  >
>;
