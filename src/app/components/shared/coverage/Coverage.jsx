"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaMapMarkedAlt,
  FaCity,
  FaBuilding,
  FaMapMarkerAlt,
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaPhoneAlt,
  FaPlus,
  FaBox,
} from "react-icons/fa";

// ==================================================
// BANGLADESH DISTRICT DATA
// ==================================================

const divisions = {
  Dhaka: [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
  ],
  Chattogram: [
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Cumilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachhari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
  ],
  Rajshahi: [
    "Bogura",
    "Chapainawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
  ],
  Khulna: [
    "Bagerhat",
    "Chuadanga",
    "Jashore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
  ],
  Barishal: [
    "Barguna",
    "Barishal",
    "Bhola",
    "Jhalokati",
    "Patuakhali",
    "Pirojpur",
  ],
  Sylhet: [
    "Habiganj",
    "Moulvibazar",
    "Sunamganj",
    "Sylhet",
  ],
  Rangpur: [
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
  ],
  Mymensingh: [
    "Jamalpur",
    "Mymensingh",
    "Netrokona",
    "Sherpur",
  ],
};

// ==================================================
// COVERAGE CATEGORIES
// ==================================================

const coverageTypes = [
  {
    title: "City Wards",
    subtitle: "City Corporation Areas",
    description: "Delivery coverage across city corporation wards.",
    time: "Same Day / Next Day",
    icon: FaCity,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Town Wards",
    subtitle: "Municipality Areas",
    description: "Reliable parcel delivery across municipality towns.",
    time: "1–2 Days",
    icon: FaBuilding,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Upazila HQ",
    subtitle: "Upazila Headquarters",
    description: "Delivery services reaching upazila headquarters.",
    time: "2–3 Days",
    icon: FaMapMarkedAlt,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Union Areas",
    subtitle: "Rural Delivery Points",
    description: "Extending delivery services to rural communities.",
    time: "3–4 Days",
    icon: FaMapMarkerAlt,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

// ==================================================
// HUB DIRECTORY
// Replace with actual hub data from your backend.
// ==================================================

const hubs = [
  {
    name: "Dhaka Central Hub",
    area: "Dhaka",
    phone: "09678-045045",
  },
  {
    name: "Chattogram Hub",
    area: "Chattogram",
    phone: "09678-045045",
  },
  {
    name: "Sylhet Hub",
    area: "Sylhet",
    phone: "09678-045045",
  },
  {
    name: "Rajshahi Hub",
    area: "Rajshahi",
    phone: "09678-045045",
  },
];

// ==================================================
// ANIMATION SETTINGS
// ==================================================

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

// ==================================================
// COVERAGE PAGE
// ==================================================

export default function Coverage() {
  const [selectedDivision, setSelectedDivision] = useState("Dhaka");
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");

  const [districtSearch, setDistrictSearch] = useState("");
  const [hubSearch, setHubSearch] = useState("");

  const [showAllDistricts, setShowAllDistricts] = useState(false);

  // ==================================================
  // ALL DISTRICTS
  // ==================================================

  const allDistricts = useMemo(() => {
    return Object.entries(divisions).flatMap(
      ([division, districts]) =>
        districts.map((district) => ({
          name: district,
          division,
        }))
    );
  }, []);

  // ==================================================
  // DISTRICT SEARCH
  // ==================================================

  const filteredDistricts = useMemo(() => {
    return allDistricts.filter((district) =>
      district.name.toLowerCase().includes(districtSearch.toLowerCase())
    );
  }, [allDistricts, districtSearch]);

  // ==================================================
  // HUB SEARCH
  // ==================================================

  const filteredHubs = useMemo(() => {
    return hubs.filter(
      (hub) =>
        hub.name.toLowerCase().includes(hubSearch.toLowerCase()) ||
        hub.area.toLowerCase().includes(hubSearch.toLowerCase())
    );
  }, [hubSearch]);

  // ==================================================
  // SELECT DISTRICT
  // ==================================================

  const handleDistrictSelect = (district, division) => {
    setSelectedDistrict(district);
    setSelectedDivision(division);
    setDistrictSearch("");
  };

  // ==================================================
  // RETURN
  // ==================================================

  return (
    <main className="w-full overflow-hidden bg-slate-50/50">

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-20 sm:py-24 lg:py-28">
  <div className="mx-auto max-w-5xl text-center">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Badge */}
      <span className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#fcb915] px-5 py-2 text-[11px] font-black tracking-wider text-slate-900 shadow-sm">
        <FaMapMarkerAlt />
        OUR DELIVERY NETWORK
      </span>

      {/* Heading */}
      <h1 className="text-4xl font-black uppercase leading-[1.12] tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
        DELIVERY COVERAGE
        <br />
        <span className="text-[#fcb915]">
          ACROSS BANGLADESH
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
        From busy city streets to remote rural communities,
        SwiftShip connects your business with customers
        across Bangladesh. Deliver anywhere, anytime.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 rounded-full bg-[#fcb915] px-7 py-3.5 text-xs font-black tracking-wider text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
        >
          BECOME A MERCHANT
          <FaArrowRight />
        </Link>

        <a
          href="#coverage-explorer"
          className="inline-flex items-center rounded-full border-2 border-slate-900 px-7 py-3.5 text-xs font-black tracking-wider text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white"
        >
          EXPLORE COVERAGE
        </a>
      </div>
    </motion.div>

  </div>
</section>

      {/* ==================================================
          DELIVERY COVERAGE TYPES
      ================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="text-[10px] font-black tracking-[0.2em] text-[#d69b00] uppercase">
              WHERE WE DELIVER
            </span>

            <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Nationwide Delivery Coverage
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Explore our delivery network and find the service
              that reaches your customers.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {coverageTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} ${item.color}`}
                  >
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 min-h-[48px] text-xs leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-xs font-black text-[#d69b00]">
                      <FaClock />
                      {item.time}
                    </div>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ==================================================
          COVERAGE EXPLORER
      ================================================== */}

      <section
        id="coverage-explorer"
        className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="text-[10px] font-black tracking-[0.2em] text-[#d69b00] uppercase">
              EXPLORE OUR NETWORK
            </span>

            <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Check Your Delivery Coverage
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Search your district and explore the delivery
              network available in your area.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

            {/* DISTRICT EXPLORER */}

            <div className="lg:col-span-7">

              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-7">

                {/* Search */}

                <div className="relative mb-7">

                  <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-slate-400" />

                  <input
                    type="text"
                    value={districtSearch}
                    onChange={(e) => setDistrictSearch(e.target.value)}
                    placeholder="Search district name..."
                    className="h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-[#fcb915] focus:ring-4 focus:ring-[#fcb915]/10"
                  />

                </div>

                {/* Division Tabs */}

                <div className="mb-6 flex flex-wrap gap-2">

                  {Object.keys(divisions).map((division) => (
                    <button
                      key={division}
                      type="button"
                      onClick={() => {
                        setSelectedDivision(division);
                        setSelectedDistrict(divisions[division][0]);
                        setDistrictSearch("");
                      }}
                      className={`rounded-full px-4 py-2 text-[10px] font-black tracking-wide transition-all duration-200 ${
                        selectedDivision === division && !districtSearch
                          ? "bg-[#0f172a] text-white shadow-md"
                          : "border border-slate-200 bg-white text-slate-600 hover:border-[#fcb915] hover:text-slate-900"
                      }`}
                    >
                      {division.toUpperCase()}
                    </button>
                  ))}

                </div>

                {/* District List */}

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                  {(districtSearch
                    ? filteredDistricts.map((item) => item.name)
                    : divisions[selectedDivision]
                  )
                    .slice(0, showAllDistricts || districtSearch ? 64 : 12)
                    .map((district) => {
                      const division = districtSearch
                        ? allDistricts.find(
                            (item) => item.name === district
                          )?.division
                        : selectedDivision;

                      const isSelected = selectedDistrict === district;

                      return (
                        <button
                          key={district}
                          type="button"
                          onClick={() =>
                            handleDistrictSelect(district, division)
                          }
                          className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left text-xs font-bold transition-all duration-200 ${
                            isSelected
                              ? "border-[#fcb915] bg-[#fcb915]/10 text-[#0f172a] shadow-sm"
                              : "border-slate-200 bg-white text-slate-600 hover:border-[#fcb915] hover:text-slate-900"
                          }`}
                        >
                          <FaMapMarkerAlt
                            className={
                              isSelected
                                ? "shrink-0 text-[#d69b00]"
                                : "shrink-0 text-slate-300"
                            }
                          />

                          <span className="truncate">{district}</span>

                          {isSelected && (
                            <FaCheckCircle className="ml-auto shrink-0 text-[#d69b00]" />
                          )}
                        </button>
                      );
                    })}

                </div>

                {districtSearch && filteredDistricts.length === 0 && (
                  <div className="py-10 text-center">
                    <FaSearch className="mx-auto mb-3 text-2xl text-slate-300" />
                    <p className="text-sm font-bold text-slate-500">
                      No district found.
                    </p>
                  </div>
                )}

                {!districtSearch && (
                  <button
                    type="button"
                    onClick={() => setShowAllDistricts((prev) => !prev)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300 py-3 text-xs font-black text-slate-600 transition-colors hover:border-[#fcb915] hover:text-[#d69b00]"
                  >
                    {showAllDistricts
                      ? "SHOW SELECTED DIVISION"
                      : "VIEW ALL 64 DISTRICTS"}
                    <FaPlus className="text-[10px]" />
                  </button>
                )}

              </div>
            </div>

            {/* SELECTED DISTRICT DETAILS */}

            <div className="lg:col-span-5">

              <motion.div
                key={selectedDistrict}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full overflow-hidden rounded-3xl bg-[#0f172a] p-7 text-white shadow-xl sm:p-8"
              >

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-[#fcb915]/10 px-4 py-2 text-[10px] font-black tracking-widest text-[#fcb915]">
                    SELECTED LOCATION
                  </span>

                  <FaMapMarkedAlt className="text-2xl text-[#fcb915]" />

                </div>

                <div className="mt-10">

                  <p className="text-xs font-bold tracking-widest text-slate-400">
                    DISTRICT
                  </p>

                  <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                    {selectedDistrict}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {selectedDivision} Division, Bangladesh
                  </p>

                </div>

                <div className="my-8 border-t border-slate-700" />

                <div className="space-y-5">

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#fcb915]">
                        <FaTruck />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-300">
                          Delivery Network
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          District coverage area
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-emerald-400">
                      Available*
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#fcb915]">
                        <FaClock />
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-300">
                          Estimated Delivery
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          Standard delivery window
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#fcb915]">
                      1–4 Days*
                    </span>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-[#fcb915]/20 bg-[#fcb915]/10 p-4">

                  <p className="text-xs leading-6 text-slate-300">
                    Delivery availability and exact delivery
                    timelines depend on the specific delivery
                    address and service zone.
                  </p>

                </div>

                <Link
                  href="/tracking"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#fcb915] py-3.5 text-xs font-black tracking-wider text-[#0f172a] transition-all hover:bg-yellow-400"
                >
                  TRACK YOUR PARCEL
                  <FaArrowRight />
                </Link>

              </motion.div>

            </div>

          </div>

          {/* MAP LEGEND */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <span className="text-[10px] font-black tracking-widest text-slate-500">
              DELIVERY TIME LEGEND
            </span>

            {[
              { color: "bg-emerald-500", label: "Same Day" },
              { color: "bg-blue-500", label: "Next Day" },
              { color: "bg-amber-500", label: "2 Days" },
              { color: "bg-orange-500", label: "2–3 Days" },
              { color: "bg-purple-500", label: "3–4 Days" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                <span className="text-[10px] font-bold text-slate-600">
                  {item.label}
                </span>
              </div>
            ))}

          </div>

          <p className="mt-3 text-center text-[10px] text-slate-400">
            *Coverage and delivery estimates are illustrative until verified
            against SwiftShip&apos;s actual service-zone data.
          </p>

        </div>
      </section>

      {/* ==================================================
          ALL 64 DISTRICTS
      ================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="text-[10px] font-black tracking-[0.2em] text-[#d69b00] uppercase">
              OUR NATIONWIDE NETWORK
            </span>

            <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              All 64 Districts, By Division
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Explore all eight divisions and their districts
              across Bangladesh.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {Object.entries(divisions).map(([division, districts], index) => (

              <motion.div key={division} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-[#fcb915] hover:shadow-lg"
              >

                <div className="mb-4 flex items-center justify-between">

                  <h3 className="text-base font-black text-slate-900">
                    {division}
                  </h3>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-black text-[#d69b00]">
                    {districts.length} DISTRICTS
                  </span>

                </div>

                <div className="space-y-2">

                  {districts.map((district) => (

                    <button
                      key={district}
                      type="button"
                      onClick={() =>
                        handleDistrictSelect(district, division)
                      }
                      className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs font-medium transition-all ${
                        selectedDistrict === district
                          ? "bg-amber-50 text-[#d69b00]"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <FaMapMarkerAlt className="text-[10px] text-[#fcb915]" />
                      {district}

                      {selectedDistrict === district && (
                        <FaCheckCircle className="ml-auto text-[#d69b00]" />
                      )}
                    </button>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* ==================================================
          FIND A HUB
      ================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-10 lg:p-12">

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fcb915]/15 text-[#d69b00]">
                <FaMapMarkerAlt className="text-3xl" />
              </div>

              <span className="text-[10px] font-black tracking-[0.2em] text-[#d69b00] uppercase">
                OUR DELIVERY NETWORK
              </span>

              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-slate-900 sm:text-3xl">
                Find a SwiftShip Hub
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
                Search by area or hub name to find the nearest
                SwiftShip hub and its contact information.
              </p>

            </div>

            {/* HUB SEARCH */}

            <div className="relative mx-auto mt-9 max-w-2xl">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={hubSearch}
                onChange={(e) => setHubSearch(e.target.value)}
                placeholder="Enter your area or hub name..."
                className="h-14 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm outline-none transition-all focus:border-[#fcb915] focus:ring-4 focus:ring-[#fcb915]/10"
              />

            </div>

            {/* HUB RESULTS */}

            <div className="mx-auto mt-6 max-w-2xl space-y-3">

              {filteredHubs.length > 0 ? (
                filteredHubs.map((hub) => (

                  <div
                    key={hub.name}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[#d69b00]">
                        <FaBox />
                      </div>

                      <div>
                        <h3 className="text-sm font-black text-slate-900">
                          {hub.name}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {hub.area}
                        </p>
                      </div>

                    </div>

                    <a
                      href={`tel:${hub.phone}`}
                      className="flex items-center gap-2 text-xs font-black text-[#d69b00] hover:text-[#0f172a]"
                    >
                      <FaPhoneAlt />
                      {hub.phone}
                    </a>

                  </div>

                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                  <FaSearch className="mx-auto mb-3 text-2xl text-slate-300" />

                  <p className="text-sm font-bold text-slate-600">
                    No matching hub found.
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    Try searching with another area or hub name.
                  </p>
                </div>
              )}

            </div>

            <p className="mt-5 text-center text-[10px] text-slate-400">
              Hub directory currently contains sample entries.
              Replace them with verified SwiftShip hub information.
            </p>

          </div>

        </div>
      </section>

      {/* ==================================================
          MERCHANT CTA
      ================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#0f172a] px-6 py-14 text-center sm:px-12 sm:py-16"
        >

          {/* Background Decorations */}

          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#fcb915]/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10">

            <span className="text-[10px] font-black tracking-[0.25em] text-[#fcb915] uppercase">
              GROW YOUR BUSINESS WITH SWIFTSHIP
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              First, Everywhere.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Book today: same day in Dhaka, tomorrow everywhere else.
            </p>

            <Link
              href="/signup"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#fcb915] px-8 py-4 text-xs font-black tracking-wider text-[#0f172a] shadow-lg shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
            >
              BECOME A MERCHANT
              <FaArrowRight />
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}