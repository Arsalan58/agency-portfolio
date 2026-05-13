import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MarqueeSection from '@/components/MarqueeSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import ProcessSection from '@/components/ProcessSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      {/* <PricingSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
