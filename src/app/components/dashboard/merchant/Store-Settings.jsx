"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Store,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Globe,
  Camera,
  Save,
  ShieldCheck,
  CreditCard,
  Truck,
  Clock3,
  ShieldX,
} from "lucide-react";
import { toast } from "sonner";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";


export default function StoreSettings({merchant}) {
  const [saving, setSaving] = useState(false);

  const [storeImage, setStoreImage] = useState(
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=300"
  );

  const [formData, setFormData] = useState({
    businessName: merchant.businessName,
    ownerName: merchant.name,
    email: merchant.email,
    phone: merchant.phone,
    location: merchant.location,
    city: "Dhaka",
    postalCode: "1216",
    website: "https://aurafashion.com",
    address:
      "House 24, Road 7, Mirpur-10, Dhaka, Bangladesh",
    pickupInstructions:
      "Please call the merchant before arriving for pickup.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, PNG and WEBP images are allowed.");
      return;
    }

    if (file.size > 1024 * 1024) {
      toast.error("Maximum image size is 1 MB.");
      return;
    }

    setStoreImage(URL.createObjectURL(file));
    toast.success("Store image selected.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (saving) return;

    setSaving(true);

    try {
      // TODO:
      // Send formData to your backend/API here.

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      toast.success("Store settings updated successfully.");
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to update store settings. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 bg-[#f8fafc] font-sans">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fcb915]/10 text-[#d99b00]">
              <Store className="h-[18px] w-[18px]" />
            </div>

            <h1 className="text-xl font-black tracking-tight text-[#111827] sm:text-2xl">
              STORE SETTINGS
            </h1>
          </div>

          <p className="mt-1.5 text-xs text-slate-400 sm:text-sm">
            Manage your store information, pickup details and
            business profile.
          </p>
        </div>

       <div
  className={`flex items-center gap-2 rounded-full border px-3.5 py-2 ${
    merchant.status === "active"
      ? "border-emerald-200 bg-emerald-50"
      : merchant.status === "pending"
        ? "border-amber-200 bg-amber-50"
        : "border-red-200 bg-red-50"
  }`}
>
  <span
    className={`h-2 w-2 rounded-full ${
      merchant.status === "active"
        ? "bg-emerald-500"
        : merchant.status === "pending"
          ? "bg-amber-500"
          : "bg-red-500"
    }`}
  />

  <span
    className={`text-[10px] font-black uppercase tracking-wider ${
      merchant.status === "active"
        ? "text-emerald-600"
        : merchant.status === "pending"
          ? "text-amber-600"
          : "text-red-600"
    }`}
  >
    { merchant.status === "active"
      ? "STORE ACTIVE"
      : merchant.status === "pending"
        ? "STORE PENDING"
        : "STORE REJECTED"}
  </span>
</div>

      </div>


      {/* ==================================================
          MAIN FORM
      ================================================== */}
      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_330px]">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="space-y-6">

            {/* Store Information */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <div className="mb-6 flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fcb915]/10 text-[#d99b00]">
                  <Store className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-black uppercase tracking-wide text-[#111827]">
                    STORE INFORMATION
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Basic information customers and SwiftShip use
                    to identify your business.
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Business Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="businessName"
                    className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                  >
                    BUSINESS NAME
                  </label>

                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 bg-white pl-11 text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>
                </div>


                {/* Owner */}
                <div>
                  <label
                    htmlFor="ownerName"
                    className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                  >
                    OWNER / CONTACT PERSON
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <Input
                      id="ownerName"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 pl-11 text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>
                </div>


                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                  >
                    MOBILE PHONE
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 pl-11 text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>
                </div>


                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                  >
                    BUSINESS EMAIL
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 pl-11 text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>
                </div>


                {/* Website */}
                <div>
                  <label
                    htmlFor="website"
                    className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                  >
                    WEBSITE
                  </label>

                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400" />

                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 pl-11 text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>
                </div>

              </div>

            </div>


            {/* Business Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <div className="mb-6 flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-black uppercase tracking-wide text-[#111827]">
                    BUSINESS LOCATION
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    This address will be used for merchant pickup.
                  </p>
                </div>

              </div>


              <div className="space-y-5">

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                  >
                    FULL BUSINESS ADDRESS
                  </label>

                  <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className="resize-none rounded-xl border-2 border-slate-200 bg-white text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                  />
                </div>


                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                    >
                      AREA
                    </label>

                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 text-sm shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                    >
                      CITY
                    </label>

                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 text-sm shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="postalCode"
                      className="mb-2 block text-[10px] font-black uppercase tracking-widest text-[#24344d]"
                    >
                      POSTAL CODE
                    </label>

                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-2 border-slate-200 text-sm shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                    />
                  </div>

                </div>

              </div>

            </div>


            {/* Pickup Instructions */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

              <div className="mb-5 flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#d99b00]">
                  <Truck className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-black uppercase tracking-wide text-[#111827]">
                    PICKUP INSTRUCTIONS
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Helpful information for SwiftShip riders during
                    parcel pickup.
                  </p>
                </div>

              </div>

              <textarea
                name="pickupInstructions"
                value={formData.pickupInstructions}
                onChange={handleChange}
                rows={4}
                className="resize-none rounded-xl border-2 border-slate-200 text-sm text-[#111827] shadow-none focus-visible:border-[#fcb915] focus-visible:ring-0"
                placeholder="Example: Call the merchant before arriving..."
              />

            </div>


            {/* Save Button */}
            <div className="flex justify-end">

              <Button
                type="submit"
                disabled={saving}
                className="h-11 rounded-full bg-[#111827] px-6 text-xs font-black uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#24344d]"
              >
                {saving ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-[#fcb915]" />
                    SAVING CHANGES...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4 text-[#fcb915]" />
                    SAVE CHANGES
                  </>
                )}
              </Button>

            </div>

          </div>


          {/* ==================================================
              RIGHT SIDEBAR
          ================================================== */}
          <div className="space-y-6">

            {/* Store Profile */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <h2 className="text-sm font-black uppercase tracking-wide text-[#111827]">
                STORE PROFILE
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Your storefront identity.
              </p>


              <div className="mt-5 flex flex-col items-center">

                <div className="relative">

                  <div className="relative h-28 w-28 overflow-hidden rounded-2xl border-2 border-[#fcb915] bg-slate-100 shadow-sm">

                    <Image src={merchant.image} alt="Store profile" fill className="object-cover"
                    />

                  </div>


                  <label
                    htmlFor="store-image"
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border-2 border-white bg-[#111827] text-white shadow-md transition-colors hover:bg-[#24344d]"
                  >
                    <Camera className="h-4 w-4" />

                    <input
                      id="store-image"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>

                </div>


                <h3 className="mt-4 text-sm font-black text-[#111827]">
                  {formData.businessName}
                </h3>

                <p className="mt-1 text-[11px] text-slate-400">
                 ID: MCH-{merchant.id.slice(-5).toUpperCase()}
                </p>

              </div>

            </div>


            {/* Account Status */}
            <div className={`rounded-2xl border bg-white p-5 shadow-sm ${
  merchant.status === "active"
    ? "border-emerald-200"
    : merchant.status === "pending"
      ? "border-amber-200"
      : "border-red-200"
}`}>

              <div className="flex items-start gap-3">

                <div
  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
    merchant.status === "active"
      ? "bg-emerald-50 text-emerald-600"
      : merchant.status === "pending"
        ? "bg-amber-50 text-amber-600"
        : "bg-red-50 text-red-600"
  }`}
>
  { merchant.status === "active" ? (
    <ShieldCheck className="h-5 w-5" />
  ) : merchant.status === "pending" ? (
    <Clock3 className="h-5 w-5" />
  ) : (
    <ShieldX className="h-5 w-5" />
  )}
</div>

                <div>
  <h3 className="text-sm font-black text-[#111827]">
    {merchant.status === "active"
      ? "ACCOUNT VERIFIED"
      : merchant.status === "pending"
        ? "VERIFICATION PENDING"
        : "ACCOUNT REJECTED"}
  </h3>

  <p className="mt-1 text-xs leading-5 text-slate-400">
    {merchant.status === "active"
      ? "Your merchant account is verified and currently active."
      : merchant.status === "pending"
        ? "Your merchant account is currently under review. You will be notified once the verification is complete."
        : "Your merchant account verification was rejected. Please review your information and contact support."}
  </p>
</div>

              </div>

              <div
  className={`mt-4 rounded-xl px-3 py-2.5 ${
    merchant.status === "active"
      ? "bg-emerald-50"
      : merchant.status === "pending"
        ? "bg-amber-50"
        : "bg-red-50"
  }`}
>
  <div className="flex items-center justify-between">
    <span
      className={`text-[10px] font-black uppercase tracking-wider ${
        merchant.status === "active"
          ? "text-emerald-600"
          : merchant.status === "pending"
            ? "text-amber-600"
            : "text-red-600"
      }`}
    >
      STATUS
    </span>

    <span
      className={`rounded-full border bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${
        merchant.status === "active"
          ? "border-emerald-200 text-emerald-600"
          : merchant.status === "pending"
            ? "border-amber-200 text-amber-600"
            : "border-red-200 text-red-600"
      }`}
    >
      { merchant.status === "active"
        ? "ACTIVE"
        : merchant.status === "pending"
          ? "PENDING"
          : "REJECTED"}
    </span>
  </div>
</div>

            </div>


            {/* Pickup Schedule */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#111827]">
                    PICKUP SCHEDULE
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Default pickup availability.
                  </p>
                </div>

              </div>


              <div className="mt-4 space-y-2.5">

                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">

                  <span className="text-xs font-semibold text-slate-500">
                    Sunday - Thursday
                  </span>

                  <span className="text-[10px] font-black text-[#24344d]">
                    10 AM - 7 PM
                  </span>

                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">

                  <span className="text-xs font-semibold text-slate-500">
                    Friday
                  </span>

                  <span className="text-[10px] font-black text-rose-500">
                    CLOSED
                  </span>

                </div>

              </div>

            </div>


            {/* Payment */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#d99b00]">
                  <CreditCard className="h-5 w-5" />
                </div>

                <div>

                  <h3 className="text-sm font-black text-[#111827]">
                    PAYOUT ACCOUNT
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Default COD settlement account.
                  </p>

                </div>

              </div>


              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">

                <p className="text-xs font-black text-[#111827]">
                  City Bank Ltd.
                </p>

                <p className="mt-1 font-mono text-[10px] text-slate-400">
                  A/C: **** **** 4892
                </p>

                <span className="mt-2 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-600">
                  VERIFIED
                </span>

              </div>

            </div>

          </div>

        </div>

      </form>

    </div>
  );
}