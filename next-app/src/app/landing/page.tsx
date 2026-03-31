"use client";

import { Header } from "@/components/header";
import { TrustBadges } from "@/components/trust-badges";
import { TestimonialGrid, Testimonial } from "@/components/testimonial-grid";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";
import { Star, Check, Shield, Clock, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const landingTestimonials: Testimonial[] = [
  { quote: "The team painted our entire exterior in Blackrock. They were fast, clean, and the fixed price quote was exactly what we paid.", name: "Mark T.", role: "Homeowner" },
  { quote: "Spotless cleanup every single day. They managed the interior painting of our 3-bed semi without any hassle. Highly recommended.", name: "Sarah M.", role: "Homeowner" },
  { quote: "Fantastic job on our hallway and stairs woodwork. It looks brand new. Very professional and polite crew.", name: "David K.", role: "Homeowner" }
];

export default function LandingPage() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header minimal />
      <main className="flex-1 w-full bg-slate-50 dark:bg-slate-950">
        {/* Focused Hero Section */}
        <section className="relative bg-brand-dark pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              <div className="max-w-2xl text-white pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-400 font-semibold text-sm mb-6 shadow-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-white">4.9/5 from 250+ Dublin Homeowners</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight text-white">
                  Top-Rated Painters in Dublin. <br /><span className="text-brand-blue">Fixed Quotes in 24h.</span>
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
                  Don't settle for sloppy work or hidden fees. We provide flawless interior and exterior painting with premium materials, spotless clean-up, and a 2-year guarantee.
                </p>
                
                <ul className="space-y-4 mb-10 text-slate-200">
                  {[
                    "100% Fixed Quotes — No hidden extras",
                    "Fully Insured & Safe Pass Certified",
                    "Premium Dulux & Fleetwood paints only"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-brand-green" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div id="quote" className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden relative border border-slate-100 dark:border-slate-800 lg:-mb-48 z-20">
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-6">
                    <h2 className="text-2xl font-bold text-brand-dark dark:text-white">Get Your Free Estimate</h2>
                    <p className="text-sm text-slate-500 mt-1">Takes 60 seconds. No obligation.</p>
                  </div>
                  <QuoteForm minimal />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Social Proof & Trust Badges */}
        <section className="py-20 lg:pt-48 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Dublin's Elite</h2>
              <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
            </div>
            <TrustBadges />
          </div>
        </section>

        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialGrid 
              title="What Your Neighbors Are Saying" 
              testimonials={landingTestimonials} 
            />
          </div>
        </section>

        {/* Why Choose Us Minimal */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <Shield className="w-12 h-12 text-brand-blue mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3 dark:text-white">Fully Insured</h3>
                <p className="text-slate-600 dark:text-slate-400">€2M Public Liability insurance for your total peace of mind.</p>
              </div>
              <div>
                <Clock className="w-12 h-12 text-brand-blue mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3 dark:text-white">Always On Time</h3>
                <p className="text-slate-600 dark:text-slate-400">We respect your schedule and provide accurate timelines.</p>
              </div>
              <div>
                <Award className="w-12 h-12 text-brand-blue mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3 dark:text-white">Top Rated</h3>
                <p className="text-slate-600 dark:text-slate-400">Over 250+ 5-star reviews from homeowners across Dublin.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      
      {/* Mobile Sticky CTA with scroll-based visibility */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex justify-center"
          >
            <a href="#quote" className="w-full bg-brand-green hover:bg-green-700 text-white py-3.5 rounded-lg font-bold flex justify-center items-center gap-2 text-lg shadow-lg active:scale-95 transition-transform">
              Get My Free Quote Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
