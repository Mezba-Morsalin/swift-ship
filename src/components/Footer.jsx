"use client";

import Link from "next/link";
import footerImg from '../../public/assets/Footer.png'
import { 
  FaTruck, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaShieldAlt, 
  FaQuestionCircle 
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0f19] text-slate-300 pt-16 pb-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand Info & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <Image src={footerImg} alt="Footer-image" width={250} height={250}></Image>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              Bangladesh&apos;s premier tech-enabled express courier network. Nationwide 24-hour deliveries, guaranteed 0% COD surcharge, and automated daily cash disbursements.
            </p>

            {/* Contact Info List */}
            <div className="space-y-2.5 pt-1 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#ffb703] text-sm flex-shrink-0" />
                <span>Plot 18, Block B, Industrial Area, Tejgaon, Dhaka-1208</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#ffb703] text-sm flex-shrink-0" />
                <span>+880 9612-889900 (24/7 Support Hotline)</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#ffb703] text-sm flex-shrink-0" />
                <a href="mailto:support@swiftship.com.bd" className="hover:text-white transition-colors">
                  support@swiftship.com.bd
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black text-[#ffb703] tracking-widest uppercase">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Logistics Services
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="hover:text-white transition-colors">
                  Shipping Rates & Calculator
                </Link>
              </li>
              <li>
                <Link href="#track" className="hover:text-white transition-colors">
                  Track Parcel Live
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Merchant Tools (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black text-[#ffb703] tracking-widest uppercase">
              MERCHANT TOOLS
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <Link href="#become-merchant" className="hover:text-white transition-colors">
                  Become a Merchant
                </Link>
              </li>
              <li>
                <Link href="#login" className="hover:text-white transition-colors">
                  Merchant Portal Sign In
                </Link>
              </li>
              <li>
                <Link href="#register" className="hover:text-white transition-colors">
                  Free Account Registration
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Help Center & FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact Customer Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Legal (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black text-[#ffb703] tracking-widest uppercase">
              TRUST & LEGAL
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-[#ffb703] text-xs flex-shrink-0" />
                <Link href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaQuestionCircle className="text-[#ffb703] text-xs flex-shrink-0" />
                <Link href="#sla" className="hover:text-white transition-colors">
                  SLA Guarantee
                </Link>
              </li>
              <li>
                <Link href="#404" className="hover:text-white transition-colors">
                  404 Custom Error Page
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Separator */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 SwiftShip Logistics Bangladesh Ltd. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="#help" className="hover:text-slate-300 transition-colors">
              Help Center
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}