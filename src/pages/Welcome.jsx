import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import WelcomeHero from '../components/welcome/WelcomeHero'
import ServiceCarousel from '../components/welcome/ServiceCarousel'
import PathCards from '../components/welcome/PathCards'

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
        <ServiceCarousel />
        <PathCards />
        <ContactSection
          sectionId="wl-contact"
          eyebrow="Next"
          heading="Tell us what you need."
          description="Not sure which of the four is yours? Describe the problem in a line or two. We will tell you which service fits, and what it would cost."
          messagePlaceholder="e.g. we rank but we do not get enquiries"
          submitLabel="Ask us where to start"
          successMessage="Thanks. We will point you in the right direction shortly."
        />
      </main>
      <Footer />
    </>
  )
}
