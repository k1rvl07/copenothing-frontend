import { useColors } from "@hooks";

const white = useColors({ color: "white" });
const black = useColors({ color: "black" });

export const routerLinkMotion = {
  basicForHeaderAndBurgerMenu: {
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
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
