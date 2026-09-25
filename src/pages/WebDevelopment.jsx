import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import Faq from '../components/Faq'
import { WEBDEV_FAQS } from '../data/faqs'
import WebDevHero from '../components/webdev/WebDevHero'
import TechCarousel from '../components/webdev/TechCarousel'
import ApproachSection from '../components/webdev/ApproachSection'
import ProjectsSection from '../components/webdev/ProjectsSection'
import TechGrid from '../components/webdev/TechGrid'
import { useReveal } from '../hooks/useReveal'
import { TECH_STACK } from '../data/techStack'

export default function WebDevelopment() {
  const headRef = useReveal()

  useEffect(() => {
    document.title = 'Web & Apps | The Website Makers'
  }, [])

  return (
    <>
      <a className="skip" href="#stack">
        Skip to the stack
      </a>
      <Header />
      <main>
        <WebDevHero />

        <div className="webdev-blocks-transition" aria-hidden="true"></div>

        <TechCarousel />

        <section id="stack">
          <div className="wrap">
            <div className="sec-head reveal" ref={headRef}>
              <p className="num">/01 — Stack</p>
              <h2>What we build with</h2>
              <p>Eight tools, one delivery team. Pick the platform below to see what it's for and when we reach for it.</p>
            </div>
            <TechGrid items={TECH_STACK} />
          </div>
        </section>

        <ProjectsSection />

        <ApproachSection />

        <ContactSection
          sectionId="webdev-contact"
          aside={<Faq items={WEBDEV_FAQS} eyebrow="/04 — FAQs" />}
          heading="Tell us what you're building."
          messagePlaceholder="e.g. WordPress to headless, a Shopify build, a custom app"
          successMessage="Thanks. We will get back to you with a scoped estimate shortly."
        />
      </main>
      <Footer />
    </>
  )
}
