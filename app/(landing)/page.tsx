import AssistanceSection from "@/src/page/home/assistance";
import EmergencyHero from "@/src/page/home/emergency";
import FaqAccordion from "@/src/page/home/faq";
import Hero from "@/src/page/home/Hero";
import HeroSupportBanner from "@/src/page/home/heroSupportBanner";
import HowItWorksSection from "@/src/page/home/howItWorks";
import LatestNewsBlog from "@/src/page/home/LatestNewsBlog";
import LeadershipTeamSection from "@/src/page/home/leadershipTeam";
import TransportSystemSection from "@/src/page/home/logistics";
import LogisticsSlider from "@/src/page/home/logisticsSlider";
import MapOfficesOverlay from "@/src/page/home/MapOffices";
import PricingOffers from "@/src/page/home/PricingPlans";
import QuoteSection from "@/src/page/home/quoteSection";
import TestimonialSection from "@/src/page/home/Testimonial";
import React from "react";

const LandingPageHome = () => {
  return (
    <>
      <Hero />

      <AssistanceSection />
      <EmergencyHero />
      <TransportSystemSection />
      <QuoteSection />
      <LeadershipTeamSection />
      <LogisticsSlider />
      <HowItWorksSection />
      <div className="grid grid-cols-1  lg:grid-cols-2">
        <FaqAccordion />
        <HeroSupportBanner />
      </div>
      <PricingOffers />
      <TestimonialSection />
      <LatestNewsBlog />
      <MapOfficesOverlay />
    </>
  );
};

export default LandingPageHome;
