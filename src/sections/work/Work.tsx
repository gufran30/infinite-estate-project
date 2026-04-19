"use client"

import Image from "next/image"
import { motion } from "motion/react"
import Container from "@/components/ui/Container";
import { containerVariants, itemVariants } from "@/components/animation-components/SectionAnimation";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { StripBottomLine } from "@/components/StripBottomLine";
import { duplicatedImages } from "./WorkStats";

export const Work = () => {
  return (
    <section id="work" className="min-h-screen overflow-hidden">
      <Container className="pt-30 text-neutral-600 dark:text-neutral-400">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 1. Heading */}
          <motion.div variants={itemVariants}>
            <Heading>Our Work in Action</Heading>
          </motion.div>

          {/* 2. Paragraph */}
          <motion.div variants={itemVariants}>
            <Paragraph>
              A glimpse into the projects we’ve passionately crafted with precision and creativity.
            </Paragraph>
          </motion.div>

          {/* 3. Infinite Carousel Container */}
          <motion.div
            variants={itemVariants}
            className="relative mt-20 w-full overflow-hidden"
          >
            {/* The Track that actually moves */}
            <motion.div
              className="flex gap-6 w-max cursor-pointer"
              // The Infinite Scroll logic
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Higher number = slower, more professional crawl
                  ease: "linear",
                },
              }}
              // Pause on Hover feature
              whileHover={{ animationPlayState: "paused" }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={image.alt + index}
                  className="relative w-75 md:w-125 aspect-video shrink-0 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>

            {/* Visual Polish: Side Gradients to hide the 'clipping' edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-linear-to-r from-white dark:from-stone-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-white dark:from-stone-950 to-transparent z-10" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 mb-14 lg:mb-30"
          >
            <p className="text-sm text-center italic">All visuals represent our delivered and ongoing projects.</p>
          </motion.div>

          {/* 4. Bottom Line */}
          <StripBottomLine />
        </motion.div>
      </Container>
    </section>
  )
}

