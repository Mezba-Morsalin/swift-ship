"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaTruckFast,
  FaBoxesPacking,
  FaBoxOpen,
  FaTruckRampBox,
  FaRotateLeft,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";

const filterTabs = [
  { id: "all", label: "ALL LOGISTICS SERVICES" },
  { id: "express", label: "EXPRESS COURIER & COD" },
  { id: "warehousing", label: "WAREHOUSING & FULFILLMENT" },
  { id: "freight", label: "BULK FREIGHT & B2B" },
  { id: "reverse", label: "EXCHANGE & REVERSE LOGISTICS" },
];

const servicesData = [
  {
    id: "dhaka-express",
    category: "express",
    categoryLabel: "EXPRESS COURIER",
    badge: "SLA: 4 - 6 HOURS",
    icon: FaBolt,
    title: "DHAKA METRO SAME-DAY EXPRESS",
    subtitle: "GUARANTEED 4 TO 6 HOUR DOORSTEP DELIVERY",
    description:
      "Ideal for fast-moving fashion, electronic gadgets, and perishable items requiring rapid intra-city fulfillment. Includes direct rider allocation and real-time OTP buyer confirmation.",
    features: [
      "Book by 12 PM for same-day delivery",
      "Up to 5kg single parcel limit",
      "Real-time GPS rider location map",
      "Instant COD payout notification",
    ],
    highlighted: false,
  },
  {
    id: "nationwide-linehaul",
    category: "express",
    categoryLabel: "EXPRESS COURIER",
    badge: "SLA: 24 - 48 HOURS",
    icon: FaTruckFast,
    title: "NATIONWIDE NEXT-DAY LINEHAUL",
    subtitle: "ALL 64 DISTRICT HUB DELIVERIES IN 24-48 HOURS",
    description:
      "Connect your store with customers across every major division in Bangladesh. Dedicated highway linehaul express trucks run nightly from central Dhaka sorting hubs.",
    features: [
      "Covering 492 upazila sub-districts",
      "Integrated SMS delivery updates",
      "Barcoded tracking labels",
      "Zero COD commission deduction",
    ],
    highlighted: false,
  },
  {
    id: "smart-warehousing",
    category: "warehousing",
    categoryLabel: "WAREHOUSING & FULFILLMENT",
    badge: "99.9% PICK-ACCURACY",
    icon: FaBoxesPacking,
    title: "SMART E-COMMERCE WAREHOUSING",
    subtitle: "STORE, PACK, AND SHIP WITHOUT MANAGING PHYSICAL SPACE",
    description:
      "Outsource product storage to our air-conditioned central fulfillment centers in Tejgaon, Uttara, and Chattogram. We handle inventory barcoding, bubble wrapping, and auto-dispatch.",
    features: [
      "Climate-controlled SKU storage",
      "Free custom packaging boxes",
      "Real-time inventory ledger sync",
      "Same-day order pick & pack",
    ],
    highlighted: false,
  },
  {
    id: "labeling-kitting",
    category: "warehousing",
    categoryLabel: "WAREHOUSING & FULFILLMENT",
    badge: "CUSTOM BRANDING",
    icon: FaBoxOpen,
    title: "MERCHANT LABELING & KITTING",
    subtitle: "CUSTOM BRANDED PACKAGING & PROMOTIONAL INSERTS",
    description:
      "Elevate your buyer unboxing experience. Our fulfillment team adds custom promotional flyers, thank-you cards, and branded tape before sealing each package.",
    features: [
      "Custom branded box assembly",
      "Gift-wrap & personalized notes",
      "Fragile sticker placement",
      "Returns inspection & relabeling",
    ],
    highlighted: true, // Gold Border Highlight
  },
  {
    id: "heavy-freight",
    category: "freight",
    categoryLabel: "BULK CARGO & CORPORATE",
    badge: "UP TO 5 TONS",
    icon: FaTruckRampBox,
    title: "HEAVY FREIGHT & BULK CARGO LOGISTICS",
    subtitle: "B2B WHOLESALE & DISTRIBUTOR LOGISTICS TRANSITS",
    description:
      "Tailored logistics for factory-to-store inventory transport, wholesale garment distribution, and bulk commercial freight weighing 50 KG up to 5 Metric Tons.",
    features: [
      "Dedicated covered van fleet",
      "Proof-of-delivery (POD) signature log",
      "Scheduled warehouse-to-store drops",
      "Corporate credit billing accounts",
    ],
    highlighted: false,
  },
  {
    id: "exchange-returns",
    category: "reverse",
    categoryLabel: "REVERSE LOGISTICS",
    badge: "1x REVERSE FEE",
    icon: FaRotateLeft,
    title: "HASSLE-FREE EXCHANGE & RETURN PICKUP",
    subtitle: "ZERO RETURN CHARGE GUARANTEE FOR FAILED ORDERS",
    description:
      "Turn returns into customer trust. When a buyer requests a size exchange or returns an item, our rider picks up the item from the customer doorstep and returns it to your shop.",
    features: [
      "1x return penalty fee",
      "Real-time return parcel tracking",
      "On-the-spot size exchange option",
      "Automated inventory restocking log",
    ],
    highlighted: false,
  },
];

export default function LogisticsServicesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  return (
    <section className="w-full bg-[#fbfcfd] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={` px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider transition-all duration-200 cursor-pointer uppercase
                  ${
                    isActive
                      ? "bg-[#0f172a] text-[#fcb915] shadow-md shadow-slate-900/10 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#fcb915] hover:text-[#fcb915]"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div layout key={service.id} initial={mounted ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: index * 0.05 }} className={` relative bg-white rounded-[32px] p-6 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-xl
                    ${
                      service.highlighted
                        ? "border-2 border-[#fcb915] shadow-lg shadow-[#fcb915]/10"
                        : "border border-slate-200/80 shadow-sm hover:-translate-y-1"
                    }
                  `}
                >
                  <div>
                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fff8e6] text-[#fcb915] flex items-center justify-center text-lg sm:text-xl shrink-0">
                        <Icon />
                      </div>

                      <span className="bg-[#0f172a] text-[#fcb915] text-[10px] sm:text-[11px] font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase">
                        {service.badge}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <p className="text-[10px] sm:text-[11px] font-black tracking-widest text-slate-400 uppercase mb-1">
                      {service.categoryLabel}
                    </p>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase leading-snug">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-[11px] sm:text-xs font-extrabold text-[#fcb915] tracking-wide uppercase mt-1 mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Divider Line */}
                    <div className="h-[1px] w-full bg-slate-100 mb-6" />

                    {/* Key Features Header */}
                    <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">
                      KEY FEATURES:
                    </p>

                    {/* Feature Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 font-bold"
                        >
                          <span className="text-[#fcb915] mt-0.5 shrink-0">
                            <FaCheck className="text-[11px]" />
                          </span>
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/service/${service.id}`}
                    className=" group w-full py-3.5 rounded-full bg-[#0f172a] text-[#fcb915] font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#fcb915] hover:text-slate-900 hover:shadow-md"
                  >
                    <span>START SHIPPING WITH THIS SERVICE</span>
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}