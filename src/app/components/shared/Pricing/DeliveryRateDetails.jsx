"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const faqs = [
  {
    question: "How do I become a merchant?",
    answer:
      "Getting started is simple. Sign up for a merchant account, complete your business information, and our team will help you activate your account so you can start sending parcels.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery charges depend on your parcel destination and monthly delivery volume. We offer competitive rates for Dhaka Metro and deliveries outside Dhaka, with special pricing for high-volume merchants.",
  },
  {
    question: "When will I receive my COD payment?",
    answer:
      "Once your parcel is successfully delivered and the payment is collected, your COD amount will be processed according to your merchant settlement schedule.",
  },
  {
    question: "Can I track my parcels in real time?",
    answer:
      "Yes! You can monitor your parcel status through the merchant dashboard. Your customers can also receive SMS notifications and tracking links to follow their deliveries.",
  },
  {
    question: "What happens if a customer refuses a parcel?",
    answer:
      "If a customer refuses to receive a parcel, it will be marked as a delivery failure. Our team will process the return according to our return policy and notify you about the parcel status.",
  },
  {
    question: "Do you provide free parcel pickup?",
    answer:
      "Yes! We provide free doorstep parcel pickup for eligible merchant locations. You can schedule pickups directly through our merchant service.",
  },
  {
    question: "Can I integrate your service with my website?",
    answer:
      "Absolutely! We support e-commerce integrations and API-based solutions, allowing you to connect your online store and automate your parcel management workflow.",
  },
  {
    question: "How can I contact merchant support?",
    answer:
      "You can reach our merchant support team through your merchant dashboard or our official contact channels. Our team is ready to help with delivery, payment, and account-related questions.",
  },
];

export default function MerchantFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50/50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block text-[#fcb915] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-3">
            GOT QUESTIONS?
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase">
            QUESTIONS MERCHANTS ASK
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our delivery services,
            merchant accounts, payments, and parcel management.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-[#0f172a] border-[#0f172a] shadow-xl shadow-slate-900/10"
                    : "bg-white border-slate-200/80 hover:border-[#fcb915]/60 shadow-sm"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`text-xs font-black tabular-nums ${
                        isOpen ? "text-[#fcb915]" : "text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`text-xs sm:text-sm font-bold leading-relaxed ${
                        isOpen ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#fcb915] text-[#0f172a] rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <div className="px-5 sm:px-7 pb-6 pl-12 sm:pl-[4.5rem]">
                        <div className="border-t border-slate-700/70 pt-4">
                          <p className="text-xs sm:text-sm text-slate-300 leading-7 font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support CTA */}
        <div className="w-full bg-[#0f172a] rounded-3xl px-6 py-10 sm:py-12 text-center mt-8">
  <p className="text-white text-base sm:text-lg md:text-xl font-bold leading-relaxed">
    First, everywhere.
  </p>

  <p className="text-slate-300 text-xs sm:text-sm mt-2">
    Book today: same day in Dhaka, tomorrow everywhere else.
  </p>

  <Link
    href="/signup"
    className="inline-flex items-center justify-center gap-2 mt-6 px-7 py-3.5 bg-[#fcb915] text-[#0f172a] rounded-full text-xs font-black uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-yellow-500/10"
  >
    Become a Merchant
    <FaArrowRight />
  </Link>
</div>

      </div>
    </section>
  );
}