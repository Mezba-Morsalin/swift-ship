"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { PuffLoader } from "react-spinners";

import {
  FaChartColumn,
  FaBoxesPacking,
  FaStore,
  FaTruckFast,
  FaGear,
  FaChartPie,
  FaPlus,
  FaWallet,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

const navigationConfig = {
  admin: [
    {
      label: "COMMAND CENTER",
      href: "/dashboard/admin",
      icon: FaChartColumn,
    },
    {
      label: "GLOBAL SHIPMENTS (8)",
      href: "/dashboard/admin/shipments",
      icon: FaBoxesPacking,
    },
    {
      label: "MERCHANTS (5)",
      href: "/dashboard/admin/merchants",
      icon: FaStore,
    },
    {
      label: "RIDERS FLEET (4)",
      href: "/dashboard/admin/riders",
      icon: FaTruckFast,
    },
    {
      label: "PRICING & SETTINGS",
      href: "/dashboard/admin/settings",
      icon: FaGear,
    },
  ],

  rider: [
    {
      label: "DELIVERY QUEUE (4)",
      href: "/dashboard/rider",
      icon: FaTruckFast,
    },
    {
      label: "MERCHANT PICKUPS (2)",
      href: "/dashboard/rider/pickups",
      icon: FaBoxesPacking,
    },
    {
      label: "COD CASH DEPOSIT",
      href: "/dashboard/rider/deposit",
      icon: FaWallet,
    },
    {
      label: "RIDER PROFILE",
      href: "/dashboard/rider/profile",
      icon: FaUser,
    },
  ],

  merchant: [
    {
      label: "OVERVIEW",
      href: "/dashboard/merchant",
      icon: FaChartPie,
    },
    {
      label: "CREATE SHIPMENT",
      href: "/dashboard/merchant/create",
      icon: FaPlus,
    },
    {
      label: "SHIPMENTS (8)",
      href: "/dashboard/merchant/shipments",
      icon: FaBoxesPacking,
    },
    {
      label: "COD WALLET & PAYOUTS",
      href: "/dashboard/merchant/cod-wallet",
      icon: FaWallet,
    },
    {
      label: "STORE SETTINGS",
      href: "/dashboard/merchant/settings",
      icon: FaGear,
    },
  ],
};

export default function DashboardSidebar({
  isOpen,
  onClose,
}) {
  const pathname = usePathname();

  const {
    data: session,
    isPending,
  } = authClient.useSession();

  const user = session?.user ?? null;

  // IMPORTANT: role case fix
  const role =
    user?.role?.toLowerCase() || "merchant";

  const items =
    navigationConfig[role] || [];

  // =========================
  // SESSION LOADING
  // =========================
  if (isPending) {
    return (
      <div className="w-full h-[60px] bg-[#f8fafc] border-b border-slate-200 flex items-center justify-center">
        <PuffLoader
          color="#fcb915"
          size={28}
        />
      </div>
    );
  }

  return (
    <>
      {/* =========================================
          MOBILE / TABLET BACKDROP
      ========================================== */}
      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            bg-slate-950/60
            backdrop-blur-sm
            z-40
            lg:hidden
          "
        />
      )}

      {/* =========================================
          MOBILE / TABLET DRAWER
      ========================================== */}
      <aside
        className={`
          fixed
          top-16
          left-0
          bottom-0
          z-50
          w-[290px]

          bg-[#f8fafc]
          border-r
          border-slate-200
          shadow-2xl

          transition-transform
          duration-300
          ease-out

          lg:hidden

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="h-full flex flex-col">

          {/* =====================================
              DRAWER HEADER
          ====================================== */}
          <div
            className="
              flex
              items-center
              justify-between
              px-5
              py-4
              border-b
              border-slate-200
              bg-white
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-black
                  tracking-widest
                  uppercase
                  text-slate-400
                "
              >
                {role} navigation
              </p>

              <p
                className="
                  text-sm
                  font-black
                  text-[#0f172a]
                  uppercase
                  mt-1
                "
              >
                SWIFTSHIP OPS
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                w-9
                h-9
                rounded-xl
                bg-slate-100
                text-slate-500
                hover:bg-slate-200
                hover:text-slate-900
                flex
                items-center
                justify-center
                transition
                cursor-pointer
              "
              aria-label="Close dashboard menu"
            >
              <FaXmark />
            </button>
          </div>

          {/* =====================================
              DRAWER MENU
          ====================================== */}
          <nav
            className="
              flex-1
              p-4
              space-y-2
              overflow-y-auto
            "
          >
            {items.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href ===
                `/dashboard/${role}`
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3.5
                    rounded-xl
                    border

                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider

                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#0f172a] border-[#0f172a] text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                    }
                  `}
                >
                  <Icon
                    className={`
                      text-sm

                      ${
                        isActive
                          ? "text-[#fcb915]"
                          : "text-slate-400"
                      }
                    `}
                  />

                  <span>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* =========================================
          DESKTOP HORIZONTAL MENU
      ========================================== */}
      <div
        className="
          hidden
          lg:block
          w-full
          bg-[#f8fafc]
          border-b
          border-slate-200
        "
      >
        <div
          className="
            max-w-[1024px]
            xl:max-w-[1100px]
            mx-auto
            px-4
            sm:px-5
            lg:px-0
          "
        >
          <nav
            className="
              flex
              items-center
              gap-1.5
              overflow-x-auto
              py-2.5
              scrollbar-none
            "
          >
            {items.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href ===
                `/dashboard/${role}`
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group

                    flex
                    h-[35px]
                    shrink-0
                    items-center
                    gap-2

                    rounded-full
                    border
                    px-4

                    text-[9px]
                    sm:text-[10px]
                    font-black
                    uppercase
                    tracking-wider

                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "border-[#0f172a] bg-[#0f172a] text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-[#0f172a]"
                    }
                  `}
                >
                  <Icon
                    className={`
                      shrink-0
                      text-[11px]

                      ${
                        isActive
                          ? "text-[#fcb915]"
                          : "text-slate-400 group-hover:text-slate-600"
                      }
                    `}
                  />

                  <span className="whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}