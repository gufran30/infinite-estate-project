import { ShowcaseComponent } from "@/components/ui/ShowcaseComponent"
import { showcaseImagesCommpiled } from "./HighRiseStats"

const HIghRise = () => {
  return (
    <section id="high-rise" className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="High Rise"
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default HIghRise