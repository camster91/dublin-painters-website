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
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brand-dark dark:text-white mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.15, 
                duration: 0.5,
                y: { type: "spring", stiffness: 300 },
                scale: { type: "spring", stiffness: 300 }
              }}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white dark:border-slate-700 shadow-xl dark:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex text-amber-400 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed mb-8 italic relative z-10">
                "{t.quote}"
              </p>
              <div className="relative z-10">
                <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-brand-blue text-sm font-semibold">{t.role}</p>
              </div>
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-8xl text-slate-200/50 dark:text-slate-700/30 font-serif leading-none select-none pointer-events-none group-hover:text-brand-blue/10 transition-colors duration-500">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
