// components/TopHeader.tsx  (Server Component)
export default function TopHeader() {
  return (
    <div className="bg-[#0b2c3d] text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Left */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:trucker@yourdomain.com"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <i className="fa-solid fa-envelope text-orange-400" />
            <span>trucker@yourdomain.com</span>
          </a>

          <a
            href="tel:+88061234567890"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <i className="fa-solid fa-phone text-orange-400" />
            <span>+880-61234567890</span>
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <span>Bangla</span>
            <i className="fa-solid fa-angle-down text-xs" />
          </button>

          <span className="h-5 w-px bg-white/25" />

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-orange-400 transition-colors"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-orange-400 transition-colors"
            >
              <i className="fa-brands fa-youtube" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-orange-400 transition-colors"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-orange-400 transition-colors"
            >
              <i className="fa-brands fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
