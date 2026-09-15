"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBoxOpen,
  FaHouse,
  FaHeadphones,
} from "react-icons/fa6";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6">
      <div className="w-full max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* Top */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
                <FaBoxOpen className="text-lg text-[#fcb915]" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  SwiftShip
                </p>
                <p className="text-xs text-slate-400">
                  Logistics Management
                </p>
              </div>
            </div>

            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">
              404
            </span>
          </div>

          {/* Content */}
          <div className="py-10 text-center">
            <div className="mb-5 text-6xl font-black tracking-tight text-slate-200 sm:text-7xl">
              404
            </div>

            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Page not found
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
              The page you&apos;re looking for doesn&apos;t exist or may have been
              moved. Please check the URL or return to the dashboard.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FaHouse className="text-xs text-[#fcb915]" />
                Back to Home
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <FaArrowLeft className="text-xs" />
                Dashboard
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400">
            <FaHeadphones className="text-slate-400" />
            <span>Need help?</span>

            <Link
              href="/#support"
              className="font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Contact support
            </Link>
          </div>
        </motion.div>

        <p className="mt-5 text-center text-[11px] font-medium text-slate-400">
          SwiftShip Logistics
        </p>
      </div>
    </main>
  );
};

export default NotFound;