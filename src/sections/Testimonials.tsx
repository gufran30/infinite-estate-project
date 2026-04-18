"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, Variants } from "motion/react"
import { containerVariants, itemVariants } from "@/components/animation-components/SectionAnimation";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import Container from "@/components/ui/Container";
import { StripBottomLine } from "@/components/StripBottomLine";

// Static Data
const TestimonialsInfo = [
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

const slideVariants: Variants = {
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

export const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Use modulo to wrap the index around the array length
  const activeIndex = (page % TestimonialsInfo.length + TestimonialsInfo.length) % TestimonialsInfo.length;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 10 * 1000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section id="testimonials" className="min-h-screen py-24 overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Heading>What our clients say</Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Paragraph>Our clients’ satisfaction is at the heart of everything we do.</Paragraph>
          </motion.div>

          {/* Carousel Area */}
          <div className="relative mt-20 w-full max-w-4xl flex items-center justify-center min-h-125 md:min-h-100">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) > 50;
                  if (swipe && offset.x > 0) paginate(-1);
                  else if (swipe && offset.x < 0) paginate(1);
                }}
                className="absolute w-full px-4 cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 md:p-14 rounded-[2.5rem] shadow-lg flex flex-col items-center">
                  <QuoteIcon />

                  <div className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm lg:text-lg md:text-xl leading-relaxed italic">
                    {TestimonialsInfo[activeIndex].comment.length > 1 ? (
                      <ul className="list-disc text-left space-y-3 pl-6">
                        {TestimonialsInfo[activeIndex].comment.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-center">
                        &quot;{TestimonialsInfo[activeIndex].comment[0]} &quot;
                      </p>
                    )}
                  </div>

                  <div className="mt-12 flex flex-col items-center text-center">
                    <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                      {TestimonialsInfo[activeIndex].author}
                    </h4>
                    <p className="text-brand-500 text-xs uppercase tracking-[0.2em] mt-2">
                      {TestimonialsInfo[activeIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-4 mt-16">
            {TestimonialsInfo.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const newDir = i > activeIndex ? 1 : -1;
                  setPage([i, newDir]);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === i
                  ? "w-5 bg-brand-500 shadow-[0_0_15px_rgba(var(--brand-500),0.4)]"
                  : "w-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400"
                  }`}
              />
            ))}
          </div>
          <StripBottomLine className="mt-18" />
        </motion.div>
      </Container>
    </section>
  );
};

const QuoteIcon = () => (
  <svg
    className="w-10 h-10 text-brand-100 dark:text-brand-900/30"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M10 8v8H6c0 4.4 3.6 8 8 8v4c-6.6 0-12-5.4-12-12V8h8zm18 0v8h-4c0 4.4 3.6 8 8 8v4c-6.6 0-12-5.4-12-12V8h8z" />
  </svg>
);
