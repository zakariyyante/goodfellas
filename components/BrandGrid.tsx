import { brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";

interface BrandGridProps {
  gclid?: string;
}

export default function BrandGrid({ gclid }: BrandGridProps) {
  // Sort brands by rating descending
  const sortedBrands = [...brands].sort((a, b) => b.rating - a.rating);

  // Mobile rules:
  // - gclid + isMobile:true brands exist → show isMobile:true brands
  // - gclid + NO isMobile:true brands   → fall back to all brands (original)
  // - no gclid                          → show isMobile:false brands only
  const trueMobileBrands = sortedBrands.filter(b => b.isMobile);
  const mobileBrands = gclid
    ? (trueMobileBrands.length > 0 ? trueMobileBrands : sortedBrands)
    : sortedBrands.filter(b => !b.isMobile);

  return (
    <section id="brands" className="py-32 bg-black relative pinstripe-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="w-32 h-1 bg-primary mb-12 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
          <h2 className="text-5xl md:text-[6rem] font-black mb-10 tracking-tighter uppercase">
            The <span className="gold-text italic">Untouchable</span> List
          </h2>
          <p className="text-accent/30 max-w-3xl text-xl font-medium leading-relaxed uppercase tracking-[0.2em]">
            Vetted by the elite. <br />
            Only the most reliable and trusted brands make the cut.
          </p>
        </div>

        {/* Desktop: show all brands */}
        <div className="hidden md:grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {sortedBrands.map((brand, index) => (
            <div key={brand.id}>
              <BrandCard brand={brand} rank={index + 1} gclid={gclid} />
            </div>
          ))}
        </div>

        {/* Mobile: filtered by gclid rule */}
        <div className="md:hidden grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {mobileBrands.map((brand, index) => (
            <div key={brand.id}>
              <BrandCard brand={brand} rank={index + 1} gclid={gclid} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
