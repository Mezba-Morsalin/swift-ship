"use client";

import { motion } from "framer-motion";
import { 
  FaApple, 
  FaGooglePlay, 
  FaCheckCircle, 
  FaStar, 
  FaMobileAlt 
} from "react-icons/fa";

export default function MobileAppSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative bg-slate-950 rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Area */}
            <motion.div 
              className="lg:col-span-7 flex flex-col space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Top Badge */}
              <div>
                <span className="inline-flex items-center gap-2 bg-[#ffb703] text-slate-900 text-[10px] sm:text-xs font-extrabold tracking-widest px-3 py-1.5 rounded-full uppercase">
                  <FaMobileAlt className="text-xs" />
                  SWIFTSHIP MOBILE APP V3.2
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.15]">
                Manage Your Merchant <br />
                Deliveries <br />
                <span className="text-[#ffb703]">On The Go</span>
              </h2>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                Download the official SwiftShip Merchant app for iOS & Android. Track live rider pickups, manage daily COD payouts, and print shipping labels directly from your mobile device.
              </p>

              {/* Checkmark Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
                  <FaCheckCircle className="text-[#ffb703] text-sm flex-shrink-0" />
                  <span>One-tap bulk parcel booking</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
                  <FaCheckCircle className="text-[#ffb703] text-sm flex-shrink-0" />
                  <span>Live GPS rider route tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
                  <FaCheckCircle className="text-[#ffb703] text-sm flex-shrink-0" />
                  <span>Instant COD payout notification</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-200">
                  <FaCheckCircle className="text-[#ffb703] text-sm flex-shrink-0" />
                  <span>In-app barcode label printing</span>
                </div>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-2 pt-2">
                <div className="flex text-[#ffb703] text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-white text-xs font-extrabold tracking-wider">
                  4.9 / 5.0 RATING
                </span>
                <span className="text-slate-500 text-xs font-semibold">
                  (25,000+ Merchant Downloads)
                </span>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#download-ios"
                  className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-200 shadow-md group"
                >
                  <FaApple className="text-2xl group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                      Download on
                    </span>
                    <span className="text-xs font-black tracking-wider leading-tight mt-0.5">
                      APPLE APP STORE
                    </span>
                  </div>
                </a>

                <a
                  href="#download-android"
                  className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-200 shadow-md group"
                >
                  <FaGooglePlay className="text-xl text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-none">
                      Get it on
                    </span>
                    <span className="text-xs font-black tracking-wider leading-tight mt-0.5">
                      GOOGLE PLAY STORE
                    </span>
                  </div>
                </a>
              </div>

            </motion.div>

            {/* Right Side: Smartphone Wireframe Screen */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[320px] bg-slate-900 border-[8px] border-slate-800 rounded-[48px] p-4 shadow-2xl shadow-amber-500/5">
                
                {/* Phone Speaker Notch */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Mobile Screen Mockup */}
                <div className="bg-slate-950 rounded-[32px] p-4 text-white border border-slate-800 space-y-4">
                  
                  {/* Top Header */}
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-200">
                      SWIFTSHIP APP
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* COD Balance Box */}
                  <div className="bg-[#ffb703] text-slate-900 p-4 rounded-2xl shadow-md space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-800 block">
                      TODAY'S COD BALANCE
                    </span>
                    <h3 className="text-2xl font-black tracking-tight">
                      ৳ 48,250
                    </h3>
                    <p className="text-[9px] font-bold text-slate-800">
                      Auto Payout Scheduled: 6:00 PM
                    </p>
                  </div>

                  {/* Active Orders List */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">
                      ACTIVE ORDERS (14)
                    </span>

                    {/* Order Item 1 */}
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-mono text-slate-400 font-bold">#SWIFT-89421</span>
                        <span className="text-amber-400 font-extrabold uppercase">In Transit</span>
                      </div>
                      <p className="text-xs font-black uppercase text-slate-100">
                        DHAKA METRO → GULSHAN
                      </p>
                    </div>

                    {/* Order Item 2 */}
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-mono text-slate-400 font-bold">#SWIFT-99102</span>
                        <span className="text-emerald-400 font-extrabold uppercase">Delivered</span>
                      </div>
                      <p className="text-xs font-black uppercase text-slate-100">
                        CHATTOGRAM → AGRABAD
                      </p>
                    </div>
                  </div>

                  {/* Bottom Navigation Bar */}
                  <div className="flex justify-between items-center pt-2 text-[9px] font-black text-slate-400 uppercase tracking-wider border-t border-slate-800/80 px-1">
                    <span className="text-[#ffb703]">HOME</span>
                    <span>ORDERS</span>
                    <span>PAYOUTS</span>
                    <span>PROFILE</span>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}