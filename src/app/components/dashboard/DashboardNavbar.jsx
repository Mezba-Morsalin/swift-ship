"use client";

import Link from "next/link";
import { FaBars, FaBell, FaBoxesPacking, FaArrowRightFromBracket } from "react-icons/fa6";

export default function DashboardNavbar({ onToggleMenu }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0f172a] text-white border-b border-slate-800 z-40 px-4 sm:px-6 flex items-center justify-between">
      {/* Left: Mobile Menu Toggle & Brand Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMenu}
          className="lg:hidden text-slate-300 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle Sidebar Menu"
        >
          <FaBars className="text-lg" />
        </button>

        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#fcb915] text-[#0f172a] flex items-center justify-center font-black text-lg shadow-md">
            <FaBoxesPacking />
          </div>
          <span className="font-black text-lg tracking-tight uppercase text-white hidden sm:inline-block">
            SWIFTSHIP <span className="text-[#fcb915]">OPS</span>
          </span>
        </Link>
      </div>

      {/* Right: Notifications & Profile Summary */}
      <div className="flex items-center gap-3">
        {/* Notification Bell Badge */}
        <button className="relative p-2.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
          <FaBell className="text-sm" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#fcb915] border-2 border-[#0f172a]" />
        </button>

        {/* User Quick Badge */}
        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="text-right">
            <p className="text-xs font-black text-white leading-tight">AURA FASHION</p>
            <p className="text-[10px] font-bold text-[#fcb915] tracking-wider uppercase">VERIFIED MERCHANT</p>
          </div>
          <button className="p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors cursor-pointer" title="Logout">
            <FaArrowRightFromBracket className="text-xs" />
          </button>
        </div>
      </div>
    </header>
  );
}