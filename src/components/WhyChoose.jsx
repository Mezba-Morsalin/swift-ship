"use client";

import { motion } from "framer-motion";
import { 
  FaTruck, 
  FaClock, 
  FaShieldAlt, 
  FaBolt, 
  FaMapMarkerAlt, 
  FaPlug, 
  FaCheckCircle 
} from "react-icons/fa";

const features = [
  {
    icon: FaTruck,
    badge: "24 HOURS SLA",
    title: "GUARANTEED 24H NATIONWIDE DELIVERY",
    subtitle: "NEXT-DAY DOORSTEP SLA IN ALL 64 DISTRICTS",
    description: "Highway linehaul trucks run nightly to ensure parcels reach recipients in all 64 districts within 24 hours.",
    advantages: [
      "Nightly express linehaul departure",
      "Real-time GPS vehicle tracking",
      "Priority doorstep sorting",
    ],
  },
  {
    icon: FaClock,
    badge: "6:00 PM DAILY",
    title: "DAILY 6:00 PM COD DISBURSEMENTS",
    subtitle: "0% COD SURCHARGE & AUTOMATED PAYOUTS",
    description: "We disburse your collected sales cash directly into your bank or digital MFS wallet every single evening.",
    advantages: [
      "0% COD commission deducted",
      "Automated bank & MFS transfers",
      "Live wallet balance ledger",
    ],
  },
  {
    icon: FaShieldAlt,
    badge: "৳0 RETURN CHARGE",
    title: "৳0 RETURN CHARGE GUARANTEE",
    subtitle: "ZERO PENALTY FEES FOR REJECTED GOODS",
    description: "If a recipient rejects a parcel, we return it to your store free of charge with zero penalty fees.",
    advantages: [
      "No return penalty fees",
      "Two doorstep delivery attempts",
      "Free return inventory logging",
    ],
  },
  {
    icon: FaBolt,
    badge: "4-6 HOURS EXPRESS",
    title: "SAME-DAY INTRA-CITY EXPRESS DROPS",
    subtitle: "4 TO 6 HOUR DELIVERIES IN DHAKA METRO",
    description: "Urgent parcels booked before 12:00 PM are picked up and delivered same-day directly to the recipient.",
    advantages: [
      "Book before 12 PM for same-day",
      "Direct rider assignment",
      "OTP buyer confirmation",
    ],
  },
  {
    icon: FaMapMarkerAlt,
    badge: "492 UPAZILAS",
    title: "FULL 64 DISTRICT HUB NETWORK",
    subtitle: "450+ REGIONAL SORTING STATIONS",
    description: "Our extensive hub network ensures seamless last-mile doorstep coverage even in remote sub-districts.",
    advantages: [
      "Covering all 64 districts",
      "Local rider sorting stations",
      "On-the-ground support",
    ],
  },
  {
    icon: FaPlug,
    badge: "API & WEBHOOKS",
    title: "E-COMMERCE API & ONE-CLICK PLUGINS",
    subtitle: "SHOPIFY, WOOCOMMERCE & CUSTOM API SYNC",
    description: "Automatically import orders, generate thermal barcode waybills, and trigger SMS alerts for buyers.",
    advantages: [
      "Free Shopify & WooCommerce plugin",
      "Thermal barcode label generator",
      "Automated SMS tracking links",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function WhyChoose() {
  return (
    <section className="w-full bg-slate-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="mb-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            Unmatched Logistics Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight mb-4">
            Why Bangladeshi Sellers <br />
            <span className="text-[#fcb915]">Choose SwiftShip</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            We built a logistics infrastructure engineered specifically for high-volume e-commerce merchants in Bangladesh—offering speed, financial security, and zero return penalties.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Row with Icon and Dark Pill Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-[#fef3c7] p-3 rounded-2xl text-slate-900">
                      <IconComponent className="text-xl sm:text-2xl" />
                    </div>
                    <span className="bg-slate-900 text-white text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug uppercase mb-1">
                    {item.title}
                  </h3>

                  {/* Subtitle Accent */}
                  <p className="text-[10px] font-bold tracking-wider text-[#fcb915] uppercase mb-3">
                    {item.subtitle}
                  </p>

                  {/* Main Paragraph */}
                  <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Advantage List Section */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                    Key Advantage
                  </span>
                  <ul className="space-y-2">
                    {item.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                        <FaCheckCircle className="text-[#fcb915] text-xs flex-shrink-0" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}