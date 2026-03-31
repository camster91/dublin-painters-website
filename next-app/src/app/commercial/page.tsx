import { Header } from "@/components/header";
import { ExpandedHero } from "@/components/expanded-hero";
import { TrustBadges } from "@/components/trust-badges";
import { ServiceFeatures } from "@/components/service-features";
import { OurProcess } from "@/components/our-process";
import { TestimonialGrid, Testimonial } from "@/components/testimonial-grid";
import { FaqSection, Faq } from "@/components/faq-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AwardsSection } from "@/components/awards-section";
import { ServiceAreas } from "@/components/service-areas";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Painting Contractors Dublin | Painters Dublin",
  description: "Zero disruption to your operations. We deliver professional, on-time commercial painting services across Dublin including offices, retail, and warehouses."
};

const features = [
  {
    title: "Zero Operational Downtime",
    description: "We understand that every hour your business is closed costs you money. That's why our dedicated Dublin commercial painting crews specialize in out-of-hours scheduling. We work nights, weekends, and bank holidays to ensure your retail floor, office, or warehouse remains fully operational during business hours.",
    image: "/images/commercial_hero.png",
    bullets: [
      "Night & Weekend Scheduling",
      "Low-VOC, Quick-Drying Premium Paints",
      "Strict Dust Control & Daily Cleanups"
    ]
  },
  {
    title: "Uncompromising Health & Safety",
    description: "Safety isn't just a buzzword; it's the core of our B2B operations. We provide comprehensive Risk Assessments and Method Statements (RAMS) for every project. Our commercial painting teams in Dublin are fully Safe Pass certified, vetted, and backed by a €2M public liability insurance policy.",
    image: "https://images.unsplash.com/photo-1541888004652-32a7dd7a3e74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "CSCS/Safe Pass Certified Teams",
      "Comprehensive RAMS Provided",
      "€2M Public & Employers Liability"
    ]
  }
];

const testimonials: Testimonial[] = [
  { quote: "They painted our entire 4-story office building over the weekend. Our staff returned on Monday to a brand new space with zero fumes. Incredible efficiency.", name: "Sarah Jenkins", role: "Facilities Manager" },
  { quote: "Painters Dublin handled our retail fit-out perfectly. Their project manager kept us updated daily. Fast, professional, and within budget.", name: "Mark O'Connor", role: "Retail Director" },
  { quote: "Finding fully insured, SafePass certified painters who actually show up on time is rare. These guys are the gold standard for B2B painting.", name: "David Liam", role: "Property Developer" }
];

const faqs: Faq[] = [
  { q: "Can you paint outside of normal business hours?", a: "Yes. We specialize in out-of-hours scheduling. We can work evenings, nights, weekends, and bank holidays to ensure there is zero disruption to your business operations or foot traffic." },
  { q: "Are your painters fully insured and certified?", a: "Absolutely. We carry €2M in public and employer's liability insurance. All of our crews hold active SafePass certifications, and we can provide comprehensive RAMS (Risk Assessments & Method Statements) before commencing any work." },
  { q: "Do you supply low-odor, eco-friendly paints?", a: "Yes, we exclusively use premium Low-VOC (Volatile Organic Compounds) paints for commercial interiors. This guarantees excellent coverage with minimal odor, allowing your staff to return to work immediately the next morning." },
  { q: "Can you handle large-scale warehouse or industrial painting?", a: "Yes. We have the equipment (including airless sprayers and MEWPs) to handle large-scale industrial units, warehouse floors, exterior cladding, and safety line markings." }
];

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <ExpandedHero 
          title="Premium Commercial" 
          highlight="Contractors" 
          subtitle="Transform your Dublin business space with absolute zero disruption. We deliver flawless, on-time commercial painting."
          imagePath="/images/commercial_hero.png"
          ctaText="Request Commercial Tender"
        />
        
        <div className="w-full relative z-10"><TrustBadges /></div>
        <div className="w-full relative z-10"><ServiceFeatures features={features} /></div>
        <div className="w-full relative z-10"><OurProcess /></div>
        <div className="w-full relative z-10"><TestimonialGrid title="Trusted by Dublin's Top Businesses" testimonials={testimonials} /></div>
        <div className="w-full relative z-10"><WhyChooseUs /></div>
        <div className="w-full relative z-10"><AwardsSection /></div>
        <div className="w-full relative z-10"><ServiceAreas /></div>
        <div className="w-full relative z-10"><FaqSection faqs={faqs} /></div>

        <div className="w-full relative z-20 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.1)]">
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
