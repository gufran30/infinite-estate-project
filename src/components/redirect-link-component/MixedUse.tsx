import Container from "../Container"
import { Heading } from "../partial-components/Heading"
import { Paragraph } from "../partial-components/Paragraph"
import { ShowcaseImages, ShowcaseImagesCommpiled } from "@/lib/constants"
import { ShowcaseComponent } from "./ShowcaseComponent"


const showcaseImages1: ShowcaseImages[] = [
  { title: "Mixed", src: "/images/mixed-use/One/gateway33.webp", alt: "gateway33 image" },
  { title: "Summit", src: "/images/mixed-use/One/gateway22.webp", alt: "gateway22 image" },
  { title: "Gateway", src: "/images/mixed-use/One/gateway77.webp", alt: "gateway77 image" },
  { title: "Gateway", src: "/images/mixed-use/One/gateway88.webp", alt: "gateway88 image" },
  { title: "Gateway", src: "/images/mixed-use/One/gateway99.webp", alt: "gateway99 image" },
]

const showcaseImages2: ShowcaseImages[] = [
  { title: "Metropolis Tower A", src: "/images/mixed-use/Two/metro2.webp", alt: "gateway33 image" },
  { title: "Metropolis Tower B", src: "/images/mixed-use/Two/metropolis2.webp", alt: "gateway22 image" },
  { title: "Metropolis Tower A", src: "/images/mixed-use/Two/metropolis3.webp", alt: "gateway77 image" },
  { title: "Landscape & Open Spaces", src: "/images/mixed-use/Two/metropolis4.webp", alt: "gateway88 image" },
]

const showcaseImages3: ShowcaseImages[] = [
  { title: "Millennium", src: "/images/mixed-use/Three/millennium1.webp", alt: "millennium1 image" },
  { title: "Millennium", src: "/images/mixed-use/Three/millennium2.webp", alt: "millennium2 image" },
  { title: "Millennium", src: "/images/mixed-use/Three/millennium3.webp", alt: "millennium3 image" },
  { title: "Millennium", src: "/images/mixed-use/Three/millennium4.webp", alt: "millennium4 image" },
]

const showcaseImages4: ShowcaseImages[] = [
  { title: "Bollineni Hillside", src: "/images/mixed-use/Four/hillside1.webp", alt: "hillside1 image" },
  { title: "Bollineni Hillside", src: "/images/mixed-use/Four/hillside2.webp", alt: "hillside2 image" },
  { title: "Bollineni Hillside", src: "/images/mixed-use/Four/hillside3.webp", alt: "hillside3 image" },
  { title: "Bollineni Hillside", src: "/images/mixed-use/Four/hillside4.webp", alt: "hillside4 image" },
]

const showcaseImages5: ShowcaseImages[] = [
  { title: "Zion Phase 1", src: "/images/mixed-use/Five/zion1.webp", alt: "zion1 image" },
  { title: "Zion Phase 3", src: "/images/mixed-use/Five/zion2.webp", alt: "zion2 image" },
  { title: "Zion Phase 3", src: "/images/mixed-use/Five/zion3.webp", alt: "zion3 image" },
  { title: "Zion Phase 4", src: "/images/mixed-use/Five/zion4.webp", alt: "zion4 image" },
]

const showcaseImages6: ShowcaseImages[] = [
  { title: "Mantri Celestia", src: "/images/mixed-use/Six/celestia1.webp", alt: "celestia phase 1 image" },
  { title: "Mantri Celestia", src: "/images/mixed-use/Six/celestia2.webp", alt: "celestia phase 2 image" },
  { title: "Mantri Celestia", src: "/images/mixed-use/Six/celestia3.webp", alt: "celestia phase 3 image" },
  { title: "Mantri Celestia", src: "/images/mixed-use/Six/celestia4.webp", alt: "celestia phase 4 image" },
]



const showcaseImagesCommpiled: ShowcaseImagesCommpiled[] = [
  {
    heading: "BRIGADE GATEWAY MALLESHWARAM",
    paragraph: "5M SFT 40 acres project in Malleswaram - comprises of Residential, Office, Hotel, Service apartments, Hospital, Retail mall, school & Club house with over 4600+ parking spaces housed in 2 level basements & MLCP.",
    images: showcaseImages1
  },
  {
    heading: "BRIGADE METROPOLIS RESIDENTIAL",
    paragraph: "COMMERCIAL/IT SPACE 4M SFT 36 acres project in Mahadevapura, Whitefield - comprises of Mainly High-rise Residential towers (12 blocks), Office & IT facility, Shopping center, school & Club house",
    images: showcaseImages2
  },
  {
    heading: "BRIGADE MILLENNIUM JP NAGAR",
    paragraph: "3M SFT 21-acre self contained residential enclave (5 blocks) with club house, convention center, 3-acre park & school.",
    images: showcaseImages3
  },
  {
    heading: "BOLLINENI HILLSIDE 1 & 2, OMR ROAD CHENNAI – 2.5M SFT",
    paragraph: "92-acre residential project with 2, 3 & 4-bedroom apartments, villas, and row houses. Includes a clubhouse and landscaped amenities.",
    images: showcaseImages4
  },
  {
    heading: "Bollineni Zion, OMR, Chennai – 3.2M SFT",
    paragraph: "28-acre high-end residential development with school, boutique mall, landscaped gardens, clubhouse, and more. Residential – Mixed use.",
    images: showcaseImages5
  },
  {
    heading: "MANTRI CELESTIA FINANCIAL DISTRICT, HYDERABAD – 2.2 M SFT",
    paragraph: "12-acre mixed-use development featuring high-rise residential towers (25 floors), commercial office spaces, and a clubhouse.",
    images: showcaseImages6
  }
]


const MixedUse = () => {
  return (
    <section className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="Mixed-Use"
        paragraph="Mixed use developments across Bangalore, chennai & Hyderabad, featuring residential, commercial, retail, and hospitality components."
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default MixedUse


