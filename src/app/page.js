"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Stats from "../components/Stats";
import FeaturesBento from "../components/FeaturesBento";
import FeatureTabs from "../components/FeatureTabs"; // NEW
import ComparisonTable from "../components/ComparisonTable"; // NEW
import Ecosystem from "../components/Ecosystem";
import MobileApp from "../components/MobileApp";
import DeveloperApi from "../components/DeveloperApi";
import ReviewMarquee from "../components/ReviewMarquee";
import Roadmap from "../components/Roadmap";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// UI Utilities
import Preloader from "../components/ui/Preloader";
import CustomCursor from "../components/ui/CustomCursor";

export default function SaaSPlatform() {
  return (
    <div className='min-h-screen bg-black text-slate-200 font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden cursor-none'>
      <Preloader />
      <CustomCursor />

      {/* Global Noise */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className='relative z-10'>
        <Navbar />
        <Hero />
        <Partners />
        <Stats />

        <FeaturesBento />

        {/* NEW: The Interactive Control Center */}
        <FeatureTabs />

        <Ecosystem />
        <MobileApp />

        {/* NEW: The Conversion Driver */}
        <ComparisonTable />

        <DeveloperApi />
        <Roadmap />
        <ReviewMarquee />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
