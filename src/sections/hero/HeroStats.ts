import { Variants } from "motion";

export const images = [
  "/images/home-images/gateway8.webp",
  "/images/home-images/central.webp",
  "/images/home-images/espana.webp",
];

export const slideVariants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: "easeIn",
    },
  },
};
