import { Variants } from "motion";

export const images = [
  "/images/gateway8.webp",
  "/images/central.webp",
  "/images/espana.webp",
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
