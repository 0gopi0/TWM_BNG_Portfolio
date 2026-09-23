import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
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
        <ChannelSplit />
        <AdsResults />
        <WeeklyRhythm />
        <MetricWatch />
        <TrackingChain />
        <ContactSection
          sectionId="ads-contact"
          eyebrow="/06 — Next"
          heading="Send us your account."
          description="We review the last 30 days of spend: structure, wasted spend, creative and tracking. You get a written plan whether or not you hire us."
          messagePlaceholder="e.g. Google Search plus Meta, ₹3L a month, 40 leads a month"
          submitLabel="Request a spend review"
          successMessage="Thanks. We will come back with the review shortly."
        />
      </main>
      <Footer />
    </>
  )
}
