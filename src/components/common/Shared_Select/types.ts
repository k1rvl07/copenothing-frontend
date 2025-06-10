import type {
  WithChildren,
  WithClassName,
  WithId,
  WithMotionProps,
  WithSelectOnChange,
  WithValue,
} from "@/types/types";

export type SelectProps = Partial<
  WithChildren<WithMotionProps & WithSelectOnChange & WithValue & WithId & WithClassName>
>;
