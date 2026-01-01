"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  Dribbble,
  Send,
  Headset,
  MessageCircleMore,
} from "lucide-react";

function DotBg() {
  // پترن نقطه‌ای خیلی نزدیک به عکس
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.22]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
        backgroundPosition: "0 0",
      }}
    />
  );
}

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white/85 hover:bg-white/15"
    >
      {children}
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#062b33] text-white">
      {/* subtle gradient + dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.10),_transparent_55%)]" />
      <DotBg />

      <div className="relative mx-auto max-w-7xl px-8 pt-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          {/* Col 1: brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10">
                {/* fake logo mark */}
                <div className="h-5 w-5 rounded-sm bg-white/90" />
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-wide">
                  TRUCKER
                </div>
                <div className="text-[11px] tracking-widest text-white/60">
                  TRANSPORTATION &amp; LOGISTICS
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-[17px] leading-8 text-white/65">
              The world&apos;s first and largest digital market for crypto
              collectibles and non-fungible (NFTs). Buy
            </p>

            <div className="mt-10 space-y-5 text-[16px] text-white/70">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-emerald-400" />
                <div>
                  <div>86 Road Broklyn Street, 600</div>
                  <div>New York, USA</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-emerald-400" />
                <div>needhelp@company.com</div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-emerald-400" />
                <div>+92 666 888 0000</div>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:pl-6">
            <h3 className="text-[22px] font-semibold text-white/90">
              Services Req
            </h3>
            <ul className="mt-8 space-y-5 text-[17px] text-white/65">
              <li className="hover:text-white/85">Property on sale</li>
              <li className="hover:text-white/85">About Real estate</li>
              <li className="hover:text-white/85">Team membar</li>
              <li className="hover:text-white/85">Terms of use</li>
              <li className="hover:text-white/85">Privacy Policy</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:pl-2">
            <h3 className="text-[22px] font-semibold text-white/90">
              Contact Info
            </h3>
            <ul className="mt-8 space-y-5 text-[17px] text-white/65">
              <li className="hover:text-white/85">Services Details</li>
              <li className="hover:text-white/85">Contact</li>
              <li className="hover:text-white/85">Services Details</li>
              <li className="hover:text-white/85">Terms</li>
              <li className="hover:text-white/85">Home Buying</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-[22px] font-semibold text-white/90">
              Newsletter
            </h3>

            <div className="mt-8 rounded-[10px] bg-white/5 px-8 py-9">
              <div className="flex items-center gap-3">
                <input
                  className="w-full bg-transparent text-[16px] text-white/80 placeholder:text-white/40 outline-none"
                  placeholder="Enter Email Adress"
                />
                <button
                  type="button"
                  className="text-white/80 hover:text-white"
                  aria-label="submit"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 h-px w-full bg-white/10" />

              <label className="mt-6 flex items-center gap-3 text-[15px] text-white/60">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/20 bg-transparent"
                />
                <span>I agree to all your terms and policies</span>
              </label>

              <div className="mt-7 flex items-center gap-4">
                <CircleIcon>
                  <Facebook className="h-4 w-4" />
                </CircleIcon>
                <CircleIcon>
                  <Twitter className="h-4 w-4" />
                </CircleIcon>
                <CircleIcon>
                  <Instagram className="h-4 w-4" />
                </CircleIcon>
                <CircleIcon>
                  <Dribbble className="h-4 w-4" />
                </CircleIcon>
              </div>
            </div>
          </div>
        </div>

        {/* Middle bar (two halves) */}
        <div className="mt-16 overflow-hidden rounded-[6px] shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* left teal */}
            <div className="relative bg-[#2aa191] px-12 py-12 text-white">
              <div className="absolute left-0 top-0 h-full w-16 bg-white/10" />
              <div className="relative flex items-center gap-8">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15">
                  <MessageCircleMore className="h-8 w-8" />
                </div>

                <div className="flex items-center gap-4 rounded-full border border-white/25 px-8 py-4">
                  <span className="text-[22px] font-semibold">Contact Us</span>
                  <span className="text-[22px] font-semibold underline underline-offset-4">
                    website_stock@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* right dark */}
            <div className="bg-[#04171c] px-12 py-12">
              <div className="flex items-center gap-8">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-400/10 text-emerald-300">
                  <Headset className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold tracking-wide text-white/75">
                    PERFECT SOLUTION FROM{" "}
                    <span className="text-emerald-300">LAND OWNER</span>
                  </div>
                  <div className="mt-2 text-[22px] font-semibold text-emerald-300">
                    +92 666 888 0000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row">
          <div className="text-[16px] text-white/55">
            © 2025 website_stock . All Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <CircleIcon>
              <Facebook className="h-4 w-4" />
            </CircleIcon>
            <CircleIcon>
              <Twitter className="h-4 w-4" />
            </CircleIcon>
            <CircleIcon>
              <Send className="h-4 w-4" />
            </CircleIcon>
            <CircleIcon>
              <Dribbble className="h-4 w-4" />
            </CircleIcon>
          </div>

          <div className="text-[16px] text-white/55">
            <a className="hover:text-white/80" href="#">
              Terms of Use
            </a>{" "}
            <span className="mx-3 text-white/25">|</span>
            <a className="hover:text-white/80" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
