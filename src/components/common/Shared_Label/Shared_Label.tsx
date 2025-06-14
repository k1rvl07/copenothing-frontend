"use client";
import { motion } from "framer-motion";
import React, { memo } from "react";
import type { LabelProps } from "./types";

export const Shared_Label = memo(({ children, htmlFor, className, motionProps = {} }: LabelProps) => {
  return (
    <motion.label className={className} htmlFor={htmlFor} {...motionProps}>
      {children}
    </motion.label>
  );
});

Shared_Label.displayName = "Shared_Label";
