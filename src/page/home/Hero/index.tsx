import { Truck, Plane, Ship, Train, Drone, Gift } from "lucide-react";

const services = [
  { label: "Road Freight", icon: Truck },
  { label: "Air Freight", icon: Plane },
  { label: "Ocean Freight", icon: Ship },
  { label: "Train Freight", icon: Train },
  { label: "Drone Freight", icon: Drone },
  { label: "Send Gift", icon: Gift },
];

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80)",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Top content */}
      <div className="relative mx-auto flex h-full max-w-7xl px-4">
        <div className="pt-20 md:pt-24 text-white">
          <div className="mb-4 text-xs md:text-sm tracking-[0.35em] opacity-90">
            CARGO. TRANSPORT. LOGISTICS
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
            World Wide Shipping <br /> &amp; Fast Solutions.
          </h1>
        </div>
      </div>

      {/* Bottom service bar */}
      <div className="absolute inset-x-0 bottom-10 md:bottom-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-none md:rounded-md border border-white/15 bg-emerald-700/55 backdrop-blur-md">
            <div className="grid grid-cols-2 md:grid-cols-6">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={[
                      "relative flex items-center justify-center px-6 py-8 md:py-10 text-white",
                      "gap-3 md:gap-4",
                      // vertical separators (desktop)
                      idx !== 0
                        ? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:h-10 md:before:w-px md:before:-translate-y-1/2 md:before:bg-white/20"
                        : "",
                      // horizontal separators (mobile)
                      idx >= 2
                        ? "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-white/15 md:before:hidden"
                        : "",
                    ].join(" ")}
                  >
                    <Icon className="h-7 w-7 md:h-8 md:w-8 opacity-95" />
                    <span className="text-sm md:text-base font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
