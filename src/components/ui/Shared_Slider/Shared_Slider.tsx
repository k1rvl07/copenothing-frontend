"use client";
import { Shared_Box as Box } from "@components";
import classNames from "classnames";
import React, { Children, isValidElement } from "react";
import styles from "./styles.module.scss";
import type { SliderProps } from "./types";

export const Shared_Slider = ({
  children,
  className,
  windowClassName,
  slidesClassName,
  slideClassName,
  motionProps = {},
  windowRef,
  slidesRef,
}: SliderProps) => {
  return (
    <Box className={classNames(styles.slider, className)} motionProps={motionProps}>
      <Box className={classNames(styles.slider__window, windowClassName)} ref={windowRef}>
        <Box className={classNames(styles.slider__slides, slidesClassName)} ref={slidesRef}>
          {Children.map(children, (child) =>
            isValidElement(child) ? (
              <Box className={classNames(styles.slider__slide, slideClassName)}>{child}</Box>
            ) : null,
          )}
        </Box>
      </Box>
    </Box>
  );
};
