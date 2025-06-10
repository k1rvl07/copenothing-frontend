"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";
import type { RouterLinkProps } from "./types";

const MotionLink = motion.create(Link);

export const Shared_RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, motionProps = {}, className, children, onClick = () => {}, ...props }, ref) => {
    return (
      <MotionLink href={href} className={className} onClick={onClick} {...motionProps} {...props} ref={ref}>
        {children}
      </MotionLink>
    );
  },
);

Shared_RouterLink.displayName = "Shared_RouterLink";
