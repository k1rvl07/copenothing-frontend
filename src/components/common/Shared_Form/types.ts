import type { WithAction, WithChildren, WithClassName, WithMotionProps, WithOnClick, WithOnSubmit } from "@types";

export type FormProps = Partial<
  WithChildren<WithClassName & WithMotionProps & WithOnSubmit & WithAction & WithOnClick>
>;
