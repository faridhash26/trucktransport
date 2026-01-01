"use client";

import React from "react";
import { CalendarDays, ArrowRight } from "lucide-react";

const truckImg =
  "https://images.unsplash.com/photo-1501706362039-c6e80949b74c?auto=format&fit=crop&w=2200&q=80";
const shipImg =
  "https://images.unsplash.com/photo-1501556424050-d4816356a8f5?auto=format&fit=crop&w=2200&q=80";
const planeImg =
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2200&q=80";

function DateRow({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-3 text-[18px] text-slate-500">
      <CalendarDays className="h-6 w-6 text-emerald-600" />
      <span>{date}</span>
    </div>
  );
}

function ReadMore() {
  return (
    <a
      href="#"
      className="mt-10 inline-flex items-center gap-4 text-[22px] font-semibold text-emerald-600 hover:opacity-80"
    >
      Read More <ArrowRight className="h-6 w-6" />
    </a>
  );
}

function TextBlock({
  date,
  title,
  excerpt,
  pad = "p-12",
}: {
  date: string;
  title: string;
  excerpt?: string;
  pad?: string;
}) {
  return (
    <div className={`h-full bg-white ${pad}`}>
      <DateRow date={date} />
      <h3 className="mt-8 text-[44px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
        {title}
      </h3>
      {excerpt ? (
        <p className="mt-8 text-[26px] leading-10 text-slate-500">{excerpt}</p>
      ) : null}
      <ReadMore />
    </div>
  );
}

function ImageBlock({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`h-full w-full bg-white ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export default function LatestNewsBlog_ExactLayout() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Headings */}
        <div className="text-center">
          <div className="text-[22px] font-semibold text-emerald-600">
            News &amp; Blogs
          </div>
          <h2 className="mt-6 text-[64px] font-extrabold tracking-tight text-slate-900">
            Leatest News &amp; Blog
          </h2>
        </div>

        {/* MOBILE (stack) */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:hidden">
          <div className="grid grid-cols-1 gap-0 overflow-hidden bg-white shadow-[0_22px_70px_rgba(2,6,23,0.06)]">
            <ImageBlock src={truckImg} alt="Truck" className="h-[260px]" />
            <TextBlock
              date="September 26, 2025"
              title="New Features Enhance Virtual Teaching & Learning"
              pad="p-10"
            />
          </div>

          <div className="overflow-hidden bg-white shadow-[0_22px_70px_rgba(2,6,23,0.06)]">
            <ImageBlock src={planeImg} alt="Plane" className="h-[260px]" />
            <TextBlock
              date="September 26, 2025"
              title="Our Business Thrives To Contribute Global"
              excerpt="Completely reinvent worldwide testing new with cooperative leverage multimedia"
              pad="p-10"
            />
          </div>

          <div className="grid grid-cols-1 gap-0 overflow-hidden bg-white shadow-[0_22px_70px_rgba(2,6,23,0.06)]">
            <TextBlock
              date="September 26, 2025"
              title="Mechanical Engineering and Engineering Explained."
              pad="p-10"
            />
            <ImageBlock src={shipImg} alt="Ship" className="h-[260px]" />
          </div>
        </div>

        {/* DESKTOP (exact like screenshot) */}
        <div className="mt-16 hidden gap-10 lg:grid lg:grid-cols-3 lg:items-stretch">
          {/* LEFT 2/3 area = two rows, each row is a "two-piece block" */}
          <div className="lg:col-span-2 space-y-10">
            {/* Row 1: [Truck Image] + [Text] */}
            <div className="grid grid-cols-2 overflow-hidden bg-white shadow-[0_22px_70px_rgba(2,6,23,0.06)]">
              <div className="h-[360px]">
                <ImageBlock src={truckImg} alt="Truck" />
              </div>
              <TextBlock
                date="September 26, 2025"
                title="New Features Enhance Virtual Teaching & Learning"
                pad="p-14"
              />
            </div>

            {/* Row 2: [Text] + [Ship Image] */}
            <div className="grid grid-cols-2 overflow-hidden bg-white shadow-[0_22px_70px_rgba(2,6,23,0.06)]">
              <TextBlock
                date="September 26, 2025"
                title="Mechanical Engineering and Engineering Explained."
                pad="p-14"
              />
              <div className="h-[360px]">
                <ImageBlock src={shipImg} alt="Ship" />
              </div>
            </div>
          </div>

          {/* RIGHT column: image top + text bottom (single vertical card) */}
          <div className="overflow-hidden bg-white shadow-[0_22px_70px_rgba(2,6,23,0.06)]">
            <div className="h-[360px]">
              <ImageBlock src={planeImg} alt="Plane" />
            </div>
            <TextBlock
              date="September 26, 2025"
              title="Our Business Thrives To Contribute Global"
              excerpt="Completely reinvent worldwide testing new with cooperative leverage multimedia"
              pad="p-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
