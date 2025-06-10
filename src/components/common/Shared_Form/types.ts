import type {
  WithAction,
  WithChildren,
  WithClassName,
  WithMotionProps,
  WithOnClick,
  WithOnSubmit,
} from "@/types/types";

export type FormProps = Partial<
  WithChildren<
    {
      as?: "form";
    } & WithClassName &
      WithMotionProps &
      WithOnSubmit &
      WithAction &
      WithOnClick
  >
>;
