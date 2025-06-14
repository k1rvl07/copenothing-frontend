import { routerLinkMotion } from "@motion";
import { buttonMotion } from "@motion";

export const burgerMenuMotionProps = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export const routerLinkMotionProps = {
  ...routerLinkMotion.basicForHeaderAndBurgerMenu,
  ...buttonMotion.basicWithShadow,
};
