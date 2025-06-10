"use client";
import { motion } from "framer-motion";
import React from "react";
import type { InputProps } from "./types";

export const Shared_Input = ({
  className,
  id,
  value,
  type = "text",
  placeholder,
  onChange,
  required,
  minLength,
  maxLength,
  motionProps = {},
}: InputProps) => {
  return (
    <motion.input
      className={className}
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      {...motionProps}
    />
  );
};
