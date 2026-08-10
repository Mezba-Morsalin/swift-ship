"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCircleCheck, FaArrowRight } from "react-icons/fa6";

const plans = [
  {
    name: "STANDARD MERCHANT",
    volume: "1 - 100 Parcels / Month",
    dhakaRate: "৳ 60",
    outsideRate: "৳ 110",
    codCommission: "0%",
    recommended: false,
    features: [
      "Free doorstep parcel pickup",
      "SMS & live map tracking link for buyer",
      "Instant merchant portal dashboard",
      "Standard e-commerce integrations",
    ],
  },
  {
    name: "GROWTH ENTERPRISE",
    volume: "101 - 1,000 Parcels / Month",
    dhakaRate: "৳ 50",
    outsideRate: "৳ 95",
    codCommission: "0%",
    recommended: true,
    badgeText: "RECOMMENDED FOR ACTIVE BRANDS",
    features: [
      "Dedicated Key Account Manager",
      "Priority express sorting & dispatch",
      "Custom branded SMS notifications",
      "API & Shopify/WooCommerce auto-sync",
      "Free bubble wrap & packaging materials",
    ],
  },
  {
    name: "CORPORATE FLEET",
    volume: "1,000+ Parcels / Month",
    dhakaRate: "Custom Bulk Rate",
    outsideRate: "Custom Linehaul Rate",
    codCommission: "0%",
    recommended: false,
    features: [
      "Dedicated warehouse & fulfillment staging",
      "Custom API webhooks & custom SLAs",
      "On-site merchant rider allocation",
      "Multi-user warehouse dispatch controls",
      "SLA breach money-back guarantee",
    ],
  },
];

export default function MerchantVolumePlans() {
  const [mounted, setMounted] = useState(false);

  // Prevent SSR hydration mismatch for Framer Motion
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full bg-slate-50/50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            MERCHANT VOLUME PLANS
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5">
            Specialized perks tailored for your monthly parcel volume.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan, index) => {
            const isDark = plan.recommended;

            return (
              <motion.div
                key={plan.name}
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  relative rounded-[32px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300
                  ${
                    isDark
                      ? "bg-[#0f172a] text-white shadow-2xl shadow-slate-900/20 lg:-translate-y-3 border border-slate-800"
                      : "bg-white text-slate-900 border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1"
                  }
                `}
              >
                {/* Recommended Top Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fcb915] text-[#0f172a] text-[10px] sm:text-[11px] font-black tracking-wider uppercase px-5 py-1.5 rounded-full shadow-md whitespace-nowrap text-center">
                    {plan.badgeText}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="mb-6">
                    <h3
                      className={`text-lg sm:text-xl font-black tracking-tight uppercase ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-xs font-black text-[#fcb915] uppercase tracking-wide mt-1">
                      {plan.volume}
                    </p>
                  </div>

                  {/* Rates Breakdown */}
                  <div
                    className={`space-y-3 pb-6 mb-6 border-b text-xs ${
                      isDark ? "border-slate-800/80" : "border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={isDark ? "text-slate-400" : "text-slate-500 font-medium"}>
                        Dhaka Metro Rate:
                      </span>
                      <span className="font-black text-sm">{plan.dhakaRate}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={isDark ? "text-slate-400" : "text-slate-500 font-medium"}>
                        Outside Dhaka Rate:
                      </span>
                      <span className="font-black text-sm">{plan.outsideRate}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={isDark ? "text-slate-400" : "text-slate-500 font-medium"}>
                        COD Commission:
                      </span>
                      <span className="font-black text-emerald-500 text-sm">{plan.codCommission}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 text-xs font-medium">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <FaCircleCheck
                          className={`text-sm shrink-0 mt-0.5 ${
                            isDark ? "text-[#fcb915]" : "text-[#fcb915]"
                          }`}
                        />
                        <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <button
                  type="button"
                  className={`
                    w-full py-3.5 px-6 rounded-full font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer
                    ${
                      isDark
                        ? "bg-[#fcb915] text-[#0f172a] hover:bg-yellow-400 shadow-lg shadow-yellow-500/10"
                        : "bg-[#0f172a] text-white hover:bg-slate-800"
                    }
                  `}
                >
                  <span>SELECT PLAN</span>
                  <FaArrowRight className="text-xs" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}