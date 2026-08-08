"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2021",
    title: "FOUNDED IN DHAKA",
    description:
      "Launched with 5 sorting hubs in Dhaka Metro with a goal to revolutionize e-commerce logistics.",

  },
  {
    year: "2022",
    title: "AUTOMATED HUB SORTING",
    description:
      "Introduced high-speed barcode scanning & automated sorting hubs in Dhaka and Chattogram.",

  },
  {
    year: "2023",
    title: "64 DISTRICT COVERAGE",
    description:
      "Expanded doorstep pickup and delivery across all 64 districts and 492 upazilas in Bangladesh.",

  },
  {
    year: "2024",
    title: "SAME-DAY EXPRESS LINEHAUL",
    description:
      "Launched 6-hour intra-city express delivery & daily 6 PM automated COD payout engine.",

  },
  {
    year: "2025",
    title: "50,000+ ACTIVE SELLERS",
    description:
      "Became the fastest-growing logistics network handling 1,500,000+ parcels every month.",

  },
];

export default function MilestonesSection() {
  return (
    <section className="w-full bg-slate-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="inline-block"
          >
            <span className=" inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              OUR JOURNEY
            </span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight uppercase"
          >
            MILESTONES OF INNOVATION
          </motion.h2>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {milestones.map((item, index) => (
            <motion.div key={item.year} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className={` relative bg-white rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl
                ${
                  item.highlighted
                    ? "border-2 border-[#ffb703] shadow-lg shadow-[#ffb703]/10"
                    : "border border-slate-100 shadow-sm hover:-translate-y-1"
                }
              `}
            >
              <div className="space-y-3">
                {/* Year */}
                <span className="text-2xl sm:text-3xl font-black text-[#ffb703] block">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-snug uppercase min-h-[2rem]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed font-medium pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}