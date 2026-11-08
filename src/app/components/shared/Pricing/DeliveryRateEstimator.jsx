
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSliders, FaArrowRight } from "react-icons/fa6";

const regions = [
  {
    id: "dhaka-metro",
    label: "DHAKA METRO",
    baseFee: 60,
    extraKgFee: 15,
  },
  {
    id: "dhaka-suburbs",
    label: "DHAKA SUBURBS",
    baseFee: 80,
    extraKgFee: 20,
  },
  {
    id: "divisional-city",
    label: "DIVISIONAL CITY",
    baseFee: 100,
    extraKgFee: 25,
  },
  {
    id: "rural-upazila",
    label: "RURAL / UPAZILA",
    baseFee: 130,
    extraKgFee: 30,
  },
];

// Configure this according to your actual COD policy.
const COD_RATE = 0.01;

export default function DeliveryRateEstimator() {
  const [selectedRegion, setSelectedRegion] = useState("dhaka-metro");
  const [weight, setWeight] = useState(1);
  const [codAmount, setCodAmount] = useState(1500);
  const [isCodActive, setIsCodActive] = useState(true);

  // Calculation Logic
  const activeRegionObj =
    regions.find((region) => region.id === selectedRegion) || regions[0];

  const baseRate = activeRegionObj.baseFee;

  const extraKg = Math.max(0, weight - 1);

  const extraKgCharge = Math.round(
    extraKg * activeRegionObj.extraKgFee
  );

  const totalDeliveryFee = baseRate + extraKgCharge;

  const safeCodAmount = Math.max(0, Number(codAmount) || 0);

  const codCharge = isCodActive
    ? Math.round(safeCodAmount * COD_RATE)
    : 0;

  const totalEstimatedCharge = totalDeliveryFee + codCharge;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-BD").format(amount);

  return (
    <section className="w-full bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-7">

              {/* Header */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#fcb915] text-[#0f172a] flex items-center justify-center shrink-0 text-base">
                  <FaSliders />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase leading-tight">
                    DELIVERY RATE CALCULATOR
                  </h3>

                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    Customize your parcel details to estimate delivery charges.
                  </p>
                </div>
              </div>

              {/* 1. Destination Region */}
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
                        aria-pressed={isActive}
                        className={`
                          py-3 px-2 rounded-2xl text-[10px] sm:text-[11px]
                          font-black tracking-wider uppercase
                          transition-all duration-200 cursor-pointer text-center
                          ${
                            isActive
                              ? "bg-[#0f172a] text-[#fcb915] shadow-md shadow-slate-900/10"
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

              {/* 2. Parcel Weight */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="parcel-weight"
                    className="text-[11px] font-black tracking-widest text-slate-400 uppercase"
                  >
                    PARCEL WEIGHT (KG)
                  </label>

                  <span className="text-xs font-black text-[#fcb915] bg-[#0f172a] px-2.5 py-1 rounded-full">
                    {weight} KG
                  </span>
                </div>

                <input
                  id="parcel-weight"
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#fcb915]"
                />

                <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-wider mt-1.5">
                  <span>0.5 KG</span>
                  <span>10 KG</span>
                </div>
              </div>

              {/* 3. COD Amount */}
              <div>
                <label
                  htmlFor="cod-amount"
                  className="block text-[11px] font-black tracking-widest text-slate-400 uppercase mb-2"
                >
                  CASH ON DELIVERY AMOUNT (BDT)
                </label>

                <input
                  id="cod-amount"
                  type="number"
                  min="0"
                  value={codAmount}
                  onChange={(e) => setCodAmount(e.target.value)}
                  placeholder="Enter COD amount"
                  disabled={!isCodActive}
                  className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3.5 text-sm font-black text-slate-800 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all disabled:opacity-50"
                />
              </div>

              {/* 4. COD Toggle */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    CASH ON DELIVERY (COD)
                  </h4>

                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    Enable payment collection from your customer.
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={isCodActive}
                  aria-label="Enable Cash on Delivery"
                  onClick={() => setIsCodActive((prev) => !prev)}
                  className={`
                    w-12 h-6 rounded-full p-1 shrink-0
                    transition-colors duration-200 flex items-center
                    ${
                      isCodActive
                        ? "bg-[#fcb915] justify-end"
                        : "bg-slate-300 justify-start"
                    }
                  `}
                >
                  <motion.div
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    className="w-4 h-4 rounded-full bg-white shadow-md"
                  />
                </button>
              </div>
            </div>

            {/* Right Column: Calculation Result */}
            <div className="lg:col-span-5">
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0f172a] rounded-[28px] p-6 sm:p-8 text-white shadow-2xl relative"
              >
                {/* Fee Header */}
                <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                  ESTIMATED TOTAL CHARGES
                </p>

                {/* Total Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-[#fcb915]">
                    ৳ {formatCurrency(totalEstimatedCharge)}
                  </span>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t border-slate-800 pt-5 mb-8 text-xs font-semibold text-slate-300">

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-400">
                      Base Delivery Charge:
                    </span>

                    <span className="font-bold text-white">
                      ৳ {formatCurrency(baseRate)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-400">
                      Extra Weight ({extraKg.toFixed(1)} KG):
                    </span>

                    <span className="font-bold text-white">
                      ৳ {formatCurrency(extraKgCharge)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-400">
                      COD Collection Fee ({isCodActive ? "1%" : "0%"}):
                    </span>

                    <span className="font-bold text-[#fcb915]">
                      ৳ {formatCurrency(codCharge)}
                    </span>
                  </div>

                  <div className="border-t border-slate-800 pt-3 flex items-center justify-between gap-3">
                    <span className="text-slate-300 font-black uppercase">
                      Total Estimated Charge:
                    </span>

                    <span className="font-black text-[#fcb915]">
                      ৳ {formatCurrency(totalEstimatedCharge)}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className="w-full py-4 px-6 rounded-full bg-[#fcb915] text-[#0f172a] font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/10 cursor-pointer"
                >
                  <span>REGISTER AS A MERCHANT</span>
                  <FaArrowRight className="text-xs" />
                </button>

                {/* Pricing Note */}
                <p className="text-[10px] text-center font-bold text-slate-400 tracking-wide mt-4 leading-relaxed">
                  ESTIMATED CHARGES ONLY. VAT, TAX AND ADDITIONAL SERVICE FEES
                  MAY APPLY.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
