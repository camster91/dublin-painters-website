"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function OurProcess() {
  const steps = [
    { num: "01", title: "Fast Online Quote", desc: "Fill out our estimator form for an instant rough estimate and priority scheduling." },
    { num: "02", title: "Free Site Visit", desc: "Our project manager assesses the site to confirm measurements and finalize the exact fixed price." },
    { num: "03", title: "Flawless Execution", desc: "Our vetted crews arrive on time, use dustless sanders, and apply premium layers with respect to your property." },
    { num: "04", title: "Final Walkthrough", desc: "We don't leave until you're 100% thrilled. Backed by our iron-clad written guarantee." }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Calculate the width of the progress bar
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-32 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark dark:text-white mb-6">How It Works</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A seamless, stress-free experience from start to finish. We handle everything so you don't have to lift a finger.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
          {/* Base Connector line */}
          <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-[4px] bg-slate-200 dark:bg-slate-800 z-0 rounded-full overflow-hidden">
            {/* Animated Progress Line */}
            <motion.div 
              style={{ width: lineWidth }} 
              className="h-full bg-gradient-to-r from-brand-blue to-brand-green" 
            />
          </div>

          {/* Mobile vertical line base */}
          <div className="md:hidden absolute top-[45px] bottom-[45px] left-1/2 -translate-x-1/2 w-[4px] bg-slate-200 dark:bg-slate-800 z-0 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineWidth }} 
              className="w-full bg-gradient-to-b from-brand-blue to-brand-green" 
            />
          </div>

          {steps.map((step, idx) => {
            // Determine when this step should highlight
            const stepTriggerPoint = idx * 0.25;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center flex flex-col items-center group"
              >
                <motion.div 
                  className="w-24 h-24 bg-white dark:bg-slate-900 border-4 rounded-full flex justify-center items-center shadow-lg font-black text-3xl transition-colors duration-500 relative"
                  style={{
                    borderColor: "var(--brand-blue)", // We'll handle color via framer-motion variants natively if needed, but CSS works fine for standard state
                  }}
                  whileInView={{
                    borderColor: ["#e2e8f0", "#2563eb"],
                    color: ["#64748b", "#2563eb"],
                    boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 30px -10px rgba(37,99,235,0.5)"]
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <span className="bg-white dark:bg-slate-900 absolute inset-1 rounded-full z-0"></span>
                  <span className="relative z-10">{step.num}</span>
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
