import { motion } from "framer-motion";
import React from "react";
import type { NavProps } from "./types";

export const Shared_Nav = ({ className, children, motionProps }: NavProps) => {
  return (
    <motion.nav className={className} {...motionProps}>
      {children}
    </motion.nav>
  );
};
