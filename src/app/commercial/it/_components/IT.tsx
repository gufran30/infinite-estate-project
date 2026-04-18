import { ShowcaseComponent } from '@/components/ui/ShowcaseComponent'
import { showcaseImagesCommpiled } from './ITStats'

const IT = () => {
  return (
    <section id='it' className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="IT"
        paragraph="Showcasing end-to-end large-scale commercial and IT developments across Bangalore, featuring state-of-the-art office spaces and modern infrastructure."
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default IT