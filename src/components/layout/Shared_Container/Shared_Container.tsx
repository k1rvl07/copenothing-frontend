import { Shared_Box as Box } from "@components";
import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import type { ContainerProps } from "./types";

export const Shared_Container = ({ className, children }: ContainerProps) => {
  return <Box className={classNames(styles.container, className)}>{children}</Box>;
};
