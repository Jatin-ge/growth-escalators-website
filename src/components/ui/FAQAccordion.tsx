"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem { question: string; answer: string; }

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          <button
            className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-lg pr-8 group-hover:text-black transition-colors" style={{ color: "#0A0A0A" }}>{item.question}</span>
            <span className="shrink-0" style={{ color: "#00E87B" }}>{openIndex === i ? <Minus size={18} /> : <Plus size={18} />}</span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 leading-relaxed max-w-[80%]" style={{ color: "#5C5F66" }}>{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
