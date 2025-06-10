import { buttonMotion, routerLinkMotion } from "@motion";

export const basicWithShadow = buttonMotion.basicWithShadow;

export const burgerMenuButtonMotionProps = {
  initial: { rotate: 0, opacity: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const routerLinkMotionProps = routerLinkMotion.basicForHeaderAndBurgerMenu;
