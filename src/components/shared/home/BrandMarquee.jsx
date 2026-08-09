"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  {
    name: "Shopify",
    logo: "/assets/brands/shopify.svg",
  },
  {
    name: "Daraz",
    logo: "/assets/brands/daraz-seeklogo.png",
  },
  {
    name: "Alibaba",
    logo: "/assets/brands/alibabadotcom.svg",
  },
  {
    name: "eBay",
    logo: "/assets/brands/ebay.svg",
  },
  {
    name: "FedEx",
    logo: "/assets/brands/fedex.svg",
  },
  {
    name: "DHL",
    logo: "/assets/brands/dhl.svg",
  },
  {
    name: "Pathao",
    logo: "/assets/brands/pathao-seeklogo.png",
  },
  {
    name: "Foodpanda",
    logo: "/assets/brands/foodpanda.svg",
  },
];

export default function BrandMarquee() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="inline-flex mb-8 items-center gap-2 bg-[#ffb703] text-slate-900 text-[11px] sm:text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase shadow-sm">
            Trusted by Growing Businesses
          </p>
        </div>

        <Marquee
          speed={50}
          pauseOnHover
          gradient={false}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="mx-8 flex items-center justify-center rounded-2xl border bg-background px-8 py-5 shadow-sm transition-all hover:shadow-md"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={200}
                height={200}
                className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}