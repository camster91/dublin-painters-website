"use client";

import React from "react";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900 border-t border-b border-brand-light dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            No hidden extras. Estimates include all prep work and materials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none"
        >
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-brand-dark dark:bg-slate-800 text-white border-b border-transparent dark:border-slate-700">
                <th className="py-5 px-6 font-semibold">Project Area</th>
                <th className="py-5 px-6 font-semibold">Timeline</th>
                <th className="py-5 px-6 font-semibold">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-950/50 text-foreground">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                <td className="py-5 px-6 font-bold">Standard Bedroom</td>
                <td className="py-5 px-6 text-brand-blue font-medium">1 - 2 Days</td>
                <td className="py-5 px-6 font-bold text-brand-green">€350 - €450</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                <td className="py-5 px-6 font-bold">Living Room</td>
                <td className="py-5 px-6 text-brand-blue font-medium">2 - 3 Days</td>
                <td className="py-5 px-6 font-bold text-brand-green">€450 - €600</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
