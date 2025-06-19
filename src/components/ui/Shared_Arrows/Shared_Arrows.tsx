"use client";
import { Shared_Button as Button, Shared_Image as Image } from "@components";
import { useColors } from "@hooks";
import classNames from "classnames";
import React from "react";
import { buttonMotionProps } from "./motion";
import styles from "./styles.module.scss";
import type { ArrowsProps, RenderArrowButtonProps } from "./types";

export const Shared_Arrows = ({
  className,
  onNext,
  onPrev,
  motionProps = {},
  isFirst = false,
  isLast = false,
}: ArrowsProps) => {
  const renderArrowButton = ({ direction, onClick, disabled }: RenderArrowButtonProps) => {
    const iconPath = direction === "left" ? "/icons/angle-left.svg" : "/icons/angle-right.svg";

    const gray = useColors({ color: "gray" });
    const primary = useColors({ color: "primary" });

    return (
      <Button
        key={direction}
        type="button"
        className={styles.arrows__button}
        onClick={onClick}
        disabled={disabled}
        motionProps={{
          ...buttonMotionProps,
          animate: disabled ? "disabled" : "initial",
          whileHover: disabled ? {} : buttonMotionProps.whileHover,
          whileTap: disabled ? {} : buttonMotionProps.whileTap,
          style: {
            ...buttonMotionProps.style,
            cursor: disabled ? "not-allowed" : "pointer",
            backgroundColor: disabled ? gray : primary,
          },
          ...motionProps,
        }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_MINIO_BUCKET_URL}${iconPath}`}
          alt={direction === "left" ? "Previous" : "Next"}
          className={styles.arrows__image}
        />
      </Button>
    );
  };

  return (
    <div className={classNames(styles.arrows, className)}>
      <div className={styles.arrows__wrapper}>
        {renderArrowButton({ direction: "left", onClick: onPrev, disabled: isFirst })}
        {renderArrowButton({ direction: "right", onClick: onNext, disabled: isLast })}
      </div>
    </div>
  );
};
