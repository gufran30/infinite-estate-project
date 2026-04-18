import Image from "next/image"
import { Heading } from "../partial-components/Heading"
import { Paragraph } from "../partial-components/Paragraph"
import { ShowcaseImages, ShowcaseImagesCommpiled } from "@/lib/constants"
import Container from "../Container"

export const ShowcaseComponent = ({ heading, paragraph, showcaseImagesCommpiled }: {
  heading: string,
  paragraph?: string,
  showcaseImagesCommpiled: ShowcaseImagesCommpiled[]
}) => {
  return (
    <section className="min-h-screen">
      <Container>
        {/* 1. Main Heading */}
        <Heading>{heading}</Heading>

        {/* 2. Main Paragraph */}
        <Paragraph className="pt-3">{paragraph}</Paragraph>

        {/* 3. Showcase */}
        <div>
          {showcaseImagesCommpiled.map((item, index) => (
            <SubShowcaseComponent
              key={index}
              heading={item.heading}
              paragraph={item.paragraph}
              images={item.images}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

const SubShowcaseComponent = ({ heading, paragraph, images }: { heading: string, paragraph: string, images: ShowcaseImages[] }) => {

  return (
    <div className="my-16 mb-40">
      <Heading>{heading}</Heading>
      <Paragraph className="pt-3">{paragraph}</Paragraph>

      {/* Images Container */}
      <div className="flex flex-wrap gap-10 mt-16 justify-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative w-[300px] md:w-[400px] h-60 shrink rounded-lg overflow-hidden shadow-lg group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center group-hover:scale-110 transition-all duration-300"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-black/40 text-white font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}