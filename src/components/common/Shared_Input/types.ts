import type { InputType, WithClassName, WithId, WithInputOnChange, WithMotionProps } from "@/types/types";

export type InputProps = Partial<
  WithClassName &
    WithMotionProps &
    WithInputOnChange &
    WithId & {
      value?: string | number;
      type?: InputType;
      name?: string;
      placeholder?: string;
      required?: boolean;
      minLength?: number;
      maxLength?: number;
    }
>;
