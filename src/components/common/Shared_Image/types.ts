import type { WithClassName, WithMotionProps } from "@/types/types";

export type ImageProps = Partial<
  WithClassName &
    WithMotionProps & {
      src: string;
      alt?: string;
      draggable?: boolean;
      loading?: boolean;
    }
>;
