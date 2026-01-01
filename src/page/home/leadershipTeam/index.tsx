"use client";

import { Share2, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import React, { useRef, useState } from "react";
type Member = {
  name: string;
  role: string;
  image: string;
  variant: "left" | "middle" | "right";
};

export default function LeadershipTeamSection() {
  const members: Member[] = [
    {
      name: "Marvin McKinney",
      role: "Senior Manager",
      image:
        "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=1400&q=80",
      variant: "left",
    },
    {
      name: "Terri Williams",
      role: "Ceo Transport",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80",
      variant: "middle",
    },
    {
      name: "Jane Cooper",
      role: "Ceo & Founder",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=80",
      variant: "right",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-emerald-600 font-semibold tracking-wide">
            Leadership Team
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.12] text-[#062E39]">
            Let us Take The Stress <br className="hidden md:block" />
            Outof Your Move.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {members.map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ m }: { m: Member }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <article className="relative bg-white shadow-[0_26px_80px_rgba(15,23,42,0.10)] ring-1 ring-slate-900/5">
      {/* IMAGE */}
      <div className="relative p-10">
        <div className="relative overflow-hidden bg-white shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
          <img
            src={m.image}
            alt={m.name}
            className="h-[520px] w-full object-cover"
          />

          {/* SOCIALS (exact like screenshot: vertical bar on image right-center) */}
          <div
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            className={[
              "absolute right-10 top-1/2 -translate-y-1/2",
              "transition-all duration-200 ease-out",
              open
                ? "opacity-100 translate-x-0"
                : "pointer-events-none opacity-0 translate-x-4",
            ].join(" ")}
          >
            <div className="w-[74px] bg-[#2AAE9C] py-7 text-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <div className="flex flex-col items-center gap-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="opacity-95 hover:opacity-100"
                >
                  <Facebook className="h-7 w-7" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="opacity-95 hover:opacity-100"
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="opacity-95 hover:opacity-100"
                >
                  <Twitter className="h-7 w-7" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="opacity-95 hover:opacity-100"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFO STRIP */}
      <div className="relative bg-white px-10 py-9">
        <div className="text-2xl font-extrabold text-[#062E39]">{m.name}</div>
        <div className="mt-1 text-sm text-slate-500">{m.role}</div>

        {/* SHARE BUTTON (hover target) */}
        <button
          type="button"
          aria-label="Share"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          className="absolute right-10 top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-[#0B2F34] text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)] transition hover:bg-[#083038]"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
}
