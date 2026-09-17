"use client";

import { useEffect, useState } from "react";
import {
  UserPlus,
  ImagePlus,
  User,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Building2,
  Bike,
  CalendarDays,
  Car,
  Home,
  RefreshCw,
} from "lucide-react";

import uploadToImage from "@/app/lib/image-bb";
import Image from "next/image";
import { useRouter } from "next/navigation";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  nid: "",
  division: "",
  district: "",
  area: "",
  address: "",
  hubCode: "",
  riderType: "",
  vehicleType: "",
  joiningDate: "",
};

const divisions = [
  "Dhaka",
  "Chattogram",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
  "Rangpur",
  "Mymensingh",
];

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
        <Icon size={19} />
      </div>

      <div>
        <h2 className="text-sm font-extrabold text-slate-900 sm:text-base">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold text-slate-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
        )}

        <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} className={`h-11 w-full rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10 ${
            Icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  required = false,
  disabled = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold text-slate-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-slate-400"
          />
        )}

        <select id={name} name={name} value={value} onChange={onChange} required={required} disabled={disabled} className={`h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60 ${
            Icon ? "pl-10 pr-10" : "px-4 pr-10"
          }`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
          ▼
        </span>
      </div>
    </div>
  );
}

export default function AddRiderPage() {
  const [formData, setFormData] = useState(initialFormData);

  const [hubs, setHubs] = useState([]);
  const [loadingHubs, setLoadingHubs] = useState(true);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  // =========================
  // Fetch Hubs
  // =========================
  const fetchHubs = async () => {
    try {
      setLoadingHubs(true);
      setError("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/hubs`
      );

      if (!res.ok) {
        throw new Error("Failed to load hubs.");
      }

      const data = await res.json();

      console.log("Hubs:", data);

      setHubs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch hubs error:", error);
      setError(error?.message || "Failed to load hubs.");
    } finally {
      setLoadingHubs(false);
    }
  };

  useEffect(() => {
    fetchHubs();
  }, []);

  // =========================
  // Input Change
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage("");
    setError("");
  };

  // =========================
  // Image Change
  // =========================
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB.");
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));

    setError("");
    setMessage("");
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setUploading(true);
    setError("");
    setMessage("");

    try {
      // -------------------------
      // Upload image to ImgBB
      // -------------------------
      let imageUrl = "";

      if (image) {
        imageUrl = await uploadToImage(image);
      }

      // -------------------------
      // Rider Data
      // -------------------------
      const riderData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        nid: formData.nid.trim(),

        division: formData.division,
        district: formData.district,
        area: formData.area.trim(),
        address: formData.address.trim(),

        hubCode: formData.hubCode,

        riderType: formData.riderType,
        vehicleType: formData.vehicleType,
        joiningDate: formData.joiningDate,

        image: imageUrl,
      };

      console.log("Rider Data:", riderData);

      // -------------------------
      // Create Rider
      // -------------------------
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/riders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(riderData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Failed to add rider."
        );
      }

      console.log("Rider Created:", data);

      setMessage("Rider added successfully.");

      // Reset form
      setFormData(initialFormData);
      setImage(null);
      setImagePreview("");

      router.push("/dashboard/admin/riders");
      router.refresh();

      const fileInput =
        document.getElementById("rider-image");

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Add rider error:", error);

      setError(
        error?.message ||
          "Something went wrong while adding the rider."
      );
    } finally {
      setUploading(false);
    }
  };

  // =========================
  // Reset
  // =========================
  const handleReset = () => {
    setFormData(initialFormData);
    setImage(null);
    setImagePreview("");
    setError("");
    setMessage("");

    const fileInput =
      document.getElementById("rider-image");

    if (fileInput) {
      fileInput.value = "";
    }
  };

  // =========================
  // Dynamic Hub Options
  // =========================
  const hubOptions = hubs
    .filter(
      (hub) =>
        hub?.operationalStatus === "active" ||
        !hub?.operationalStatus
    )
    .map((hub) => ({
      value: hub.hubCode,
      label: `${hub.hubName} (${hub.hubCode})`,
    }));

    const selectedHub = hubs.find(
  (hub) => hub.hubCode === formData.hubCode
);

  return (
    <main className="min-h-screen bg-slate-50 p-3 sm:p-5 lg:p-6">
      <div className="mx-auto w-full max-w-6xl">

        {/* =========================
            Header
        ========================= */}
        <div className="mb-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:mb-6 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f172a] text-amber-400 shadow-md sm:h-14 sm:w-14 sm:rounded-2xl">
                <UserPlus size={22} />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl lg:text-2xl">
                    Add New Rider
                  </h1>

                  <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-600">
                    Rider Management
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Register a new rider and assign them to a Swift Ship hub.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            Success Message
        ========================= */}
        {message && (
          <div className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-600">
            {message}
          </div>
        )}

        {/* =========================
            Error Message
        ========================= */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* =========================
              Rider Information
          ========================= */}
          <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">

            <SectionHeader icon={User} title="Rider Information" description="Basic personal and contact information of the rider."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter rider name" icon={User} required
              />

              <InputField label="Email Address" name="email" value={formData.email} onChange={handleChange} placeholder="rider@example.com" type="email" icon={Mail} required
              />

              <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} placeholder="01XXXXXXXXX" type="tel" icon={Phone} required
              />

              <InputField label="NID Number" name="nid" value={formData.nid} onChange={handleChange} placeholder="Enter NID number" icon={CreditCard} required
              />

            </div>

            {/* Profile Image */}
            <div className="mt-6">

              <label className="mb-2 block text-xs font-bold text-slate-700">
                Profile Image
              </label>

              <label
                htmlFor="rider-image"
                className="flex min-h-[160px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 transition hover:border-amber-300 hover:bg-amber-50/30"
              >
                {imagePreview ? (
                  <div className="relative">

                    <Image src={imagePreview} alt="Rider preview" width={100} height={100} className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-md sm:h-28 sm:w-28"
                    />

                    <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white shadow">
                      ✓
                    </div>

                  </div>
                ) : (
                  <>
                    <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                      <ImagePlus size={20} />
                    </div>

                    <p className="text-sm font-semibold text-slate-700">
                      Upload rider photo
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      JPG, PNG or WEBP — Max 5MB
                    </p>
                  </>
                )}

                <input id="rider-image" type="file" accept="image/png,image/jpeg,image/webp" onChange={handleImageChange} className="hidden"
                />

              </label>
            </div>

          </section>

          {/* =========================
              Address Information
          ========================= */}
          <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">

            <SectionHeader icon={MapPin} title="Address Information" description="Add the rider's current residential and working area."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <SelectField label="Division" name="division" value={formData.division} onChange={handleChange} placeholder="Select division" icon={MapPin} required options={divisions.map((division) => ({
                  value: division,
                  label: division,
                }))}
              />

              <InputField label="District" name="district" value={formData.district} onChange={handleChange} placeholder="Enter district" icon={Building2} required
              />

              <InputField label="Area" name="area" value={formData.area} onChange={handleChange} placeholder="e.g. Mirpur, Uttara, Dhanmondi" icon={MapPin} required
              />

              <InputField label="Full Address" name="address" value={formData.address} onChange={handleChange} placeholder="House, Road, Area..." icon={Home} required
              />

            </div>

          </section>

          {/* =========================
              Rider & Hub Assignment
          ========================= */}
          <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6 lg:p-7">

            <SectionHeader
              icon={Bike}
              title="Rider & Hub Assignment"
              description="Set rider type, vehicle and assign the rider to a hub."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Rider Type */}
              <SelectField label="Rider Type" name="riderType" value={formData.riderType} onChange={handleChange} placeholder="Select rider type" icon={User} required options={[
                  {
                    value: "full-time",
                    label: "Full Time",
                  },
                  {
                    value: "part-time",
                    label: "Part Time",
                  },
                  {
                    value: "contract",
                    label: "Contract",
                  },
                ]}
              />

              {/* Vehicle Type */}
              <SelectField label="Vehicle Type" name="vehicleType" value={formData.vehicleType} onChange={handleChange} placeholder="Select vehicle type" icon={Car} required options={[
                  {
                    value: "bike",
                    label: "Bike",
                  },
                  {
                    value: "bicycle",
                    label: "Bicycle",
                  },
                  {
                    value: "motorcycle",
                    label: "Motorcycle",
                  },
                  {
                    value: "van",
                    label: "Van",
                  },
                ]}
              />

              {/* Dynamic Hub */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="hubCode"
                    className="block text-xs font-bold text-slate-700"
                  >
                    Assign Hub
                    <span className="ml-1 text-red-500">*</span>
                  </label>

                  <button type="button" onClick={fetchHubs} disabled={loadingHubs} className="flex items-center gap-1 text-[10px] font-bold text-slate-400 transition hover:text-amber-500 disabled:cursor-not-allowed"
                  >
                    <RefreshCw
                      size={12}
                      className={
                        loadingHubs
                          ? "animate-spin"
                          : ""
                      }
                    />
                    Refresh
                  </button>
                </div>

                <div className="relative">

                  <Building2
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-slate-400"
                  />

                  <select id="hubCode" name="hubCode" value={formData.hubCode} onChange={handleChange} required disabled={loadingHubs} className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">
                      {loadingHubs
                        ? "Loading hubs..."
                        : hubs.length === 0
                        ? "No hubs available"
                        : "Select a hub"}
                    </option>

                    {hubOptions.map((hub) => (
                      <option
                        key={hub.value}
                        value={hub.value}
                      >
                        {hub.label}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                    ▼
                  </span>

                </div>

                {selectedHub && (
  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      {/* Hub Info */}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <Building2
            size={15}
            className="shrink-0 text-amber-500"
          />

          <p className="text-sm font-bold text-slate-800">
            {selectedHub.hubName}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
          <span>
            Code:{" "}
            <strong className="text-slate-700">
              {selectedHub.hubCode}
            </strong>
          </span>

          <span>
            Division:{" "}
            <strong className="text-slate-700">
              {selectedHub.division}
            </strong>
          </span>

          <span>
            District:{" "}
            <strong className="text-slate-700">
              {selectedHub.district}
            </strong>
          </span>
        </div>

        <p className="mt-2 text-[11px] text-slate-500">
          <span className="font-semibold text-slate-600">
            Area:
          </span>{" "}
          {selectedHub.area}
        </p>

        <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
          <span className="font-semibold text-slate-500">
            Address:
          </span>{" "}
          {selectedHub.address}
        </p>
      </div>

      {/* Status */}
      <span className="w-fit shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
        {selectedHub.operationalStatus}
      </span>
    </div>
  </div>
)}
              </div>

              {/* Joining Date */}
              <InputField label="Joining Date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} type="date" icon={CalendarDays} required
              />

            </div>

            {/* Pending Info */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">

              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <span className="text-sm font-black">
                  !
                </span>
              </div>

              <div>
                <p className="text-sm font-bold text-amber-800">
                  Rider verification pending
                </p>

                <p className="mt-1 text-xs leading-relaxed text-amber-700">
                  Newly added riders will automatically
                  be created with{" "}
                  <strong>pending</strong> status.
                  An admin can verify and activate the
                  rider later.
                </p>
              </div>

            </div>

          </section>

          {/* =========================
              Actions
          ========================= */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button type="button" onClick={handleReset} disabled={uploading} className="h-11 w-full rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              Reset
            </button>

            <button type="submit" disabled={uploading || loadingHubs} className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-7 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-amber-500 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {uploading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
                  Processing...
                </>
              ) : (
                <>
                  <UserPlus size={17} />
                  Add Rider
                </>
              )}
            </button>

          </div>

        </form>
      </div>
    </main>
  );
}