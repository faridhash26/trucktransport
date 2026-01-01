"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function ScrollToTopProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const r = 44;
  const circumference = useMemo(() => 2 * Math.PI * r, [r]);

  useEffect(() => {
    const calc = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, p)));
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(calc);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const dashOffset = -circumference * (progress / 100);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 grid h-[46px] w-[46px] place-items-center rounded-full bg-white shadow-xl"
      aria-label="Scroll to top"
    >
      {/* svg رو هم‌سایز دکمه کن تا بیرون نزنه */}
      <svg width="46" height="46" viewBox="0 0 100 100" className="absolute">
        {/* background ring */}
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="black"
          strokeWidth="6"
          fill="none"
        />

        {/* progress ring */}
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="#14b8a6"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)" // ✅ شروع از بالا
        />
      </svg>

      {/* Arrow */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0f766e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
