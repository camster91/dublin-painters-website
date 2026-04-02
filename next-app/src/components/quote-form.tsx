"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Euro, Home, Building2, Paintbrush, ArrowRight, Layers, Hammer } from "lucide-react";

type QuoteData = {
  type: string;
  surfaces: string[];
  condition: string;
  rooms: string;
  email: string;
};

interface QuoteFormProps {
  minimal?: boolean;
}

export function QuoteForm({ minimal = false }: QuoteFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteData>({ type: "", surfaces: [], condition: "", rooms: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 6;
  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;

  const handleSelectType = (type: string) => {
    setFormData((prev) => ({ ...prev, type }));
    setStep(2);
  };

  const handleToggleSurface = (surface: string) => {
    setFormData((prev) => {
      const exists = prev.surfaces.includes(surface);
      const newSurfaces = exists 
        ? prev.surfaces.filter(s => s !== surface) 
        : [...prev.surfaces, surface];
      return { ...prev, surfaces: newSurfaces };
    });
  };

  const handleSelectCondition = (condition: string) => {
    setFormData((prev) => ({ ...prev, condition }));
    setStep(4);
  };

  const calculateEstimate = () => {
    let base = (parseInt(formData.rooms) || 1) * 300;
    
    // Multipliers for complexity
    let multiplier = 1.0;
    if (formData.surfaces.includes("Ceilings")) multiplier += 0.2;
    if (formData.surfaces.includes("Woodwork")) multiplier += 0.3;
    
    if (formData.condition === "Needs Prep") multiplier += 0.25;
    if (formData.condition === "Heavy Damage") multiplier += 0.6;
    
    if (formData.type === "Exterior") multiplier += 0.4;

    const min = Math.round(base * multiplier);
    const max = Math.round(base * multiplier * 1.4);
    return `€${min.toLocaleString()} - €${max.toLocaleString()}`;
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Submit to Webhook or Form Provider
    try {
      await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
    } catch (e) { console.error(e) }
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep(6);
  };

  const variants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  const formContent = (
    <div className={`bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 shadow-2xl text-left border border-slate-100 dark:border-slate-800 transition-colors ${minimal ? 'shadow-none border-none p-0' : ''}`}>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 mb-8 overflow-hidden">
        <motion.div
          className="bg-brand-blue h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="min-h-[320px] relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step-1" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="absolute inset-0">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">What type of job is this?</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleSelectType("Interior")}
                  className={`group p-6 border-2 flex flex-col items-center justify-center gap-4 rounded-2xl transition hover:border-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 ${formData.type === "Interior" ? "border-brand-blue bg-blue-50 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-700"}`}
                >
                  <Home className="w-8 h-8 text-brand-blue transition group-hover:scale-110" />
                  <span className="font-semibold text-foreground">Interior</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectType("Exterior")}
                  className={`group p-6 border-2 flex flex-col items-center justify-center gap-4 rounded-2xl transition hover:border-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 ${formData.type === "Exterior" ? "border-brand-blue bg-blue-50 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-700"}`}
                >
                  <Building2 className="w-8 h-8 text-brand-green transition group-hover:scale-110" />
                  <span className="font-semibold text-foreground">Exterior</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step-2" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Which surfaces need painting?</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {["Walls", "Ceilings", "Woodwork"].map(surface => (
                  <button
                    key={surface}
                    type="button"
                    onClick={() => handleToggleSurface(surface)}
                    className={`p-4 border-2 rounded-xl font-semibold transition ${formData.surfaces.includes(surface) ? "border-brand-blue bg-blue-50 text-brand-blue dark:bg-blue-900/20" : "border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"}`}
                  >
                    {surface}
                  </button>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <button type="button" onClick={handleBack} className="w-1/3 text-slate-500 font-semibold p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition">Back</button>
                <button type="button" onClick={handleNext} disabled={formData.surfaces.length === 0} className="w-2/3 bg-brand-blue hover:bg-blue-700 disabled:opacity-50 text-white p-4 flex justify-center items-center gap-2 rounded-xl font-bold text-lg transition shadow-md">
                  Next <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step-3" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Current Condition?</h3>
              <div className="flex flex-col gap-3">
                {["Good Condition (Just repaint)", "Needs Prep (Minor cracks/holes)", "Heavy Damage (Requires plaster/repair)"].map((cond) => {
                  const val = cond.split(" ")[0] + (cond.includes("Prep") ? " Prep" : cond.includes("Heavy") ? " Damage" : "");
                  return (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => handleSelectCondition(val)}
                      className={`p-4 border-2 rounded-xl text-left font-semibold transition ${formData.condition === val ? "border-brand-blue bg-blue-50 text-brand-blue dark:bg-blue-900/20" : "border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300 hover:border-brand-blue"}`}
                    >
                      {cond}
                    </button>
                  );
                })}
              </div>
              <div className="mt-auto flex gap-4 pt-4">
                <button type="button" onClick={handleBack} className="w-full text-slate-500 font-semibold p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition">Back</button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step-4" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">How many rooms or areas?</h3>
              <input
                type="number"
                min="1"
                placeholder="E.g., 3"
                value={formData.rooms}
                onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                className="w-full border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white p-4 rounded-xl mb-4 focus:border-brand-blue focus:ring-0 outline-none transition text-lg"
                autoFocus
              />
              <div className="mt-auto flex gap-4">
                <button type="button" onClick={handleBack} className="w-1/3 text-slate-500 font-semibold p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition">Back</button>
                <button type="button" onClick={handleNext} disabled={!formData.rooms} className="w-2/3 bg-brand-blue hover:bg-blue-700 disabled:opacity-50 text-white p-4 flex justify-center items-center gap-2 rounded-xl font-bold text-lg transition shadow-md">
                  View Estimate <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step-5" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="absolute inset-0 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">Instant Estimate</h3>
                <div 
                  className="bg-green-100 dark:bg-green-900/40 text-brand-green p-3 rounded-lg flex items-center gap-2 text-sm font-bold border border-green-200 dark:border-green-800"
                >
                  <Euro className="w-4 h-4" /> {calculateEstimate()}
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Where should we send your official quote and availability?</p>
              
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white p-4 rounded-xl mb-4 focus:border-brand-green focus:ring-0 outline-none transition text-lg"
                  required
                />
                <div className="mt-auto flex gap-4">
                  <button type="button" onClick={handleBack} className="w-1/3 text-slate-500 font-semibold p-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition">Back</button>
                  <button type="submit" disabled={isSubmitting} className="w-2/3 bg-brand-green hover:bg-green-700 disabled:opacity-50 text-white p-4 rounded-xl font-bold flex justify-center items-center gap-2 text-lg transition shadow-md hover:shadow-lg">
                    {isSubmitting ? (
                      <motion.div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, ease: "linear", duration: 0.8 }} />
                    ) : (
                      "Get Final Quote"
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div key="step-6" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-6 drop-shadow-sm" />
              </motion.div>
              <h3 className="text-2xl font-extrabold mb-3 text-foreground tracking-tight">Got it! You're on the list.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-sm mx-auto">
                We've emailed you the estimate details. A member of our team will contact you shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (minimal) return formContent;

  return (
    <section id="quote-section" className="py-24 bg-brand-dark dark:bg-slate-950 relative overflow-hidden transition-colors">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10" />
      
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Get Your Quote in 60 Seconds
          </h2>
          <p className="text-slate-300 dark:text-slate-400 mb-8">
            Tell us a bit about your project for an instant rough estimate.
          </p>
        </motion.div>

        {formContent}
      </div>
    </section>
  );
}
