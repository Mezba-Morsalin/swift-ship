"use client";

import Image from "next/image";
import { FaBarcode, FaCheck, FaLocationDot, FaPhone, FaPowerOff } from "react-icons/fa6";

const pickupsData = [
  {
    id: 1,
    status: "SCHEDULED PICKUP",
    statusType: "scheduled",
    parcelCount: 8,
    merchantName: "Aura Fashion Boutique",
    location: "Mirpur-10 Warehouse",
    phone: "+880 1711-223344",
    actionType: "button",
    actionText: "CONFIRM BULK BARCODE SCAN",
  },

  {
    id: 2,
    status: "COMPLETED PICKUP",
    statusType: "completed",
    parcelCount: 4,
    merchantName: "TechZone Gadgets",
    location: "Uttara Sector 7 Depot",
    phone: "+880 1819-223344",
    actionType: "badge",
    actionText: "Scanned & Deposited at Central Hub",
  },
];

export default function Pickups({user}) {
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
          PAGE HEADING
      ================================================== */}
      <div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-black uppercase tracking-wider text-slate-900">
            MERCHANT DISPATCH PICKUPS
          </h1>

          <p className="text-xs font-medium text-slate-400">
            Manage your scheduled merchant pickups and parcel collection.
          </p>
        </div>
      </div>


      {/* ==================================================
          PICKUPS GRID
      ================================================== */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {pickupsData.map((pickup) => {
          const isScheduled = pickup.statusType === "scheduled";

          return (
            <div
              key={pickup.id}
              className="group flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(15,23,42,0.09)]"
            >

              {/* ==================================================
                  CARD HEADER
              ================================================== */}
              <div className="flex items-center justify-between gap-3">

                {/* Status */}
                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                    isScheduled
                      ? "border-amber-200 bg-amber-50 text-amber-600"
                      : "border-emerald-200 bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {pickup.status}
                </span>


                {/* Parcel Count */}
                <div
                  className={`flex items-center gap-1.5 text-xs font-black ${
                    isScheduled
                      ? "text-[#d99b00]"
                      : "text-emerald-600"
                  }`}
                >
                  <span>{pickup.parcelCount}</span>
                  <span className="font-bold text-slate-400">
                    Parcels
                  </span>
                </div>

              </div>


              {/* ==================================================
                  MERCHANT DETAILS
              ================================================== */}
              <div className="space-y-3">

                <div>
                  <h3 className="text-lg font-black tracking-tight text-[#111827]">
                    {pickup.merchantName}
                  </h3>

                  <div className="mt-2 flex flex-col gap-2 text-xs font-medium text-slate-400 sm:flex-row sm:items-center sm:gap-3">

                    {/* Location */}
                    <div className="flex items-center gap-1.5">
                      <FaLocationDot className="text-[11px] text-slate-400" />
                      <span>{pickup.location}</span>
                    </div>

                    <span className="hidden text-slate-300 sm:block">
                      •
                    </span>

                    {/* Phone */}
                    <a
                      href={`tel:${pickup.phone}`}
                      className="flex items-center gap-1.5 transition-colors hover:text-slate-700"
                    >
                      <FaPhone className="text-[10px] text-slate-400" />
                      <span>{pickup.phone}</span>
                    </a>

                  </div>
                </div>


                {/* Parcel Summary */}
                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3">

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                      TOTAL PARCELS
                    </p>

                    <p className="mt-0.5 text-sm font-black text-slate-800">
                      {pickup.parcelCount} Consignments
                    </p>
                  </div>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      isScheduled
                        ? "bg-amber-50 text-[#fcb915]"
                        : "bg-emerald-50 text-emerald-500"
                    }`}
                  >
                    {isScheduled ? (
                      <FaBarcode className="text-base" />
                    ) : (
                      <FaCheck className="text-sm" />
                    )}
                  </div>

                </div>

              </div>


              {/* ==================================================
                  ACTION AREA
              ================================================== */}
              <div>

                {pickup.actionType === "button" ? (

                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#fcb915] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-[#111827] shadow-[0_5px_15px_rgba(252,185,21,0.18)] transition-all duration-200 hover:bg-[#f5b20d] hover:shadow-[0_7px_20px_rgba(252,185,21,0.25)] active:scale-[0.99]"
                  >
                    <FaBarcode className="text-sm" />

                    <span>
                      {pickup.actionText}
                    </span>
                  </button>

                ) : (

                  <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3.5 text-center text-xs font-black uppercase tracking-wider text-emerald-600">

                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <FaCheck className="text-[9px]" />
                    </div>

                    <span>
                      {pickup.actionText}
                    </span>

                  </div>

                )}

              </div>

            </div>
          );
        })}

      </div>
    </div>
    </div>
  );
}