"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Mesh Gradient Background / Ambient glow - Animated */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -m-32 w-[500px] h-[500px] bg-brand-blue/20 dark:bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 -m-32 w-[500px] h-[500px] bg-brand-green/20 dark:bg-brand-green/15 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm mb-6 cursor-default"
            >
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="tracking-wide font-semibold text-sm text-slate-800 dark:text-slate-200">4.9/5 Average Rating</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-brand-dark dark:text-white leading-[1.1] mb-6 tracking-tighter">
              Top-Rated Painters in Dublin — <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-500">Quotes in 24 Hours</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl font-medium">
              Transform your home with premium paints and meticulous prep work.
              Fully insured and trusted by Dublin homeowners for over 10 years.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:012345678"
                className="group flex flex-1 sm:flex-none items-center justify-center gap-2 bg-brand-green hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_20px_-10px_rgba(22,163,74,0.5)] transition-all"
              >
                <PhoneCall className="w-5 h-5 group-hover:animate-bounce" /> Call 01 234 5678
              </motion.a>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="flex-1 sm:flex-none">
                <Link
                  href="#quote-section"
                  className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-brand-blue dark:hover:border-brand-blue text-brand-dark dark:text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-sm transition-colors w-full"
                >
                  Get Free Online Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg aspect-auto bg-slate-200 dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white/50 dark:border-slate-800/50 backdrop-blur-sm"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/bg-hero.png"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-110 transition-transform duration-[2s]"
                alt="Professional painters working on a beautiful classic Georgian door in Dublin"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
