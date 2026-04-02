"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  image: string;
  bullets: string[];
};

export function ServiceFeatures({ features }: { features: Feature[] }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-t border-brand-light dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Image Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-slate-100 dark:ring-slate-800 group"
              >
                <Image
                  src={feature.image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  alt={feature.title}
                />
              </motion.div>
              
              {/* Text Block */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark dark:text-white leading-[1.1]">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
                <ul className="space-y-4 pt-4">
                  {feature.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/20 dark:bg-brand-green/10 flex items-center justify-center text-brand-green">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-lg text-slate-800 dark:text-slate-300 font-semibold">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
