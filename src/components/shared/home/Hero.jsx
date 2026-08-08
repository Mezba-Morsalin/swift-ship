"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaArrowRight, 
  FaCalculator 
} from "react-icons/fa";
import bannerImg from "../../../../public/assets/Banner.jpg"

export default function Hero() {
  const [trackingId, setTrackingId] = useState("");

  const handleDemoClick = (code) => {
    setTrackingId(code);
  };

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Controls */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Badge */}
            <div>
              <span className="mb-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Next Generation Logistics Network
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-[1.1]">
              Deliver <br />
              <span className="text-[#fcb915]">Beyond</span> <br />
              Expectation.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Fast. Secure. Everywhere. Experience Bangladesh premier courier network 
              spanning across all 64 districts with real-time tracking intelligence 
              and 24-hour COD payout.
            </p>

            {/* Tracking Input Card Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-5 max-w-xl shadow-sm space-y-3">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-4 text-slate-400 text-sm" />
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter Parcel ID to Track (e.g. SWIFT-89421)..."
                  className="w-full bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 pl-10 pr-32 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ffb703] transition-all"
                />
                <button 
                  className="absolute right-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all"
                >
                  TRACK NOW
                  <FaArrowRight className="text-[10px]" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/merchant"
                className="bg-[#ffb703] hover:bg-slate-900 hover:text-slate-100 text-slate-900 font-extrabold text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center gap-3 shadow-md shadow-amber-100 transition-all hover:gap-4"
              >
                BECOME A MERCHANT
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="/rates"
                className="bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-extrabold text-xs tracking-wider px-6 py-3.5 rounded-full flex items-center gap-2 transition-all"
              >
                <FaCalculator className="text-xs" />
                CALCULATE RATES
              </a>
            </div>

            {/* Metrics & Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-xl">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">50k+</h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Merchants
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">30M+</h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Deliveries
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">99%</h3>
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Success Rate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Warehouse Card Preview */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md bg-slate-950 p-4 sm:p-5 rounded-[32px] shadow-2xl shadow-slate-400/20 border border-slate-800 shadow">
              
              {/* Inner Image Frame */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src={bannerImg}
                  alt="Warehouse Delivery Network"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#fcb915] text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow">
                    Speed: 24h Express
                  </span>
                </div>

                {/* Bottom Live Tracking Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-white space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-1.5 bg-[#fcb915]/20 text-[#fcb915] text-[9px] font-extrabold px-2 py-0.5 rounded tracking-widest uppercase">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
  </span>

  Live Tracking
</span>
                    <span className="text-[10px] text-slate-400 font-mono font-bold">
                      SWIFT-89421
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-100">
                    Out for Delivery in Gulshan-2, Dhaka
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-[#ffb703] h-full rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}