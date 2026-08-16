"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTruckFast,
  FaBoxesPacking,
  FaWallet,
  FaUser,
  FaChartColumn,
  FaStore,
  FaGear,
  FaPlus,
  FaChartPie,
  FaXmark,
  FaHeadphones,
} from "react-icons/fa6";

// Navigation configurations for each role based on your design specs
const ROLE_SIDEBAR_CONFIG = {
  admin: {
    activeBg: "bg-[#ff004c] text-white",
    items: [
      { label: "COMMAND CENTER", href: "/admin", icon: FaChartColumn },
      { label: "GLOBAL SHIPMENTS (8)", href: "/admin/shipments", icon: FaBoxesPacking },
      { label: "MERCHANTS (5)", href: "/admin/merchants", icon: FaStore },
      { label: "RIDERS FLEET (4)", href: "/admin/riders", icon: FaTruckFast },
      { label: "PRICING & SETTINGS", href: "/admin/settings", icon: FaGear },
    ],
  },
  rider: {
    activeBg: "bg-[#fcb915] text-[#0f172a]",
    items: [
      { label: "DELIVERY QUEUE (4)", href: "/rider", icon: FaTruckFast },
      { label: "MERCHANT PICKUPS (2)", href: "/rider/pickups", icon: FaBoxesPacking },
      { label: "COD CASH DEPOSIT", href: "/rider/deposit", icon: FaWallet },
      { label: "RIDER PROFILE", href: "/rider/profile", icon: FaUser },
    ],
  },
  merchant: {
    activeBg: "bg-[#fcb915] text-[#0f172a]",
    items: [
      { label: "OVERVIEW", href: "/dashboard", icon: FaChartPie },
      { label: "CREATE SHIPMENT", href: "/dashboard/create", icon: FaPlus },
      { label: "MY SHIPMENTS", href: "/dashboard/shipments", icon: FaBoxesPacking },
      { label: "COD & PAYOUTS", href: "/dashboard/cod-wallet", icon: FaWallet },
      { label: "STORE SETTINGS", href: "/dashboard/settings", icon: FaGear },
    ],
  },
};

export default function DashboardSidebar({ isOpen, onClose, role = "merchant" }) {
  const pathname = usePathname();
  const currentConfig = ROLE_SIDEBAR_CONFIG[role] || ROLE_SIDEBAR_CONFIG.merchant;

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`
          fixed top-16 bottom-0 left-0 w-72 bg-[#0b0f19] border-r border-slate-800/80 z-50 flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          {/* Mobile Close Button Header */}
          <div className="flex items-center justify-between lg:hidden mb-4 pb-2 border-b border-slate-800">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {role.toUpperCase()} MENU
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white cursor-pointer"
            >
              <FaXmark className="text-base" />
            </button>
          </div>

          {/* Sidebar Navigation Items */}
          <nav className="space-y-2">
            {currentConfig.items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-200 border
                    ${
                      isActive
                        ? `${currentConfig.activeBg} border-transparent shadow-lg`
                        : "bg-[#151c2e]/60 text-slate-300 border-slate-800/80 hover:bg-[#1e293b] hover:text-white hover:border-slate-700"
                    }
                  `}
                >
                  <Icon className="text-sm shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Support Widget */}
        <div className="bg-[#151c2e]/80 border border-slate-800 rounded-2xl p-4 text-center">
          <div className="w-8 h-8 rounded-full bg-[#fcb915]/20 text-[#fcb915] flex items-center justify-center mx-auto mb-2 text-sm">
            <FaHeadphones />
          </div>
          <h5 className="text-xs font-black text-white uppercase tracking-wider">
            SWIFTSHIP HELP DESK
          </h5>
          <p className="text-[10px] text-slate-400 font-medium mt-0.5">
            Real-time operations assistance
          </p>
          <a
            href="tel:+8809612889900"
            className="mt-3 block w-full py-2 bg-[#fcb915] text-[#0f172a] rounded-xl text-[10px] font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-sm"
          >
            CALL HOTLINE
          </a>
        </div>
      </aside>
    </>
  );
}