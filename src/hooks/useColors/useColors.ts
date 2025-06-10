import { COLORS } from "@constants";
import type { useColorsProps } from "./types";

export const useColors = ({ color }: useColorsProps) => {
  return COLORS[color];
};
