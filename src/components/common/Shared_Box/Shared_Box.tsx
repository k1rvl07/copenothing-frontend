"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { BoxProps } from "./types";

export const Shared_Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, onClick, motionProps = {} }, ref) => {
    return (
      <motion.div {...motionProps} onClick={onClick} className={className} ref={ref}>
        {children}
      </motion.div>
    );
  },
);

Shared_Box.displayName = "Shared_Box";
