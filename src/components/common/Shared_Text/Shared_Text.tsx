"use client";
import { motion } from "framer-motion";
import React, { memo } from "react";
import type { TextProps } from "./types";

const MotionComponents = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  span: motion.span,
  div: motion.div,
};

export const Shared_Text = memo(({ as = "p", className, children, motionProps = {} }: TextProps) => {
  const MotionTag = MotionComponents[as];

  if (!MotionTag) {
    throw new Error(
      `Shared_Text: Invalid tag "${as}". ` + `Expected one of: ${Object.keys(MotionComponents).join(", ")}`,
    );
  }

  return (
    <MotionTag className={className} {...motionProps}>
      {children}
    </MotionTag>
  );
});
