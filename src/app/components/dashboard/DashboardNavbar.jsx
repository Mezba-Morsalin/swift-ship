"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaBars,
  FaBell,
  FaBoxesPacking,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

import { authClient } from "@/app/lib/auth-client";
import { PuffLoader } from "react-spinners";

export default function DashboardNavbar({ onToggleMenu }) {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user ?? null;
  const role = user?.role || "merchant";

  const handleSignOut = async () => {
    await authClient.signOut();
    router.replace("/signin");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0f172a] text-white border-b border-slate-800">
      <div className="max-w-[1024px] xl:max-w-[1100px] mx-auto h-full px-4 sm:px-5 lg:px-0">

        <div className="h-full flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">

            {/* Mobile / Tablet Menu */}
            <button
              type="button"
              onClick={onToggleMenu}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              aria-label="Open dashboard menu"
            >
              <FaBars className="text-lg" />
            </button>

            <Link
              href={`/dashboard/${role}`}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#fcb915] text-[#0f172a] flex items-center justify-center font-black text-lg">
                <FaBoxesPacking />
              </div>

              <span className="font-black text-lg tracking-tight uppercase">
                SWIFTSHIP{" "}
                <span className="text-[#fcb915]">
                  OPS
                </span>
              </span>
            </Link>

          </div>

          {/* Right */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              className="relative p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
            >
              <FaBell className="text-sm" />

              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#fcb915] border-2 border-[#0f172a]" />
            </button>

            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-800">

              <div className="text-right min-w-[110px]">
  {user ? (
  <>
    <p className="text-xs font-black text-white uppercase">
      {role === "merchant"
        ? user?.businessName || user?.name || "MERCHANT"
        : role === "rider"
        ? user?.name || "RIDER"
        : role === "admin"
        ? "ADMIN"
        : user?.name || user?.email || "USER"}
    </p>

    <p className="text-[10px] font-bold text-[#fcb915] tracking-wider uppercase">
      {role} ACCOUNT
    </p>
  </>
) : (
  <div className="flex justify-end">
    <PuffLoader
      color="#fcb915"
      size={22}
    />
  </div>
)}
</div>

              <button
                onClick={handleSignOut}
                className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                title="Logout"
              >
                <FaArrowRightFromBracket className="text-xs" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}