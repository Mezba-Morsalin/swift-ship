"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  LockKeyhole,
  LogIn,
  Truck,
  Eye,
  EyeOff,
} from "lucide-react";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const portalData = {
  merchant: {
    title: "Merchant Sign in",
    description:
      "Access your merchant COD wallet or shipment management console.",

    identityLabel: "EMAIL ADDRESS",
    identityPlaceholder: "seller@store.com",

    passwordLabel: "PASSWORD",

    forgotText: "Forgot PIN?",
    buttonText: "SIGN IN ",

    registerText: "Don't have a merchant account yet?",
    registerLink: "Sign up",
  },

  rider: {
    title: "Rider Sign in",
    description:
      "Access your rider dispatch console and delivery operations.",

    identityLabel: "HUB EMAIL",
    identityPlaceholder: "rider@swiftship.com",

    passwordLabel: "PASSWORD",

    forgotText: "Forgot PIN?",
    buttonText: "SIGN IN",

    registerText: "Are you a new rider?",
    registerLink: "Apply as Rider",
  },
};

export default function SignInForm() {
  const [portal, setPortal] = useState("merchant");
  const [showPassword, setShowPassword] = useState(false);

  const currentPortal = portalData[portal];

  const handlePortalChange = (value) => {
    setPortal(value);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login portal:", portal);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 25, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full max-w-[465px] mx-auto py-14"
    >
      <div className="rounded-[38px] border border-white bg-white px-7 py-10 shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:px-10">


        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} className="mb-5 flex items-center justify-center gap-2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbbf24]">
            <Truck
              className="h-6 w-6 text-[#111827]"
              strokeWidth={2.5}
            />
          </div>

          <h1 className="text-[23px] font-black tracking-[-1px]">
            <span className="text-[#111827]">SWIFT</span>
            <span className="text-[#f59e0b]">SHIP</span>
          </h1>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={`${portal}-heading`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="text-center"
          >
            <h2 className="text-[25px] font-black tracking-[-0.8px] text-[#111827]">
              {currentPortal.title}
            </h2>

            <p className="mx-auto mt-2 max-w-[350px] text-[13px] leading-5 text-slate-500">
              {currentPortal.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex h-[43px] rounded-full bg-[#f1f2f4] p-1">

          <button type="button" onClick={() => handlePortalChange("merchant")} className={`flex-1 rounded-full text-[12px] font-bold transition-all duration-300 ${
              portal === "merchant"
                ? "bg-[#fbbf24] text-[#111827] shadow-sm"
                : "text-slate-600 hover:text-[#111827]"
            }`}
          >
            Merchant Console
          </button>

          <button type="button" onClick={() => handlePortalChange("rider")} className={`flex-1 rounded-full text-[12px] font-bold transition-all duration-300 ${
              portal === "rider"
                ? "bg-[#fbbf24] text-[#111827] shadow-sm"
                : "text-slate-600 hover:text-[#111827]"
            }`}
          >
            Rider / Hub Portal
          </button>

        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={portal}
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: portal === "merchant" ? -15 : 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: portal === "merchant" ? 15 : -15,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="mt-8 space-y-5"
          >

            <div>
              <label
                htmlFor="identity"
                className="mb-2 block text-[12px] font-black uppercase tracking-wide text-[#24344d]"
              >
                {currentPortal.identityLabel}
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input id="identity" name="identity" type="text" autoComplete="username" placeholder={currentPortal.identityPlaceholder} required className="h-[47px] rounded-xl border-2 border-slate-200 bg-white pl-11 pr-4 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[12px] font-black uppercase tracking-wide text-[#24344d]"
              >
                {currentPortal.passwordLabel}
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="••••••••" required className="h-[47px] rounded-xl border-2 border-slate-200 bg-white pl-11 pr-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />

                <button type="button" onClick={() => setShowPassword((prev) => !prev)} aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#111827]"
                >
                  {showPassword ? (
                    <EyeOff className="h-[17px] w-[17px]" />
                  ) : (
                    <Eye className="h-[17px] w-[17px]" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">
                <input id="remember" name="remember" type="checkbox" className="h-[17px] w-[17px] cursor-pointer rounded accent-[#fbbf24]"
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer text-[12px] font-medium text-[#24344d]"
                >
                  Remember me
                </label>
              </div>

              <button
                type="button"
                className="text-[12px] font-bold text-[#f59e0b] transition hover:text-[#d97706]"
              >
                {currentPortal.forgotText}
              </button>

            </div>

            <Button type="submit" className="h-[47px] w-full rounded-full bg-[#111827] text-[13px] font-black uppercase tracking-wide text-white shadow-[0_8px_18px_rgba(15,23,42,0.18)] transition-all hover:bg-[#1f2937] hover:shadow-[0_10px_24px_rgba(15,23,42,0.24)]"
            >
              <LogIn
                className="mr-2 h-[17px] w-[17px] text-[#fbbf24]"
                strokeWidth={2.5}
              />

              {currentPortal.buttonText}
            </Button>

          </motion.form>
        </AnimatePresence>

        {/* ==================================================
            DIVIDER
        ================================================== */}
        <div className="my-8 h-px bg-slate-100" />

        {/* ==================================================
            REGISTER / APPLY
        ================================================== */}
        <AnimatePresence mode="wait">
          <motion.p key={`${portal}-register`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="text-center text-[12px] text-[#24344d]"
          >
            {currentPortal.registerText}{" "}
            <Link href="/signup"><button
              type="button"
              className="font-bold text-[#f59e0b] transition hover:text-[#d97706]"
            >
              {currentPortal.registerLink}
            </button></Link>
          </motion.p>
        </AnimatePresence>

      </div>
    </motion.div>
  );
}