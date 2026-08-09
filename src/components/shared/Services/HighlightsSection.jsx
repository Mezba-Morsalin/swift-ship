"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaClock,
  FaBuilding,
  FaShieldHalved,
} from "react-icons/fa6";

const stats = [
  {
    icon: FaGlobe,
    title: "64 DISTRICTS",
    description: "Full Bangladesh coverage",
  },
  {
    icon: FaClock,
    title: "24/7 DISPATCH",
    description: "Nightly highway linehaul trucks",
  },
  {
    icon: FaBuilding,
    title: "450+ HUBS",
    description: "Local rider sorting stations",
  },
  {
    icon: FaShieldHalved,
    title: "100% INSURED",
    description: "Transit loss coverage guarantee",
  },
];

export default function HighlightsSection() {
  const [mounted, setMounted] = useState(false);

  // Safeguard against SSR hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-slate-50/60 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div key={item.title} initial={mounted ? { opacity: 0, y: 20 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className=" bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/70 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center
                ">
                {/* Yellow Icon */}
                <div className="text-[#fcb915] text-2xl sm:text-3xl mb-4">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}