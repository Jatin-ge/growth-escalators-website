"use client";
import { useEffect } from "react";
import Script from "next/script";

export function CalEmbed() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).Cal) {
      const Cal = (window as unknown as Record<string, unknown>).Cal as (action: string, options: { elementOrSelector: string; calLink: string; layout?: string }) => void;
      Cal("inline", {
        elementOrSelector: "#cal-embed",
        calLink: "growthescalators/book/d2c-strategy",
        layout: "month_view",
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).Cal) {
            const Cal = (window as unknown as Record<string, unknown>).Cal as (action: string, options: { elementOrSelector: string; calLink: string; layout?: string }) => void;
            Cal("inline", {
              elementOrSelector: "#cal-embed",
              calLink: "growthescalators/book/d2c-strategy",
              layout: "month_view",
            });
          }
        }}
      />
      <div
        id="cal-embed"
        className="w-full min-h-[600px] rounded-2xl overflow-hidden border border-border-light"
      />
    </>
  );
}
