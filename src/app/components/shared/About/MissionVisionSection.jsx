"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBullseye, FaChartLine, FaLeaf } from "react-icons/fa6";

const tabData = [
  {
    id: "mission",
    label: "OUR CORE MISSION",
    icon: FaBullseye,
    title: "EMPOWERING SMALL & MEDIUM ENTERPRISES",
    description:
      "To provide every e-commerce merchant in Bangladesh—from Facebook f-commerce boutiques to multinational brands—with reliable next-day delivery, guaranteed 0% COD surcharge, and automated 24-hour daily cash settlements.",
  },
  {
    id: "vision",
    label: "STRATEGIC VISION 2030",
    icon: FaChartLine,
    title: "LEADING LOGISTICS INNOVATION",
    description:
      "To build the most technologically advanced and deeply integrated delivery ecosystem across South Asia, empowering 100,000+ businesses with automated AI route planning and instant fulfillment.",
  },
  {
    id: "sustainability",
    label: "E-MOBILITY & SUSTAINABILITY",
    icon: FaLeaf,
    title: "GREEN DELIVERIES FOR A BETTER TOMORROW",
    description:
      "Transitioning our last-mile fleet to 100% electric vehicles by 2028 and using eco-friendly biodegradable packaging to eliminate urban carbon emissions across major metro hubs.",
  },
];

export default function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const currentTab =
    tabData.find((tab) => tab.id === activeTab) || tabData[0];

  const IconComponent = currentTab.icon;

  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Outer Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[36px] p-8 sm:p-12 md:p-16 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">

          {/* Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-12">
            {tabData.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-full text-[11px] sm:text-xs font-black tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0f172a] text-[#fcb915] shadow-md shadow-slate-900/10 scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#fcb915] hover:text-[#fcb915]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={currentTab.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="max-w-3xl mx-auto flex flex-col items-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#fcb915] flex items-center justify-center text-[#fcb915] text-2xl sm:text-3xl mb-6 bg-white shadow-sm">
                <IconComponent />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase mb-4">
                {currentTab.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                {currentTab.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}