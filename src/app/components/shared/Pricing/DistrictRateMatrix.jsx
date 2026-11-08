
"use client";

import { motion } from "framer-motion";

const matrixData = [
  {
    id: "dhaka-metro",
    region: "Dhaka Metropolitan Area",
    coverage: "Dhaka City Corporation areas",
    sameDay: "৳ 60",
    nextDay: "৳ 60",
    extraKg: "৳ 15",
    codFee: "1%",
    sameDayAvailable: true,
  },
  {
    id: "dhaka-suburbs",
    region: "Dhaka Suburban Areas",
    coverage: "Savar, Gazipur, Narayanganj and nearby areas",
    sameDay: "৳ 80",
    nextDay: "৳ 80",
    extraKg: "৳ 20",
    codFee: "1%",
    sameDayAvailable: true,
  },
  {
    id: "divisional-cities",
    region: "Major Divisional Cities",
    coverage: "Chattogram, Sylhet, Rajshahi and other divisional cities",
    sameDay: "—",
    nextDay: "৳ 100",
    extraKg: "৳ 25",
    codFee: "1%",
    sameDayAvailable: false,
  },
  {
    id: "district-upazila",
    region: "Districts & Upazila Areas",
    coverage: "Other supported districts and upazila locations",
    sameDay: "—",
    nextDay: "৳ 130",
    extraKg: "৳ 30",
    codFee: "1%",
    sameDayAvailable: false,
  },
];

export default function DistrictRateMatrix() {
  return (
    <section className="w-full bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#fcb915]" />
            Transparent Pricing
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            DELIVERY RATE MATRIX
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2 max-w-xl mx-auto leading-relaxed">
            Explore our estimated parcel delivery charges across different
            regions of Bangladesh.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-[24px] border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">

              {/* Table Header */}
              <thead>
                <tr className="bg-[#0f172a] text-white text-[10px] sm:text-xs font-black tracking-widest uppercase">
                  <th className="py-5 px-6">
                    DELIVERY REGION
                  </th>

                  <th className="py-5 px-6 text-center">
                    SAME-DAY
                  </th>

                  <th className="py-5 px-6 text-center">
                    STANDARD
                  </th>

                  <th className="py-5 px-6 text-center">
                    EXTRA / KG
                  </th>

                  <th className="py-5 px-6 text-center">
                    COD FEE
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">

                {matrixData.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="hover:bg-slate-50/80 transition-colors duration-200"
                  >

                    {/* Region */}
                    <td className="py-5 px-6">
                      <p className="font-black text-slate-900">
                        {row.region}
                      </p>

                      <p className="text-[10px] text-slate-400 font-medium mt-1 max-w-[240px] leading-relaxed">
                        {row.coverage}
                      </p>
                    </td>

                    {/* Same Day */}
                    <td className="py-5 px-6 text-center">
                      {row.sameDayAvailable ? (
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-black text-xs">
                          {row.sameDay}
                        </span>
                      ) : (
                        <span className="text-slate-400 font-bold">
                          {row.sameDay}
                        </span>
                      )}
                    </td>

                    {/* Standard */}
                    <td className="py-5 px-6 text-center">
                      <span className="font-black text-slate-800">
                        {row.nextDay}
                      </span>
                    </td>

                    {/* Extra Weight */}
                    <td className="py-5 px-6 text-center">
                      <span className="font-bold text-slate-700">
                        {row.extraKg}
                      </span>
                    </td>

                    {/* COD Fee */}
                    <td className="py-5 px-6 text-center">
                      <span className="font-black text-slate-700">
                        {row.codFee}
                      </span>
                    </td>

                  </motion.tr>
                ))}

              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-5 sm:px-6 py-4 bg-slate-50 border-t border-slate-100">
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-relaxed">
              <span className="font-black text-slate-700">Note:</span>{" "}
              Rates are indicative and subject to service availability.
              Additional VAT, taxes, or applicable charges may apply.
              Delivery timelines depend on destination and operational conditions.
            </p>
          </div>
        </motion.div>

        {/* Bottom Information */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Pricing calculated based on parcel weight and destination
          </p>

          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Updated Rate Information
          </span>
        </div>

      </div>
    </section>
  );
}
