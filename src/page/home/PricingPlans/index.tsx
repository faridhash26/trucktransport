"use client";

import React from "react";
import Image from "next/image";

type Plan = {
  id: string;
  title: string;
  price: string;
  unit: string;
  accent?: boolean;
  imageSrc: string;
};

const plans: Plan[] = [
  {
    id: "basic",
    title: "Basic Plan",
    price: "$15",
    unit: "/Day",
    imageSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "premium",
    title: "Premium Plan",
    price: "$719",
    unit: "/Mon",
    accent: true,
    imageSrc:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "standard",
    title: "Standard Plan",
    price: "$219",
    unit: "/Mon",
    imageSrc:
      "https://images.unsplash.com/photo-1501556424050-d4816356a8f5?auto=format&fit=crop&w=1600&q=80",
  },
];

const features: string[] = [
  "7 Days Shipping World Wide",
  "Container Size 40 ft",
  "Delivery complete in 2 weeks",
  "Real – Time Tracking",
  "24/7 Support",
];

function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[2px] text-[18px] leading-none text-slate-900">
        ✓
      </span>
      <span className="text-[18px] leading-8 text-slate-700">{text}</span>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="rounded-[22px] bg-white px-10 pb-12 pt-10 shadow-[0_22px_60px_rgba(2,6,23,0.10)] ring-1 ring-black/5">
      {/* Top image (exact feel: tilted trapezoid + soft shadow) */}
      <div className="flex justify-center">
        <div className="photoWrap">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="photoSvg"
          >
            <defs>
              <clipPath id="roundedClip">
                <path
                  d="
M 4 0 H 96 Q 100 0 100 4 V 66 Q 100 72 90 70 L 12 44 Q 9 43 8 40 L 0 10 Q -1 -1 4 0 "
                />
              </clipPath>
            </defs>

            <image
              href="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#roundedClip)"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3
        className={[
          "mt-10 text-center text-[44px] font-extrabold tracking-tight",
          plan.accent ? "text-emerald-600" : "text-slate-900",
        ].join(" ")}
      >
        {plan.title}
      </h3>

      {/* Price */}
      <div className="mt-4 flex items-end justify-center gap-2">
        <span className="text-[56px] font-extrabold leading-none text-slate-900">
          {plan.price}
        </span>
        <span className="pb-[6px] text-[18px] font-semibold text-slate-700">
          {plan.unit}
        </span>
      </div>

      {/* Features (center block but left-aligned rows) */}
      <div className="mx-auto mt-10 w-[78%] space-y-3">
        {features.map((f) => (
          <CheckRow key={f} text={f} />
        ))}
      </div>

      {/* Button */}
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="rounded-[6px] bg-[#0b2c33] px-12 py-4 text-[16px] font-semibold text-white shadow-sm hover:opacity-95"
        >
          Get Started
        </button>
      </div>

      <style jsx>{`
        /* wrapper keeps same spacing feel as screenshot */
        .photoWrap {
          width: 92%;
          height: 160px;
          filter: drop-shadow(0 20px 28px rgba(0, 0, 0, 0.18));
        }
        .photoSvg {
          width: 100%;
          height: 100%;
        }

        /* slight tilt like screenshot */
        .photoTilt {
          transform-origin: left bottom;
          filter: drop-shadow(0px 22px 28px rgba(2, 6, 23, 0.18));
        }

        /* trapezoid-ish + rounded corners like screenshot */
        .photoMask {
          position: relative;
          height: 150px;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 60%);
        }
      `}</style>
    </div>
  );
}

export default function PricingExactScreenshot() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16">
      {/* soft background halo like screenshot */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-[56px] font-extrabold tracking-tight text-slate-900">
          Choose your Best Offer
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
