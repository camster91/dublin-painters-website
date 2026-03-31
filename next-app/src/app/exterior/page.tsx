import { Header } from "@/components/header";
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
  title: "Exterior House Painters Dublin | Painters Dublin",
  description: "Protect and beautify your exterior with our 10-year weather-resistant painting solutions. Serving classic and modern homes throughout Dublin."
};

const features = [
  {
    title: "10-Year Weather Protection",
    description: "Dublin's harsh coastal climate demands superior exterior protection. We don't just paint; we weatherproof your home. Using highly breathable, elastomeric exterior masonry coatings, we ensure your building is protected against driving rain, frost, and algae for up to a decade.",
    image: "/images/exterior_hero.png",
    bullets: [
      "Anti-Fungal & Algae Resistant Coatings",
      "Breathable Elastomeric Masonry Paint",
      "10-Year Written Guarantee"
    ]
  },
  {
    title: "Expert Masonry & Wood Repair",
    description: "Before a single drop of paint is applied, our craftsmen meticulously execute necessary repairs. We fix blown render, fill deep cracks, and repair rotting wooden sash windows and fascias. This rigorous preparation guarantees a flawless finish that won't flake or peel.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bullets: [
      "Power Washing & Algae Treatment",
      "Render & Crack Repair",
      "Precision Woodwork Restoration"
    ]
  }
];

const testimonials: Testimonial[] = [
  { quote: "Our pebble dash exterior was a nightmare, but these guys power-washed, repaired the cracks, and sprayed it flawlessly. It looks like a brand new house.", name: "Paul Gallagher", role: "Homeowner, Howth" },
  { quote: "They handled all the scaffolding logistics and painted our tall Edwardian house with total precision. The woodwork on the sash windows is gleaming.", name: "Siobhan Kelly", role: "Homeowner, Rathmines" },
  { quote: "Fast, reliable, and a 10-year guarantee you can actually trust. The elastomeric paint they used repels the Dublin rain completely. Highly recommended.", name: "Niall O'Shea", role: "Homeowner, Clontarf" }
];

const faqs: Faq[] = [
  { q: "Do you supply your own scaffolding?", a: "Yes. For 2-story homes or higher, we arrange full scaffolding supply, erection, and dismantling. The cost of scaffolding is transparently included in your fixed-price quote." },
  { q: "How do you prep the exterior before painting?", a: "Preparation is 80% of an exterior job. We soft-wash or power-wash the walls to remove dirt and algae, treat with fungicidal wash, scrape flaking paint, fill masonry cracks, and repair blown render before any primer touches the wall." },
  { q: "Can you paint over pebble dash or roughcast?", a: "Absolutely. We specialize in painting pebble dash. We use high-pressure airless sprayers that drive the paint deep into the rough texture, providing a much thicker, more even coat than traditional rollers." },
  { q: "Do you paint exterior woodwork and fascias?", a: "Yes. We fully strip, treat, and repaint wooden sash windows, doors, fascias, and soffits with premium weather-resistant glosses or satins." }
];

export default function ExteriorPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <ExpandedHero 
          title="Exterior House" 
          highlight="Painting" 
          subtitle="Defend your property against the Irish elements with beautiful, 10-year weather-resistant masonry protection."
          imagePath="/images/exterior_hero.png"
        />
        
        <div className="w-full relative z-10"><TrustBadges /></div>
        <div className="w-full relative z-10"><ServiceFeatures features={features} /></div>
        <div className="w-full relative z-10"><OurProcess /></div>
        <div className="w-full relative z-10"><TestimonialGrid title="The Best Protection for Dublin Homes" testimonials={testimonials} /></div>
        <div className="w-full relative z-10"><FaqSection faqs={faqs} /></div>

        <div className="w-full relative z-20 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.1)]">
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
