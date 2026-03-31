import { Header } from "@/components/header";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AwardsSection } from "@/components/awards-section";
import { ServiceAreas } from "@/components/service-areas";
import { ExpandedHero } from "@/components/expanded-hero";
import { TrustBadges } from "@/components/trust-badges";
import { ServiceFeatures } from "@/components/service-features";
import { OurProcess } from "@/components/our-process";
import { TestimonialGrid, Testimonial } from "@/components/testimonial-grid";
import { FaqSection, Faq } from "@/components/faq-section";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Painting Services Dublin | Painters Dublin",
  description: "Flawless interior painting with dustless sanding technology. Transform your living rooms, bedrooms, and woodwork with Dublin's trusted painters."
};

const features = [
  {
    title: "Flawless Luxury Finishes",
    description: "Achieve the pristine, magazine-quality interior you've always dreamed of. Our expert decorators in Dublin take the time to deeply prep every surface, filling cracks, smoothing imperfections, and applying multiple premium coats for an impossibly rich and vibrant color depth.",
    image: "/images/interior_hero.png",
    bullets: [
      "Immaculate Wall & Ceiling Preparation",
      "Color Consultation & Matching",
      "Premium Scuff-Resistant Finishes"
    ]
  },
  {
    title: "99% Dustless Sanding Technology",
    description: "Say goodbye to the nightmare of fine dust coating your furniture. We utilize advanced Festool dustless sanding extractors that capture 99% of airborne particles at the source. Your Dublin home remains immaculate from the moment we arrive until the final coat dries.",
    image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Festool Hepa-Filter Extraction",
      "Total Furniture & Floor Protection",
      "No Lingering Fumes or Odors"
    ]
  }
];

const testimonials: Testimonial[] = [
  { quote: "I was dreading the mess of getting our living area painted, but their dustless sanding system is pure magic. Not a single spec of dust on my sofa. Perfect finish.", name: "Emma Walsh", role: "Homeowner, Blackrock" },
  { quote: "The attention to detail was stunning. They spent two whole days just prepping the walls before the paint even touched the room. Worth every penny.", name: "John Murphy", role: "Homeowner, Dalkey" },
  { quote: "Transformed our outdated kitchen cabinets and dining room into a modern masterpiece. Professional, polite, and exceptionally tidy.", name: "Ciara Byrne", role: "Homeowner, Malahide" }
];

const faqs: Faq[] = [
  { q: "Do I need to move all my furniture?", a: "No! We just ask that you remove small fragile items and electronics. Our crew will carefully move large furniture to the center of the room and hyper-wrap it in protective plastic before we begin." },
  { q: "How does the 'Dustless Sanding' work?", a: "We use high-end Festool sanders hooked directly into industrial HEPA-filter vacuums. The second the dust is generated off the wall, it is sucked into the vacuum, ensuring 99% of dust never hits the air of your home." },
  { q: "How long does an average room take?", a: "A standard bedroom or living room typically takes 1 to 2 days depending on the level of prep work required (filling cracks, repairing water damage, etc.). We never rush the preparation phase." },
  { q: "What brands of paint do you use?", a: "We strictly use premium trade paints from industry leaders like Farrow & Ball, Dulux Trade, and Colourtrend, ensuring a rich pigment and scuff-resistant longevity." }
];

export default function InteriorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <ExpandedHero 
          title="Flawless Interior" 
          highlight="Decorating" 
          subtitle="Elevate your Dublin home with premium finishes, master craftsmanship, and 99% dustless sanding technology."
          imagePath="/images/interior_hero.png"
        />
        
        <div className="w-full relative z-10"><TrustBadges /></div>
        <div className="w-full relative z-10"><ServiceFeatures features={features} /></div>
        <div className="w-full relative z-10"><OurProcess /></div>
        <div className="w-full relative z-10"><TestimonialGrid title="Loved by Dublin Homeowners" testimonials={testimonials} /></div>
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
