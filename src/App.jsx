import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Ads from './pages/Ads'
import DigitalMarketing from './pages/DigitalMarketing'
import Welcome from './pages/Welcome'
import WebDevelopment from './pages/WebDevelopment'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/seo" element={<Home />} />
        <Route path="/welcome" element={<Navigate to="/" replace />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-development" element={<WebDevelopment />} />
      </Routes>
    </BrowserRouter>
  )
}
