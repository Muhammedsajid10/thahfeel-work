import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import IntroStatement from "../components/IntroStatement";
import AboutPreview from "../components/AboutPreview";
import ServiceSection from "../components/ServiceSection";
import FeatureSections from "../components/FeatureSections";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";

export default function Home() {
  useEffect(() => {
    document.title = "TAHFEEL TECHNICAL SERVICE | Integrated Solutions";
  }, []);

  return (
    <PageTransition>
      <Hero
        title="Engineering Technical Solutions"
        description="We provide dependable installation, specialist contracting, and coordinated maintenance across a broad range of building and technical works."
        primaryCta={{ to: "/contact", label: "Start a Project" }}
        image="https://images.unsplash.com/photo-1541882315750-6be23472fa41?auto=format&fit=crop&w=1800&q=80"
      />
      <IntroStatement />
      <AboutPreview />
      <ServiceSection />
      <FeatureSections />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </PageTransition>
  );
}
