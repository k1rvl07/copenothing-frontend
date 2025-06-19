"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { UseSliderReturn } from "./types";

export const useSlider = (): UseSliderReturn => {
  const slidesRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const checkBoundaries = useCallback(() => {
    if (!windowRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = windowRef.current;

    setIsBeginning(scrollLeft <= 0);
    setIsEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  }, []);

  const getAverageSlideWidth = useCallback(() => {
    if (!slidesRef.current) return 0;

    const slides = Array.from(slidesRef.current.children || []) as HTMLElement[];
    if (slides.length === 0) return 0;

    const widths = slides.map((slide) => slide.offsetWidth);
    const totalWidth = widths.reduce((sum, width) => sum + width, 0);

    return totalWidth / slides.length;
  }, []);

  const scrollToNextSlide = useCallback(() => {
    if (!windowRef.current) return;

    const windowEl = windowRef.current;
    const slideWidth = getAverageSlideWidth();

    windowEl.scrollLeft += slideWidth;
    setTimeout(checkBoundaries, 50);
  }, [checkBoundaries, getAverageSlideWidth]);

  const scrollToPrevSlide = useCallback(() => {
    if (!windowRef.current) return;

    const windowEl = windowRef.current;
    const slideWidth = getAverageSlideWidth();

    windowEl.scrollLeft -= slideWidth;
    setTimeout(checkBoundaries, 50);
  }, [checkBoundaries, getAverageSlideWidth]);

  const _handleMouseDown = useCallback((e: MouseEvent): void => {
    if (!windowRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(windowRef.current.scrollLeft);
  }, []);

  const _handleMouseMove = useCallback(
    (e: MouseEvent): void => {
      if (!(isDragging && windowRef.current)) return;

      e.preventDefault();
      const x = e.pageX - startX;
      windowRef.current.scrollLeft = scrollLeft - x;
      checkBoundaries();
    },
    [isDragging, startX, scrollLeft, checkBoundaries],
  );

  const _handleMouseUp = useCallback((): void => {
    if (!windowRef.current) return;

    setIsDragging(false);

    const { scrollLeft, clientWidth, scrollWidth } = windowRef.current;

    if (scrollLeft < 0) {
      windowRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else if (scrollLeft + clientWidth > scrollWidth) {
      windowRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
    }

    checkBoundaries();
  }, [checkBoundaries]);

  const _handleMouseLeave = useCallback((): void => {
    if (!windowRef.current) return;

    setIsDragging(false);
    checkBoundaries();
  }, [checkBoundaries]);

  const handleTouchStart = useCallback((e: TouchEvent): void => {
    if (!windowRef.current) return;

    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX);
    setScrollLeft(windowRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent): void => {
      if (!(isDragging && windowRef.current)) return;

      const touch = e.touches[0];
      e.preventDefault();

      const x = touch.pageX - startX;
      windowRef.current.scrollLeft = scrollLeft - x;
      checkBoundaries();
    },
    [isDragging, startX, scrollLeft, checkBoundaries],
  );

  const handleTouchEnd = useCallback((): void => {
    if (!windowRef.current) return;

    setIsDragging(false);

    const { scrollLeft, clientWidth, scrollWidth } = windowRef.current;

    if (scrollLeft < 0) {
      windowRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else if (scrollLeft + clientWidth > scrollWidth) {
      windowRef.current.scrollTo({ left: scrollWidth - clientWidth, behavior: "smooth" });
    }

    checkBoundaries();
  }, [checkBoundaries]);

  useEffect(() => {
    const windowEl = windowRef.current;
    if (windowEl) {
      windowEl.addEventListener("scroll", checkBoundaries);
    }
    return () => {
      if (windowEl) {
        windowEl.removeEventListener("scroll", checkBoundaries);
      }
    };
  }, [checkBoundaries]);

  useEffect(() => {
    const windowEl = windowRef.current;
    const slidesEl = slidesRef.current;

    if (windowEl && slidesEl) {
      windowEl.addEventListener("touchstart", handleTouchStart);
      windowEl.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (windowEl && slidesEl) {
        windowEl.removeEventListener("touchstart", handleTouchStart);
        windowEl.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    checkBoundaries();
  }, [checkBoundaries]);

  return {
    slidesRef,
    windowRef,
    scrollToNextSlide,
    scrollToPrevSlide,
    isBeginning,
    isEnd,
  };
};
