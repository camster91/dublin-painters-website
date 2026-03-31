import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2 group text-white">
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center font-bold text-xl">
              P
            </div>
            <span className="font-bold text-xl tracking-tight">
              Painters<span className="text-brand-blue">Dublin</span>
            </span>
          </Link>
          <p className="text-sm">Premium decorators serving Dublin city and county for over 10 years.</p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-white font-bold">Services</h4>
          <Link href="/interior" className="text-sm hover:text-white transition">Interior Painting</Link>
          <Link href="/exterior" className="text-sm hover:text-white transition">Exterior Protection</Link>
          <Link href="/commercial" className="text-sm hover:text-white transition">Commercial & B2B</Link>
        </div>

        {/* Utility */}
        <div className="flex flex-col items-center md:items-start gap-4 text-sm">
           <h4 className="text-white font-bold">Legal & Options</h4>
          <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          <div className="pt-2 flex items-center gap-2">
            <span>Theme:</span> <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        &copy; {year} Painters Dublin. All Rights Reserved.
      </div>
    </footer>
  );
}
