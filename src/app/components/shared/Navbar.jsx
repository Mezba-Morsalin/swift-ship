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

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PRICING", href: "/pricing" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [loggingOut, setLoggingOut] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

const user = session?.user;
const role = user?.role;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-3xl border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-8">

          {/* ==================== LOGO ==================== */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}
          >
            <Image src={navImg} alt="SwiftShip" width={170} height={55} priority className="w-auto h-12 object-contain"
            />
          </Link>

          {/* ==================== DESKTOP NAV ==================== */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 whitespace-nowrap text-xs font-bold tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#fcb915]"
                      : "text-slate-800 hover:text-[#fcb915]"
                  }`}
                >
                  {link.name}

                  {/* Active Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#fcb915] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ==================== DESKTOP ACTIONS ==================== */}
          {/* Auth Navigation */}
<div className="hidden lg:flex items-center min-w-[340px] justify-end">

  {/* ================================================
      AUTH STATE LOADING
  ================================================= */}
  {isPending ? (
    <div className="flex items-center justify-center w-full h-[43px]">
      <BeatLoader
        size={6}
        color="#fbbf24"
        aria-label="Loading"
      />
    </div>
  ) : !session ? (

    /* ================================================
       LOGGED OUT
    ================================================= */
    <div className="flex items-center gap-3">

      {/* Track */}
      <Link
        href="/tracking"
        className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-200"
      >
        <FaSearch className="text-xs" />
        TRACK
      </Link>

      {/* Sign In */}
      <Link
        href="/signin"
        className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-200"
      >
        <FaSignInAlt className="text-xs" />
        SIGN IN
      </Link>

      {/* Become Merchant */}
      <Link
        href="/signup"
        className="flex items-center gap-2 bg-[#fcb915] text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-900 hover:text-white shadow-md shadow-amber-100 transition-all duration-200"
      >
        <FaUserPlus className="text-xs" />
        BECOME MERCHANT
      </Link>

    </div>

  ) : (

    /* ================================================
       LOGGED IN
    ================================================= */
    <div className="flex items-center gap-3">

      {/* Dashboard */}
      <Link
        href={
          role === "merchant"
            ? "/dashboard/merchant"
            : "/dashboard/rider"
        }
        className="flex items-center gap-2 bg-[#fcb915] text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-900 hover:text-white shadow-md shadow-amber-100 transition-all duration-200 whitespace-nowrap"
      >
        <FaTachometerAlt className="text-xs" />

        {role === "merchant"
          ? "MERCHANT DASHBOARD"
          : "RIDER DASHBOARD"}
      </Link>

      {/* Logout */}
      <button
        type="button"
        disabled={loggingOut}
        onClick={async () => {
          if (loggingOut) return;

          setLoggingOut(true);

          try {
            const { error } = await authClient.signOut();

            if (error) {
              toast.error(
                error.message || "Failed to sign out."
              );

              setLoggingOut(false);
              return;
            }

            toast.success("Signed out successfully.");

          } catch (error) {
            console.error("Logout error:", error);

            toast.error(
              "Something went wrong. Please try again."
            );

            setLoggingOut(false);
          }
        }}
        className="flex h-[43px] min-w-[105px] items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider px-4 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70"
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

    </div>
  )}

</div>
          {/* ==================== MOBILE MENU BUTTON ==================== */}
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-slate-900 hover:bg-gray-100 focus:outline-none transition-colors" aria-label="Toggle Menu" aria-expanded={isOpen}
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

      {/* ==================== MOBILE MENU ==================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
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
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-6">

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`px-4 py-3 text-sm font-bold tracking-wider rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-[#fcb915] bg-amber-50"
                          : "text-slate-800 hover:bg-gray-50 hover:text-[#fcb915]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* ==================================================
    MOBILE ACTIONS
================================================== */}

<div className="flex flex-col gap-3">

  {/* ================================================
      AUTH STATE LOADING
  ================================================= */}
  {isPending ? (
    <div className="flex h-[105px] w-full items-center justify-center">
      <BeatLoader
        size={6}
        color="#fbbf24"
        aria-label="Loading"
      />
    </div>
  ) : !session ? (

    /* ================================================
       LOGGED OUT
    ================================================= */
    <>
      {/* Track */}
      <Link
        href="/tracking"
        onClick={() => setIsOpen(false)}
        className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-900 py-3 text-xs font-bold tracking-wider text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white"
      >
        <FaSearch className="text-xs" />
        TRACK
      </Link>

      {/* Sign In */}
      <Link
        href="/signin"
        onClick={() => setIsOpen(false)}
        className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-slate-900 py-3 text-xs font-bold tracking-wider text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white"
      >
        <FaSignInAlt className="text-xs" />
        SIGN IN
      </Link>

      {/* Become Merchant */}
      <Link
        href="/signup"
        onClick={() => setIsOpen(false)}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fcb915] py-3 text-xs font-bold tracking-wider text-slate-900 shadow-md shadow-amber-100 transition-all duration-200 hover:bg-amber-400"
      >
        <FaUserPlus className="text-xs" />
        BECOME MERCHANT
      </Link>
    </>

  ) : (

    /* ================================================
       LOGGED IN
    ================================================= */
    <>
      {/* Dashboard */}
      <Link
        href={
          role === "merchant"
            ? "/dashboard/merchant"
            : "/dashboard/rider"
        }
        onClick={() => setIsOpen(false)}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fcb915] py-3 text-xs font-bold tracking-wider text-slate-900 shadow-md shadow-amber-100 transition-all duration-200 hover:bg-amber-400"
      >
        <FaTachometerAlt className="text-xs" />

        {role === "merchant"
          ? "MERCHANT DASHBOARD"
          : "RIDER DASHBOARD"}
      </Link>

      {/* Logout */}
      <button
        type="button"
        disabled={loggingOut}
        onClick={async () => {
          if (loggingOut) return;

          setLoggingOut(true);

          try {
            const { error } = await authClient.signOut();

            if (error) {
              toast.error(
                error.message || "Failed to sign out."
              );

              setLoggingOut(false);
              return;
            }

            setIsOpen(false);

            toast.success("Signed out successfully.");

          } catch (error) {
            console.error("Logout error:", error);

            toast.error(
              "Something went wrong. Please try again."
            );

            setLoggingOut(false);
          }
        }}
        className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-slate-900 py-3 text-xs font-bold tracking-wider text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
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
    </>
  )}

</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}