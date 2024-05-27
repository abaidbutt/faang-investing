"use client";
import HeroSection from "@/components/HeroSection";
import ContactUsSection from "@/components/ContactUsSection";
import FeaturesSection from "@/components/FeaturesSection";

import QRCodeSection from "@/components/QRCodeSection";
import SecuritySection from "@/components/SecuritySection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />

      <QRCodeSection />
      <FeaturesSection />

      <SecuritySection />
      <ContactUsSection />
    </div>
  );
}
