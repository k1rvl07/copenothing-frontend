export type UseSliderReturn = {
  slidesRef: React.RefObject<HTMLDivElement | null>;
  windowRef: React.RefObject<HTMLDivElement | null>;
  scrollToNextSlide: () => void;
  scrollToPrevSlide: () => void;
  isBeginning: boolean;
  isEnd: boolean;
};
