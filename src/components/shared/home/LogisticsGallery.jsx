"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const marqueeItems = [
  {
    type: "single",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop",
    badge: "LAST-MILE COVERAGE",
    title: "DEDICATED RIDER FLEET",
    subtitle: "450+ regional distribution hubs nationwide",
    width: "w-72",
  },
  {
    type: "single",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop",
    badge: "NATIONWIDE NETWORK",
    title: "REGIONAL LINEHAUL FLEET",
    subtitle: "Mid-run delivery guaranteed to 492 upazilas",
    width: "w-80",
  },
  {
    type: "stacked",
    top: {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      badge: "HUB VAULT",
      title: "SECURE VAULT STORAGE",
      subtitle: "Temperature controlled parcel staging",
    },
    bottom: {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
      badge: "LIVE TRACKING",
      title: "REAL-TIME GPS TERMINAL",
      subtitle: "Live status updates for immediate SMS dispatch",
    },
    width: "w-72",
  },
  {
    type: "single",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
    badge: "INTRA-CITY EXPRESS",
    title: "EXPRESS DOORSTEP DISPATCH",
    subtitle: "Same-day rider pick-ups in Dhaka Metro",
    width: "w-72",
  },
  {
    type: "stacked",
    top: {
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=600&auto=format&fit=crop",
      badge: "INTER-DISTRICT LINEHAUL",
      title: "NIGHTLY HIGHWAY FLEET",
      subtitle: "Traversing all 64 districts",
    },
    bottom: {
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
      badge: "SMART PROCESSING",
      title: "AUTOMATED BARCODE SYNC",
      subtitle: "Instant thermal waybill stickers",
    },
    width: "w-72",
  },
  {
    type: "single",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600&auto=format&fit=crop",
    badge: "AUTOMATED HUB",
    title: "CENTRAL HIGH-SPEED SORTING HUB",
    subtitle: "1.2 Million parcels sorted via high-tech belt monthly",
    width: "w-96",
  },
  {
    type: "stacked",
    top: {
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=600&auto=format&fit=crop",
      badge: "ECOMMERCE PARTNER",
      title: "MERCHANT STORE PACKAGING",
      subtitle: "Shopify & WooCommerce fulfillment",
    },
    bottom: {
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=600&auto=format&fit=crop",
      badge: "VERIFIED BUYER HANDOVER",
      title: "COD CASH COLLECTION",
      subtitle: "OTP verification at doorsteps",
    },
    width: "w-72",
  },
];

export default function LogisticsGallery() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100 overflow-hidden">
      
      {/* Header Badge & Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <span className="mb-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
          Live Logistics Gallery
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
          Nationwide Express Network <span className="text-[#ffb703]">In Motion</span>
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2">
          From central automated sorting hubs to doorstep riders across all 64 districts.
        </p>
      </div>

      {/* Infinite Scroll React Marquee */}
      <Marquee
        gradient={true}
        gradientColor="255, 255, 255"
        gradientWidth={80}
        speed={40}
        pauseOnHover={true}
        className="py-4"
      >
        <div className="flex items-center gap-4 px-2">
          {marqueeItems.map((item, index) => (
            <div key={index} className={`flex-shrink-0 ${item.width}`}>
              
              {/* Single Full Card Layout */}
              {item.type === "single" && (
                <div className="relative h-96 rounded-3xl overflow-hidden group shadow-sm border border-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ffb703] text-slate-900 text-[9px] font-black tracking-wider px-2.5 py-1 rounded-md uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-sm font-black uppercase tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-medium mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              )}

              {/* Stacked Two-Card Layout */}
              {item.type === "stacked" && (
                <div className="flex flex-col gap-4 h-96">
                  {[item.top, item.bottom].map((subItem, idx) => (
                    <div
                      key={idx}
                      className="relative h-[184px] rounded-2xl overflow-hidden group shadow-sm border border-slate-100"
                    >
                      <Image
                        src={subItem.image}
                        alt={subItem.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#ffb703] text-slate-900 text-[8px] font-black tracking-wider px-2 py-0.5 rounded uppercase">
                          {subItem.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <h4 className="text-xs font-black uppercase tracking-tight">
                          {subItem.title}
                        </h4>
                        <p className="text-[10px] text-slate-300 font-medium line-clamp-1 mt-0.5">
                          {subItem.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </Marquee>

    </section>
  );
}