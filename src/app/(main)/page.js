import BrandMarquee from "@/app/components/shared/home/BrandMarquee";
import CtaSection from "@/app/components/shared/home/CtaSection";
import Hero from "@/app/components/shared/home/Hero";
import LogisticsGallery from "@/app/components/shared/home/LogisticsGallery";
import MerchantVoices from "@/app/components/shared/home/MerchantVoices";
import MobileAppSection from "@/app/components/shared/home/MobileAppSection";
import WhyChoose from "@/app/components/shared/home/WhyChoose";
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
