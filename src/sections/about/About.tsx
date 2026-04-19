"use client"

import Container from "../../components/ui/Container"
import { StripBottomLine } from "../../components/StripBottomLine"
import { Heading } from "../../components/ui/Heading"
import { Paragraph } from "../../components/ui/Paragraph"
import { motion } from "motion/react"
import { containerVariants, itemVariants } from "../../components/animation-components/SectionAnimation"
import { listItems, paragraphText } from "./AboutStats"



export const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <Container className="pt-20 text-neutral-600 dark:text-neutral-400">

        {/* containerVariants */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 1. Heading */}
          <motion.div variants={itemVariants}>
            <Heading>Who we are</Heading>
          </motion.div>

          {/* 2. Paragraph */}
          <motion.div variants={itemVariants}          >
            <Paragraph>Building excellence with innovation, experience, and trust.</Paragraph>
          </motion.div>

          {/* 3. Grid Content */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 text-base lg:pt-20 gap-10 pt-12 pb-14 lg:pb-30"
          >
            <div className="flex flex-col gap-6 lg:gap-8 pr-6">
              {paragraphText.map((para, index) => (
                <div
                  key={index}
                  className="text-left"
                >
                  {para}
                </div>
              ))}
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 shadow-lg space-y-4 p-4 rounded-xl flex justify-center flex-col">
              {listItems.map((list, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="size-2 rounded-full bg-brand-100 dark:bg-brand-500" />
                  <span>{list}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Bottom Line */}
          <StripBottomLine />
        </motion.div>
      </Container>
    </section>
  )
}

