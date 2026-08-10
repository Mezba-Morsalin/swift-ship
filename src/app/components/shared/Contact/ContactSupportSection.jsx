"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaPhoneVolume,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

export default function ContactSupportSection() {
  const [mounted, setMounted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Merchant Doorstep Pickup",
    message: "",
  });

  // Prevent Framer Motion & state hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support Form Submitted:", formData);
  };

  return (
    <section className="w-full bg-slate-50/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Message Form Card */}
          <motion.div initial={mounted ? { opacity: 0, x: -20 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/40"
          >
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                SEND US A DIRECT MESSAGE
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                We respond to all merchant inquiries within 15 minutes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Your Name */}
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-slate-700 uppercase mb-2">
                    YOUR NAME *
                  </label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Asif Mahmud"
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-slate-700 uppercase mb-2">
                    PHONE NUMBER *
                  </label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="01700-000000" className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-slate-700 uppercase mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all"
                  />
                </div>

                {/* Query Subject */}
                <div>
                  <label className="block text-[10px] font-black tracking-widest text-slate-700 uppercase mb-2">
                    QUERY SUBJECT
                  </label>
                  <select name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Merchant Doorstep Pickup">
                      Merchant Doorstep Pickup
                    </option>
                    <option value="COD Wallet & Payouts">
                      COD Wallet & Payouts
                    </option>
                    <option value="API & E-Commerce Sync">
                      API & E-Commerce Sync
                    </option>
                    <option value="Bulk Corporate Accounts">
                      Bulk Corporate Accounts
                    </option>
                  </select>
                </div>
              </div>

              {/* Your Message */}
              <div>
                <label className="block text-[10px] font-black tracking-widest text-slate-700 uppercase mb-2">
                  YOUR MESSAGE / DETAILS *
                </label>
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder="Describe your parcel or merchant account inquiry..." className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#fcb915] focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-full bg-[#0f172a] text-white font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg cursor-pointer"
              >
                <FaPaperPlane className="text-[#fcb915] text-xs" />
                <span>SEND SUPPORT MESSAGE</span>
              </button>
            </form>
          </motion.div>

          {/* Right Column: Direct Channels & SLA Timings */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dark Hotline Card */}
            <motion.div initial={mounted ? { opacity: 0, x: 20 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="bg-[#0f172a] rounded-[28px] p-6 sm:p-8 text-white shadow-xl relative"
            >
              <h4 className="text-sm font-black tracking-wider text-[#fcb915] uppercase mb-6">
                DIRECT HOTLINE CHANNELS
              </h4>

              <div className="space-y-6">
                {/* Channel 1: Hotline */}
                <div className="flex items-start gap-4">
                  <div className="text-[#fcb915] text-xl mt-0.5 shrink-0">
                    <FaPhoneVolume />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-white tracking-wide">
                      Customer Hotline (24/7)
                    </h5>
                    <p className="text-xs font-bold text-slate-300 mt-0.5">
                      +880 9612-889900{" "}
                      <span className="text-[10px] text-slate-400 font-medium">
                        (Toll Free)
                      </span>
                    </p>
                  </div>
                </div>

                {/* Channel 2: WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="text-[#fcb915] text-xl mt-0.5 shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-white tracking-wide">
                      WhatsApp Merchant Desk
                    </h5>
                    <p className="text-xs font-bold text-slate-300 mt-0.5">
                      +880 1700-112233
                    </p>
                  </div>
                </div>

                {/* Channel 3: Email */}
                <div className="flex items-start gap-4">
                  <div className="text-[#fcb915] text-xl mt-0.5 shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-white tracking-wide">
                      Official Email
                    </h5>
                    <p className="text-xs font-bold text-slate-300 mt-0.5">
                      support@swiftship.com.bd
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SLA Timings Alert Card */}
            <motion.div initial={mounted ? { opacity: 0, y: 15 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="bg-[#fffdf0] border border-[#fde68a] rounded-[24px] p-6"
            >
              <div className="flex items-center gap-2 text-[#d97706] mb-3">
                <FaClock className="text-base shrink-0" />
                <h5 className="text-xs font-black tracking-wider uppercase">
                  DISPATCH SLA TIMINGS
                </h5>
              </div>

              <div className="space-y-1.5 text-xs text-slate-800 font-bold">
                <p>
                  <span className="text-slate-600 font-medium">
                    Same-Day Pickup Cutoff:
                  </span>{" "}
                  12:00 PM
                </p>
                <p>
                  <span className="text-slate-600 font-medium">
                    COD Payout Dispatched:
                  </span>{" "}
                  6:00 PM Daily
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}