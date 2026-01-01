import { Plane, Ship, Truck } from "lucide-react";

type ServiceItem = {
  title: string;
  desc: string;
  image: string;
  Icon: React.ElementType;
};

export default function ServicesSection() {
  const items: ServiceItem[] = [
    {
      title: "Air Freight Service",
      desc: "Long established fact that reader \nwill be distracted by the",
      image:
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600&q=80",
      Icon: Plane,
    },
    {
      title: "Ocean Freight",
      desc: "Long established fact that reader \nwill be distracted by the",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",
      Icon: Ship,
    },
    {
      title: "Road Transport",
      desc: "Long established fact that reader \nwill be distracted by the",
      image:
        "https://images.unsplash.com/photo-1605106702842-01a887a31122?auto=format&fit=crop&w=1600&q=80",
      Icon: Truck,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-emerald-600 font-semibold">
            Safe &amp; Reliable Cargo Solutions!
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-slate-900">
            Managing Logistics For World’s <br className="hidden md:block" />
            Multinational Companies.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <ServiceCard key={it.title} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  const Icon = item.Icon;

  // دقیقاً مثل طرح: بالا سفید + پایین عکس
  const HEADER_H = 210;
  const IMAGE_H = 285;

  // عرض قسمت مورب سمت راست
  const WEDGE_W = 130;

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
      {/* فقط یک عکس: کل کارت */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ارتفاع کلی کارت */}
      <div className="relative" style={{ height: HEADER_H + IMAGE_H }}>
        {/* گرادیان ملایم پایین برای عمق */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/10 to-transparent" />

        {/* HEADER سفید (absolute روی عکس) */}
        <div
          className="absolute inset-x-0 top-0 z-[2]"
          style={{ height: HEADER_H }}
        >
          {/* ساختن شکل دقیق: سفید + wedge که عکس از زیرش دیده میشه */}
          <div className="absolute inset-0">
            {/* سفید اصلی سمت چپ */}
            <div
              className="absolute inset-y-0 left-0 transition-colors duration-300 
             bg-white group-hover:bg-[#0b2f34]"
              style={{ right: WEDGE_W }}
            />

            {/* قسمت راست (عرض wedge) */}
            <div
              className="absolute inset-y-0 right-0 transition-colors duration-300"
              style={{ width: WEDGE_W }}
            >
              {/* این لایه سفید، فقط قسمت «قبل از مورب» رو می‌پوشونه
                 و باعث میشه wedge مورب، عکسِ زیرش رو نشون بده */}
              <div
                className="absolute inset-0 bg-white transition-colors duration-300
               group-hover:bg-[#0b2f34]"
                style={{ clipPath: "polygon(0 0, 58% 0, 40% 100%, 0 100%)" }}
              />
            </div>
          </div>

          {/* متن‌ها */}
          <div className="relative z-[3] h-full px-8 pt-8 pb-12">
            <h3 className="text-[26px] font-extrabold transition-colors duration-300 group-hover:text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-500 transition-colors duration-300 group-hover:text-white/90">
              {item.desc}
            </p>

            {/* آیکن روی مرز سفید و عکس */}
            <div className="absolute right-10" style={{ bottom: -32 }}>
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full
                  bg-[#062E39] text-white
                  transition-colors duration-300
                  group-hover:bg-white group-hover:text-[#062E39]"
              >
                <Icon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>

        {/* خط خیلی نازک زیر header (مثل قالب‌ها) */}
        <div
          className="pointer-events-none absolute inset-x-0 z-[2] bg-black/[0.04]"
          style={{ top: HEADER_H - 1, height: 1 }}
        />
      </div>
    </article>
  );
}
