"use client";
import { motion } from "framer-motion";
import React from "react";
import type { ItemProps } from "./types";

export const Shared_Item = ({ children, className, motionProps = {}, custom }: ItemProps) => {
  return (
    <motion.li className={className} {...motionProps} custom={custom}>
      {children}
    </motion.li>
  );
};
