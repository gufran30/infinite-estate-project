"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { containerVariants, itemVariants } from "@/components/animation-components/SectionAnimation";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import Container from "@/components/ui/Container";
import { StripBottomLine } from "@/components/StripBottomLine";
import { slideVariants, TestimonialsInfo } from "./TestimonialsStats";

export const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Simplified index calculation
  const activeIndex = Math.abs(page % TestimonialsInfo.length);
  const currentTestimonial = TestimonialsInfo[activeIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 10000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section id="testimonials" className="min-h-screen py-24 overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center">
            <Heading>What our clients say</Heading>
            <Paragraph>Our clients’ satisfaction is at the heart of everything we do.</Paragraph>
          </motion.div>

          <div className="relative mt-20 w-full max-w-4xl flex items-center justify-center min-h-125 md:min-h-100">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <TestimonialCard
                key={page}
                data={currentTestimonial}
                direction={direction}
                onSwipe={(dir: number) => paginate(dir)}
              />
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex gap-4 mt-16">
            {TestimonialsInfo.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > activeIndex ? 1 : -1])}
                className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-brand-500" : "w-2.5 bg-neutral-300 dark:bg-neutral-700"
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

// Sub-component for the card to keep things clean
const TestimonialCard = ({ data, direction, onSwipe }: any) => (
  <motion.div
    custom={direction}
    variants={slideVariants}
    initial="enter" animate="center" exit="exit"
    drag="x" dragConstraints={{ left: 0, right: 0 }}
    onDragEnd={(_, { offset }) => {
      if (offset.x > 50) onSwipe(-1);
      else if (offset.x < -50) onSwipe(1);
    }}
    className="absolute w-full px-4 cursor-grab active:cursor-grabbing"
  >
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 md:p-14 rounded-[2.5rem] shadow-lg flex flex-col items-center">
      <QuoteIcon />
      <div className="mt-6 text-neutral-700 dark:text-neutral-300 text-sm lg:text-lg md:text-xl leading-relaxed italic">
        {data.comment.length > 1 ? (
          <ul className="list-disc text-left space-y-3 pl-6">
            {data.comment.map((point: string, i: number) => <li key={i}>{point}</li>)}
          </ul>
        ) : (
          <p className="text-center">{`"${data.comment[0]}"`}</p>
        )}
      </div>
      <div className="mt-12 text-center">
        <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">{data.author}</h4>
        <p className="text-brand-500 text-xs uppercase tracking-[0.2em] mt-2">{data.position}</p>
      </div>
    </div>
  </motion.div>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-brand-100 dark:text-brand-900/30" fill="currentColor" viewBox="0 0 32 32">
    <path d="M10 8v8H6c0 4.4 3.6 8 8 8v4c-6.6 0-12-5.4-12-12V8h8zm18 0v8h-4c0 4.4 3.6 8 8 8v4c-6.6 0-12-5.4-12-12V8h8z" />
  </svg>
);
