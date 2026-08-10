"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  LockKeyhole,
  Building2,
  MapPin,
  Eye,
  EyeOff,
  UserPlus,
  Truck,
} from "lucide-react";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

import { toast } from "sonner";
import { authClient } from "@/app/lib/auth-client";

const signupData = {
  merchant: {
    title: "CREATE MERCHANT ACCOUNT",
    description:
      "Register your business and start managing deliveries with SwiftShip.",

    nameLabel: "OWNER / CONTACT PERSON",
    namePlaceholder: "Enter your full name",

    businessLabel: "BUSINESS NAME",
    businessPlaceholder: "Enter your business name",

    phoneLabel: "MOBILE PHONE",
    phonePlaceholder: "01700-000000",

    emailLabel: "BUSINESS EMAIL",
    emailPlaceholder: "seller@store.com",

    passwordLabel: "CREATE PASSWORD",
    passwordPlaceholder: "Create a secure password",

    locationLabel: "BUSINESS LOCATION",
    locationPlaceholder: "Dhaka, Bangladesh",

    buttonText: "CREATE MERCHANT ACCOUNT",

    bottomText: "Already have a merchant account?",
    bottomLink: "Sign In",
  },

  rider: {
    title: "APPLY AS A RIDER",
    description:
      "Join SwiftShip and start delivering packages across your service area.",

    nameLabel: "FULL NAME",
    namePlaceholder: "Enter your full name",

    businessLabel: "NATIONAL ID / NID",
    businessPlaceholder: "Enter your NID number",

    phoneLabel: "MOBILE PHONE",
    phonePlaceholder: "01700-000000",

    emailLabel: "EMAIL ADDRESS",
    emailPlaceholder: "rider@example.com",

    passwordLabel: "CREATE PASSWORD",
    passwordPlaceholder: "Create a secure password",

    locationLabel: "SERVICE AREA",
    locationPlaceholder: "Enter your service area",

    buttonText: "SUBMIT RIDER APPLICATION",

    bottomText: "Already registered as a rider?",
    bottomLink: "Sign In",
  },
};

export default function SignUpForm() {
  const [portal, setPortal] = useState("merchant");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentForm = signupData[portal];

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

    const role = portal === "merchant" ? "merchant" : "rider";

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image || "",
      role,
    });

    if (error) {
      toast.error(
        error.message || "Something went wrong. Please try again."
      );
      return;
    }

    toast.success(
      portal === "merchant"
        ? "Merchant account created successfully!"
        : "Rider account created successfully!"
    );

    console.log(data);


  } catch (error) {
    console.error(error);

    toast.error(
      "Unable to create your account. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <motion.div initial={{ opacity: 0, y: 25, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full max-w-[500px]"
    >
      <div className="rounded-[38px] border border-white bg-white px-7 py-9 shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:px-10">

        {/* ==================================================
            LOGO
        ================================================== */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} className="mb-4 flex items-center justify-center gap-2"
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

        {/* ==================================================
            HEADING
        ================================================== */}
        <AnimatePresence mode="wait">
          <motion.div key={`${portal}-heading`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="text-center"
          >
            <h2 className="text-[22px] font-black tracking-[-0.7px] text-[#111827]">
              {currentForm.title}
            </h2>

            <p className="mx-auto mt-2 max-w-[390px] text-[13px] leading-5 text-slate-500">
              {currentForm.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ==================================================
            PORTAL TOGGLE
        ================================================== */}
        <div className="relative mt-7 flex h-[45px] rounded-full bg-[#f1f2f4] p-1">

  {/* Animated Active Pill */}
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

  {/* Merchant */}
  <button
    type="button"
    onClick={() => handlePortalChange("merchant")}
    disabled={loading}
    className={`relative z-10 flex-1 rounded-full text-[12px] font-bold transition-colors duration-200 ${
      portal === "merchant"
        ? "text-[#111827]"
        : "text-slate-600 hover:text-[#111827]"
    }`}
  >
    Merchant Registration
  </button>

  {/* Rider */}
  <button
    type="button"
    onClick={() => handlePortalChange("rider")}
    disabled={loading}
    className={`relative z-10 flex-1 rounded-full text-[12px] font-bold transition-colors duration-200 ${
      portal === "rider"
        ? "text-[#111827]"
        : "text-slate-600 hover:text-[#111827]"
    }`}
  >
    Rider Application
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
            className="mt-7 space-y-4"
          >

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                {currentForm.nameLabel}
              </label>

              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input id="name" name="name" type="text" placeholder={currentForm.namePlaceholder} autoComplete="name" required className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="business"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                {currentForm.businessLabel}
              </label>

              <div className="relative">
                <Building2
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input id="business" name="business" type="text" placeholder={currentForm.businessPlaceholder} required className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
                >
                  {currentForm.phoneLabel}
                </label>

                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                    strokeWidth={1.8}
                  />

                  <Input id="phone" name="phone" type="tel" placeholder={currentForm.phonePlaceholder} autoComplete="tel" required className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
                >
                  {currentForm.emailLabel}
                </label>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                    strokeWidth={1.8}
                  />

                  <Input id="email" name="email" type="email" placeholder={currentForm.emailPlaceholder} autoComplete="email" required className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                  />
                </div>
              </div>

            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                {currentForm.passwordLabel}
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder={currentForm.passwordPlaceholder} autoComplete="new-password" required className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 pr-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
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

            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                {currentForm.locationLabel}
              </label>

              <div className="relative">
                <MapPin
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input id="location" name="location" type="text" placeholder={currentForm.locationPlaceholder} required className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input id="terms" name="terms" type="checkbox" required className="mt-[1px] h-[16px] w-[16px] cursor-pointer accent-[#fbbf24]"
              />

              <label
                htmlFor="terms"
                className="cursor-pointer text-[11px] leading-4 text-slate-500"
              >
                I agree to SwiftShip&apos;s{" "}
                <button
                  type="button"
                  className="font-bold text-[#f59e0b] hover:text-[#d97706]"
                >
                  Terms & Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="font-bold text-[#f59e0b] hover:text-[#d97706]"
                >
                  Privacy Policy
                </button>
                .
              </label>
            </div>

            <Button
  type="submit"
  disabled={loading}
  className="h-[47px] w-full rounded-full bg-[#111827]"
>
  {loading ? (
    <>
      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-[#fbbf24]" />
      Creating Account...
    </>
  ) : (
    <>
      <UserPlus className="mr-2 h-4 w-4 text-[#fbbf24]" />
      {currentForm.buttonText}
    </>
  )}
</Button>

          </motion.form>
        </AnimatePresence>

        <div className="my-7 h-px bg-slate-100" />

        <AnimatePresence mode="wait">
          <motion.p key={`${portal}-bottom`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="text-center text-[12px] text-[#24344d]"
          >
            {currentForm.bottomText}{" "}
            <Link href="/signin"><button
              type="button"
              className="font-bold text-[#f59e0b] transition hover:text-[#d97706]"
            >
              {currentForm.bottomLink}
            </button></Link>
          </motion.p>
        </AnimatePresence>

      </div>
    </motion.div>
  );
}