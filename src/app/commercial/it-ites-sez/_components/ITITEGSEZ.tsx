import { ShowcaseComponent } from '@/components/ui/ShowcaseComponent'
import { showcaseImagesCommpiled } from './ITITEGSEZStats'

const ITITEGSEZ = () => {
  return (
    <section id='it-iteg-sez' className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="IT/ ITES SEZ"
        paragraph="Leading developer of IT parks, SEZs, and commercial spaces providing world-class infrastructure for global companies."
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default ITITEGSEZ