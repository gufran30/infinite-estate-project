"use client"

import React from 'react'

import { cn } from '@/lib/utils'
import { motion } from "motion/react"
import Container from '@/components/ui/Container'
import { containerVariants, itemVariants } from '@/components/animation-components/SectionAnimation'
import { StripBottomLine } from '@/components/StripBottomLine'
import { Paragraph } from '@/components/ui/Paragraph'
import { Heading } from '@/components/ui/Heading'
import { cardDetails } from './ServiceStats'

export const Service = () => {
  return (
    <section id='services' className='min-h-screen'>
      <Container className="pt-20 text-neutral-600 dark:text-neutral-400">

        {/* containerVariant */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 1. Heading */}
          <motion.div variants={itemVariants}>
            <Heading>Our Services</Heading>
          </motion.div>

          {/* 2. Paragraph */}
          <motion.div variants={itemVariants}>
            <Paragraph>Delivering excellence through innovation, expertise, and unwavering commitment to quality.</Paragraph>
          </motion.div>


          {/* 3. Grid Content */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pt-20 xl:gap-10 pt-12 pb-14 lg:pb-30"
          >
            {cardDetails.map((card, index) => (
              <motion.div
                key={card.title + index}
                variants={itemVariants}
              >
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* 4. Bottom Line */}
          <StripBottomLine />
        </motion.div>
      </Container>
    </section>
  )
}



const ServiceCard = ({ className, icon, title, description }: {
  className?: string,
  icon: React.ReactNode,
  title: string,
  description: string
}) => {

  return (
    <div
      className={cn(`bg-gray-100 dark:bg-gray-800 h-full p-6 pb-8 flex flex-col rounded-lg shadow-md border border-gray-100 dark:border-gray-900 hover:shadow-lg hover:shadow-white/2 transition-shadow duration-300`, className)}
    >
      <div className=''>{icon}</div>
      <h3 className='text-xl font-semibold pt-6 font-ptSerif text-neutral-800 dark:text-neutral-200'>{title}</h3>
      <p className='text-base pt-2 text-neutral-600 dark:text-neutral-400'>{description}</p>
    </div>
  )
}


