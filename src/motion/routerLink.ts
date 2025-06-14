import { useColors } from "@hooks";
import { easeInOut } from "framer-motion";

const white = useColors({ color: "white" });
const black = useColors({ color: "black" });

export const routerLinkMotion = {
  basicForHeaderAndBurgerMenu: {
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
    variants: {
      initial: {
        color: black,
        backgroundColor: white,
      },
      active: {
        color: white,
        backgroundColor: black,
      },
    },
  },
};
