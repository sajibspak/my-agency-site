import HeroSection from "../components/ui/HeroSection"
import StatsSection from "../components/ui/StatsSection"
import ServicesSection from '../components/ui/ServicesSection';
import WhyChooseUs from "../components/ui/WhyChooseUs";
import InsightsSection from "../components/ui/InsightsSection";
import FAQSection from "../components/ui/FAQSection";
import CTASection from "../components/ui/CTASection";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <StatsSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <InsightsSection/>
      <FAQSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}


