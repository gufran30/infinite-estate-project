"use client"

import Image from "next/image"
import Container from "@/components/ui/Container"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, Variants } from "motion/react"
import Link from "next/link"



const images = [
  "/images/gateway8.webp",
  "/images/central.webp",
  "/images/espana.webp",
]

const slideVariants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: "easeIn"
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeIn"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.3,
      ease: "easeIn"
    }
  },
}



export const Hero = () => {

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7 * 1000);

    return () => clearInterval(timer)
  }, []);


  return (
    <section id="hero" className="relative w-full min-h-screen">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full bg-black">
          <Image
            src={images[index]}
            alt="Hero image"
            width={1920}
            height={720}
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-r from-stone-900 to-stone-800/40 " />
        </motion.div>
      </AnimatePresence>

      <Container className="absolute inset-0 flex justify-center items-center">
        {/* <div className=" bg-red-900/40 pt-40"> */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: 0.5 }}
          className="pt-40 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl text-center font-medium text-neutral-100">
            Infinite Building <br className="lg:hidden" /> Technologies
          </h1>
          <p className="pt-4 max-w-90 lg:max-w-120 text-center text-sm lg:text-lg text-neutral-300">
            Your Partner in End-to-End Real Estate Design, Monitoring, and Development Management
          </p>
          <div className="pt-6 flex items-center gap-4 select-none">
            <ButtonCTA
              to="/services"
              className="bg-white hover:bg-white/90 text-neutral-900 "
            >
              Explore our services
            </ButtonCTA>
            <ButtonCTA
              to="/contact"
            >
              Contact Us
            </ButtonCTA>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}



const ButtonCTA = ({ className, children, to }: {
  className?: string,
  children: React.ReactNode
  to: string
}) => {
  return <>
    <Link
      href={to}
    >
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ ease: "easeInOut" }}
        className={cn(`border border-neutral-200 rounded-md py-1 px-5 text-sm lg:text-base text-neutral-200 font-semibold transition-colors duration-300 whitespace-nowrap`, className)}>
        {children}
      </motion.button>
    </Link>
  </>
}