import { ShowcaseImages, ShowcaseImagesCommpiled } from "@/types"

const showcaseImages1: ShowcaseImages[] = [
  { title: "Mantri Junction Central Mall", src: "/images/retail-malls/One/retail1.webp", alt: "retail1 image" },
  { title: "Mantri Junction Central Mall", src: "/images/retail-malls/One/retail2.webp", alt: "retail2 image" },
]

const showcaseImages2: ShowcaseImages[] = [
  { title: "Mantri Square Mall", src: "/images/retail-malls/Two/ssquare1.webp", alt: "ssquare1 image" },
  { title: "Mantri Square Mall", src: "/images/retail-malls/Two/ssquare2.webp", alt: "ssquare2 image" },
  { title: "Mantri Square Mall", src: "/images/retail-malls/Two/ssquare2.webp", alt: "ssquare2 image" }
]

export const showcaseImagesCommpiled: ShowcaseImagesCommpiled[] = [
  {
    heading: "MANTRI JUNCTION – CENTRAL MALL @ JP NAGAR – 0.3 M SFT",
    paragraph: "3-acre retail facility in JP Nagar fully taken over by Pantaloons, featuring anchor stores, fine dining, and 4 cinema screens.",
    images: showcaseImages1
  },
  {
    heading: "MANTRI SQUARE MALL – MALLESHWARAM – 1 M SFT",
    paragraph: "6-acre world-class retail mall in Malleswaram with over 200 outlets, 5 anchor stores, 5 fine dining restaurants, 6 cinema screens (1600+ seats), entertainment zones, and parking for 1600+ cars including India’s first full-fledged mechanical car parking.",
    images: showcaseImages2
  },
]