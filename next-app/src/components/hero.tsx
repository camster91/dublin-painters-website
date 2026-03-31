"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-brand-dark dark:to-slate-900 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Mesh Gradient Background / Ambient glow */}
      <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-brand-blue/20 dark:bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-brand-green/20 dark:bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-6 border border-amber-200 dark:border-amber-900/50">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="tracking-wide">4.9/5 Average Rating</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 tracking-tight">
              Top-Rated Painters in Dublin — <br className="hidden lg:block" />
              <span className="text-brand-blue dark:text-blue-400 bg-clip-text">Quotes in 24 Hours</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
              Transform your home with premium paints and meticulous prep work.
              Fully insured and trusted by Dublin homeowners for over 10 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:012345678"
                className="group flex flex-1 sm:flex-none items-center justify-center gap-2 bg-brand-green hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/25 transition-all active:scale-95"
              >
                <PhoneCall className="w-5 h-5 group-hover:animate-bounce" /> Call 01 234 5678
              </a>
              <Link
                href="#quote-section"
                className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-brand-dark dark:bg-white dark:text-brand-dark hover:bg-slate-800 dark:hover:bg-slate-200 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-95"
              >
                Get Free Online Quote
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg aspect-auto bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/bg-hero.png"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                alt="Professional painters working on a beautiful classic Georgian door in Dublin"
              />
              <div className="absolute inset-0 bg-brand-dark/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
