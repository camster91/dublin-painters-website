"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialGrid({ title, testimonials }: { title: string, testimonials: Testimonial[] }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brand-dark dark:text-white mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 relative"
            >
              <div className="flex text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-brand-blue text-sm font-semibold">{t.role}</p>
              </div>
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-8xl text-slate-200 dark:text-slate-700/50 font-serif leading-none opacity-50 select-none pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
