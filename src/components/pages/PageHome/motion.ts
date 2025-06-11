export const mainButtonMotionProps = {
  whileHover: {
    background: "radial-gradient(ellipse at center, #808080 0%, #282828 100%)",
    transition: { duration: 0.3, ease: "easeOut" },
    scale: 1.05,
    rotate: 3,
  },
  whileTap: {
    background: "radial-gradient(ellipse at center, #525252 0%, #282828 100%)",
    transition: { duration: 0.3, ease: "easeOut" },
    scale: 1,
  },
  initial: {
    background: "radial-gradient(ellipse at center, #525252 0%, #282828 100%)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const mainButtonImageMotionProps = {
  variants: {
    hover: { opacity: 1 },
    exit: { opacity: 0 },
    tap: { opacity: 0 },
  },
  initial: "exit",
  transition: { duration: 0.3, ease: "easeOut" },
};

export const mainButtonImageCapMotionProps = {
  ...mainButtonImageMotionProps,
  variants: {
    hover: {
      ...mainButtonImageMotionProps.variants.hover,
      x: 0,
      y: 0,
    },
    tap: {
      ...mainButtonImageMotionProps.variants.tap,
      x: 0,
      y: 0,
    },
    exit: {
      ...mainButtonImageMotionProps.variants.exit,
      x: -10,
      y: -10,
    },
  },
};

export const mainButtonImageTshirtMotionProps = {
  ...mainButtonImageMotionProps,
  variants: {
    ...mainButtonImageMotionProps.variants,
    hover: {
      ...mainButtonImageMotionProps.variants.hover,
      x: 0,
      y: 0,
    },
    tap: {
      ...mainButtonImageMotionProps.variants.tap,
      x: 0,
      y: 0,
    },
    exit: {
      ...mainButtonImageMotionProps.variants.exit,
      x: 10,
      y: 10,
    },
  },
};
