import Image from "next/image"
import { Heading } from "../ui/Heading"
import { Paragraph } from "../ui/Paragraph"
import { ShowcaseImages, ShowcaseImagesCommpiled } from "@/lib/constants"
import Container from "../ui/Container"

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
              key={item.heading + index}
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
            key={item.src + index}
            className="relative w-75 md:w-100 h-60 shrink rounded-lg overflow-hidden shadow-lg group"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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