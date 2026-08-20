"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaWallet,
  FaBuildingColumns,
  FaReceipt,
  FaCircleCheck,
  FaClock,
  FaArrowUpFromBracket,
  FaPowerOff,
  FaLocationDot,
} from "react-icons/fa6";

const depositHistory = [
  {
    id: "DEP-90421",
    date: "15 Aug, 2026 • 06:30 PM",
    amount: "৳ 12,450",
    method: "Gulshan Hub Desk",
    status: "APPROVED",
  },
  {
    id: "DEP-88310",
    date: "14 Aug, 2026 • 07:15 PM",
    amount: "৳ 18,900",
    method: "Bkash Merchant Pay",
    status: "APPROVED",
  },
];

export default function Deposit({user}) {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositMethod, setDepositMethod] = useState("hub");

  return (
    <div className="space-y-6">
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
        <div className="space-y-6 font-sans">

  {/* ==================================================
      PAGE TITLE
  ================================================== */}
  <div>
    <h1 className="text-xl font-black uppercase tracking-wider text-slate-900">
      COD CASH DEPOSIT & CLEARANCE
    </h1>

    <p className="mt-1 text-xs font-medium text-slate-400">
      Deposit collected cash on delivery to central hub or official digital channels.
    </p>
  </div>


  {/* ==================================================
      CASH OVERVIEW
  ================================================== */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

    {/* Cash In Hand */}
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">

      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
          CURRENT CASH IN HAND
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-[#fcb915]">
          <FaWallet className="text-sm" />
        </div>
      </div>

      <h2 className="mt-3 text-3xl font-black text-slate-900">
        ৳ 8,450
      </h2>

      <span className="mt-2 text-[11px] font-bold text-slate-400">
        From 3 delivered orders today
      </span>

    </div>


    {/* Pending Verification */}
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">

      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-black uppercase tracking-wider text-amber-600">
          PENDING HUB VERIFICATION
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
          <FaClock className="text-sm" />
        </div>
      </div>

      <h2 className="mt-3 text-3xl font-black text-amber-600">
        ৳ 0
      </h2>

      <span className="mt-2 text-[11px] font-bold text-slate-400">
        0 active deposit requests
      </span>

    </div>


    {/* Cleared This Week */}
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)]">

      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">
          CLEARED THIS WEEK
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
          <FaCircleCheck className="text-sm" />
        </div>
      </div>

      <h2 className="mt-3 text-3xl font-black text-emerald-600">
        ৳ 45,800
      </h2>

      <span className="mt-2 text-[11px] font-bold text-slate-400">
        100% verified settlement
      </span>

    </div>

  </div>


  {/* ==================================================
      FORM + RECENT CLEARANCES
  ================================================== */}
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">

    {/* ==================================================
        DEPOSIT REQUEST FORM
    ================================================== */}
    <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:col-span-3">

      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-[#fcb915]">
          <FaWallet className="text-sm" />
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
            INITIATE DEPOSIT REQUEST
          </h3>

          <p className="mt-0.5 text-[10px] font-medium text-slate-400">
            Submit your collected COD amount for clearance.
          </p>
        </div>

      </div>


      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-5"
      >

        {/* ==================================================
            PAYMENT METHOD
        ================================================== */}
        <div>

          <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-slate-400">
            DEPOSIT METHOD
          </label>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Hub Cash */}
            <button
              type="button"
              onClick={() => setDepositMethod("hub")}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-left text-xs font-black uppercase tracking-wider transition-all ${
                depositMethod === "hub"
                  ? "border-[#fcb915] bg-amber-50 text-[#111827] shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-white"
              }`}
            >

              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  depositMethod === "hub"
                    ? "bg-[#fcb915] text-[#111827]"
                    : "bg-white text-slate-400 ring-1 ring-slate-200"
                }`}
              >
                <FaBuildingColumns className="text-sm" />
              </div>

              <div>
                <span className="block">
                  HUB CASH COUNTER
                </span>

                <span className="mt-0.5 block text-[9px] font-medium normal-case tracking-normal text-slate-400">
                  Physical cash deposit
                </span>
              </div>

            </button>


            {/* bKash / Nagad */}
            <button
              type="button"
              onClick={() => setDepositMethod("mfs")}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-left text-xs font-black uppercase tracking-wider transition-all ${
                depositMethod === "mfs"
                  ? "border-[#fcb915] bg-amber-50 text-[#111827] shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-white"
              }`}
            >

              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  depositMethod === "mfs"
                    ? "bg-[#fcb915] text-[#111827]"
                    : "bg-white text-slate-400 ring-1 ring-slate-200"
                }`}
              >
                <FaReceipt className="text-sm" />
              </div>

              <div>
                <span className="block">
                  BKASH / NAGAD PAY
                </span>

                <span className="mt-0.5 block text-[9px] font-medium normal-case tracking-normal text-slate-400">
                  Digital payment
                </span>
              </div>

            </button>

          </div>

        </div>


        {/* ==================================================
            DEPOSIT AMOUNT
        ================================================== */}
        <div>

          <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-slate-400">
            DEPOSIT AMOUNT (BDT)
          </label>

          <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-black text-[#fcb915]">
              ৳
            </span>

            <input
              type="number"
              placeholder="8450"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-[#fcb915] focus:bg-white focus:ring-2 focus:ring-amber-100"
            />

          </div>

        </div>


        {/* ==================================================
            REFERENCE ID
        ================================================== */}
        <div>

          <label className="mb-2 block text-[10px] font-black uppercase tracking-wider text-slate-400">
            DEPOSIT SLIP / TRANSACTION REF ID
          </label>

          <input
            type="text"
            placeholder="e.g. TRX-9923810 or Counter Slip #12"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-[#fcb915] focus:bg-white focus:ring-2 focus:ring-amber-100"
          />

        </div>


        {/* ==================================================
            SUBMIT
        ================================================== */}
        <button
          type="submit"
          className="mt-1 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#fcb915] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-[#111827] shadow-[0_5px_15px_rgba(252,185,21,0.18)] transition-all duration-200 hover:bg-[#f5b20d] hover:shadow-[0_7px_20px_rgba(252,185,21,0.25)] active:scale-[0.99]"
        >
          <FaArrowUpFromBracket className="text-sm" />
          <span>SUBMIT FOR CLEARANCE</span>
        </button>

      </form>

    </div>


    {/* ==================================================
        RECENT CLEARANCES
    ================================================== */}
    <div className="flex flex-col justify-between space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:col-span-2">

      <div>

        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
              RECENT CLEARANCES
            </h3>

            <p className="mt-0.5 text-[10px] font-medium text-slate-400">
              Your latest deposit activity
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
            <FaClock className="text-xs" />
          </div>

        </div>


        {/* History */}
        <div className="space-y-3">

          {depositHistory.map((item) => (

            <div
              key={item.id}
              className="space-y-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-200 hover:border-slate-200 hover:bg-white"
            >

              {/* ID + Status */}
              <div className="flex items-center justify-between gap-3">

                <span className="text-xs font-black text-slate-800">
                  {item.id}
                </span>

                <span className="flex items-center gap-1 rounded-md border border-emerald-100 bg-emerald-50 px-2 py-1 text-[9px] font-black uppercase text-emerald-600">

                  <FaCircleCheck className="text-[9px]" />

                  {item.status}

                </span>

              </div>


              {/* Method + Amount */}
              <div className="flex items-center justify-between gap-3">

                <span className="text-[11px] font-medium text-slate-400">
                  {item.method}
                </span>

                <span className="font-black text-[#d99b00]">
                  {item.amount}
                </span>

              </div>


              {/* Date */}
              <p className="border-t border-slate-200/70 pt-2 text-[10px] font-medium text-slate-400">
                {item.date}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* Bottom Info */}
      <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50/60 p-3 text-center text-[10px] font-medium leading-relaxed text-amber-700">
        Cash cleared before 08:00 PM gets updated in real-time.
      </div>

    </div>

  </div>

</div>
    </div>
  );
}