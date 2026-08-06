"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTruck, 
  FaSearch, 
  FaSignInAlt, 
  FaUserPlus, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PRICING", href: "/pricing" },
  { name: "TRACKING", href: "/tracking" },
  { name: "FAQ", href: "/faq" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="max-w-7xl mx-auto py-5 px-5 lg:px-0">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="bg-[#fbbf24] p-3 rounded-xl">
                        <FaTruck size={25}/>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold uppercase">Swift<span className="text-[#f59e0b]">Ship</span></h4>
                        <p className="text-slate-400 uppercase text-[10px]">Express Courier Network</p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-wider transition-colors duration-200 relative py-1 ${
                  link.active
                    ? "text-[#ffb703]"
                    : "text-slate-800 hover:text-[#ffb703]"
                }`}
              >
                {link.name}
                {link.active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ffb703]"
                  />
                )}
              </Link>
            ))}
          </div>
                <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/track"
              className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-200"
            >
              <FaSearch className="text-xs" />
              TRACK
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-2 border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-200"
            >
              <FaSignInAlt className="text-xs" />
              LOGIN
            </Link>

            <Link
              href="/merchant"
              className="flex items-center gap-2 bg-[#ffb703] text-slate-900 font-bold text-xs tracking-wider px-5 py-2.5 rounded-full hover:bg-amber-400 shadow-md shadow-amber-100 transition-all duration-200"
            >
              <FaUserPlus className="text-xs" />
              BECOME MERCHANT
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-900 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
            </div>
            
        </div>


        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-sm font-bold tracking-wider rounded-md transition-colors ${
                      link.active
                        ? "text-[#ffb703] bg-amber-50"
                        : "text-slate-800 hover:bg-gray-50 hover:text-[#ffb703]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
                <Link
                  href="/track"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                >
                  <FaSearch className="text-xs" />
                  TRACK
                </Link>

                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-wider py-2.5 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                >
                  <FaSignInAlt className="text-xs" />
                  LOGIN
                </Link>

                <Link
                  href="/merchant"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#ffb703] text-slate-900 font-bold text-xs tracking-wider py-2.5 rounded-full hover:bg-amber-400 shadow-md transition-all"
                >
                  <FaUserPlus className="text-xs" />
                  BECOME MERCHANT
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
