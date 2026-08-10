"use client";

import { motion } from "framer-motion";
import { 
  FaBolt, 
  FaUserPlus, 
  FaArrowRight, 
  FaCheckCircle 
} from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#fcb915] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl"
        >
          <div className="max-w-2xl flex flex-col space-y-6 relative z-10">
            {/* Pill Badge */}
            <div>
              <span className="inline-flex items-center gap-2 bg-[#0f172a] text-white text-[10px] sm:text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase">
                <FaBolt className="text-[#fcb915] text-xs" />
                JOIN 50,000+ ACTIVE BANGLADESHI SELLERS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-[1.15]">
              READY TO ACCELERATE YOUR DELIVERIES & CASH FLOW?
            </h2>

            {/* Description */}
            <p className="text-slate-900/80 text-sm sm:text-base font-semibold leading-relaxed">
              Start delivering nationwide with 24-hour next-day guarantee, zero hidden commission, and automated 24-hour COD payouts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#signup"
                className="bg-[#0f172a] hover:bg-slate-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-200 shadow-lg group"
              >
                <FaUserPlus className="text-base" />
                <span>BECOME A MERCHANT FREE</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#estimate"
                className="bg-white hover:bg-slate-50 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-4 rounded-full border border-slate-900/10 transition-all duration-200 shadow-md"
              >
                ESTIMATE SHIPPING COST
              </a>
            </div>

            {/* Bottom Key Value Props */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-tight">
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-slate-950 text-sm flex-shrink-0" />
                <span>0% HIDDEN SETUP FEE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-slate-950 text-sm flex-shrink-0" />
                <span>DAILY DOORSTEP PICKUP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-slate-950 text-sm flex-shrink-0" />
                <span>ALL 64 DISTRICTS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}