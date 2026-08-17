"use client";

import Image from "next/image";
import {
  FaPhone,
  FaLocationDot,
  FaClockRotateLeft,
  FaCircleCheck,
  FaTruckFast,
  FaBoxesPacking,
  FaWallet,
  FaUser,
  FaPowerOff,
  FaMoneyBillWave,
  FaCheck,
} from "react-icons/fa6";

export default function RiderDashboard({user}) {
  return (
    <div className="space-y-6 text-slate-100 font-sans">
      {/* 1. TOP RIDER PROFILE BANNER */}
      <div className="bg-slate-100 border shadow rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-emerald-500 shrink-0">
            <Image
              src={user.image}
              alt="Rider Portrait"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#131927] rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
  className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black tracking-wider uppercase ${
    user?.status === "pending"
      ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
      : user?.status === "verified"
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : user?.status === "suspended"
      ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
      : "bg-slate-500/10 text-slate-400 border-slate-500/20"
  }`}
>
  Status : {user?.status || "unknown"}
</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                RIDER id : {user.id}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl text-slate-900 font-black tracking-tight mt-1">
              {user.name}
            </h1>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
              <FaLocationDot className="text-[#fcb915] text-xs shrink-0" />
              <span>Assigned Hub : {user.location}</span>
            </p>
          </div>
        </div>

        {/* Status Toggle Button */}
        <button
  disabled={user?.status !== "verified"}
  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shrink-0 ${
    user?.status === "verified"
      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20"
      : user?.status === "pending"
      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 cursor-not-allowed shadow-none"
      : user?.status === "suspended"
      ? "bg-rose-500/10 text-rose-400 border border-rose-500/20 cursor-not-allowed shadow-none"
      : "bg-slate-500/10 text-slate-400 border border-slate-500/20 cursor-not-allowed shadow-none"
  }`}
>
  <FaPowerOff className="text-sm" />

  <span>
    {user?.status === "verified"
      ? "ON DUTY (ONLINE)"
      : user?.status === "pending"
      ? "PENDING APPROVAL"
      : user?.status === "suspended"
      ? "ACCOUNT SUSPENDED"
      : "UNAVAILABLE"}
  </span>
</button>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

  {/* ==================================================
      TODAY'S ASSIGNED PARCELS
  ================================================== */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

    {/* Decorative */}
    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#fcb915]/10 transition-transform duration-300 group-hover:scale-125" />

    <div className="relative flex h-full flex-col justify-between">

      <div>
        <div className="mb-4 flex items-center justify-between">

          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
            TODAY&apos;S ASSIGNED
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fcb915]/10 text-[#d99b00]">
            <FaBoxesPacking className="text-sm" />
          </div>

        </div>

        <div className="flex items-end gap-2">
          <h3 className="text-3xl font-black tracking-tight text-slate-900">
            4
          </h3>

          <span className="mb-1 text-xs font-bold text-slate-400">
            Consignments
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">

        <span className="h-2 w-2 rounded-full bg-[#fcb915]" />

        <span className="text-xs font-bold text-slate-500">
          4 Pending Doorsteps
        </span>

      </div>

    </div>
  </div>


  {/* ==================================================
      COMPLETED TODAY
  ================================================== */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-500/10 transition-transform duration-300 group-hover:scale-125" />

    <div className="relative flex h-full flex-col justify-between">

      <div>
        <div className="mb-4 flex items-center justify-between">

          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600">
            COMPLETED TODAY
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
            <FaCheck className="text-sm" />
          </div>

        </div>

        <div className="flex items-end gap-2">
          <h3 className="text-3xl font-black tracking-tight text-emerald-500">
            0
          </h3>

          <span className="mb-1 text-xs font-bold text-slate-400">
            Deliveries
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">

        <span className="h-2 w-2 rounded-full bg-emerald-500" />

        <span className="text-xs font-bold text-slate-500">
          100% OTP verified
        </span>

      </div>

    </div>
  </div>


  {/* ==================================================
      COD CASH IN HAND
  ================================================== */}
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#fcb915]/10 transition-transform duration-300 group-hover:scale-125" />

    <div className="relative flex h-full flex-col justify-between">

      <div>
        <div className="mb-4 flex items-center justify-between">

          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#c58b00]">
            COD CASH IN HAND
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fcb915]/10 text-[#d99b00]">
            <FaWallet className="text-sm" />
          </div>

        </div>

        <div className="flex items-end gap-2">
          <h3 className="text-3xl font-black tracking-tight text-slate-900">
            ৳ 0
          </h3>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">

        <span className="h-2 w-2 rounded-full bg-slate-300" />

        <span className="text-xs font-bold text-slate-500">
          Pending Hub Deposit
        </span>

      </div>

    </div>
  </div>


  {/* ==================================================
      RIDER EARNINGS TODAY
  ================================================== */}
  <div className="group relative overflow-hidden rounded-2xl bg-[#fcb915] p-5 text-slate-950 shadow-lg shadow-amber-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

    {/* Decorative */}
    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-125" />

    <div className="relative flex h-full flex-col justify-between">

      <div>
        <div className="mb-4 flex items-center justify-between">

          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-900/70">
            RIDER EARNINGS
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950/10">
            <FaMoneyBillWave className="text-sm" />
          </div>

        </div>

        <div className="flex items-end gap-2">

          <h3 className="text-3xl font-black tracking-tight">
            ৳ 410
          </h3>

          <span className="mb-1 text-xs font-black text-slate-900/60">
            TODAY
          </span>

        </div>
      </div>

      <div className="mt-5 border-t border-slate-900/10 pt-4">

        <span className="text-[11px] font-bold text-slate-900/70">
          Per parcel commission + ৳410 bonus
        </span>

      </div>

    </div>
  </div>

</div>


      {/* 4. ACTIVE DELIVERY TASKS HEADER */}
      <div>
        <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase">
          ACTIVE DELIVERY TASKS
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Verify recipient doorstep delivery with 4-digit SMS OTP.
        </p>
      </div>

      {/* 5. DELIVERY TASK CARD */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] space-y-5">

  {/* ==================================================
      TASK HEADER
  ================================================== */}
  <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">

    {/* Left */}
    <div className="flex flex-wrap items-center gap-2.5">

      <span className="text-sm font-black tracking-wider text-[#111827]">
        SWIFT-89421
      </span>

      <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">
        Dhaka Metropolitan
      </span>

      <span className="text-xs text-slate-500">
        Merchant:{" "}
        <strong className="font-bold text-slate-800">
          Aura Fashion House Ltd.
        </strong>
      </span>

    </div>

    {/* Right */}
    <div className="flex flex-wrap items-center gap-3">

      <span className="text-xs text-slate-400">
        Est:{" "}
        <strong className="font-bold text-slate-700">
          Today by 04:30 PM
        </strong>
      </span>

      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-amber-600">
        OUT FOR DELIVERY
      </span>

    </div>
  </div>


  {/* ==================================================
      TASK INFORMATION
  ================================================== */}
  <div className="grid grid-cols-1 gap-5 text-xs md:grid-cols-3">

    {/* Recipient */}
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 space-y-2">

      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
        RECIPIENT INFORMATION
      </span>

      <div>
        <p className="text-sm font-black text-slate-900">
          Tanvir Hossain
        </p>

        <p className="mt-1 font-mono text-xs text-slate-500">
          +880 1712-984321
        </p>
      </div>

    </div>


    {/* Address */}
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 space-y-2">

      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
        DOORSTEP ADDRESS
      </span>

      <p className="font-medium leading-relaxed text-slate-700">
        House 14, Road 5, Block B, Gulshan-2, Dhaka
      </p>

      <div className="rounded-lg border border-amber-100 bg-amber-50/70 px-3 py-2">
        <p className="text-[11px] font-medium italic leading-relaxed text-amber-700">
          Note: Please ring bell #2B. Recipient is available after 2 PM.
        </p>
      </div>

    </div>


    {/* COD */}
    <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4 space-y-2 md:text-right">

      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
        COD CASH TO COLLECT
      </span>

      <p className="text-2xl font-black text-[#111827]">
        ৳ 2,450
      </p>

      <div className="flex items-center gap-2 md:justify-end">
        <span className="h-1 w-1 rounded-full bg-slate-300" />
        <p className="text-[10px] font-semibold text-slate-400">
          Weight: 1.2 kg
        </p>
      </div>

    </div>

  </div>


  {/* ==================================================
      ACTION FOOTER
  ================================================== */}
  <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 lg:flex-row lg:items-center lg:justify-between">

    {/* Left Actions */}
    <div className="flex flex-wrap items-center gap-2">

      {/* Call Buyer */}
      <a
        href="tel:+8801712984321"
        className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-100 transition-all duration-200 hover:bg-emerald-100 hover:ring-emerald-200"
      >
        <FaPhone className="text-xs" />
        <span>CALL BUYER</span>
      </a>


      {/* GPS Route */}
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-blue-600 ring-1 ring-blue-100 transition-all duration-200 hover:bg-blue-100 hover:ring-blue-200"
      >
        <FaLocationDot className="text-xs" />
        <span>GPS ROUTE</span>
      </button>


      {/* Timeline */}
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-slate-600 ring-1 ring-slate-200 transition-all duration-200 hover:bg-slate-200"
      >
        <FaClockRotateLeft className="text-xs" />
        <span>TIMELINE</span>
      </button>

    </div>


    {/* Right Actions */}
    <div className="flex flex-wrap items-center gap-2">

      {/* Reschedule */}
      <button
        type="button"
        className="rounded-xl bg-rose-50 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-rose-500 ring-1 ring-rose-100 transition-all duration-200 hover:bg-rose-100 hover:ring-rose-200"
      >
        RESCHEDULE
      </button>


      {/* Handover */}
      <button
        type="button"
        className="flex items-center gap-2 rounded-xl bg-[#fcb915] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#111827] shadow-[0_5px_15px_rgba(252,185,21,0.25)] transition-all duration-200 hover:bg-[#f5b20d] hover:shadow-[0_7px_20px_rgba(252,185,21,0.30)]"
      >
        <FaCircleCheck className="text-sm" />
        <span>HANDOVER & OTP</span>
      </button>

    </div>

  </div>

</div>
    </div>
  );
}