"use client";

import { useEffect } from "react";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
          <FiAlertTriangle size={28} />
        </div>

        <h2 className="text-xl font-bold text-slate-900">
          Something went wrong!
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Something went wrong while loading this page. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <FiRefreshCw size={16} />
          Try Again
        </button>
      </div>
    </div>
  );
}