"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef, useMemo } from "react";
import type { RouterLinkProps } from "./types";

export const Shared_RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, motionProps = {}, className, children, onClick = () => {}, ...props }, ref) => {
    const MotionLink = useMemo(() => motion.create(Link), []);
    return (
      <MotionLink href={href} className={className} onClick={onClick} {...motionProps} {...props} ref={ref}>
        {children}
      </MotionLink>
    );
  },
);

Shared_RouterLink.displayName = "Shared_RouterLink";
