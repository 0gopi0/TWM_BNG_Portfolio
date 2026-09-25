import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import ProcessSection from '../components/ProcessSection'
import MethodSection from '../components/MethodSection'
import ContactSection from '../components/ContactSection'
import Faq from '../components/Faq'
import { SEO_FAQS } from '../data/faqs'
import Footer from '../components/Footer'
import ClientModal from '../components/ClientModal'
import { CLIENTS } from '../data/clients'

export default function Home() {
  const [filter, setFilter] = useState('all')
  const [modalIndex, setModalIndex] = useState(null)
  const openerRef = useRef(null)

  useEffect(() => {
    document.title = 'SEO | The Website Makers'
  }, [])

  function openClient(i, opener) {
    openerRef.current = opener
    setModalIndex(i)
  }

  function closeModal() {
    setModalIndex(null)
    openerRef.current?.focus()
  }

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Header />
      <main className="seo-page">
        <Hero />
        <WorkSection filter={filter} setFilter={setFilter} onOpenClient={openClient} />
        <ProcessSection />
        <MethodSection />
        <ContactSection aside={<Faq items={SEO_FAQS} eyebrow="/04 — FAQs" />} />
      </main>
      <Footer />
      <ClientModal client={modalIndex !== null ? CLIENTS[modalIndex] : null} onClose={closeModal} />
    </>
  )
}
