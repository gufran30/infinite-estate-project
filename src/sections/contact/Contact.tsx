"use client"

import Container from "@/components/ui/Container"
import { Heading } from "@/components/ui/Heading"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { ComponentPropsWithoutRef } from "react"
import { contactInfo } from "./ContactStats"


export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen">
      <Container className="pt-20 text-neutral-600 dark:text-neutral-400">
        {/* 1. Heading */}
        <Heading>Contact Us</Heading>

        {/* 2. Icons & details */}
        <div className="flex flex-wrap justify-center text-center gap-15 pt-20">
          {contactInfo.map((item, index) => (
            <div
              key={item.name + index}
              className="w-full lg:w-[calc(33.33%-40px)] min-w-75"
            >
              <div className="size-12 bg-brand-100 dark:bg-brand-500 rounded-full flex items-center justify-center text-neutral-100 dark:text-neutral-900 shadow-md mx-auto">
                {item.icon}
              </div>
              {!item.href ? (
                <p className="mt-2 max-w-120 mx-auto whitespace-pre-line">{item.description}</p>
              ) : (
                <Link href={item.href} target="_blank" className="hover:text-brand-500 transition-colors duration-300">
                  <p className="mt-2 max-w-120 mx-auto whitespace-pre-line">{item.description}</p>
                </Link>
              )}

            </div>
          ))}
        </div>

        {/* 3. Contact Form */}
        <div className="mt-14 p-6 lg:p-12 bg-white dark:bg-neutral-900/30">
          <h3 className="text-2xl text-center font-ptSerif mb-8">Get in touch</h3>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              <InputField type="text" placeholder="Your Name" />
              <InputField type="email" placeholder="Your Email" />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <InputField type="text" placeholder="Subject" />
              <InputField type="number" placeholder="Phone Number" />
            </div>

            <InputField isTextArea placeholder="Your Message" />

            <div className="text-center md:text-left">
              <button
                className="bg-brand-200 dark:bg-brand-500 text-white dark:text-neutral-950 px-8 py-2.5 rounded-md hover:opacity-90 transition-all shadow-md active:scale-95"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>

      </Container>
    </section>
  )
}


type InputFieldProps =
  | ({ isTextArea: true } & ComponentPropsWithoutRef<"textarea">)
  | ({ isTextArea?: false } & ComponentPropsWithoutRef<"input">)

const InputField = ({ isTextArea, ...props }: InputFieldProps) => {
  const baseStyles = cn(
    "outline-none bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md transition-all duration-300",
    "placeholder:text-neutral-500 focus:ring-2 focus:ring-brand-500",
    props.className
  )

  return isTextArea ? (
    <textarea {...(props as ComponentPropsWithoutRef<"textarea">)} className={cn(baseStyles, 'w-full min-h-40')} />
  ) : (
    <input {...(props as ComponentPropsWithoutRef<"input">)} className={cn(baseStyles, "flex-1 p-3")} />
  )
}

