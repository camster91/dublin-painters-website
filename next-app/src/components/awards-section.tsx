"use client";

import React from "react";
import { Award, Trophy, Medal } from "lucide-react";
import { motion } from "framer-motion";

export function AwardsSection() {
  const awards = [
    { icon: Award, title: "Best Painting Contractor 2025", desc: "Awarded by Dublin Homeowners Association" },
    { icon: Trophy, title: "Eco‑Friendly Paint Specialist", desc: "Recognised for Low‑VOC practices" },
    { icon: Medal, title: "5‑Star Customer Rating", desc: "Over 500 verified reviews" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-800 border-t border-brand-light dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark dark:text-white mb-12">
          Our Awards & Recognitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full flex items-center justify-center mb-4">
                <a.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{a.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
