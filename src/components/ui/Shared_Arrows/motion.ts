import { buttonMotion } from "@motion";

export const buttonMotionProps = {
  ...buttonMotion.basicWithShadow,
  style: {
    transition: "background-color 0.2s ease-in-out",
  },
};
