"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBox } from "react-icons/fa6";

export default function DeliverySolutionsHeader() {
  const [mounted, setMounted] = useState(false);

  // Prevent SSR/Client hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-slate-50/50 py-16 md:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          
          {/* Badge */}
          <motion.div initial={mounted ? { opacity: 0, y: -10 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-block"
          >
            <div className="inline-flex items-center gap-2 bg-[#fcb915] text-slate-900 text-[11px] sm:text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase shadow-sm">
              <FaBox className="text-xs" />
              <span>FULL-STACK LOGISTICS PORTFOLIO</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 initial={mounted ? { opacity: 0, y: 15 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] uppercase"
          >
            END-TO-END EXPRESS <br className="hidden sm:inline" />
            <span className="text-[#fcb915]">DELIVERY SOLUTIONS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={mounted ? { opacity: 0, y: 15 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            From same-day intra-city express drops to full-service e-commerce warehousing, explore how SwiftShip powers e-commerce brands in Bangladesh.
          </motion.p>

        </div>
      </div>
    </section>
  );
}