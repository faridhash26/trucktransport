import Image from "next/image";
import {
  Star,
  BadgeCheck,
  Home,
  UsersRound,
  Check,
  Package,
} from "lucide-react";

export default function AssistanceSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT: Collage */}
          <div className="relative min-h-[520px] lg:min-h-[560px]">
            {/* Truck photo */}
            <div className="absolute left-0 top-8 w-[52%] overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80"
                  alt="Truck"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Courier photo */}
            <div className="absolute right-0 top-0 w-[58%] overflow-hidden rounded-xl bg-white shadow-[0_18px_55px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Courier"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Discount card */}
            <div className="absolute bottom-2 left-6 w-[60%] max-w-[340px] rounded-xl bg-emerald-600 px-6 py-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/12">
                <Package className="h-6 w-6" />
              </div>
              <div className="text-xl font-extrabold leading-snug">
                Take 40% Off on Your <br /> First Shipment
              </div>
            </div>

            {/* Rating card */}
            <div className="absolute left-[45%] top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-slate-900 px-7 py-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
              <div className="mb-3 flex items-center justify-center">
                <Star className="h-8 w-8 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-center text-sm font-semibold text-white/90">
                5 Star Rating
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              We Provide Full Assistance in <br className="hidden md:block" />
              Freight And Warehousing
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-500">
              Organically grow the holistic world view of disruptive innovation
              via workplace. Organically grow the holistic world
            </p>

            {/* Feature cards */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <FeatureCard
                title="Worldwide Logistic Services"
                icon={<Home className="h-6 w-6 text-emerald-600" />}
              />
              <FeatureCard
                title="Friendly Support Team"
                icon={<UsersRound className="h-6 w-6 text-emerald-600" />}
              />
            </div>

            {/* Check list */}
            <div className="mt-7 space-y-4">
              <CheckRow text="Quality control system and transparency." />
              <CheckRow text="100% Satisfaction with real time tracking." />
              <CheckRow text="Highly professional staff, 24/7 online support." />
            </div>

            {/* Founder */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-emerald-500/40">
                  <Image
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-900">
                    Kate Attjamin
                  </div>
                  <div className="text-sm text-slate-500">
                    Founder &amp; Director
                  </div>
                </div>
              </div>

              {/* Signature (simple SVG style) */}
              <div className="ml-auto min-w-[160px] text-emerald-500">
                <div className="text-3xl font-semibold italic tracking-tight">
                  Kate Attj…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_14px_35px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)] ring-1 ring-emerald-500/25">
        {icon}
      </div>
      <div className="text-lg font-extrabold text-slate-900">{title}</div>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600">
        <Check className="h-4 w-4 text-white" />
      </div>
      <div className="text-slate-700">{text}</div>
    </div>
  );
}
