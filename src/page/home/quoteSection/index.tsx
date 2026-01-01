"use client";

import React, { useMemo, useState } from "react";
import { Check, Truck, Plane, Ship } from "lucide-react";

type TabKey = "road" | "air" | "ocean";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80)",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <LeftInfo />
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

function LeftInfo() {
  return (
    <div className="text-[#062E39]">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
        Get <span className="text-emerald-600">Free</span> Quote &amp; Make{" "}
        <br className="hidden md:block" />
        Your Shipment Easier
      </h2>

      <p className="mt-6 max-w-xl text-slate-600 leading-7">
        Long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.
      </p>

      <div className="mt-10 grid max-w-md grid-cols-2 gap-x-10 gap-y-5">
        <CheckRow text="Global Tracking" />
        <CheckRow text="Fast Delivery" />
        <CheckRow text="Secure Handling" />
        <CheckRow text="24/7 Support" />
        <CheckRow text="Best Pricing" />
        <CheckRow text="Insurance" />
      </div>

      <div className="mt-14 flex flex-wrap gap-5">
        <StoreBadge labelTop="Get it on" labelBottom="Google Play" icon="▶" />
        <StoreBadge
          labelTop="Install from"
          labelBottom="Apple Store"
          icon=""
        />
      </div>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white">
        <Check className="h-4 w-4" />
      </span>
      <span className="font-medium text-slate-700">{text}</span>
    </div>
  );
}

function StoreBadge({
  labelTop,
  labelBottom,
  icon,
}: {
  labelTop: string;
  labelBottom: string;
  icon: string;
}) {
  return (
    <div className="flex w-[210px] items-center gap-3 rounded-md bg-[#0b2f34] px-4 py-3 text-white shadow-[0_18px_55px_rgba(0,0,0,0.12)]">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-xl">
        {icon}
      </div>
      <div className="leading-tight">
        <div className="text-xs opacity-80">{labelTop}</div>
        <div className="text-base font-semibold">{labelBottom}</div>
      </div>
    </div>
  );
}

function QuoteCard() {
  const [tab, setTab] = useState<TabKey>("road");

  // این key باعث میشه هر بار tab عوض شد، فرم remount بشه و انیمیشن fade دوباره اجرا بشه
  const formKey = useMemo(() => `form-${tab}`, [tab]);

  return (
    <div className="mx-auto w-full max-w-[560px] rounded-md bg-emerald-700/90 p-10 shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-1 ring-white/10 backdrop-blur-sm">
      <Tabs tab={tab} onChange={setTab} />

      {/* Fade-in form on tab change */}
      <div key={formKey} className="fade-in">
        <FormForTab tab={tab} />
      </div>

      {/* local styles (no styled-jsx) */}
      <style>{`
        .input {
          width: 100%;
          height: 54px;
          border-radius: 6px;
          background: #fff;
          padding: 0 16px;
          outline: none;
          border: 1px solid rgba(255,255,255,0.25);
          color: #062E39;
        }
        .input:focus {
          border-color: rgba(6,46,57,0.65);
          box-shadow: 0 0 0 4px rgba(6,46,57,0.12);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeInUp 320ms ease-out both;
        }
      `}</style>
    </div>
  );
}

function Tabs({
  tab,
  onChange,
}: {
  tab: TabKey;
  onChange: (t: TabKey) => void;
}) {
  return (
    <div className="flex items-center gap-6 border-b border-white/25 pb-4 text-white">
      <TabBtn
        active={tab === "road"}
        icon={<Truck className="h-4 w-4" />}
        text="Road Fright"
        onClick={() => onChange("road")}
      />
      <TabBtn
        active={tab === "air"}
        icon={<Plane className="h-4 w-4" />}
        text="Air Fright"
        onClick={() => onChange("air")}
      />
      <TabBtn
        active={tab === "ocean"}
        icon={<Ship className="h-4 w-4" />}
        text="Ocean Fright"
        onClick={() => onChange("ocean")}
      />
    </div>
  );
}

function TabBtn({
  active,
  icon,
  text,
  onClick,
}: {
  active?: boolean;
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold transition",
        active ? "bg-[#062E39] text-white" : "text-white/85 hover:text-white",
      ].join(" ")}
    >
      {icon}
      {text}
    </button>
  );
}

function FormForTab({ tab }: { tab: TabKey }) {
  // اگر برای هر تب فیلدهای متفاوت می‌خوای، همینجا شرطی کن
  const price = tab === "road" ? "$7000" : tab === "air" ? "$12000" : "$9500";

  return (
    <form className="mt-10 space-y-6">
      <Field label="Your Name:">
        <input className="input" />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your Email:">
          <input className="input" />
        </Field>
        <Field label="Phone No:">
          <input className="input" />
        </Field>
      </div>

      <RangeRow price={price} />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Freight Type:">
          <select className="input">
            <option>Select</option>
            <option>Standard</option>
            <option>Express</option>
          </select>
        </Field>

        <Field label="Load:">
          <select className="input">
            <option>Select</option>
            <option>Light</option>
            <option>Medium</option>
            <option>Heavy</option>
          </select>
        </Field>
      </div>

      <button
        type="button"
        className="mt-2 inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 font-semibold text-[#062E39] shadow-[0_12px_35px_rgba(0,0,0,0.10)]"
      >
        Submit Now <span aria-hidden>↗</span>
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-sm font-semibold text-white/90">{label}</div>
      {children}
    </label>
  );
}

function RangeRow({ price }: { price: string }) {
  return (
    <div className="pt-1">
      <div className="mb-3 flex items-center justify-between text-sm font-semibold text-white/90">
        <span>Distance (Miles):</span>
        <span>{price}</span>
      </div>

      <input type="range" className="w-full accent-[#062E39]" />
    </div>
  );
}
