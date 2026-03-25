import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import StrategySection from "./components/StrategySection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div style={{ background: "#0B0B0B", minHeight: "100vh" }}>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <PortfolioSection />
        <StrategySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
