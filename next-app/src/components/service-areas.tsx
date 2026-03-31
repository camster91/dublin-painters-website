"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ServiceAreas() {
  const areas = [
    "South Dublin", "Blackrock", "Dalkey", "Killiney", 
    "Rathmines", "Ranelagh", "Ballsbridge", "Donnybrook",
    "North Dublin", "Howth", "Malahide", "Clontarf"
  ];

  return (
    <section className="py-24 bg-brand-dark transition-colors border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Proudly Serving All of Dublin
        </h2>
        <p className="text-lg text-slate-300 mb-12">
          From historic city-centre terraces to coastal county homes, our painters are available across the greater Dublin area.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700"
            >
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="font-medium text-slate-200">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
