import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
  minimal?: boolean;
}

export function Header({ minimal = false }: HeaderProps) {
  return (
    <header className="bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-brand-light dark:border-slate-800 sticky text-foreground top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Painters Dublin Home">
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
              P
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              Painters<span className="text-brand-blue">Dublin</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-4 lg:gap-6">
            {!minimal && (
              <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
                <Link
                  href="/interior"
                  className="font-medium hover:text-brand-blue transition"
                >
                  Interior
                </Link>
                <Link
                  href="/exterior"
                  className="font-medium hover:text-brand-blue transition"
                >
                  Exterior
                </Link>
                <Link
                  href="/commercial"
                  className="font-medium hover:text-brand-blue transition"
                >
                  Commercial
                </Link>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
              </nav>
            )}
            
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right mr-1">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-none mb-1">Call for a free estimate</div>
                <div className="font-bold text-brand-dark dark:text-white text-base leading-none">01 234 5678</div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <a
                  href="tel:012345678"
                  className="flex items-center gap-2 bg-brand-green hover:bg-green-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Call Painters Dublin at 01 234 5678"
                >
                  <Phone className="w-4 h-4" /> <span className="hidden xs:inline">01 234 5678</span><span className="xs:hidden">Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
