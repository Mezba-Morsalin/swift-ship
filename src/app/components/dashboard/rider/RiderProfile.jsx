"use client";

import { FaStar } from "react-icons/fa6";

const profileDetails = [
  { label: "Rider ID:", value: "RD-8802", isHighlighted: true },
  { label: "Full Name:", value: "Kamal Hossain" },
  { label: "Assigned Hub:", value: "Gulshan-2 Central Hub" },
  { label: "Driving License:", value: "DL-DHAKA-904128" },
];

export default function RiderProfile() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-2xl bg-[#131927] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        {/* Title */}
        <h1 className="text-lg font-black tracking-wider text-white uppercase">
          RIDER AGENT PROFILE
        </h1>

        {/* Profile Data List */}
        <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
          {profileDetails.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-4"
            >
              <span className="text-slate-400 font-bold">{item.label}</span>
              <span
                className={`font-black tracking-wide ${
                  item.isHighlighted ? "text-[#fcb915]" : "text-white"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}

          {/* Safety Rating Row */}
          <div className="flex items-center justify-between py-4">
            <span className="text-slate-400 font-bold">Safety Rating:</span>
            <div className="flex items-center gap-1.5 font-black text-[#fcb915]">
              <span>4.95</span>
              <div className="flex items-center text-xs">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-xs text-[#fcb915] font-bold">
                (1,420 Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}