"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as MouseEvent | React.MouseEvent).clientX;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMove as any);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', handleMove as any);
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mousemove', handleMove as any);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleMove as any);
      window.removeEventListener('touchend', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove as any);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleMove as any);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-brand-light dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            See the Difference
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Drag the slider across to reveal the stunning transformation of our premium painting service.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white dark:ring-slate-800 bg-slate-200 aspect-[16/9] sm:aspect-[21/9]">
          
          <div 
            ref={containerRef}
            className="absolute inset-0 w-full h-full select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <Image
              src="/images/after.png"
              fill
              className="object-cover"
              alt="Freshly painted pristine living room"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              draggable={false}
            />
            
            <div className="absolute top-4 right-6 bg-brand-dark/80 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg z-10 pointer-events-none">
              AFTER
            </div>

            {/* Before Image (Cropped Foreground) */}
            <div 
              className="absolute inset-y-0 left-0 w-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src="/images/before.png"
                fill
                className="object-cover"
                alt="Old damaged living room corner before painting"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                draggable={false}
              />
              <div className="absolute top-4 left-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-4 py-1 rounded-full text-brand-dark dark:text-white text-sm font-bold shadow-lg z-10 pointer-events-none">
                BEFORE
              </div>
            </div>

            {/* Drag Handle */}
            <div 
              className="absolute inset-y-0 w-1 bg-white drop-shadow-md z-20 flex items-center justify-center -ml-0.5"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center gap-1 text-slate-600 absolute transition-transform hover:scale-110 active:scale-95">
                <MoveLeft className="w-3 h-3" />
                <div className="w-0.5 h-4 bg-slate-200 rounded-full" />
                <MoveRight className="w-3 h-3" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
