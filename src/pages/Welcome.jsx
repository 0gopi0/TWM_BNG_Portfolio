import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import WelcomeHero from '../components/welcome/WelcomeHero'
import ServiceCarousel from '../components/welcome/ServiceCarousel'
import PathCards from '../components/welcome/PathCards'
import Testimonials from '../components/marketing/Testimonials'
import Faq from '../components/Faq'
import { WELCOME_FAQS } from '../data/faqs'

export default function Welcome() {
  useEffect(() => {
    document.title = 'Welcome | The Website Makers'
  }, [])

  return (
    <>
      <a className="skip" href="#paths">
        Skip to the four services
      </a>
      <Header />
      <main>
        <WelcomeHero />
        <div className="wl-body">
          <ServiceCarousel />
          <PathCards />
          <Testimonials />
          <ContactSection
            sectionId="wl-contact"
            aside={<Faq items={WELCOME_FAQS} eyebrowClass="wl-eyebrow" />}
            heading="Tell us what you need."
            messagePlaceholder="e.g. we rank but we do not get enquiries"
            successMessage="Thanks. We will point you in the right direction shortly."
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
