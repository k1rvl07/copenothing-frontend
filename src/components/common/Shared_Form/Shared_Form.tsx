"use client";
import { motion } from "framer-motion";
import React from "react";
import type { FormProps } from "./types";

export const Shared_Form = ({ className, children, onSubmit, onClick, action, motionProps = {} }: FormProps) => {
  return (
    <motion.form action={action} className={className} onClick={onClick} onSubmit={onSubmit} {...motionProps}>
      {children}
    </motion.form>
  );
};
