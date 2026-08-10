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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { authClient } from "@/app/lib/auth-client";

const portalData = {
  merchant: {
    title: "Merchant Sign in",
    description:
      "Access your merchant COD wallet or shipment management console.",
    identityLabel: "EMAIL ADDRESS",
    identityPlaceholder: "seller@store.com",
    passwordLabel: "PASSWORD",
    forgotText: "Forgot PIN?",
    buttonText: "SIGN IN TO DASHBOARD",
    registerText: "Don't have a merchant account yet?",
    registerLink: "Register Free",
  },

  rider: {
    title: "Rider Sign in",
    description:
      "Access your rider dispatch console and delivery operations.",
    identityLabel: "HUB EMAIL",
    identityPlaceholder: "rider@swiftship.com",
    passwordLabel: "PASSWORD",
    forgotText: "Forgot PIN?",
    buttonText: "SIGN IN TO PORTAL",
    registerText: "Are you a new rider?",
    registerLink: "Apply as Rider",
  },
};

export default function SignInForm() {
  const [portal, setPortal] = useState("merchant");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentPortal = portalData[portal];

  const handlePortalChange = (value) => {
    if (loading) return;

    setPortal(value);
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const user = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signIn.email({
        email: user.identity,
        password: user.password,
      });

      if (error) {
        toast.error(
          error.message || "Invalid email or password. Please try again."
        );
        return;
      }

      toast.success(
        portal === "merchant"
          ? "Merchant login successful!"
          : "Rider login successful!"
      );

      console.log("Login data:", data);
      console.log("Login portal:", portal);

      // Example:
      // router.push(
      //   portal === "merchant"
      //     ? "/merchant/dashboard"
      //     : "/rider/dashboard"
      // );
    } catch (error) {
      console.error("Login error:", error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto w-full max-w-[470px]"
    >
      {/* ==================================================
          MAIN CARD
      ================================================== */}
      <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">

        {/* ==================================================
            CARD CONTENT
        ================================================== */}
        <div className="px-6 py-8 sm:px-9 sm:py-9">

          {/* ==================================================
              BRAND
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.35,
            }}
            className="flex items-center justify-center"
          >
            <div className="flex items-center gap-2.5">

              {/* Logo Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#fbbf24] shadow-[0_5px_15px_rgba(251,191,36,0.25)]">
                <Truck
                  className="h-[22px] w-[22px] text-[#111827]"
                  strokeWidth={2.5}
                />
              </div>

              {/* Logo Text */}
              <div className="text-[22px] font-black tracking-[-1.2px]">
                <span className="text-[#111827]">SWIFT</span>
                <span className="text-[#f59e0b]">SHIP</span>
              </div>

            </div>
          </motion.div>

          {/* ==================================================
              HEADING
          ================================================== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`heading-${portal}`}
              initial={{
                opacity: 0,
                y: 7,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -7,
              }}
              transition={{
                duration: 0.2,
              }}
              className="mt-6 text-center"
            >
              <h1 className="text-[24px] font-black leading-tight tracking-[-0.8px] text-[#111827] sm:text-[25px]">
                {currentPortal.title}
              </h1>

              <p className="mx-auto mt-2 max-w-[340px] text-[12.5px] leading-[1.55] text-slate-500">
                {currentPortal.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ==================================================
              PORTAL SWITCH
          ================================================== */}
          <div className="relative mt-7 flex h-[45px] rounded-full bg-slate-100 p-1">

            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
              className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-[#fbbf24] shadow-[0_3px_8px_rgba(15,23,42,0.10)] ${
                portal === "merchant"
                  ? "left-1"
                  : "left-[calc(50%+1px)]"
              }`}
            />

            <button
              type="button"
              onClick={() => handlePortalChange("merchant")}
              disabled={loading}
              className={`relative z-10 flex-1 rounded-full text-[11.5px] font-extrabold transition-colors duration-200 ${
                portal === "merchant"
                  ? "text-[#111827]"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Merchant Console
            </button>

            <button
              type="button"
              onClick={() => handlePortalChange("rider")}
              disabled={loading}
              className={`relative z-10 flex-1 rounded-full text-[11.5px] font-extrabold transition-colors duration-200 ${
                portal === "rider"
                  ? "text-[#111827]"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Rider / Hub Portal
            </button>

          </div>

          {/* ==================================================
              FORM
          ================================================== */}
          <AnimatePresence mode="wait">
            <motion.form
              key={portal}
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                x: portal === "merchant" ? -10 : 10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: portal === "merchant" ? 10 : -10,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="mt-7 space-y-5"
            >

              {/* ==================================================
                  EMAIL
              ================================================== */}
              <div className="space-y-2">
                <label
                  htmlFor="identity"
                  className="block text-[11px] font-extrabold tracking-[0.4px] text-[#24344d]"
                >
                  {currentPortal.identityLabel}
                </label>

                <div className="relative">

                  <Mail
                    className="absolute left-4 top-1/2 z-10 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                    strokeWidth={1.8}
                  />

                  <Input
                    id="identity"
                    name="identity"
                    type="email"
                    autoComplete="username"
                    placeholder={currentPortal.identityPlaceholder}
                    required
                    disabled={loading}
                    className="h-[48px] rounded-[13px] border border-slate-200 bg-white pl-11 pr-4 text-[13px] text-[#111827] shadow-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-[#fbbf24] focus-visible:ring-[3px] focus-visible:ring-[#fbbf24]/15 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                </div>
              </div>

              {/* ==================================================
                  PASSWORD
              ================================================== */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-extrabold tracking-[0.4px] text-[#24344d]"
                >
                  {currentPortal.passwordLabel}
                </label>

                <div className="relative">

                  <LockKeyhole
                    className="absolute left-4 top-1/2 z-10 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                    strokeWidth={1.8}
                  />

                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    disabled={loading}
                    className="h-[48px] rounded-[13px] border border-slate-200 bg-white pl-11 pr-11 text-[13px] tracking-wide text-[#111827] shadow-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-[#fbbf24] focus-visible:ring-[3px] focus-visible:ring-[#fbbf24]/15 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    disabled={loading}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-[#111827] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {showPassword ? (
                      <EyeOff className="h-[17px] w-[17px]" />
                    ) : (
                      <Eye className="h-[17px] w-[17px]" />
                    )}
                  </button>

                </div>
              </div>

              {/* ==================================================
                  REMEMBER / FORGOT
              ================================================== */}
              <div className="flex items-center justify-between pt-0.5">

                <label
                  htmlFor="remember"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    disabled={loading}
                    className="h-[16px] w-[16px] cursor-pointer rounded-[4px] border-slate-300 accent-[#fbbf24] disabled:cursor-not-allowed"
                  />

                  <span className="text-[11.5px] font-medium text-[#24344d]">
                    Remember me
                  </span>
                </label>

                <button
                  type="button"
                  disabled={loading}
                  className="text-[11.5px] font-bold text-[#f59e0b] transition-colors hover:text-[#d97706] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {currentPortal.forgotText}
                </button>

              </div>

              {/* ==================================================
                  SIGN IN BUTTON
              ================================================== */}
              <Button
                type="submit"
                disabled={loading}
                className="group h-[48px] w-full rounded-full bg-[#111827] text-[11.5px] font-black tracking-[0.2px] text-white shadow-[0_8px_20px_rgba(15,23,42,0.16)] transition-all duration-300 hover:bg-[#1f2937] hover:shadow-[0_10px_25px_rgba(15,23,42,0.22)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/25 border-t-[#fbbf24]" />

                    SIGNING IN...
                  </>
                ) : (
                  <>
                    <LogIn
                      className="mr-2 h-[16px] w-[16px] text-[#fbbf24]"
                      strokeWidth={2.5}
                    />

                    {currentPortal.buttonText}
                  </>
                )}
              </Button>

            </motion.form>
          </AnimatePresence>

          {/* ==================================================
              DIVIDER
          ================================================== */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">
              Secure Access
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          {/* ==================================================
              REGISTER
          ================================================== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`register-${portal}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-center"
            >
              <span className="text-[11.5px] text-[#24344d]">
                {currentPortal.registerText}{" "}
              </span>

              <Link
                href="/signup"
                className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#f59e0b] transition-colors hover:text-[#d97706]"
              >
                {currentPortal.registerLink}

                <ArrowRight
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* ==================================================
          SECURITY NOTE
      ================================================== */}
      <p className="mt-4 text-center text-[9.5px] font-medium text-slate-400">
        Protected access for authorized SwiftShip partners only.
      </p>

    </motion.div>
  );
}