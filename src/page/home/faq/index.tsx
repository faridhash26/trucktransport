"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";

type FaqItem = {
  id: string;
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    id: "tech",
    q: "Is My Technology Allowed on Tech?",
    a: "There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis",
  },
  {
    id: "air",
    q: "How Long Does air Freight Take?",
    a: "Air freight typically takes 2–7 days depending on origin, destination, and customs clearance.",
  },
  {
    id: "pay1",
    q: "What Payment Methods are Supported?",
    a: "We support bank transfer, cards, and corporate invoicing depending on your region.",
  },
  {
    id: "pay2",
    q: "What Payment Methods are Supported?",
    a: "You can pay via card, wire transfer, or approved payment gateways.",
  },
  {
    id: "pay3",
    q: "What Payment Methods are Supported?",
    a: "Supported methods vary by country. Contact support for the exact list.",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = React.useState<string>(faqs[0]?.id ?? "");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="bg-[#f3faf8] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-5xl font-extrabold tracking-tight text-slate-900">
          Frequently Asked Questions <br /> By Our Clients
        </h2>

        <div className="mt-14 space-y-6">
          {faqs.map((item) => {
            const isOpen = item.id === openId;

            return (
              <div
                key={item.id}
                className="border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <span className="text-xl font-extrabold text-slate-900">
                    {item.q}
                  </span>

                  {/* Eye icon */}
                  <span className="grid h-10 w-10 place-items-center rounded-full">
                    {isOpen ? (
                      <EyeOff className="h-6 w-6 text-slate-900" />
                    ) : (
                      <Eye className="h-6 w-6 text-slate-900" />
                    )}
                  </span>
                </button>

                {/* Body (animated) */}
                <div
                  className={[
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-7 text-base leading-8 text-slate-500">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
