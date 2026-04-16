"use client"

import { cn } from "@/lib/utils"
import React from "react"
import Container from "../Container"
import { motion, Variants } from "motion/react"



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}


const paragraphText: string[] = [
  "Infinite Building Technologies (IBT) is a professionally managed real estate services company with expertise in the design of Residential, Commercial, IT, Retail, Hotel, and Hospital buildings. We provide complete development management and monitoring services from start to finish, delivering economical and sustainable design solutions with a strong focus on quality and safety.",
  "Our expertise covers master planning, architecture, structural, MEP, and landscape works. Established by professionals with over 75+ years of combined experience in land development, design and cost management, IBT is driven by transparency, efficiency, and a personalized approach to project delivery.",
  "We strive to be the trusted partner for landowners, helping unlock the full potential of their land with optimal cost and sustainable design backed by expert project monitoring."
]

const listItems: string[] = [
  "Technical Due Diligence of Land and Properties",
  "Feasibility and Market Studies",
  "Master Planning and Design Services",
  "Budgeting and Budget Control",
  "Contracts and Procurement Management",
  "Billing & Certification",
  "Development and Asset Management"
]

const About = () => {
  return (
    <section className="min-h-screen">
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
            className="grid lg:grid-cols-2 pt-12 text-sm md:text-base lg:pt-20 gap-2 xl:gap-10 pb-14 lg:pb-30"
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

export default About


const Heading = ({ children, className }: {
  children: React.ReactNode, className?: string
}) => {

  return (
    <div
    >
      <h1 className={cn(`text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 capitalize max-w-120 mx-auto`, className)}>
        {children}
      </h1>
    </div>
  )
}

const Paragraph = ({ children, className }: {
  children: React.ReactNode, className?: string
}) => {
  return (
    <p className={cn(`text-center text-sm md:text-base lg:text-lg pt-2 max-w-70 md:max-w-120 mx-auto text-neutral-600 dark:text-neutral-400 `, className)}>
      {children}
    </p>
  )
}

const StripBottomLine = ({ className }: { className?: string }) => {

  return (
    <motion.div
      variants={{
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.8 } }
      }}
      className={cn(`h-2 lg:h-3 w-full bg-brand-100 dark:bg-brand-500`, className)} />
  )
}