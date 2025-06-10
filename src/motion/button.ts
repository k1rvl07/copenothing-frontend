export const buttonMotion = {
  basicWithShadow: {
    whileHover: {
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
      y: -1.5,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
    whileTap: {
      scale: 0.95,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.1,
      },
    },
    initial: {
      scale: 1,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  },
};
