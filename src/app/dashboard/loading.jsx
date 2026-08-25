"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center bg-[#f8fafc]">
      <div className="flex flex-col items-center justify-center">

        {/* Loader */}
        <ClipLoader
          color="#fcb915"
          size={48}
          speedMultiplier={0.9}
        />

        {/* Brand */}
        <div className="mt-5 flex items-center gap-1">
          <span className="text-sm font-black tracking-tight text-[#111827]">
            SWIFT
          </span>

          <span className="text-sm font-black tracking-tight text-[#f59e0b]">
            SHIP
          </span>
        </div>

        <p className="mt-1 text-[11px] font-medium text-slate-400">
          Loading dashboard...
        </p>

      </div>
    </div>
  );
}