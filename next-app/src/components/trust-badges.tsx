"use client";

import React from "react";
import { ShieldCheck, HardHat, Award, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, title: "Fully Insured", sub: "€2M Public Liability Cover" },
    { icon: HardHat, title: "SafePass Certified", sub: "100% Compliant Crews" },
    { icon: Award, title: "10+ Years Experience", sub: "Trusted in Dublin" },
    { icon: ThumbsUp, title: "5-Star Rated", sub: "Over 500+ Happy Clients" }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-t border-brand-light dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="w-14 h-14 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue rounded-full flex justify-center items-center mb-2">
                <badge.icon className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">{badge.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
