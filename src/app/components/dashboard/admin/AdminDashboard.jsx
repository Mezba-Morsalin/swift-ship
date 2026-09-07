
import Link from 'next/link';
import React from 'react';
import { FaBoxes, FaCheckCircle, FaMapMarkerAlt, FaShieldAlt, FaSyncAlt, FaUndo, FaUserFriends } from 'react-icons/fa';
import { FaBox, FaBoxOpen, FaBuilding, FaChevronRight, FaClock, FaCreditCard, FaMotorcycle, FaPlus, FaQrcode, FaStore, FaTruck, FaUser, FaWallet } from 'react-icons/fa6';
import { MdOutlineSensors } from 'react-icons/md';

const metrics = [
  {
    title: "TOTAL MERCHANTS",
    value: "7",
    subtext: "Active store partn...",
    icon: FaStore,
  },
  {
    title: "TOTAL RIDERS",
    value: "8",
    subtext: "8 available on rou...",
    icon: FaMotorcycle,
  },
  {
    title: "TOTAL SHIPMENTS",
    value: "6",
    subtext: "Network consign...",
    icon: FaBox,
  },
  {
    title: "TOTAL PARCELS",
    value: "6",
    subtext: "Physical items ha...",
    icon: FaBoxes,
  },
  {
    title: "PENDING SHIPMENTS",
    value: "0",
    subtext: "Awaiting hub or r...",
    icon: FaClock,
  },
  {
    title: "IN TRANSIT",
    value: "2",
    subtext: "Linehaul & out fo...",
    icon: FaTruck,
  },
  {
    title: "DELIVERED",
    value: "1",
    subtext: "17% delivery rate",
    icon: FaCheckCircle,
  },
  {
    title: "RETURNED",
    value: "1",
    subtext: "Failed or resched...",
    icon: FaUndo,
  },
];

const codMetrics = [
  {
    title: "TOTAL COD COLLECTED",
    amount: "৳1,850",
    description: "Cash securely stored at hubs",
    textColor: "text-emerald-600",
    iconBg: "bg-emerald-50 text-emerald-500",
    icon: FaCheckCircle,
  },
  {
    title: "COD PENDING DELIVERY",
    amount: "৳18,650",
    description: "Active transit consignment value",
    textColor: "text-amber-600",
    iconBg: "bg-amber-50 text-amber-500",
    icon: FaClock,
  },
  {
    title: "READY FOR MERCHANT PAYOUT",
    amount: "৳0",
    description: "Cleared for merchant bank transfer",
    textColor: "text-blue-600",
    iconBg: "bg-blue-50 text-blue-500",
    icon: FaWallet,
  },
  {
    title: "COD PAID OUT",
    amount: "৳1,850",
    description: "Disbursed to merchant accounts",
    textColor: "text-purple-600",
    iconBg: "bg-purple-50 text-purple-500",
    icon: FaCreditCard,
  },
];


const AdminDashboard = ({admin, hubs}) => {
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
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

        {/* Intake Parcel */}
        <button
          className=" flex-1 sm:flex-none min-w-[140px] flex items-center justify-center gap-2 bg-[#fbbf24] hover:bg-amber-400 text-slate-900 font-bold text-[10px] sm:text-xs tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-sm">
          <FaQrcode className="text-xs sm:text-sm shrink-0" />
          <span>INTAKE PARCEL</span>
        </button>

        {/* Manage Hubs */}
        <button
          className=" flex-1 sm:flex-none min-w-[140px] flex items-center justify-center gap-2 bg-slate-100/80 hover:bg-slate-200/80 text-slate-900 font-bold text-[10px] sm:text-xs tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all duration-200 border border-slate-200/60">
          <FaBuilding className="text-slate-700 text-xs sm:text-sm shrink-0" />
          <span>MANAGE HUBS</span>
        </button>
      </div>
    </div>
  </div>
</div>
    <div className="w-full max-w-7xl mx-auto p-4 bg-slate-50">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            OPERATIONS COMMAND OVERVIEW
          </h2>
          <p className="text-sm font-semibold text-slate-700">
            Live real-time metrics across all Bangladesh operations
          </p>
        </div>

        {/* Live Indicator Badge */}
        <div className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-emerald-600">
            Live Data Stream
          </span>
        </div>
      </div>

      {/* Metrics Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {metrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              {/* Card Header: Title & Icon */}
              <div className="flex items-start justify-between gap-1 mb-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight leading-tight">
                  {item.title}
                </span>
                <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600 flex-shrink-0">
                  <Icon className="text-xs" />
                </div>
              </div>

              {/* Card Main Value & Subtext */}
              <div>
                <span className="text-2xl font-black text-slate-900 leading-none">
                  {item.value}
                </span>
                <p className="text-[11px] text-slate-400 font-medium truncate mt-2">
                  {item.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto p-4 bg-slate-50 space-y-4">
      {/* Top Banner Container */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left Side: Title & Subtitle */}
        <div className="flex items-start gap-3">
          <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl flex-shrink-0 mt-0.5 sm:mt-0">
            <FaWallet className="text-xl" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug">
              CASH ON DELIVERY (COD) FINANCIAL CONTROL
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Track cash collections across distribution hubs, pipeline funds, merchant payable balances, and disbursement settlements
            </p>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00a859] hover:bg-[#008f4c] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all duration-200 shadow-sm">
            <FaWallet className="text-sm" />
            <span>PROCESS MERCHANT PAYOUTS</span>
          </button>
        </div>
      </div>

      {/* Financial Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {codMetrics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Header: Title & Icon */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {item.title}
                </span>
                <div className={`p-2 rounded-xl flex-shrink-0 ${item.iconBg}`}>
                  <Icon className="text-sm" />
                </div>
              </div>

              {/* Body: Value & Description */}
              <div>
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {item.amount}
                </div>
                <p className={`text-xs font-semibold mt-1.5 ${item.textColor}`}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto p-4 bg-slate-50 space-y-4">
      {/* Top Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Header Left Title */}
        <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
  {/* Hub Icon */}
  <div className="p-2.5 sm:p-3 bg-amber-50 text-amber-500 rounded-lg sm:rounded-xl flex-shrink-0 mt-0.5">
    <FaBuilding className="text-lg sm:text-xl" />
  </div>

  {/* Content */}
  <div className="min-w-0 flex-1">
    {/* Title & Description */}
    <div>
      <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
        DISTRIBUTION HUB CONTROL
      </h2>

      <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 leading-relaxed max-w-3xl">
        Manage 64-district intake sorting, regional transfer linehaul, and
        last-mile dispatch facilities
      </p>
    </div>

    {/* Hub Stats */}
    <div
      className=" inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-slate-50 border border-slate-200/80 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mt-2.5 sm:mt-3 text-[10px] sm:text-xs font-semibold text-slate-600 max-w-full">
      <span className="whitespace-nowrap">
        Active Hubs:{" "}
        <strong className="text-emerald-600">{hubs.length}</strong>
      </span>

      <span className="text-slate-300 hidden xs:inline">|</span>

      <span className="whitespace-nowrap">
        National Districts:{" "}
        <strong className="text-slate-800">64</strong>
      </span>
    </div>
  </div>
</div>
        {/* Header Right Actions */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Status Counter Badge */}
          {/* Hub Manager Link */}
          <Link href={'/dashboard/admin/hubs'} className="flex items-center gap-1.5 bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs tracking-wider px-4 py-2.5 rounded-full transition-all duration-200">
            <span>Hub Manager ({hubs.length})</span>
            <FaChevronRight className="text-[10px] text-slate-400" />
          </Link>
        </div>
      </div>

      {/* Hub Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {hubs.slice(0,3).map((hub, index) => (
    <div
      key={hub._id || index}
      className="bg-white rounded-2xl p-5 border border-slate-100 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
    >
      {/* Top Hub Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2 min-w-0">

          {/* Left Section */}
          <div className="flex items-start gap-2.5 sm:gap-3 min-w-0 flex-1">

            {/* Hub Icon */}
            <div className="p-2 sm:p-2.5 bg-amber-50 text-amber-500 rounded-lg sm:rounded-xl flex-shrink-0 mt-0.5 sm:mt-1">
              <FaBuilding className="text-sm sm:text-base" />
            </div>

            {/* Hub Info */}
            <div className="min-w-0 flex-1">
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 uppercase tracking-tight truncate">
                {hub.hubName}
              </h3>

              <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 min-w-0">
                <FaMapMarkerAlt className="text-[9px] sm:text-[10px] flex-shrink-0" />

                <span className="truncate">
                  {hub.area}, {hub.district}
                </span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <span
            className={`flex-shrink-0 text-[8px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap ${
              hub.operationalStatus === "active"
                ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {hub.operationalStatus}
          </span>
        </div>

        {/* Manager Row */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium truncate">
          <FaUser className="text-[11px] text-slate-400 flex-shrink-0" />

          <span className="truncate">
            Manager:{" "}
            <strong className="text-slate-700">
              {hub.manager?.name}
            </strong>
          </span>
        </div>

        {/* Top 3 Metric Boxes */}
        <div className="grid grid-cols-3 gap-2">

          {/* Riders */}
          <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
              <FaUserFriends className="text-[10px] text-sky-500" />
              <span>RIDERS</span>
            </div>

            <span className="text-lg font-black text-slate-800 mt-1 block">
              {hub.assignedRiders?.length ?? 0}
            </span>
          </div>

          {/* Merchants */}
          <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
              <FaStore className="text-[10px] text-amber-500" />
              <span>MERCHANTS</span>
            </div>

            <span className="text-lg font-black text-slate-800 mt-1 block">
              0
            </span>
          </div>

          {/* Active / At Hub */}
          <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
              <FaBoxOpen className="text-[10px] text-purple-500" />
              <span>ACTIVE</span>
            </div>

            <span className="text-lg font-black text-slate-800 mt-1 block">
              {hub.shipmentStats?.atHub ?? 0}
            </span>
          </div>
        </div>

        {/* Bottom 2 Status Boxes */}
        <div className="grid grid-cols-2 gap-2">

          {/* Pending */}
          <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
              <FaClock className="text-[10px] text-amber-500" />
              <span>PENDING</span>
            </div>

            <span className="text-lg font-black text-amber-600 mt-1 block">
              {hub.shipmentStats?.pending ?? 0}
            </span>
          </div>

          {/* Delivered */}
          <div className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
              <FaCheckCircle className="text-[10px] text-emerald-500" />
              <span>DELIVERED</span>
            </div>

            <span className="text-lg font-black text-emerald-600 mt-1 block">
              {hub.shipmentStats?.delivered ?? 0}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Card Footer Actions */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-1 bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 font-bold text-xs py-2 rounded-xl transition-colors duration-200">
          <span>Hub Details</span>
          <FaChevronRight className="text-[10px]" />
        </button>

        <button className="bg-[#fbbf24] hover:bg-amber-400 text-slate-900 font-extrabold text-xs px-4 py-2 rounded-xl transition-colors duration-200 uppercase tracking-wider">
          PARCELS
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
        </div>
    );
};

export default AdminDashboard;