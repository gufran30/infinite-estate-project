import { Variants } from "motion";

export const TestimonialsInfo = [
  {
    comment: [
      "Shobha consistently demonstrates professionalism, attention to detail, and a remarkable ability to manage complex projects. Her friendly demeanour and excellent communication skills make her a joy to work with. Knowledge on MEPF systems & standards is exceptional, focus on sustainable design is an added advantage. Process driven approach towards coordination with all stakeholders. Rare combination of practical and design know how with focus on quality is commendable."
    ],
    author: "BO Prasanna Kumar",
    position: "Jt. Managing Director, DesignTree Service Consultants Pvt Ltd"
  },
  {
    comment: [
      "I have been professionally associated with Shobha N V over two decades in a wide range of projects. She brings innovative Real estate trends, Project adaptive processess which are grounded and sustainable. These aspects are beneficial for all stakeholder of our projects.",
    ],
    author: "Vivek Uthaiah",
    position: "Partner, Studio30 Architects and Planners"
  },
  {
    comment: [
      "Highest commitment is shown on any work which is taken up.",
      "A good leader who can get the work done with parameters, assures the quality of work to a great extent, and handles people with courage.",
      "She can handle total real estate development starting from business development to project completion — excellent in designing, coordination, contracts, purchase, and execution."
    ],
    author: "Manjunath Tv",
    position: "Chief Executive Officer at BSCPL Infrastructure Ltd"
  },
  {
    comment: [
      "Ms Shobha is a very well organised engineer with vast talent and zeal to work effectively with all the stakeholders.",
      "Capable leader who can handle Urban Planning / Master planning.",
      "A very dynamic, proactive approach to managing the work environment and a successful one too in the male dominated industry."
    ],
    author: "Gururaj Thali",
    position: "CMD Innotech Engineering Consult Pvt Ltd"
  },
];

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};