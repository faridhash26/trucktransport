"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    country: "United States",
    address: ["244, First Floor, 11 St Roots", "Terrace, Los Angeles"],
    phones: ["(+01) 123 456 7890", "(+22) 123 456 7890"],
    emails: ["info@example.com", "soft@example.com"],
  },
  {
    country: "New Zealand",
    address: ["244, First Floor, 11 St Roots", "Terrace, Los Angeles"],
    phones: ["(+01) 123 456 7890", "(+22) 123 456 7890"],
    emails: ["info@example.com", "soft@example.com"],
  },
  {
    country: "South Africa",
    address: ["244, First Floor, 11 St Roots", "Terrace, Los Angeles"],
    phones: ["(+01) 123 456 7890", "(+22) 123 456 7890"],
    emails: ["info@example.com", "soft@example.com"],
  },
];

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-emerald-400">{icon}</div>
      <div className="space-y-2 text-white/80">{children}</div>
    </div>
  );
}

export default function MapHalfOverlayFixedText() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="relative h-[560px] w-full">
        {/* Map */}
        <iframe
          title="Google Map"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.461199650014!2d90.4125!3d23.7993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70000000000%3A0x0000000000000000!2sBashundhara%20R%2FA!5e0!3m2!1sen!2s!4v1700000000000"
        />

        {/* Overlay فقط نیمه بالا */}
        <div className="absolute left-0 top-0 h-1/2 w-full bg-[#0b2c33]/75" />

        {/* Content فقط نیمه بالا */}
        <div className="absolute left-0 top-0 z-10 h-1/2 w-full">
          <div className="mx-auto h-full max-w-7xl px-10 pt-12">
            {/* ✅ اینجا مهمه: items-start + overflow-hidden */}
            <div className="grid h-full grid-cols-1 items-start gap-14 overflow-hidden md:grid-cols-3">
              {offices.map((o) => (
                <div key={o.country} className="text-white">
                  <h3 className="text-[36px] font-extrabold tracking-tight">
                    {o.country}
                  </h3>
                  <div className="mt-2 h-[3px] w-14 bg-emerald-400" />

                  {/* ✅ محدود کردن ارتفاع متن‌ها تا به پایین نچسبه */}
                  <div className="mt-8 space-y-8 text-[18px] leading-8">
                    <InfoRow icon={<MapPin className="h-5 w-5" />}>
                      {o.address.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </InfoRow>

                    <InfoRow icon={<Phone className="h-5 w-5" />}>
                      {o.phones.map((p) => (
                        <div key={p}>{p}</div>
                      ))}
                    </InfoRow>

                    <InfoRow icon={<Mail className="h-5 w-5" />}>
                      {o.emails.map((e) => (
                        <div key={e}>{e}</div>
                      ))}
                    </InfoRow>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* اگر خواستی متن‌ها به جای مخفی شدن اسکرول بخورن:
            overflow-hidden رو بردار و اینو بذار:
            overflow-y-auto */}
      </div>
    </section>
  );
}
