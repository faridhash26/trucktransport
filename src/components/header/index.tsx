"use client";

import { useEffect, useState } from "react";

export default function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "z-50 transition-all duration-300",
        isSticky
          ? "fixed top-0 left-0 right-0"
          : "absolute top-9 left-0 right-0",
      ].join(" ")}
    >
      {/* Accordion Top Bar (وقتی sticky شد باز میشه) */}
      <div
        className={[
          "overflow-hidden transition-all duration-300",
          isSticky ? "max-h-12 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="bg-[#0b2c3d] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <div className="flex items-center gap-6">
              <a
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                href="mailto:trucker@yourdomain.com"
              >
                <i className="fa-solid fa-envelope text-orange-400" />
                <span>trucker@yourdomain.com</span>
              </a>
              <a
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                href="tel:+88061234567890"
              >
                <i className="fa-solid fa-phone text-orange-400" />
                <span>+880-61234567890</span>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <button
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                type="button"
              >
                <span>Bangla</span>
                <i className="fa-solid fa-angle-down text-xs" />
              </button>

              <span className="h-5 w-px bg-white/25" />

              <div className="flex items-center gap-4">
                <a
                  className="hover:text-orange-400 transition-colors"
                  href="#"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  className="hover:text-orange-400 transition-colors"
                  href="#"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
                <a
                  className="hover:text-orange-400 transition-colors"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  className="hover:text-orange-400 transition-colors"
                  href="#"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav (قبل اسکرول: وسط صفحه و محدود / بعد اسکرول: تمام عرض) */}
      <div
        className={[
          "bg-white shadow-md transition-all duration-300",
          isSticky ? "rounded-none w-full" : "rounded-md mx-auto max-w-7xl",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded bg-emerald-600/10 flex items-center justify-center">
              <i className="fa-solid fa-truck-fast text-emerald-600" />
            </div>
            <div className="leading-4">
              <div className="font-extrabold tracking-wide text-emerald-600">
                TRUCKER
              </div>
              <div className="text-[10px] text-slate-500">
                TRANSPORTATION & LOGISTICS
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10 text-slate-700 font-medium">
            <a className="hover:text-emerald-600" href="#">
              Home <span className="ml-1">+</span>
            </a>
            <a className="hover:text-emerald-600" href="#">
              About
            </a>
            <a className="hover:text-emerald-600" href="#">
              Pages <span className="ml-1">+</span>
            </a>
            <a className="hover:text-emerald-600" href="#">
              Services <span className="ml-1">+</span>
            </a>
            <a className="hover:text-emerald-600" href="#">
              Blogs <span className="ml-1">+</span>
            </a>
            <a className="hover:text-emerald-600" href="#">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="h-10 w-10 rounded-md border border-slate-200 grid place-items-center hover:bg-slate-50"
              aria-label="Search"
            >
              <i className="fa-solid fa-magnifying-glass text-slate-600" />
            </button>

            <button
              className="h-10 w-10 rounded-md border border-slate-200 grid place-items-center hover:bg-slate-50"
              aria-label="Apps"
            >
              <i className="fa-solid fa-grip text-slate-600" />
            </button>

            <a
              href="#"
              className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 transition-colors"
            >
              Track Order{" "}
              <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
