"use client";
import { motion } from "framer-motion";
import React from "react";
import type { ImageProps } from "./types";

export const Shared_Image = ({
  className,
  src,
  alt = "",
  draggable = false,
  loading = true,
  motionProps = {},
}: ImageProps) => {
  return (
    <motion.img
      className={className}
      src={src}
      alt={alt}
      draggable={draggable}
      loading={loading ? "lazy" : "eager"}
      {...motionProps}
    />
  );
};
