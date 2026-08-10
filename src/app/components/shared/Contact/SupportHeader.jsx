"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHeadphones } from "react-icons/fa6";

export default function SupportHeader() {
  const [mounted, setMounted] = useState(false);

  // Prevent Framer Motion SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-slate-50/80 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-200/60">
      {/* Background Subtle Blur Highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-[#fcb915]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={mounted ? { opacity: 0, y: 20 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-start text-center max-w-4xl mx-auto"
        >
          {/* Top Pill Badge */}
          <div className="w-fit mx-auto inline-flex items-center gap-2 bg-[#fcb915] text-[#0f172a] px-4 py-1.5 rounded-full font-black text-[11px] sm:text-xs tracking-wider uppercase mb-6 shadow-sm">
  <span className="w-4 h-4 rounded-full bg-[#0f172a] text-[#fcb915] flex items-center justify-center text-[10px]">
    <FaHeadphones />
  </span>

  <span>24/7 SUPPORT DESK</span>
</div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase mb-5">
            GET IN TOUCH WITH{" "}
            <span className="text-[#fcb915]">SWIFTSHIP SUPPORT</span>
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-3xl leading-relaxed mx-auto">
            Have questions regarding doorstep parcel pickup, COD wallet payouts, or API integration?
            Our customer success team is here to assist you 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
}