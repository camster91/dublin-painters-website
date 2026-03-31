import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBadges } from "@/components/trust-badges";
import { ServiceFeatures } from "@/components/service-features";
import { OurProcess } from "@/components/our-process";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { TestimonialGrid, Testimonial } from "@/components/testimonial-grid";
import { WhyChooseUs } from "@/components/why-choose-us";
import { AwardsSection } from "@/components/awards-section";
import { Pricing } from "@/components/pricing";
import { ServiceAreas } from "@/components/service-areas";
import { FaqSection, Faq } from "@/components/faq-section";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";

const homeFeatures = [
  {
    title: "Expert Interior Decorating",
    description: "Flawless luxury finishes for your home with our signature 99% dustless sanding technology. We transform living spaces with minimal disruption.",
    image: "/images/interior_hero.png",
    bullets: ["Dustless Sanding Technology", "Premium Farrow & Ball Finishes", "Expert Color Consultation"]
  },
  {
    title: "10-Year Exterior Protection",
    description: "Protect your home against the harsh Dublin elements. We use advanced breathable masonry coatings guaranteed for a decade.",
    image: "/images/exterior_hero.png",
    bullets: ["Weatherproof Masonry Coatings", "Professional Power Washing", "10-Year Written Guarantee"]
  },
  {
    title: "Zero-Downtime Commercial",
    description: "Keep your business running. We offer night and weekend scheduling for offices, retail, and industrial painting across Dublin.",
    image: "/images/commercial_hero.png",
    bullets: ["Night & Weekend Scheduling", "Fully Insured & Safe Pass", "Strict Fixed-Price Tenders"]
  }
];

const homeTestimonials: Testimonial[] = [
  { quote: "Their dustless sanding system is pure magic. Not a single spec of dust on my sofa. Perfect finish on our living room.", name: "Emma Walsh", role: "Blackrock Homeowner" },
  { quote: "The elastomeric paint they used repels the Dublin rain completely. Our house looks brand new after 2 years.", name: "Niall O'Shea", role: "Clontarf Homeowner" },
  { quote: "They painted our 4-story office building over the weekend. Our staff returned Monday to a brand new space with zero fumes.", name: "Sarah Jenkins", role: "Facilities Manager" }
];

const homeFaqs: Faq[] = [
  { q: "How soon can I get a quote?", a: "We provide fixed-price quotes within 24 hours of your inquiry. For most residential jobs, we can even provide an estimate over the phone or via photos." },
  { q: "Are you fully insured?", a: "Yes. We carry €2M in public and employer's liability insurance. All our painters are also Safe Pass certified and vetted." },
  { q: "What areas of Dublin do you cover?", a: "We serve all of Dublin city and county, including North Dublin, South Dublin, and surrounding areas like Bray, Greystones, and Maynooth." },
  { q: "Do you handle the cleanup?", a: "ABSOLUTELY. Spotless clean-up is our trademark. We use industrial HEPA vacuums and protective hyper-wrapping to ensure your property remains immaculate." }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full relative z-0">
          <Hero />
        </div>
        
        <div className="w-full relative z-[5]"><TrustBadges /></div>
        
        <div className="w-full relative z-10"><ServiceFeatures features={homeFeatures} /></div>
        
        <div className="w-full relative z-10"><OurProcess /></div>
        
        <div className="w-full relative z-[5] -mt-20 mb-20">
          <BeforeAfterSlider />
        </div>

        <div className="w-full relative z-10"><WhyChooseUs /></div>
        
        <div className="w-full relative z-10"><TestimonialGrid title="Loved by Dublin Homeowners & Businesses" testimonials={homeTestimonials} /></div>

        <div className="w-full relative z-10"><AwardsSection /></div>
        
        <div className="w-full relative z-10">
          <Pricing />
        </div>

        <div className="w-full relative z-10"><ServiceAreas /></div>
        
        <div className="w-full relative z-10"><FaqSection faqs={homeFaqs} /></div>

        <div className="w-full relative z-20 shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.1)] dark:shadow-none border-t border-brand-light dark:border-slate-800">
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
