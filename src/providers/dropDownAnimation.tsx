import { Variants } from "motion/react"


export const parentAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      when: "afterChildren" // When closing, close children immediately or very fast
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delayChildren: 0.1, // Wait before starting first child
      staggerChildren: 0.08, // Time between each child (snappier than 0.1)
    }
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

export const childAnimation: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
  exit: { opacity: 0, y: -5 }
}