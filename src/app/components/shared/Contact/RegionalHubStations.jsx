"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaLocationDot, FaPhone } from "react-icons/fa6";

const hubStations = [
  {
    title: "DHAKA CENTRAL HQ & SORTING HUB",
    address: "Plot 18, Block B, Industrial Area, Tejgaon, Dhaka-1208",
    phone: "+880 9612-889900",
    hours: "24 Hours / 7 Days Open",
  },
  {
    title: "CHATTOGRAM REGIONAL HUB STATION",
    address: "Holding 452, Agrabad Commercial Area, Chattogram-4100",
    phone: "+880 31-718899",
    hours: "8:00 AM - 10:00 PM",
  },
  {
    title: "SYLHET DIVISION SORTING HUB",
    address: "Subhanighat Main Road, Sylhet Sadar, Sylhet-3100",
    phone: "+880 821-729900",
    hours: "8:00 AM - 10:00 PM",
  },
];

export default function RegionalHubStations() {
  const [mounted, setMounted] = useState(false);

  // Safeguard against SSR hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            REGIONAL HUB STATIONS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5">
            Visit our primary line sorting centers across Bangladesh.
          </p>
        </div>

        {/* Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubStations.map((hub, index) => (
            <motion.div key={hub.title} initial={mounted ? { opacity: 0, y: 20 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Title & Hub Icon */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-[#fcb915] text-xl mt-0.5 shrink-0">
                    <FaBuilding />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase leading-snug">
                    {hub.title}
                  </h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5 text-xs text-slate-500 font-medium mb-5 pl-0.5">
                  <FaLocationDot className="text-slate-400 text-xs mt-0.5 shrink-0" />
                  <p className="leading-relaxed">{hub.address}</p>
                </div>
              </div>

              {/* Bottom Phone & Hours Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <FaPhone className="text-[10px] text-slate-400" />
                  <span>{hub.phone}</span>
                </div>
                <span className="text-[#fcb915] font-black tracking-tight">
                  {hub.hours}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}