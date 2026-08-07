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
          <p className="mb-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
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