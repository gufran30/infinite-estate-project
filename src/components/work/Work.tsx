"use client"

import Image from "next/image"
import { motion } from "motion/react"
import Container from '../Container'
import { Heading } from '../partial-components/Heading'
import { Paragraph } from '../partial-components/Paragraph'
import { StripBottomLine } from '../partial-components/StripBottomLine'
import { containerVariants, itemVariants } from '../animation-components/SectionAnimation'

const images = [
  { src: "/images/biiion.webp", alt: "Project 1" },
  { src: "/images/bion1.webp", alt: "Project 2" },
  { src: "/images/bion4.webp", alt: "Project 3" },
  { src: "/images/zion1.webp", alt: "Project 4" },
  { src: "/images/zion2.webp", alt: "Project 5" },
];

// Doubling the array ensures a seamless infinite transition
const duplicatedImages = [...images, ...images];

const Work = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-white dark:bg-stone-950">
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
                  key={index}
                  className="relative w-[300px] md:w-[500px] aspect-video shrink-0 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
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

export default Work