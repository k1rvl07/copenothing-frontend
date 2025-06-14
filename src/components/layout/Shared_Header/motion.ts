import { buttonMotion, routerLinkMotion } from "@motion";
import type { isOpen } from "./types";

export const basicWithShadow = buttonMotion.basicWithShadow;

export const burgerMenuButtonMotionProps = {
  variants: {
    open: {
      rotate: 180,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
    closed: {
      rotate: -180,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
    initial: {
      rotate: 0,
      opacity: 0,
    },
    exit: (isOpen: isOpen) => ({
      rotate: isOpen ? 180 : -180,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" as const },
    }),
  },
  exit: "exit",
  initial: {
    rotate: 0,
    opacity: 0,
  },
  transition: { duration: 0.4, ease: "easeInOut" as const },
};

export const routerLinkMotionProps = routerLinkMotion.basicForHeaderAndBurgerMenu;
