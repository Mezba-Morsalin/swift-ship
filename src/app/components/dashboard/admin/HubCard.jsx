"use client";

import {
  Building2,
  MapPin,
  UserRound,
  UsersRound,
  Store,
  Activity,
  Clock3,
  CircleCheck,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { MdOutlineSensors } from "react-icons/md";

const HubCard = ({ hubs, admin }) => {

  return (
  <div className="space-y-6">
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
            <Link href={'/dashboard/admin/hubs/add-hub'}
              className=" flex-1 sm:flex-none min-w-[140px] flex items-center justify-center gap-2 bg-slate-100/80 hover:bg-slate-200/80 text-slate-900 font-bold text-[10px] sm:text-xs tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200 border border-slate-200/60">
              <FaBuilding className="text-slate-700 text-xs sm:text-sm shrink-0" />
              <span>Add Distribution Hub</span>
            </Link>
          </div>
        </div>
      </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
    {hubs.map((hub) => {
      const riders = hub?.assignedRiders?.length || 0;
      const stats = hub?.shipmentStats || {};

      return (
        <div
          key={hub._id}
          className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <Building2 size={20} />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-[15px] font-bold uppercase text-slate-900">
                  {hub.hubName}
                </h3>

                <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                  <MapPin size={13} />
                  <span className="truncate">
                    {hub.area}, {hub.district}
                  </span>
                </div>
              </div>
            </div>

            {/* Status */}
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {hub.operationalStatus}
            </span>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-slate-100" />

          {/* Manager */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <UserRound size={15} />

            <span>
              Manager:{" "}
              <span className="font-semibold text-slate-700">
                {hub.manager?.name || "Not Assigned"}
              </span>
            </span>
          </div>

          {/* Top Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">

            {/* Riders */}
            <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-3 py-3">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-sky-500">
                <UsersRound size={12} />
                Riders
              </div>

              <p className="mt-1 text-lg font-bold text-slate-900">
                {riders}
              </p>
            </div>

            {/* Merchants */}
            <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-3 py-3">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-amber-500">
                <Store size={12} />
                Merchants
              </div>

              <p className="mt-1 text-lg font-bold text-slate-900">
                {hub.assignedMerchants?.length || 0}
              </p>
            </div>

            {/* Active */}
            <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-3 py-3">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-purple-500">
                <Activity size={12} />
                Active
              </div>

              <p className="mt-1 text-lg font-bold text-slate-900">
                {stats.outForDelivery || 0}
              </p>
            </div>
          </div>

          {/* Shipment Stats */}
          <div className="mt-3 grid grid-cols-2 gap-2">

            {/* Pending */}
            <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-3 py-3">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-400">
                <Clock3
                  size={12}
                  className="text-orange-500"
                />
                Pending
              </div>

              <p className="mt-1 text-lg font-bold text-orange-500">
                {stats.pending || 0}
              </p>
            </div>

            {/* Delivered */}
            <div className="rounded-[18px] border border-slate-100 bg-slate-50 px-3 py-3">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-400">
                <CircleCheck
                  size={12}
                  className="text-emerald-500"
                />
                Delivered
              </div>

              <p className="mt-1 text-lg font-bold text-emerald-500">
                {stats.delivered || 0}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-slate-100" />

          {/* Buttons */}
          <div className="flex items-center gap-2">
  <Link
    href={`/dashboard/admin/hubs/${hub._id}`}
    type="button"
    className="flex h-9 flex-1 items-center justify-center gap-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
  >
    Hub Details
    <ChevronRight size={14} />
  </Link>

  <Link
    href={`/dashboard/admin/hubs/hub-shipments`}
    type="button"
    className="flex h-9 flex-1 items-center justify-center gap-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
  >
    <FiPackage size={16} />
    Manage Shipments
  </Link>
</div>
        </div>
      );
    })}
  </div>
  </div>
);
};


/* --------------------------------
   Small Stat Card
-------------------------------- */


export default HubCard;