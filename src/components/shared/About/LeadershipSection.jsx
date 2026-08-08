"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "SHARIF AHMED",
    role: "CHIEF EXECUTIVE OFFICER & CO-FOUNDER",
    bio: "Former senior supply chain director with 15+ years in logistics automation and express linehaul networks across South Asia.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "NUSRAT JAHAN",
    role: "CHIEF TECHNOLOGY OFFICER",
    bio: "Ex-Silicon Valley engineering leader specializing in real-time GPS fleet routing algorithms and automated warehouse sorting systems.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "KAZI MAHBUB",
    role: "HEAD OF NATIONWIDE HUB OPERATIONS",
    bio: "Oversees 450+ district sorting hubs, 3,500+ courier riders, and nationwide covered linehaul transport fleets.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  },
];

export default function LeadershipSection() {
  return (
    <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight uppercase"
          >
            EXECUTIVE LEADERSHIP
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-slate-500 font-medium"
          >
            The visionaries steering SwiftShip&apos;s nationwide operations.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Profile Image */}
              <div className="relative w-20 h-20 sm:w-[88px] sm:h-[88px] mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-sm shrink-0">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="88px"
                />
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase">
                {leader.name}
              </h3>

              {/* Role */}
              <p className="text-[11px] sm:text-xs font-black text-[#ffb703] tracking-wide uppercase mt-1 mb-4">
                {leader.role}
              </p>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}