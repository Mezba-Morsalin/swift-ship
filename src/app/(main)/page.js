import BrandMarquee from "@/components/shared/home/BrandMarquee";
import CtaSection from "@/components/shared/home/CtaSection";
import Hero from "@/components/shared/home/Hero";
import LogisticsGallery from "@/components/shared/home/LogisticsGallery";
import MerchantVoices from "@/components/shared/home/MerchantVoices";
import MobileAppSection from "@/components/shared/home/MobileAppSection";
import WhyChoose from "@/components/shared/home/WhyChoose";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrandMarquee/>
      <WhyChoose/>
      <LogisticsGallery/>
      <MobileAppSection/>
      <MerchantVoices/>
      <CtaSection/>
    </div>
  );
}
