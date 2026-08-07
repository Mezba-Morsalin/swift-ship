"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle, FaStore } from "react-icons/fa";

const testimonials = [
  {
    rating: 5,
    volume: "4,500+ PARCELS/MO",
    quote:
      '"SwiftShip transformed our e-commerce business! Our return rate dropped by 38% because of their ultra-fast next-day delivery and automated customer SMS tracking alerts."',
    author: "ANIKA RAHMAN",
    role: "FOUNDER & CEO",
    company: "Velvet Threads Fashion",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    rating: 5,
    volume: "12,000+ PARCELS/MO",
    quote:
      '"The 24-hour COD payout is a game changer for cash flow. Previously we waited 5 days with other services. With SwiftShip, money hits our bank account next morning."',
    author: "MAHMUDUL HASAN",
    role: "OPERATIONS DIRECTOR",
    company: "ElectroBD Superstore",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    rating: 5,
    volume: "2,800+ PARCELS/MO",
    quote:
      '"Delivering fresh organic items requires temperature care and zero delays. SwiftShip fragile-care fleet handles our glass containers with 100% safety record."',
    author: "FARHANA CHOWDHURY",
    role: "CO-FOUNDER",
    company: "Organic Harvest BD",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MerchantVoices() {
  return (
    <section className="w-full bg-slate-50/50  py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="mb-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            MERCHANT VOICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight mb-4">
            LOVED BY BANGLADESH’S{" "}
            <span className="text-[#ffb703]">TOP BRANDS</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Discover how thousands of e-commerce founders and enterprise leaders scale faster with SwiftShip&apos;s guaranteed COD payouts and express logistics.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-amber-200/60 transition-all duration-300"
            >
              <div>
                {/* Top Badge & Rating Row */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  {/* Star Rating */}
                  <div className="flex text-[#ffb703] text-sm gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Parcel Volume Badge */}
                  <span className="bg-[#fef3c7] text-[#d97706] text-[9px] sm:text-[10px] font-black tracking-wider px-3 py-1 rounded-full uppercase">
                    {item.volume}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-xs sm:text-sm italic font-medium leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                {/* Avatar with Verified Badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border border-slate-200">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <FaCheckCircle className="text-[#ffb703] text-sm bg-white rounded-full absolute -bottom-0.5 -right-0.5" />
                </div>

                {/* Name & Title */}
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight uppercase">
                    {item.author}
                  </h4>
                  <span className="text-[10px] font-bold text-[#ffb703] tracking-wide uppercase mt-0.5">
                    {item.role}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 mt-0.5">
                    <FaStore className="text-[10px]" />
                    <span>{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}