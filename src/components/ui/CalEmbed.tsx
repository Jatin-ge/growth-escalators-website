"use client";
import { useEffect } from "react";
import Script from "next/script";

export function CalEmbed() {
  useEffect(() => {
    const tryInit = () => {
      const win = window as unknown as Record<string, unknown>;
      if (win.Cal) {
        (win.Cal as (a: string, o: { elementOrSelector: string; calLink: string }) => void)(
          "inline",
          { elementOrSelector: "#cal-embed", calLink: "growthescalators/book/d2c-strategy" }
        );
      }
    };
    const timer = setTimeout(tryInit, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          const win = window as unknown as Record<string, unknown>;
          if (win.Cal) {
            (win.Cal as (a: string, o: { elementOrSelector: string; calLink: string }) => void)(
              "inline",
              { elementOrSelector: "#cal-embed", calLink: "growthescalators/book/d2c-strategy" }
            );
          }
        }}
      />
      <div
        id="cal-embed"
        className="w-full min-h-[600px] rounded-2xl overflow-hidden bg-white"
        style={{ border: "1px solid rgba(0,0,0,0.06)" }}
      />
    </>
  );
}
