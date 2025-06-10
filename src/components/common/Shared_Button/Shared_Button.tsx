"use client";
import { motion } from "framer-motion";
import React from "react";
import type { ButtonProps } from "./types";

export const Shared_Button = ({
  type = "button",
  className,
  disabled,
  onClick,
  children,
  motionProps = {},
}: ButtonProps) => {
  return (
    <motion.button type={type} className={className} disabled={disabled} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
};
