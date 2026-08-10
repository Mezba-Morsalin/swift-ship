"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSliders, FaArrowRight } from "react-icons/fa6";

const regions = [
  { id: "dhaka-metro", label: "DHAKA METRO", baseFee: 60, extraKgFee: 15 },
  { id: "dhaka-suburbs", label: "DHAKA SUBURBS", baseFee: 80, extraKgFee: 20 },
  { id: "divisional-city", label: "DIVISIONAL CITY", baseFee: 100, extraKgFee: 25 },
  { id: "rural-upazila", label: "RURAL / UPAZILA", baseFee: 130, extraKgFee: 30 },
];

export default function DeliveryRateEstimator() {
  const [mounted, setMounted] = useState(false);
  
  // Interactive State
  const [selectedRegion, setSelectedRegion] = useState("dhaka-metro");
  const [weight, setWeight] = useState(1);
  const [codAmount, setCodAmount] = useState(1500);
  const [isCodActive, setIsCodActive] = useState(true);

  // Prevent Framer Motion & state hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculation Logic
  const activeRegionObj = regions.find((r) => r.id === selectedRegion) || regions[0];
  const baseRate = activeRegionObj.baseFee;
  const extraKg = Math.max(0, weight - 1);
  const extraKgCharge = extraKg * activeRegionObj.extraKgFee;
  const totalDeliveryFee = baseRate + extraKgCharge;

  return (
    <section className="w-full bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Header Title */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#fcb915] text-[#0f172a] flex items-center justify-center shrink-0 text-base">
                  <FaSliders />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase leading-none">
                    LIVE PARCEL DELIVERY RATE ESTIMATOR
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    Select your delivery parameters to see exact costs.
                  </p>
                </div>
              </div>

              {/* 1. Destination Region Tabs */}
              <div>
                <label className="block text-[11px] font-black tracking-widest text-slate-400 uppercase mb-2.5">
                  DESTINATION REGION
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {regions.map((region) => {
                    const isActive = selectedRegion === region.id;
                    return (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => setSelectedRegion(region.id)}
                        className={`
                          py-3 px-2 rounded-2xl text-[10px] sm:text-[11px] font-black tracking-wider uppercase transition-all duration-200 cursor-pointer text-center
                          ${
                            isActive
                              ? "bg-[#0f172a] text-[#fcb915] shadow-md shadow-slate-900/10 scale-[1.02]"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                          }
                        `}
                      >
                        {region.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Parcel Weight Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-black tracking-widest text-slate-400 uppercase">
                    PARCEL WEIGHT (KG)
                  </label>
                  <span className="text-xs font-black text-[#fcb915] bg-[#0f172a] px-2.5 py-0.5 rounded-full">
                    {weight} KG
                  </span>
                </div>
                
                <input type="range" min="0.5" max="10" step="0.5" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fcb915]"
                />
                
                <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-wider mt-1.5">
                  <span>0.5 KG (STANDARD DOCUMENT/T-SHIRT)</span>
                  <span>10 KG (HEAVY BULK)</span>
                </div>
              </div>

              {/* 3. Declared COD Input */}
              <div>
                <label className="block text-[11px] font-black tracking-widest text-slate-400 uppercase mb-2">
                  DECLARED CASH ON DELIVERY AMOUNT (BDT ৳)
                </label>
                <div className="relative">
                  <input type="number" value={codAmount} onChange={(e) => setCodAmount(Number(e.target.value))} placeholder="Enter COD amount" disabled={!isCodActive} className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-black text-slate-800 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* 4. COD Toggle */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    COLLECT CASH ON DELIVERY (COD)
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Guaranteed 0% commission deducted from sales value
                  </p>
                </div>

                {/* Toggle Switch */}
                <button type="button" onClick={() => setIsCodActive(!isCodActive)} className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 flex items-center ${
                    isCodActive ? "bg-[#fcb915] justify-end" : "bg-slate-300 justify-start"
                  }`}
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-4 h-4 rounded-full bg-white shadow-md"
                  />
                </button>
              </div>

            </div>

            {/* Right Column: Calculated Dark Card Output */}
            <div className="lg:col-span-5">
              <motion.div
                layout
                initial={mounted ? { opacity: 0, scale: 0.95 } : false}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0f172a] rounded-[28px] p-6 sm:p-8 text-white shadow-2xl relative"
              >
                {/* Fee Header */}
                <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                  ESTIMATED DELIVERY FEE
                </p>

                {/* Total Price Display */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#fcb915]">
                    ৳ {totalDeliveryFee}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    INCLUSIVE OF VAT
                  </span>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t border-slate-800 pt-5 mb-8 text-xs font-semibold text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Base Weight Rate (Up to 1 KG):</span>
                    <span className="font-bold text-white">৳ {baseRate}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Extra Weight Charge ({extraKg} KG):</span>
                    <span className="font-bold text-white">৳ {extraKgCharge}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">COD Collection Fee (0%):</span>
                    <span className="font-black text-[#fcb915]">৳ 0 (FREE)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Return Charge (If Rejected):</span>
                    <span className="font-black text-[#fcb915]">৳ 0 (GUARANTEED)</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className="w-full py-4 px-6 rounded-full bg-[#fcb915] text-[#0f172a] font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/10 cursor-pointer"
                >
                  <span>REGISTER FREE MERCHANT ACCOUNT</span>
                  <FaArrowRight className="text-xs" />
                </button>

                {/* Payout Time Note */}
                <p className="text-[10px] text-center font-bold text-slate-400 tracking-wider uppercase mt-4">
                  DISBURSEMENT PAYOUT TIME: 6:00 PM TODAY
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}