import { ShowcaseImages, ShowcaseImagesCommpiled } from "@/types"

const showcaseImages1: ShowcaseImages[] = [
  { title: "Ascendas One Hub", src: "/images/IT-ITES-SEZ/One/onehub1.webp", alt: "onehub1 image" },
  { title: "Ascendas One Hub", src: "/images/IT-ITES-SEZ/One/onehub2.webp", alt: "onehub2 image" },
]

const showcaseImages2: ShowcaseImages[] = [
  { title: "International Tech Park Pune", src: "/images/IT-ITES-SEZ/Two/pppp1.webp", alt: "pppp1 1 image" },
  { title: "International Tech Park Pune", src: "/images/IT-ITES-SEZ/Two/pppp2.webp", alt: "pppp2 2 image" }
]

const showcaseImages3: ShowcaseImages[] = [
  { title: "International Tech Park Chennai", src: "/images/IT-ITES-SEZ/Three/chennai1.webp", alt: "chennai1 1 image" },
  { title: "International Tech Park Chennai", src: "/images/IT-ITES-SEZ/Three/chennai2.webp", alt: "chennai2 2 image" }
]

export const showcaseImagesCommpiled: ShowcaseImagesCommpiled[] = [
  {
    heading: "ASCENDAS ONE HUB GURUGRAM – 5.88 M SFT",
    paragraph: "58-acre project in Gurgaon on Shona Road, comprising IT/ITES, Commercial, Residential & Retail spaces.",
    images: showcaseImages1
  },
  {
    heading: "INTERNATIONAL TECH PARK PUNE, HINJEWADI – 2.44 M SFT",
    paragraph: "24-acre office space with warm shell & plug-n-play facilities, including gym, cafeteria, and other amenities.",
    images: showcaseImages2
  },
  {
    heading: "INTERNATIONAL TECH PARK CHENNAI – 1 M SFT",
    paragraph: "Office space with warm shell & plug-n-play facilities including gym, cafeteria, etc. Commercial spaces for IT/ITES and SEZ.",
    images: showcaseImages3
  },
]