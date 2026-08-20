import RiderProfile from '@/app/components/dashboard/rider/RiderProfile';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaLocationDot, FaPowerOff } from 'react-icons/fa6';

const RiderProfilePage = async () => {
    const session = await auth.api.getSession({
           headers: await headers(),
         });
         const user = session?.user
    return (
        <div className='space-y-6'>
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
            <RiderProfile/>
        </div>
    );
};

export default RiderProfilePage;