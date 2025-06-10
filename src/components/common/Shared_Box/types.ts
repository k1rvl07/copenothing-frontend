import type { AsTag, WithChildren, WithClassName, WithMotionProps, WithOnClick } from "@/types/types";

export type BoxProps = Partial<
  WithChildren<
    {
      as?: AsTag;
    } & WithClassName &
      WithMotionProps &
      WithOnClick
  >
>;
