"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function CtaAbout() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by controlling animation initialization on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={mounted ? { opacity: 0, y: 20 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: "easeOut" }} className=" bg-[#0f172a] rounded-[32px] sm:rounded-[40px] py-14 sm:py-16 md:py-20 px-6 sm:px-12 md:px-16 text-center shadow-2xl flex flex-col items-center justify-center
          ">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase max-w-4xl leading-tight">
            PARTNER WITH BANGLADESH’S FASTEST EXPRESS NETWORK
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-slate-300 text-xs sm:text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Join 50,000+ active online sellers today and get your first 5 deliveries free of charge.
          </p>

          {/* CTA Button */}
          <motion.div initial={mounted ? { opacity: 0, scale: 0.95 } : false} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="mt-8 sm:mt-10">
            <Link
              href="/merchant"
              className=" group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#fcb915] text-slate-900 font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_25px_rgba(252,185,21,0.3)] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0">
              <span>OPEN MERCHANT ACCOUNT</span>
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}