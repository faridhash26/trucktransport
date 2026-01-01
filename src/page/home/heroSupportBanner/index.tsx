"use client";

import React from "react";
import Image from "next/image";
import { Headset, ArrowUpRight } from "lucide-react";

type SupportCardProps = {
  title?: string;
  phone?: string;
  buttonText?: string;
};

function SupportCard({
  title = "27/4 Online Support",
  phone = "+91 458 654 528",
  buttonText = "Send Now",
}: SupportCardProps) {
  return (
    <div className="bg-emerald-700 text-white shadow-2xl">
      <div className="flex flex-col items-center px-10 py-12 text-center">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-white/30">
          <Headset className="h-7 w-7" />
        </div>

        <p className="text-2xl font-semibold">{title}</p>
        <p className="mt-4 text-2xl font-semibold tracking-wide">{phone}</p>

        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-md bg-white px-10 py-4 text-base font-semibold text-slate-900"
        >
          {buttonText} <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function HeroSupportBanner() {
  return (
    <section className="relative bg-white">
      {/* عکس پس‌زمینه */}
      <div className="relative h-[820px] w-full md:h-[920px]">
        <Image
          src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=2400&q=80"
          alt="Logistics"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      {/* کارت سبز (Overlay) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full ">
          <div className="flex h-full items-start justify-end pt-0 md:pt-0">
            <div
              className={[
                "pointer-events-auto",
                // اندازه‌ها شبیه عکس
                "w-full md:w-[520px] lg:w-[560px]",
                // روی دسکتاپ می‌چسبه بالا-راست و کمی میاد پایین
                "mt-0 md:mt-0",
                // مثل عکس یه مقدار از بالا فاصله نداره، اما اگر خواستی تغییر بده
              ].join(" ")}
            >
              <SupportCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
