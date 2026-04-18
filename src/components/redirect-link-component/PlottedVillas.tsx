import { ShowcaseImages, ShowcaseImagesCommpiled } from '@/lib/constants'
import { ShowcaseComponent } from './ShowcaseComponent'

const showcaseImages1: ShowcaseImages[] = [
  { title: "Century Eden Entrance", src: "/images/plotted-villas/One/eden1.webp", alt: "eden1 image" },
  { title: "Century Eden Clubhouse", src: "/images/plotted-villas/One/eden2.webp", alt: "eden2 image" },
]

const showcaseImages2: ShowcaseImages[] = [
  { title: "Bollineni Silas", src: "/images/plotted-villas/Two/bolli1.webp", alt: "bolli 1 image" },
  { title: "Bollineni Silas", src: "/images/plotted-villas/Two/bolli2.webp", alt: "bolli 2 image" }
]

const showcaseImagesCommpiled: ShowcaseImagesCommpiled[] = [
  {
    heading: "CENTURY EDEN, DODDABALLAPUR ROAD – 41 ACRES",
    paragraph: "41-acre plotted residential development with 521 plots and a modern clubhouse.",
    images: showcaseImages1
  },
  {
    heading: "BOLLINENI COUNTY, CHIKKATHIRUPATHI ROAD – 32 ACRES",
    paragraph: "32-acre plotted residential development with 460 plots, clubhouse, and modern amenities.",
    images: showcaseImages2
  },
]

const PlottedVillas = () => {
  return (
    <section className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="Plotted/Villas"
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default PlottedVillas