"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const matrixData = [
  {
    region: "Dhaka City Metro",
    sameDay: "৳ 90",
    nextDay: "৳ 60",
    extraKg: "৳ 15",
    codFee: "0%",
  },
  {
    region: "Dhaka Suburbs (Savar, Gazipur, Narayanganj)",
    sameDay: "৳ 110",
    nextDay: "৳ 80",
    extraKg: "৳ 20",
    codFee: "0%",
  },
  {
    region: "Divisional Cities (Chattogram, Sylhet, Rajshahi)",
    sameDay: "N/A",
    nextDay: "৳ 110",
    extraKg: "৳ 25",
    codFee: "0%",
  },
  {
    region: "Upazila & Rural Sub-Districts (All 64 Districts)",
    sameDay: "N/A",
    nextDay: "৳ 130",
    extraKg: "৳ 30",
    codFee: "0%",
  },
];

export default function DistrictRateMatrix() {
  const [mounted, setMounted] = useState(false);

  // Prevent Framer Motion SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            DISTRICT ZONE RATE MATRIX
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5">
            Standard shipping charges for online retailers across Bangladesh.
          </p>
        </div>

        {/* Table Container */}
        <motion.div initial={mounted ? { opacity: 0, y: 15 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-white rounded-[24px] border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              {/* Dark Header */}
              <thead>
                <tr className="bg-[#0f172a] text-white text-[10px] sm:text-xs font-black tracking-widest uppercase">
                  <th className="py-4 px-6">DELIVERY COVERAGE REGION</th>
                  <th className="py-4 px-6 text-center">SAME-DAY EXPRESS</th>
                  <th className="py-4 px-6 text-center">NEXT-DAY STANDARD</th>
                  <th className="py-4 px-6 text-center">EXTRA PER KG</th>
                  <th className="py-4 px-6 text-center">COD FEE</th>
                </tr>
              </thead>

              {/* Table Rows */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-bold text-slate-800">
                {matrixData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors duration-150"
                  >
                    {/* Region */}
                    <td className="py-5 px-6 font-bold text-slate-900">
                      {row.region}
                    </td>

                    {/* Same-Day Express */}
                    <td className="py-5 px-6 text-center">
                      <span
                        className={
                          row.sameDay === "N/A"
                            ? "text-amber-500 font-black"
                            : "text-[#fcb915] font-black text-sm"
                        }
                      >
                        {row.sameDay}
                      </span>
                    </td>

                    {/* Next-Day Standard */}
                    <td className="py-5 px-6 text-center text-slate-700 font-bold">
                      {row.nextDay}
                    </td>

                    {/* Extra Per KG */}
                    <td className="py-5 px-6 text-center text-slate-700 font-bold">
                      {row.extraKg}
                    </td>

                    {/* COD Fee */}
                    <td className="py-5 px-6 text-center font-black text-emerald-600">
                      {row.codFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}