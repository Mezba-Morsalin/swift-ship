
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBox,
  FaMapMarkerAlt,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();

    if (!trackingId.trim()) {
      setError("Please enter your tracking ID.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Connect your parcel tracking API here.
      // Example: GET /api/track?trackingId=...

      setError("Tracking API is not connected yet.");
    } catch (err) {
      setError("Unable to track your parcel. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* HERO SECTION */}
      <section className="px-4 pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#fcb915] px-5 py-2 text-[11px] font-black tracking-wider text-slate-900 shadow-sm">
              <FaBox />
              PARCEL TRACKING
            </span>

            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
              TRACK YOUR
              <br />
              <span className="text-[#fcb915]">
                PARCEL ANYTIME
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              Stay updated on your delivery journey. Enter your
              tracking ID below to check your parcel&apos;s latest
              status and delivery progress.
            </p>
          </motion.div>

          {/* TRACKING FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-8"
          >
            <div className="mb-6 text-left">
              <h2 className="text-lg font-black text-slate-900 sm:text-xl">
                Track Your Shipment
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Enter your parcel tracking number to get started.
              </p>
            </div>

            <form onSubmit={handleTrack}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <FaBox className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                  <input type="text" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder="Enter your tracking ID" className="h-14 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-semibold text-slate-900 outline-none transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-[#fcb915] focus:bg-white focus:ring-4 focus:ring-amber-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-14 items-center justify-center gap-2 rounded-xl bg-[#fcb915] px-8 text-xs font-black tracking-wider text-slate-900 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FaSearch />
                  {loading ? "TRACKING..." : "TRACK PARCEL"}
                </button>
              </div>

              {error && (
                <p className="mt-3 text-left text-xs font-semibold text-red-500">
                  {error}
                </p>
              )}
            </form>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
              <FaShieldAlt className="text-emerald-500" />
              Secure and reliable parcel tracking
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRACKING BENEFITS */}
      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl">
              TRACK WITH <span className="text-[#fcb915]">CONFIDENCE</span>
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Complete visibility throughout your delivery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: FaMapMarkerAlt,
                title: "Live Tracking",
                description:
                  "Stay informed about your parcel's latest delivery location.",
              },
              {
                icon: FaTruck,
                title: "Delivery Updates",
                description:
                  "Get updates as your parcel moves through each delivery stage.",
              },
              {
                icon: FaClock,
                title: "Faster Updates",
                description:
                  "Keep track of your shipment progress without unnecessary delays.",
              },
              {
                icon: FaHeadset,
                title: "24/7 Support",
                description:
                  "Our support team is ready to help with your delivery queries.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#fcb915] hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-[#d69b00]">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="text-base font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#f8fafc] px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-12">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-[#d69b00]">
            <FaCheckCircle className="text-2xl" />
          </div>

          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            Want to Ship with SwiftShip?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Join SwiftShip and enjoy reliable parcel delivery,
            convenient pickup services and seamless shipment tracking.
          </p>

          <a
            href="/signup"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-[#fcb915] px-8 py-3.5 text-xs font-black tracking-wider text-slate-900 transition-all hover:bg-yellow-400"
          >
            BECOME A MERCHANT
          </a>
        </div>
      </section>

    </main>
  );
}
