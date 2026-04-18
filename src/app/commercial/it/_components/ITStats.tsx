import { ShowcaseImages, ShowcaseImagesCommpiled } from "@/types"

const showcaseImages1: ShowcaseImages[] = [
  { title: "Tech Park", src: "/images/IT/One/techpark.webp", alt: "techpark image" },
  { title: "Tech Park", src: "/images/IT/One/techpark2.webp", alt: "techpark2 image" },
]

const showcaseImages2: ShowcaseImages[] = [
  { title: "South Parade", src: "/images/IT/Two/southparade.webp", alt: "southparade 1 image" },
  { title: "South Parade", src: "/images/IT/Two/southparade.webp", alt: "southparade 2 image" }
]

export const showcaseImagesCommpiled: ShowcaseImagesCommpiled[] = [
  {
    heading: "BRIGADE TECH PARK",
    paragraph: "Commercial / IT space of 0.7 M SFT located in Whitefield.",
    images: showcaseImages1
  },
  {
    heading: "BRIGADE SOUTH PARADE",
    paragraph: "COMMERCIAL / IT SPACE 0.4 M SFT, MG ROAD",
    images: showcaseImages2
  },
]