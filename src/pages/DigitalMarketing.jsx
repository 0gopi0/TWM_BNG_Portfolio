import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import Floaters from '../components/marketing/Floaters'
import MarketingHero from '../components/marketing/MarketingHero'
import WorkTabs from '../components/marketing/WorkTabs'
import CreativeJourney from '../components/marketing/CreativeJourney'
import Testimonials from '../components/marketing/Testimonials'
import Benefits from '../components/marketing/Benefits'

export default function DigitalMarketing() {
  useEffect(() => {
    document.title = 'Digital Marketing | The Website Makers'
  }, [])

  return (
    <div className="dm-page">
      <Floaters />
      <a className="skip" href="#journey">
        Skip to the process
      </a>
      <Header />
      <main>
        <MarketingHero />
        <WorkTabs />
        <CreativeJourney />
        <Testimonials />
        <Benefits />
        <ContactSection
          sectionId="dm-contact"
          eyebrow="/05 — Next"
          heading="Send us your brand."
          description="Tell us who you want to reach and what you sell. You get a 90 day content plan, the formats we would run, and the hours it asks of you."
          messagePlaceholder="e.g. founder-led content, Instagram plus LinkedIn, 2 calls a week"
          submitLabel="Request a content plan"
          successMessage="Thanks. We will come back with the plan shortly."
        />
      </main>
      <Footer />
    </div>
  )
}
