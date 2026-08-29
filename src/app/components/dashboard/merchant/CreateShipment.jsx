
"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  House,
  MapPin,
  MessageSquare,
  Package,
  Phone,
  Send,
  ShieldCheck,
  User,
  Weight,
} from "lucide-react";
import { toast } from "sonner";
import { createShipment } from "@/app/lib/shipment-api";

const districts = [
  "Dhaka Metropolitan (Inside City)",
  "Dhaka (Outside City)",
  "Chattogram",
  "Sylhet",
  "Gazipur",
  "Narayanganj",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
];

const categories = [
  "Apparel & Fashion",
  "Electronics",
  "Beauty & Personal Care",
  "Home & Living",
  "Books & Stationery",
  "Food & Grocery",
  "Other",
];

export default function CreateShipment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "Dhaka Metropolitan (Inside City)",
    category: "Apparel & Fashion",
    address: "",
    instructions: "",
    cod: "1200",
    weight: "1",
  });

  const [loading, setLoading] = useState(false);

  // ==============================
  // Delivery Charge Calculation
  // ==============================
  const deliveryCharge = useMemo(() => {
  const weight = Number(form.weight) || 0;

  if (weight <= 0) return 0;

  let baseCharge;

  if (form.district === "Dhaka Metropolitan (Inside City)") {
    baseCharge = 80;
  } else {
    baseCharge = 150;
  }

  if (weight <= 1) {
    return baseCharge;
  }

  const extraWeight = Math.ceil(weight) - 1;

  return baseCharge + extraWeight * 20;
}, [form.district, form.weight]);

  const codAmount = Number(form.cod) || 0;

  const netPayout = Math.max(codAmount - deliveryCharge, 0);

  // ==============================
  // Update Form Field
  // ==============================
  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ==============================
  // Submit Shipment
  // ==============================
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  try {
    const shipmentPayload = {
      recipientName: form.name,
      recipientPhone: form.phone,
      destination: form.district,
      category: form.category,
      address: form.address,
      instructions: form.instructions || "",
      codAmount: Number(form.cod) || 0,
      weight: Number(form.weight) || 0,

      // IMPORTANT
      deliveryCharge: Number(deliveryCharge),

      status: "pending",
    };

    console.log("========== SHIPMENT PAYLOAD ==========");
    console.log(shipmentPayload);
    console.log("Delivery Charge:", deliveryCharge);
    console.log("District:", form.district);
    console.log("Weight:", form.weight);

    const data = await createShipment(shipmentPayload);

    toast.success("Shipment created successfully!", {
      description: `Waybill ${
        data?.shipment?.waybill || "created"
      } is now pending pickup.`,
    });

    console.log("Shipment created:", data);
  } catch (error) {
    console.error("Shipment error:", error);

    toast.error("Failed to create shipment", {
      description:
        error?.message ||
        "Something went wrong. Please try again.",
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-6 font-sans text-[#111827] sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
      >
        {/* Header */}
        <div className="px-6 pb-6 pt-7 sm:px-10 sm:pt-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#fcb915]/40 bg-[#fff8df] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#a56f00]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#fcb915] text-[#111827]">
                  <Send className="h-2.5 w-2.5" />
                </span>
                Instant Waybill Generator
              </div>

              <h1 className="mt-4 text-[28px] font-black leading-tight tracking-[-0.035em] text-[#111827] sm:text-[36px]">
                Book New Doorstep Parcel
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Generate a live tracking number and automatically
                register the consignment with SwiftShip&apos;s
                logistics network.
              </p>
            </div>

            <div className="hidden w-[255px] shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:block">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff8df] text-[#e5a500]">
                  <ShieldCheck
                    className="h-5 w-5"
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <p className="text-sm font-black text-[#24344d]">
                    Secure &amp; Reliable
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Your shipment is safe with SwiftShip&apos;s
                    secure network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipient Information */}
        <section className="mx-6 rounded-2xl border border-slate-200 bg-white p-5 sm:mx-10 sm:p-6">
          <SectionHeading
            number="1"
            title="Recipient Information"
          />

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field
              label="Customer Full Name"
              required
              icon={User}
            >
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                placeholder="e.g. Tanvir Hossain"
                required
                className={inputClass}
              />
            </Field>

            <Field
              label="Mobile Phone (For OTP SMS)"
              required
              icon={Phone}
            >
              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                placeholder="e.g. +880 1712-000000"
                required
                className={inputClass}
              />
            </Field>

            <Field
              label="Destination District"
              required
              icon={MapPin}
            >
              <SelectField
                value={form.district}
                onChange={(value) =>
                  updateField("district", value)
                }
                options={districts}
              />
            </Field>

            <Field
              label="Item Category"
              required
              icon={Package}
            >
              <SelectField
                value={form.category}
                onChange={(value) =>
                  updateField("category", value)
                }
                options={categories}
              />
            </Field>

            <Field
              label="Full Doorstep Address"
              required
              icon={House}
              full
            >
              <textarea
                value={form.address}
                onChange={(e) =>
                  updateField("address", e.target.value)
                }
                placeholder="e.g. House #14, Road #5, Block B, Gulshan-2, Dhaka"
                required
                rows={3}
                className={`${textareaClass} min-h-[74px]`}
              />
            </Field>

            <Field
              label="Special Rider Instructions"
              optional
              icon={MessageSquare}
              full
            >
              <textarea
                value={form.instructions}
                onChange={(e) =>
                  updateField("instructions", e.target.value)
                }
                placeholder="e.g. Call before delivery, fragile item, leave at door"
                rows={2}
                className={`${textareaClass} min-h-[62px]`}
              />
            </Field>
          </div>
        </section>

        {/* Parcel Details */}
        <section className="mx-6 mt-3 rounded-2xl border border-slate-200 bg-white p-5 sm:mx-10 sm:p-6">
          <SectionHeading
            number="2"
            title="Parcel Weight & COD Amount"
          />

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field
              label="Collect Cash on Delivery (৳ COD)"
              icon={Package}
            >
              <input
                type="number"
                min="0"
                step="1"
                value={form.cod}
                onChange={(e) =>
                  updateField("cod", e.target.value)
                }
                placeholder="1200"
                className={inputClass}
              />
            </Field>

            <Field
              label="Parcel Weight (KG)"
              icon={Weight}
            >
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={form.weight}
                onChange={(e) =>
                  updateField("weight", e.target.value)
                }
                placeholder="1"
                className={inputClass}
              />
            </Field>
          </div>

          {/* Summary */}
          <div className="mt-6 rounded-2xl bg-[#111c30] p-5 sm:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-300">
                  Estimated Delivery Charge
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-black tracking-tight text-[#fcb915]">
                    ৳ {deliveryCharge}
                  </span>

                  <span className="pb-1 text-xs font-medium text-slate-300">
                    (0% COD Commission)
                  </span>
                </div>

                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <Check
                    className="h-3.5 w-3.5"
                    strokeWidth={3}
                  />

                  Net Merchant Payout: ৳{" "}
                  {netPayout.toLocaleString()}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#fcb915] px-7 text-xs font-black uppercase tracking-[0.08em] text-[#111827] shadow-[0_8px_20px_rgba(252,185,21,0.22)] transition-all hover:bg-[#f5b20c] hover:shadow-[0_10px_24px_rgba(252,185,21,0.28)] disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[360px]"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#111827]/25 border-t-[#111827]" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Send
                      className="h-4 w-4"
                      strokeWidth={2.5}
                    />
                    Confirm &amp; Generate Waybill
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        <div className="h-6 sm:h-8" />
      </form>
    </div>
  );
}

const inputClass =
  "h-[52px] w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#24344d] outline-none transition placeholder:text-slate-400 focus:border-[#fcb915] focus:ring-4 focus:ring-[#fcb915]/10";

const textareaClass =
  "w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#24344d] outline-none transition placeholder:text-slate-400 focus:border-[#fcb915] focus:ring-4 focus:ring-[#fcb915]/10";

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fcb915] text-xs font-black text-[#111827]">
        {number}
      </span>

      <h2 className="text-[15px] font-black tracking-[-0.01em] text-[#16243b] sm:text-base">
        {title}
      </h2>
    </div>
  );
}

function Field({
  label,
  required,
  optional,
  icon: Icon,
  full,
  children,
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.04em] text-[#24344d]">
        {label}{" "}

        {required ? (
          <span className="text-[#e7a900]">*</span>
        ) : optional ? (
          <span className="font-semibold normal-case tracking-normal text-slate-400">
            (Optional)
          </span>
        ) : null}
      </label>

      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-l-xl bg-slate-50 text-slate-500">
            <Icon
              className="h-[17px] w-[17px]"
              strokeWidth={1.9}
            />
          </div>
        )}

        <div
          className={
            Icon
              ? "[&>input]:pl-16 [&>select]:pl-16 [&>textarea]:pl-16"
              : ""
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function SelectField({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} appearance-none pr-11`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#111827]" />
    </div>
  );
}