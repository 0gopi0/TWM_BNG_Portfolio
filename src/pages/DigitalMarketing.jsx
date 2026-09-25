import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import Faq from '../components/Faq'
import { MARKETING_FAQS } from '../data/faqs'
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
          aside={<Faq items={MARKETING_FAQS} eyebrow="/05 — FAQs" />}
          heading="Send us your brand."
          messagePlaceholder="e.g. founder-led content, Instagram plus LinkedIn, 2 calls a week"
          successMessage="Thanks. We will come back with the plan shortly."
        />
      </main>
      <Footer />
    </div>
  )
}
