"use client";
import { motion } from "framer-motion";
import React from "react";
import type { LinkProps } from "./types";

export const Shared_Link = ({ className, href = "#", children, motionProps = {} }: LinkProps) => {
  return (
    <motion.a href={href} className={className} {...motionProps}>
      {children}
    </motion.a>
  );
};
