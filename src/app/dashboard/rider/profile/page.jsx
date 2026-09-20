import RiderProfile from "@/app/components/dashboard/rider/RiderProfile";
import { auth } from "@/app/lib/auth";
import { getRiders } from "@/app/lib/getRiders";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { FaLocationDot, FaPowerOff } from "react-icons/fa6";

const RiderProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const riders = await getRiders();

  const rider = riders.data.find((item) => item.userId === user?.id);

  return (
    <div className="space-y-6">
      <div className="bg-slate-100 border shadow rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2  shrink-0">
            <Image
              src={user?.image || "/images/default-avatar.png"}
              alt={user?.name || "Rider"}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />

            <span
  className={`absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-[#131927] ${
    rider?.status === "active"
      ? "bg-emerald-500"
      : rider?.status === "pending"
      ? "bg-amber-500"
      : rider?.status === "suspended"
      ? "bg-rose-500"
      : "bg-slate-400"
  }`}
/>
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black tracking-wider uppercase ${
                  rider?.status === "pending"
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    : rider?.status === "active"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : rider?.status === "suspended"
                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                }`}
              >
                Status : {rider?.status || "unknown"}
              </span>

              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                RIDER ID:{" "}
                {rider?._id ? `RD-${rider._id.slice(-4).toUpperCase()}` : "N/A"}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl text-slate-900 font-black tracking-tight mt-1">
              {rider?.name}
            </h1>

            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mt-0.5">
              <FaLocationDot className="text-[#fcb915] text-xs shrink-0" />

              <span>
                Assigned Hub : {rider?.hubCode || rider?.location || "N/A"}
              </span>
            </p>
          </div>
        </div>

        <button
          disabled={rider?.status !== "active"}
          className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg shrink-0 ${
            rider?.status === "active"
              ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20"
              : rider?.status === "pending"
              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 cursor-not-allowed shadow-none"
              : rider?.status === "suspended"
              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20 cursor-not-allowed shadow-none"
              : "bg-slate-500/10 text-slate-400 border border-slate-500/20 cursor-not-allowed shadow-none"
          }`}
        >
          <FaPowerOff className="text-sm" />

          <span>
            {rider?.status === "active"
              ? "ON DUTY (ONLINE)"
              : rider?.status === "pending"
              ? "PENDING APPROVAL"
              : rider?.status === "suspended"
              ? "ACCOUNT SUSPENDED"
              : "UNAVAILABLE"}
          </span>
        </button>
      </div>

      <RiderProfile user={user} rider={rider} />
    </div>
  );
};

export default RiderProfilePage;