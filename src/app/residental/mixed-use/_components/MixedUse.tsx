
import { ShowcaseComponent } from "@/components/ui/ShowcaseComponent"
import { showcaseImagesCommpiled } from "../../high-rise/_components"



const MixedUse = () => {
  return (
    <section id="mixed-use" className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="Mixed-Use"
        paragraph="Mixed use developments across Bangalore, chennai & Hyderabad, featuring residential, commercial, retail, and hospitality components."
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default MixedUse


