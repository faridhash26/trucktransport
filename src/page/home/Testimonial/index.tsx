"use client";

import React from "react";

type Testimonial = {
  id: string;
  text: string;
  name: string;
  role: string;
  avatar: string;
};

const data: Testimonial[] = [
  {
    id: "t1",
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Guy Hawkins",
    role: "Manager",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: "t2",
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Millar Richard",
    role: "Founder",
    avatar: "https://i.pravatar.cc/120?img=22",
  },
  {
    id: "t3",
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Jessca Arow",
    role: "Manager",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    id: "t4",
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Jacob Jones",
    role: "Manager",
    avatar: "https://i.pravatar.cc/120?img=48",
  },
  {
    id: "t5",
    text: "Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list.",
    name: "Millar Richard",
    role: "Founder",
    avatar: "https://i.pravatar.cc/120?img=56",
  },
];

function QuoteMark() {
  return (
    <div className="text-emerald-500 leading-none text-[64px] font-extrabold select-none">
      ”
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-[3px] border border-emerald-500/80 bg-white px-10 py-10 shadow-[0_16px_44px_rgba(2,6,23,0.06)]">
      <p className="text-[18px] leading-8 text-slate-500">{t.text}</p>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-white shadow"
            loading="lazy"
          />
          <div>
            <div className="text-[26px] font-extrabold tracking-tight text-slate-900">
              {t.name}
            </div>
            <div className="mt-1 text-[16px] text-slate-500">{t.role}</div>
          </div>
        </div>

        <QuoteMark />
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const top = data.slice(0, 3);
  const bottom = data.slice(3);

  return (
    <section className="bg-[#F8FBFB] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="text-emerald-600 text-[22px] font-semibold">
            Our Testimonial
          </div>
          <h2 className="mt-5 text-[56px] font-extrabold tracking-tight text-slate-900">
            What Our Clients Says
          </h2>
        </div>

        {/* Row 1: 3 cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {top.map((t) => (
            <Card key={t.id} t={t} />
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="mt-10 flex justify-center">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {bottom.map((t) => (
              <Card key={t.id} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
