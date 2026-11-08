"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import navImg from "../../../../public/assets/Navbar.png";

import {
  FaSearch,
  FaSignInAlt,
  FaUserPlus,
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

// ==================================================
// NAVIGATION LINKS
// ==================================================

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "RATES", href: "/rates" },
  { name: "COVERAGE", href: "/coverage" },
  { name: "CONTACT", href: "/contact" },
];

// ==================================================
// NAVBAR COMPONENT
// ==================================================

export default function Navbar() {
  const [loggingOut, setLoggingOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  // ==================================================
  // USER ROLE
  // ==================================================

  const role = user?.role?.toLowerCase();

  // ==================================================
  // DASHBOARD ROUTE
  // ==================================================

  const dashboardHref =
    role === "admin"
      ? "/dashboard/admin"
      : role === "merchant"
        ? "/dashboard/merchant"
        : "/dashboard/rider";

  // ==================================================
  // DASHBOARD BUTTON LABEL
  // ==================================================

  const dashboardLabel =
    role === "admin"
      ? "ADMIN DASHBOARD"
      : role === "merchant"
        ? "MERCHANT DASHBOARD"
        : "RIDER DASHBOARD";

  // ==================================================
  // ACTIVE ROUTE
  // ==================================================

  const isLinkActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // ==================================================
  // LOGOUT FUNCTION
  // ==================================================

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "Failed to sign out.");
        setLoggingOut(false);
        return;
      }

      setIsOpen(false);
      toast.success("Signed out successfully.");
    } catch (error) {
      console.error("Logout error:", error);

      toast.error("Something went wrong. Please try again.");
      setLoggingOut(false);
    }
  };

  // ==================================================
  // CLOSE MOBILE MENU
  // ==================================================

  const closeMenu = () => {
    setIsOpen(false);
  };

  // ==================================================
  // AUTH LOADER
  // ==================================================

  const AuthLoader = ({ mobile = false }) => (
    <div
      className={`flex w-full items-center justify-center ${
        mobile ? "h-[105px]" : "h-[43px]"
      }`}
    >
      <BeatLoader
        size={6}
        color="#fbbf24"
        aria-label="Loading authentication"
      />
    </div>
  );

  // ==================================================
  // TRACK BUTTON
  // ==================================================

  const TrackButton = ({ mobile = false }) => (
    <Link
      href="/tracking"
      onClick={closeMenu}
      className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-slate-900 text-xs font-bold tracking-wider text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white ${
        mobile ? "w-full py-3" : "px-4 xl:px-5 py-2.5"
      }`}
    >
      <FaSearch className="shrink-0 text-xs" />
      TRACK
    </Link>
  );

  // ==================================================
  // SIGN IN BUTTON
  // ==================================================

  const SignInButton = ({ mobile = false }) => (
    <Link
      href="/signin"
      onClick={closeMenu}
      className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-slate-900 text-xs font-bold tracking-wider text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white ${
        mobile ? "w-full py-3" : "px-4 xl:px-5 py-2.5"
      }`}
    >
      <FaSignInAlt className="shrink-0 text-xs" />
      SIGN IN
    </Link>
  );

  // ==================================================
  // BECOME MERCHANT BUTTON
  // ==================================================

  const MerchantButton = ({ mobile = false }) => (
    <Link
      href="/signup"
      onClick={closeMenu}
      className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#fcb915] text-xs font-bold tracking-wider text-slate-900 shadow-md shadow-amber-100 transition-all duration-200 hover:bg-slate-900 hover:text-white ${
        mobile ? "w-full py-3" : "px-4 xl:px-5 py-2.5"
      }`}
    >
      <FaUserPlus className="shrink-0 text-xs" />
      BECOME MERCHANT
    </Link>
  );

  // ==================================================
  // DASHBOARD BUTTON
  // ==================================================

  const DashboardButton = ({ mobile = false }) => (
    <Link
      href={dashboardHref}
      onClick={closeMenu}
      className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#fcb915] text-xs font-bold tracking-wider text-slate-900 shadow-md shadow-amber-100 transition-all duration-200 hover:bg-slate-900 hover:text-white ${
        mobile ? "w-full py-3" : "px-4 xl:px-5 py-2.5"
      }`}
    >
      <FaTachometerAlt className="shrink-0 text-xs" />
      {dashboardLabel}
    </Link>
  );

  // ==================================================
  // LOGOUT BUTTON
  // ==================================================

  const LogoutButton = ({ mobile = false }) => (
    <button
      type="button"
      disabled={loggingOut}
      onClick={handleLogout}
      className={`flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-slate-900 text-xs font-bold tracking-wider text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-70 ${
        mobile
          ? "min-h-[48px] w-full py-3"
          : "h-[43px] min-w-[105px] px-4"
      }`}
    >
      {loggingOut ? (
        <BeatLoader
          size={5}
          color="#fbbf24"
          aria-label="Logging out"
        />
      ) : (
        <>
          <FaSignOutAlt className="text-xs" />
          LOG OUT
        </>
      )}
    </button>
  );

  // ==================================================
  // DESKTOP AUTH ACTIONS
  // ==================================================

  const DesktopAuthActions = () => {
    if (isPending) {
      return <AuthLoader />;
    }

    if (!session) {
      return (
        <div className="flex shrink-0 items-center gap-2 xl:gap-3">
          <TrackButton />
          <SignInButton />
          <MerchantButton />
        </div>
      );
    }

    return (
      <div className="flex shrink-0 items-center gap-2 xl:gap-3">
        <DashboardButton />
        <LogoutButton />
      </div>
    );
  };

  // ==================================================
  // MOBILE AUTH ACTIONS
  // ==================================================

  const MobileAuthActions = () => {
    if (isPending) {
      return <AuthLoader mobile />;
    }

    if (!session) {
      return (
        <>
          <TrackButton mobile />
          <SignInButton mobile />
          <MerchantButton mobile />
        </>
      );
    }

    return (
      <>
        <DashboardButton mobile />
        <LogoutButton mobile />
      </>
    );
  };

  // ==================================================
  // RETURN
  // ==================================================

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/60 backdrop-blur-3xl">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between gap-4">

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <Image
              src={navImg}
              alt="SwiftShip"
              width={170}
              height={55}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav className="hidden shrink-0 items-center gap-5 xl:flex 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative whitespace-nowrap py-2 text-xs font-bold tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#fcb915]"
                      : "text-slate-800 hover:text-[#fcb915]"
                  }`}
                >
                  {link.name}

                  {/* ACTIVE UNDERLINE */}

                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-[#fcb915]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP AUTH ACTIONS */}

          <div className="hidden min-w-[390px] shrink-0 items-center justify-end xl:flex">
            <DesktopAuthActions />
          </div>

          {/* MOBILE MENU BUTTON */}

          <div className="flex xl:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-lg p-2 text-slate-900 transition-colors hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-gray-100 bg-white xl:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">

              {/* MOBILE NAVIGATION LINKS */}

              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={`rounded-lg px-4 py-3 text-sm font-bold tracking-wider transition-all duration-200 ${
                        isActive
                          ? "bg-amber-50 text-[#d69b00]"
                          : "text-slate-800 hover:bg-gray-50 hover:text-[#d69b00]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* MOBILE AUTH ACTIONS */}

              <div className="mt-4 flex flex-col gap-3">
                <MobileAuthActions />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}