"use client";

import { Header } from "@/components/header";
import { TrustBadges } from "@/components/trust-badges";
import { TestimonialGrid, Testimonial } from "@/components/testimonial-grid";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";
import { Star, Check, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const landingTestimonials: Testimonial[] = [
  { quote: "The team painted our entire exterior in Blackrock. They were fast, clean, and the fixed price quote was exactly what we paid.", name: "Mark T.", role: "Homeowner" },
  { quote: "Spotless cleanup every single day. They managed the interior painting of our 3-bed semi without any hassle. Highly recommended.", name: "Sarah M.", role: "Homeowner" },
  { quote: "Fantastic job on our hallway and stairs woodwork. It looks brand new. Very professional and polite crew.", name: "David K.", role: "Homeowner" }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as any } }
};

export default function LandingPage() {
  return (
    <>
      <Header minimal />
      <main className="flex-1 w-full bg-slate-50 dark:bg-slate-950 overflow-hidden">
        {/* Focused Hero Section */}
        <section className="relative bg-brand-dark pt-12 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="max-w-2xl text-white pt-4"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-400 font-semibold text-sm mb-6 shadow-sm">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-white">4.9/5 from 250+ Dublin Homeowners</span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight text-white">
                  Top-Rated Painters in Dublin. <br /><span className="text-brand-blue">Fixed Quotes in 24h.</span>
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
                  Don't settle for sloppy work or hidden fees. We provide flawless interior and exterior painting with premium materials, spotless clean-up, and a 2-year guarantee.
                </motion.p>
                
                <motion.ul variants={staggerContainer} className="space-y-4 mb-10 text-slate-200">
                  {[
                    "100% Fixed Quotes — No hidden extras",
                    "Fully Insured & Safe Pass Certified",
                    "Premium Dulux & Fleetwood paints only"
                  ].map((item, i) => (
                    <motion.li variants={fadeUp} key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-brand-green" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                id="quote" 
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden relative border border-slate-100 dark:border-slate-800 lg:-mb-48 z-20"
              >
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-6">
                    <h2 className="text-2xl font-bold text-brand-dark dark:text-white">Get Your Free Estimate</h2>
                    <p className="text-sm text-slate-500 mt-1">Takes 60 seconds. No obligation.</p>
                  </div>
                  <QuoteForm minimal />
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Social Proof & Trust Badges */}
        <section className="py-20 lg:pt-48 bg-white dark:bg-slate-950">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Dublin's Elite</h2>
              <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
            </div>
            <TrustBadges />
          </motion.div>
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
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { icon: Shield, title: "Fully Insured", desc: "€2M Public Liability insurance for your total peace of mind." },
                { icon: Clock, title: "Always On Time", desc: "We respect your schedule and provide accurate timelines." },
                { icon: Award, title: "Top Rated", desc: "Over 250+ 5-star reviews from homeowners across Dublin." }
              ].map((feature, i) => (
                <motion.div variants={fadeUp} key={i}>
                  <feature.icon className="w-12 h-12 text-brand-blue mx-auto mb-6 drop-shadow-md" />
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
}
