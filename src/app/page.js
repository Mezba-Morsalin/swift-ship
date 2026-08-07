import BrandMarquee from "@/components/BrandMarquee";
import Hero from "@/components/Hero";
import LogisticsGallery from "@/components/LogisticsGallery";
import WhyChoose from "@/components/WhyChoose";
import { div } from "motion/react-client";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrandMarquee/>
      <WhyChoose/>
      <LogisticsGallery/>
    </div>
  );
}
