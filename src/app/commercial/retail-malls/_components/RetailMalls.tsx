import { ShowcaseComponent } from '@/components/ui/ShowcaseComponent'
import { showcaseImagesCommpiled } from './RetailMallsStats'


const RetailMalls = () => {
  return (
    <section id='retail-malls' className="min-h-screen pt-35">
      <ShowcaseComponent
        heading="RETAIL MALLS"
        paragraph="Premium retail destinations offering world-class shopping, dining, entertainment, and leisure experiences across Bangalore and other key cities."
        showcaseImagesCommpiled={showcaseImagesCommpiled}
      />
    </section>
  )
}

export default RetailMalls