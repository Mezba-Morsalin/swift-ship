"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaBoxOpen, FaHouse, FaHeadphones } from "react-icons/fa6";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  // Prevent Framer Motion SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen w-full bg-slate-50/80 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Subtle Blur Highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#fcb915]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl w-full text-center">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-2xl shadow-slate-200/50 flex flex-col items-center"
        >
          {/* Animated Graphic Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#fcb915] text-4xl sm:text-5xl mb-6 shadow-inner relative">
            <FaBoxOpen />
            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0f172a] text-[#fcb915] font-black text-[10px] flex items-center justify-center border-2 border-white">
              !
            </span>
          </div>

          {/* Error Code Pill */}
          <div className="inline-flex items-center gap-2 bg-[#fcb915]/20 text-[#0f172a] px-3.5 py-1 rounded-full font-black text-[11px] tracking-widest uppercase mb-4">
            ERROR 404
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-3">
            PARCEL NOT FOUND
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md mb-8">
            The page or tracking destination you are looking for has been moved,
            renamed, or doesn&apos;t exist in our dispatch system.
          </p>

          {/* Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0f172a] text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
            >
              <FaHouse className="text-[#fcb915] text-xs" />
              <span>RETURN TO HOME</span>
            </Link>

            <Link
              href="/#support"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 text-slate-800 font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <FaHeadphones className="text-slate-500 text-xs" />
              <span>CONTACT SUPPORT</span>
            </Link>
          </div>
        </motion.div>

        {/* Footer Note */}
        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-6">
          SwiftShip Logistics Bangladesh • 24/7 Dispatch Systems
        </p>
      </div>
    </main>
  );
}