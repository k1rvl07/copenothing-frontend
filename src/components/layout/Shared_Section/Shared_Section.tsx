"use client";
import { Shared_Container as Container } from "@components";
import { motion } from "framer-motion";
import { forwardRef, useMemo } from "react";
import type { SectionProps } from "./types";

export const Shared_Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    { as = "section", className, containerClassName, id, children, onClick, isHasContainer = true, motionProps = {} },
    ref,
  ) => {
    const MotionTag = useMemo(() => motion.create(as), [as]);

    return (
      <MotionTag id={id} className={className} ref={ref} onClick={onClick} {...motionProps}>
        {isHasContainer ? <Container className={containerClassName}>{children}</Container> : children}
      </MotionTag>
    );
  },
);

Shared_Section.displayName = "Shared_Section";
