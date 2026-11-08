
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaTruckFast,
  FaBoxesPacking,
  FaBoxOpen,
  FaTruckRampBox,
  FaRotateLeft,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";


const filterTabs = [
  { id: "all", label: "ALL SERVICES" },
  { id: "express", label: "PARCEL & EXPRESS DELIVERY" },
  { id: "warehousing", label: "WAREHOUSING & FULFILLMENT" },
  { id: "freight", label: "FREIGHT & CORPORATE LOGISTICS" },
  { id: "reverse", label: "RETURNS & REVERSE LOGISTICS" },
];

const servicesData = [
  {
    id: "metro-delivery",
    category: "express",
    categoryLabel: "PARCEL & EXPRESS DELIVERY",
    badge: "SAME-DAY SERVICE",
    icon: FaBolt,
    title: "SAME-DAY METRO DELIVERY",
    subtitle: "FAST AND RELIABLE DELIVERY ACROSS DHAKA",
    description:
      "Deliver customer orders across Dhaka with a streamlined same-day delivery service. Designed for e-commerce brands, retail businesses, and merchants handling time-sensitive orders.",
    features: [
      "Same-day delivery within selected service areas",
      "Convenient parcel pickup scheduling",
      "Live shipment status updates",
      "Digital proof of delivery",
    ],
    highlighted: true,
  },
  {
    id: "nationwide-delivery",
    category: "express",
    categoryLabel: "PARCEL & EXPRESS DELIVERY",
    badge: "64 DISTRICT COVERAGE",
    icon: FaTruckFast,
    title: "NATIONWIDE PARCEL DELIVERY",
    subtitle: "CONNECT YOUR BUSINESS WITH CUSTOMERS ACROSS BANGLADESH",
    description:
      "Expand your customer reach with dependable parcel delivery across major cities, districts, and supported upazilas. Our distribution network helps businesses manage deliveries beyond their local markets.",
    features: [
      "Delivery coverage across all 64 districts",
      "Centralized parcel tracking",
      "Automated delivery notifications",
      "Flexible merchant pickup arrangements",
    ],
    highlighted: false,
  },
  {
    id: "cash-on-delivery",
    category: "express",
    categoryLabel: "PARCEL & EXPRESS DELIVERY",
    badge: "MERCHANT-FRIENDLY COD",
    icon: FaBoxOpen,
    title: "CASH ON DELIVERY MANAGEMENT",
    subtitle: "SIMPLIFY PAYMENT COLLECTION AND ORDER SETTLEMENT",
    description:
      "Make online selling easier with a structured cash-on-delivery collection process. We collect payments from customers upon successful delivery and provide merchants with transparent settlement records.",
    features: [
      "Cash collection upon successful delivery",
      "COD transaction reporting",
      "Merchant payment settlement records",
      "Order-wise payment reconciliation",
    ],
    highlighted: false,
  },
  {
    id: "fulfillment-center",
    category: "warehousing",
    categoryLabel: "WAREHOUSING & FULFILLMENT",
    badge: "END-TO-END FULFILLMENT",
    icon: FaBoxesPacking,
    title: "E-COMMERCE FULFILLMENT",
    subtitle: "FROM INVENTORY STORAGE TO CUSTOMER DELIVERY",
    description:
      "Simplify your daily operations with integrated warehousing and order fulfillment support. Our team manages inventory receiving, storage, order processing, packaging, and dispatch.",
    features: [
      "Organized inventory receiving and storage",
      "Order picking and packaging",
      "Daily dispatch coordination",
      "Inventory movement reporting",
    ],
    highlighted: true,
  },
  {
    id: "inventory-management",
    category: "warehousing",
    categoryLabel: "WAREHOUSING & FULFILLMENT",
    badge: "INVENTORY CONTROL",
    icon: FaBoxOpen,
    title: "INVENTORY & STOCK MANAGEMENT",
    subtitle: "MAINTAIN BETTER CONTROL OVER YOUR PRODUCTS",
    description:
      "Keep your stock organized with structured inventory management support. Monitor incoming products, outgoing orders, available quantities, and stock movements through a centralized process.",
    features: [
      "SKU-based inventory organization",
      "Stock receiving and dispatch records",
      "Low-stock monitoring support",
      "Periodic inventory reconciliation",
    ],
    highlighted: false,
  },
  {
    id: "corporate-freight",
    category: "freight",
    categoryLabel: "FREIGHT & CORPORATE LOGISTICS",
    badge: "B2B TRANSPORT SOLUTIONS",
    icon: FaTruckRampBox,
    title: "CORPORATE & BULK FREIGHT",
    subtitle: "SCALABLE TRANSPORT SOLUTIONS FOR BUSINESS OPERATIONS",
    description:
      "Move commercial goods, wholesale inventory, and business shipments through coordinated freight transportation. Suitable for manufacturers, distributors, retailers, and corporate supply chains.",
    features: [
      "Bulk shipment transportation",
      "Scheduled pickup and delivery",
      "Dedicated vehicle arrangements",
      "Shipment documentation and delivery records",
    ],
    highlighted: false,
  },
  {
    id: "reverse-logistics",
    category: "reverse",
    categoryLabel: "RETURNS & REVERSE LOGISTICS",
    badge: "RETURN MANAGEMENT",
    icon: FaRotateLeft,
    title: "PRODUCT RETURNS & EXCHANGE",
    subtitle: "A STRUCTURED RETURN PROCESS FOR YOUR BUSINESS",
    description:
      "Manage customer returns and exchange requests without disrupting your regular delivery operations. We coordinate reverse pickups and help return products to your designated business location.",
    features: [
      "Customer doorstep return pickup",
      "Exchange shipment coordination",
      "Return parcel tracking",
      "Return status and delivery records",
    ],
    highlighted: false,
  },
  {
    id: "failed-delivery",
    category: "reverse",
    categoryLabel: "RETURNS & REVERSE LOGISTICS",
    badge: "DELIVERY EXCEPTION HANDLING",
    icon: FaTruckFast,
    title: "FAILED DELIVERY MANAGEMENT",
    subtitle: "BETTER VISIBILITY INTO UNSUCCESSFUL DELIVERIES",
    description:
      "Handle unsuccessful delivery attempts through a coordinated exception management process. Track delivery issues, review shipment status, and arrange the next appropriate action.",
    features: [
      "Failed delivery status tracking",
      "Delivery exception reporting",
      "Re-delivery coordination where applicable",
      "Undelivered parcel return management",
    ],
    highlighted: false,
  },
];


export default function LogisticsServicesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter(
          (service) => service.category === activeTab
        );

  return (
    <section className="w-full bg-[#fbfcfd] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 md:mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider transition-all duration-200 cursor-pointer uppercase ${
                  isActive
                    ? "bg-[#0f172a] text-[#fcb915] shadow-md shadow-slate-900/10 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#fcb915] hover:text-[#fcb915]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          <AnimatePresence initial={false} mode="sync">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className={`relative bg-white rounded-[32px] p-6 sm:p-8 md:p-9 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl ${
                    service.highlighted
                      ? "border-2 border-[#fcb915] shadow-lg shadow-[#fcb915]/10"
                      : "border border-slate-200/80 shadow-sm"
                  }`}
                >
                  <div>

                    {/* Header Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#fff8e6] text-[#fcb915] flex items-center justify-center text-lg sm:text-xl shrink-0">
                        <Icon />
                      </div>

                      <span className="bg-[#0f172a] text-[#fcb915] text-[10px] sm:text-[11px] font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase">
                        {service.badge}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <p className="text-[10px] sm:text-[11px] font-black tracking-widest text-slate-400 uppercase mb-1">
                      {service.categoryLabel}
                    </p>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase leading-snug">
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-[11px] sm:text-xs font-extrabold text-[#fcb915] tracking-wide uppercase mt-1 mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Divider Line */}
                    <div className="h-[1px] w-full bg-slate-100 mb-6" />

                    {/* Key Features Header */}
                    <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3">
                      KEY FEATURES:
                    </p>

                    {/* Feature Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 font-bold"
                        >
                          <span className="text-[#fcb915] mt-0.5 shrink-0">
                            <FaCheck className="text-[11px]" />
                          </span>

                          <span className="leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/service/${service.id}`}
                    className="group w-full py-3.5 rounded-full bg-[#0f172a] text-[#fcb915] font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#fcb915] hover:text-slate-900 hover:shadow-md"
                  >
                    <span>
                      START SHIPPING WITH THIS SERVICE
                    </span>

                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
