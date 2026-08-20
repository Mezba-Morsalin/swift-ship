"use client";

import { FaStar, FaUserTie } from "react-icons/fa6";

export default function RiderProfile({ user }) {
  // ==========================================
  // PROFILE DETAILS
  // ==========================================
  const profileDetails = [
    {
      label: "Rider ID:",
      value: user?.id ? `RD-${user.id.slice(-4).toUpperCase()}` : "N/A",
      isHighlighted: true,
    },

    {
      label: "Full Name:",
      value: user?.name || "N/A",
    },

    {
      label: "Email Address:",
      value: user?.email || "N/A",
    },

    {
      label: "Mobile Phone:",
      value: user?.phone || "N/A",
    },

    {
      label: "NID Number:",
      value: user?.nid || "N/A",
    },

    {
      label: "Service Area:",
      value: user?.location || "N/A",
    },
  ];

  // ==========================================
  // STATUS
  // ==========================================
  const status = user?.status?.toLowerCase() || "pending";

  const statusConfig = {
    pending: {
      label: "PENDING",
      className:
        "border-amber-200 bg-amber-50 text-amber-600",
      dot: "bg-amber-500",
    },

    verified: {
      label: "VERIFIED",
      className:
        "border-emerald-200 bg-emerald-50 text-emerald-600",
      dot: "bg-emerald-500",
    },

    suspended: {
      label: "SUSPENDED",
      className:
        "border-rose-200 bg-rose-50 text-rose-600",
      dot: "bg-rose-500",
    },
  };

  const currentStatus =
    statusConfig[status] || statusConfig.pending;

  return (
    <div className="flex items-center justify-center p-4 sm:p-8 font-sans">

      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.08)]">

        {/* ==========================================
            PROFILE HEADER
        ========================================== */}
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-6 py-6 sm:px-8">

          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fcb915] shadow-sm">
              <FaUserTie className="text-xl text-[#111827]" />
            </div>

            <div>
              <h1 className="text-lg font-black tracking-wider text-[#111827] uppercase">
                RIDER PROFILE
              </h1>

              <p className="mt-1 text-[11px] font-medium text-slate-400">
                Your SwiftShip rider account information
              </p>
            </div>

          </div>

        </div>

        {/* ==========================================
            PROFILE DATA
        ========================================== */}
        <div className="px-6 py-2 sm:px-8">

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">

            {profileDetails.map((item, idx) => (

              <div
                key={idx}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
              >

                {/* Label */}
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                  {item.label}
                </span>

                {/* Value */}
                <span
                  className={`font-black tracking-wide ${
                    item.isHighlighted
                      ? "text-[#f59e0b]"
                      : "text-[#111827]"
                  }`}
                >
                  {item.value}
                </span>

              </div>

            ))}

            {/* ==========================================
                SAFETY RATING
            ========================================== */}
            <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">

              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Safety Rating
              </span>

              <div className="flex flex-wrap items-center gap-2">

                <span className="font-black text-[#f59e0b]">
                  4.95
                </span>

                <div className="flex items-center gap-0.5 text-xs text-[#fcb915]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-[10px] font-bold text-slate-400">
                  (1,420 Reviews)
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ==========================================
            FOOTER STATUS
        ========================================== */}
        <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-4 sm:px-8">

          <div className="flex items-center justify-between">

            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              ACCOUNT STATUS
            </span>

            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-wider ${currentStatus.className}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${currentStatus.dot}`}
              />

              {currentStatus.label}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}