"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function ExpandedHero({ 
  title, 
  highlight,
  subtitle, 
  imagePath,
  ctaText = "Get Free Online Quote",
  ctaLink = "/#quote-section"
}: { 
  title: string, 
  highlight?: string,
  subtitle: string, 
  imagePath: string,
  ctaText?: string,
  ctaLink?: string
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <Image
          src={imagePath}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
          alt={title}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark/95" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tighter drop-shadow-sm">
            {title} <br className="hidden md:block"/>
            {highlight && <span className="text-brand-blue drop-shadow-sm">{highlight}</span>}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-medium drop-shadow-sm text-balance">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                href={ctaLink}
                className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] transition-all active:scale-95"
              >
                {ctaText}
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
