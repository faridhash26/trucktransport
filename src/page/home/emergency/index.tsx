export default function EmergencyHero() {
  return (
    <section
      className="relative h-[600px] overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=2400&q=80)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-xl text-white">
            {/* Icon + title */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/90 text-white font-bold">
                24
              </div>
              <span className="text-sm tracking-widest opacity-90">
                EMERGENCY
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Emergency <br /> Transport Cargo 24/7
            </h1>

            <p className="mb-6 max-w-md text-white/90">
              With access to 24 hour emergency assistance, it’s so important you
              can continue to help others.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500">
                📞
              </div>
              <span className="text-lg font-semibold">(+800) 1234 5678 90</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-0 left-0 w-full bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 text-center md:grid-cols-4">
          <Stat number="10+" label="Delivered Packages" />
          <Stat number="120K" label="Countries Covered" />
          <Stat number="32" label="Professional Staff" />
          <Stat number="12K" label="Products Transport" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-extrabold text-emerald-600">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
