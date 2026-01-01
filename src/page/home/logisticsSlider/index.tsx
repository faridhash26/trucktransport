"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

type Slide = { title: string; desc: string; image: string };

export default function LogisticsSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "UK Exhibition Support for Teneso Italy.",
        desc: "Vestibulum laoreet eu eros et interdum. In laoreet ullamcorper ullamcorper. Maecenas dictum mi nec nibh ...",
        image:
          "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Air Freight Solutions Worldwide.",
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ...",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Road Transport & Container Handling.",
        desc: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet ...",
        image:
          "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Ocean Freight & Global Shipping.",
        desc: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam ...",
        image:
          "https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Warehousing & Distribution.",
        desc: "Aenean lacinia bibendum nulla sed consectetur ...",
        image:
          "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Customs Clearance Support.",
        desc: "Morbi leo risus, porta ac consectetur ac ...",
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Express Parcel Delivery.",
        desc: "Nulla vitae elit libero, a pharetra augue ...",
        image:
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Project Cargo Management.",
        desc: "Sed posuere consectetur est at lobortis ...",
        image:
          "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    []
  );

  const perPage = 4;
  const pageCount = Math.ceil(slides.length / perPage);
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.style.transform = `translateX(-${page * 100}%)`;
  }, [page]);

  const pages = useMemo(() => {
    const out: Slide[][] = [];
    for (let i = 0; i < slides.length; i += perPage)
      out.push(slides.slice(i, i + perPage));
    return out;
  }, [slides]);

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-full transition-transform duration-500 ease-out"
          >
            {pages.map((group, idx) => (
              <div key={idx} className="w-full flex-none">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                  {group.map((s) => (
                    <HoverSlideCard key={s.title} slide={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: pageCount }).map((_, i) => {
            const active = i === page;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                className={[
                  "h-4 w-4 rounded-full transition",
                  active
                    ? "bg-emerald-600"
                    : "bg-emerald-100 hover:bg-emerald-200",
                ].join(" ")}
                aria-label={`Go to page ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HoverSlideCard({
  slide,
}: {
  slide: { title: string; desc: string; image: string };
}) {
  return (
    <article className="group relative h-[460px] overflow-hidden rounded-xl bg-slate-200">
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay container (کل صفحه برای کنترل hover) */}
      <div className="absolute inset-0">
        {/* ✅ لایه‌ی مورب (فقط سمت راست را پوشش می‌دهد، مثل تصویر شما) */}
        <div
          className="
    absolute inset-0
    bg-[#062E39]/80
    transition-[clip-path] duration-500 ease-out
    [clip-path:polygon(0_100%,0_100%,0_100%,0_100%)]
    group-hover:[clip-path:polygon(0_100%,0%_0,100%_0,100%_100%)]
  "
        />

        {/* ✅ محتوای نوشته (همیشه روی عکس هست ولی فقط موقع hover دیده میشه) */}
        <div className="absolute inset-0 flex items-end p-8">
          <div className="max-w-[290px] text-white opacity-0 transition duration-300 delay-100 group-hover:opacity-100">
            <h3 className="text-3xl font-extrabold leading-snug">
              {slide.title}
            </h3>
            <p className="mt-4 text-white/85 text-lg leading-8">{slide.desc}</p>

            <button
              type="button"
              className="mt-8 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/75 text-white transition hover:bg-white hover:text-[#062E39]"
              aria-label="Open"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* یک لایه خیلی خیلی کم برای خوانایی متن (اختیاری) */}
      <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
    </article>
  );
}
