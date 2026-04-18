import { ShowcaseComponent } from '@/components/ui/ShowcaseComponent'
import { showcaseImagesCommpiled } from './PlottedVillasStats'

const PlottedVillas = () => {
  return (
    <section id='plotted-villas' className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="Plotted / Villas"
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default PlottedVillas