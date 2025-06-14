"use client";
import { motion } from "framer-motion";
import React from "react";
import type { SelectProps } from "./types";

export const Shared_Select = ({ id, className, value, onChange, children, motionProps = {} }: SelectProps) => {
  return (
    <motion.select id={id} className={className} value={value} onChange={onChange} {...motionProps}>
      {children}
    </motion.select>
  );
};
