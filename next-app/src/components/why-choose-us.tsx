"use client";

import React from "react";
import { MapPin, Leaf, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const reasons = [
    { icon: MapPin, title: "Local Dublin Expertise", desc: "We know every neighbourhood, from historic Georgian streets to modern suburbs." },
    { icon: Leaf, title: "Eco‑Friendly Low‑VOC Paints", desc: "Health‑conscious, low‑odor paints that protect your family and the environment." },
    { icon: Phone, title: "Free Colour Consultation", desc: "Our design specialists help you pick the perfect palette – at no extra cost." },
    { icon: Clock, title: "On‑Time Guarantee", desc: "We finish on schedule, or we work for free until it’s done." }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-brand-light dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark dark:text-white mb-12">
          Why Choose Painters Dublin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{r.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
