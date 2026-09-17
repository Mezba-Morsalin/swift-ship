import Riders from '@/app/components/dashboard/admin/Riders';
import { auth } from '@/app/lib/auth';
import { MapPin, RefreshCw } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { FaMotorcycle } from 'react-icons/fa6';
import { MdOutlineSensors } from 'react-icons/md';

const page = async () => {
    const session = await auth.api.getSession({
                           headers: await headers(),
                         });
                         const admin = session?.user
    return (
        <div className='space-y-6'>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-5 lg:p-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
    
          {/* Left Section */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
    
            {/* Admin Shield Icon */}
            <div className="relative shrink-0">
              <div className="bg-[#0f172a] text-[#fbbf24] p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
                <FaShieldAlt className="text-xl sm:text-2xl" />
              </div>
    
              {/* Online Status Dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
            </div>
    
            {/* Title & Meta */}
            <div className="space-y-1.5 min-w-0">
    
              {/* Title */}
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight break-words">
                  {admin.name} Central Command
                </h1>
    
                <span className="bg-emerald-50 text-emerald-600 text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wide whitespace-nowrap">
                  Swift Ship {admin.name}
                </span>
              </div>
    
              {/* Meta Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-slate-500 font-medium">
    
                <span className="break-words">
                  Logged in as:{" "}
                  <strong className="text-slate-800 font-semibold">
                    System Administrator
                  </strong>{" "}
                  <span className="text-slate-400 break-all">
                    {admin.email}
                  </span>
                </span>
    
                <span className="hidden sm:inline text-slate-300">
                  •
                </span>
    
                <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <MdOutlineSensors className="text-sm shrink-0" />
                  <span>All 64 District Hubs Connected</span>
                </div>
    
              </div>
            </div>
          </div>
    
          {/* Right Section: Actions */}
          <div className="flex items-center gap-2 sm:gap-3 w-full xl:w-auto">
    
            {/* Manage Hubs */}
            <Link href={'/dashboard/admin/riders/add-rider'}
              className=" flex-1 sm:flex-none min-w-[140px] flex items-center justify-center gap-2 bg-slate-100/80 hover:bg-slate-200/80 text-slate-900 font-bold text-[10px] sm:text-xs tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200 border border-slate-200/60">
              <FaMotorcycle className="text-slate-700 text-xs sm:text-sm shrink-0" />
              <span>Add Hub Riders</span>
            </Link>
          </div>
        </div>
      </div>
            <Riders/>
        </div>
    );
};

export default page;