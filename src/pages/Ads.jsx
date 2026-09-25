import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import Faq from '../components/Faq'
import { ADS_FAQS } from '../data/faqs'
import AdsHero from '../components/ads/AdsHero'
import BrandMarquee from '../components/ads/BrandMarquee'
import ChannelSplit from '../components/ads/ChannelSplit'
import AdsResults from '../components/ads/AdsResults'
import WeeklyRhythm from '../components/ads/WeeklyRhythm'
import MetricWatch from '../components/ads/MetricWatch'
import TrackingChain from '../components/ads/TrackingChain'

export default function Ads() {
  useEffect(() => {
    document.title = 'Advertize | The Website Makers'
  }, [])

  return (
    <>
      <a className="skip" href="#channels">
        Skip to channels
      </a>
      <Header />
      <main>
        <AdsHero />
        <BrandMarquee />
        <AdsResults />
        <ChannelSplit />
        <WeeklyRhythm />
        <MetricWatch />
        <TrackingChain />
        <ContactSection
          sectionId="ads-contact"
          aside={<Faq items={ADS_FAQS} eyebrow="/06 — FAQs" />}
          heading="Send us your account."
          messagePlaceholder="e.g. Google Search plus Meta, ₹3L a month, 40 leads a month"
          successMessage="Thanks. We will come back with the review shortly."
        />
      </main>
      <Footer />
    </>
  )
}
