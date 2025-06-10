import { routerLinkMotion } from "@motion";
import { buttonMotion } from "@motion";

export const burgerMenuMotionProps = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

export const routerLinkMotionProps = {
  ...routerLinkMotion.basicForHeaderAndBurgerMenu,
  ...buttonMotion.basicWithShadow,
};
