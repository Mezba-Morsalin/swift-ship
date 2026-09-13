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
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import uploadToImage from "@/app/lib/image-bb";

export default function SignUpForm() {
  const [logo, setLogo] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());

      // ==========================================
      // MERCHANT ROLE
      // ==========================================
      const role = "merchant";

      // ==========================================
      // STATUS & PLAN
      // ==========================================
      const status = "pending";
      const plan = "free";

      // ==========================================
      // UPLOAD IMAGE TO IMGBB
      // ==========================================
      let imageUrl = "";

      if (logo) {
        try {
          imageUrl = await uploadToImage(logo);
        } catch (error) {
          console.error("Image upload error:", error);

          toast.error(
            error.message || "Failed to upload profile image."
          );

          return;
        }
      }

      // ==========================================
      // CREATE MERCHANT ACCOUNT
      // ==========================================
      const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: imageUrl,

        // Role
        role,

        // Common fields
        phone: user.phone,
        location: user.location,

        // Merchant fields
        businessName: user.business,
        status,
        plan,
      });

      // ==========================================
      // AUTH ERROR
      // ==========================================
      if (error) {
        toast.error(
          error.message ||
            "Something went wrong. Please try again."
        );

        return;
      }

      // ==========================================
      // SUCCESS
      // ==========================================
      toast.success(
        "Merchant account created successfully!"
      );
    } catch (error) {
      console.error("Signup error:", error);

      toast.error(
        error.message ||
          "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full max-w-[500px]"
    >
      <div className="rounded-[38px] border border-white bg-white px-7 py-9 shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:px-10">

        {/* ==================================================
            LOGO
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
          }}
          className="mb-4 flex items-center justify-center gap-2"
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
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <h2 className="text-[22px] font-black tracking-[-0.7px] text-[#111827]">
              CREATE MERCHANT ACCOUNT
            </h2>

            <p className="mx-auto mt-2 max-w-[390px] text-[13px] leading-5 text-slate-500">
              Register your business and start managing deliveries with SwiftShip.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ==================================================
            FORM
        ================================================== */}
        <AnimatePresence mode="wait">
          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="mt-7 space-y-4"
          >

            {/* ==================================================
                NAME
            ================================================== */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                OWNER / CONTACT PERSON
              </label>

              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            {/* ==================================================
                BUSINESS NAME
            ================================================== */}
            <div>
              <label
                htmlFor="business"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                BUSINESS NAME
              </label>

              <div className="relative">
                <Building2
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Enter your business name"
                  required
                  className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            {/* ==================================================
                PHONE + EMAIL
            ================================================== */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
                >
                  MOBILE PHONE
                </label>

                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                    strokeWidth={1.8}
                  />

                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="01700-000000"
                    autoComplete="tel"
                    required
                    className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
                >
                  BUSINESS EMAIL
                </label>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                    strokeWidth={1.8}
                  />

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seller@store.com"
                    autoComplete="email"
                    required
                    className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                  />
                </div>
              </div>

            </div>

            {/* ==================================================
                PASSWORD
            ================================================== */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                CREATE PASSWORD
              </label>

              <div className="relative">
                <LockKeyhole
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a secure password"
                  autoComplete="new-password"
                  required
                  className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 pr-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
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

            {/* ==================================================
                PHOTO UPLOAD
            ================================================== */}
            <div className="w-full space-y-3">

              {/* Label */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-800">
                  Upload Photo
                </label>

                {logo && (
                  <button
                    type="button"
                    onClick={() => {
                      setLogo(null);
                    }}
                    className="text-xs font-medium text-red-500 transition-colors hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Upload Area */}
              <label
                htmlFor="photo-upload"
                className={`group relative flex min-h-[150px] w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-200 ${
                  logo
                    ? "border-amber-300 bg-amber-50/40"
                    : "border-slate-200 bg-slate-50/50 hover:border-[#fcb915] hover:bg-amber-50/40"
                }`}
              >
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (!file) return;

                    const allowedTypes = [
                      "image/jpeg",
                      "image/png",
                      "image/webp",
                    ];

                    if (!allowedTypes.includes(file.type)) {
                      toast.error(
                        "Only JPG, PNG and WEBP images are allowed."
                      );

                      e.target.value = "";
                      return;
                    }

                    if (file.size > 1024 * 1024) {
                      toast.error(
                        "Maximum image size is 1 MB."
                      );

                      e.target.value = "";
                      return;
                    }

                    setLogo(file);
                  }}
                />

                {logo ? (
                  /* ==============================
                     IMAGE PREVIEW
                  ============================== */
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <Image
                        src={URL.createObjectURL(logo)}
                        alt="Uploaded photo preview"
                        width={72}
                        height={72}
                        className="h-24 w-24 rounded-2xl border-2 border-white object-cover shadow-md"
                      />

                      {/* Success indicator */}
                      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white shadow-sm">
                        ✓
                      </div>
                    </div>

                    <p className="mt-3 max-w-[260px] truncate text-xs font-semibold text-slate-700">
                      {logo.name}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Click to replace photo
                    </p>
                  </div>
                ) : (
                  /* ==============================
                     EMPTY UPLOAD STATE
                  ============================== */
                  <>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#fcb915] shadow-sm ring-1 ring-slate-100 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md">
                      <FiImage className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-semibold text-slate-700">
                      Upload your photo
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Click to browse from your device
                    </p>
                  </>
                )}
              </label>

              {/* Helper Text */}
              <div className="flex items-center justify-between px-1">
                <p className="text-[11px] text-slate-400">
                  JPG, PNG or WEBP
                </p>

                <p className="text-[11px] font-medium text-slate-400">
                  Max 1 MB
                </p>
              </div>
            </div>

            {/* ==================================================
                LOCATION
            ================================================== */}
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-[11px] font-black uppercase tracking-wide text-[#24344d]"
              >
                BUSINESS LOCATION
              </label>

              <div className="relative">
                <MapPin
                  className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400"
                  strokeWidth={1.8}
                />

                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Dhaka, Bangladesh"
                  required
                  className="h-[45px] rounded-xl border-2 border-slate-200 pl-11 text-[13px] shadow-none placeholder:text-slate-400 focus-visible:border-[#fbbf24] focus-visible:ring-0"
                />
              </div>
            </div>

            {/* ==================================================
                TERMS
            ================================================== */}
            <div className="flex items-start gap-2 pt-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-[1px] h-[16px] w-[16px] cursor-pointer accent-[#fbbf24]"
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

            {/* ==================================================
                SUBMIT BUTTON
            ================================================== */}
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
                  CREATE MERCHANT ACCOUNT
                </>
              )}
            </Button>

          </motion.form>
        </AnimatePresence>

        {/* ==================================================
            DIVIDER
        ================================================== */}
        <div className="my-7 h-px bg-slate-100" />

        {/* ==================================================
            SIGN IN
        ================================================== */}
        <AnimatePresence mode="wait">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center text-[12px] text-[#24344d]"
          >
            Already have a merchant account?{" "}
            <Link
              href="/signin"
              className="font-bold text-[#f59e0b] transition hover:text-[#d97706]"
            >
              Sign In
            </Link>
          </motion.p>
        </AnimatePresence>

      </div>
    </motion.div>
  );
}