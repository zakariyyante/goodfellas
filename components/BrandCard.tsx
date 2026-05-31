"use client";

import Image from "next/image";
import { Brand, BadgeType } from "@/app/data/brands";
import { track } from "@vercel/analytics";

const BADGE_CONFIG: Record<BadgeType, { label: string; icon: string; className: string }> = {
  "boss-pick":       { label: "Boss's Pick",    icon: "🎩", className: "bg-primary text-black border-primary/60" },
  "new-release":     { label: "New Release",    icon: "⚡", className: "bg-secondary text-white border-secondary/60" },
  "fast-withdrawal": { label: "Fast Withdrawal",icon: "💨", className: "bg-zinc-800 text-accent border-accent/30" },
  "exclusive":       { label: "Exclusive",      icon: "🔑", className: "bg-zinc-900 text-primary border-primary/40" },
  "top-rated":       { label: "Top Rated",      icon: "👑", className: "bg-primary text-black border-primary/60" },
  "hot":             { label: "Hot Right Now",  icon: "🔥", className: "bg-red-900 text-white border-red-600/40" },
  "editors-choice":  { label: "Editor's Choice",icon: "✦",  className: "bg-primary text-black border-primary/60" },
  "expert-choice":   { label: "Expert Choice",  icon: "🏆", className: "bg-zinc-800 text-primary border-primary/40" },
  "top-pick":        { label: "Top Pick",       icon: "⭐", className: "bg-zinc-900 text-accent border-accent/30" },
};

interface BrandCardProps {
  brand: Brand;
  rank?: number;
  gclid?: string;
  compact?: boolean;
}

declare global {
  interface Window {
    gtag_report_conversion?: (brandName?: string) => void;
  }
}

export default function BrandCard({ brand, rank, gclid, compact }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    // Append GCLID directly to the empty trailing param
    return `${url}${gclid}`;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Fire Vercel Analytics event
    track('Brand Click', { brand: brand.name });

    // Fire Google Ads brand_click conversion
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(brand.name);
    }

    // Open affiliate URL in new tab
    window.open(buildUrl(brand.url, gclid), '_blank', 'noopener,noreferrer');
  };

  const getRankBadge = (rank?: number) => {
    if (rank === 1) return <div className="absolute -top-3 -left-3 z-20 bg-primary text-black font-black px-6 py-2 rounded-none shadow-[0_0_20px_rgba(212,175,55,0.4)] rotate-[-3deg] uppercase text-[12px] tracking-[0.3em] border border-accent">The Boss</div>;
    if (rank === 2) return <div className="absolute -top-3 -left-3 z-20 bg-zinc-800 text-primary font-black px-6 py-2 rounded-none shadow-2xl rotate-[-3deg] uppercase text-[12px] tracking-[0.3em] border border-primary/40">Underboss</div>;
    if (rank === 3) return <div className="absolute -top-3 -left-3 z-20 bg-zinc-900 text-accent font-black px-6 py-2 rounded-none shadow-2xl rotate-[-3deg] uppercase text-[12px] tracking-[0.3em] border border-accent/20">Consigliere</div>;
    return null;
  };

  // ── Compact layout (used in mobile modal) ────────────────────────────────
  if (compact) {
    const badge = brand.badge ? BADGE_CONFIG[brand.badge] : null;
    return (
      <div
        onClick={handleCardClick}
        className="relative group cursor-pointer casino-card-bg rounded-none overflow-hidden transition-all duration-500 hover:border-primary border border-primary/30"
      >
        {/* Rank colour strip on left */}
        <div className={`absolute top-0 left-0 h-full w-1 ${rank === 1 ? 'bg-primary shadow-[0_0_10px_rgba(212,175,55,0.6)]' : rank === 2 ? 'bg-zinc-500' : 'bg-zinc-700'}`} />

        <div className="pl-5 pr-5 pt-5 pb-4 flex flex-col gap-4 relative z-10">
          {/* Top row: logo + bonus info */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="relative w-28 h-24 shrink-0 bg-black/60 border border-primary/10 group-hover:border-primary/30 transition-colors overflow-hidden">
              <Image src={brand.logo} alt={brand.name} fill className="object-contain p-3" />
            </div>

            {/* Offer details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {badge && (
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] border ${badge.className}`}>
                    {badge.icon} {badge.label}
                  </span>
                )}
              </div>
              <p className="text-base font-black text-white leading-snug">{brand.bonus}</p>
              <div className="flex items-center gap-1.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rotate-45 ${i < Math.floor(brand.rating / 2) ? 'bg-primary shadow-[0_0_6px_rgba(212,175,55,0.8)]' : 'bg-white/10'}`} />
                ))}
                <span className="text-xs font-black text-accent/50 ml-1">{brand.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* CTA button — full width, prominent */}
          <button className="w-full py-4 bg-primary text-black font-black uppercase tracking-[0.4em] text-sm hover:bg-accent active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Claim Offer →
          </button>

          <p className="text-[9px] text-center text-accent/10 font-black uppercase tracking-widest -mt-1">
            18+ | T&Cs Apply | Play Responsibly
          </p>
        </div>
      </div>
    );
  }

  // ── Full layout ───────────────────────────────────────────────────────────
  const badge = brand.badge ? BADGE_CONFIG[brand.badge] : null;

  return (
    <div 
      onClick={handleCardClick}
      className="relative group cursor-pointer casino-card-bg rounded-none overflow-hidden transition-all duration-700 hover:border-primary red-shimmer border-2 border-primary/20"
    >
      {getRankBadge(rank)}

      {/* Badge pill — top right */}
      {badge && (
        <div className={`absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] border ${badge.className} shadow-lg`}>
          <span>{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      )}
      
      {/* Ornate Corner Accents */}
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity">
        <div className="absolute top-2 right-2 w-full h-full border-t-2 border-r-2 border-primary/40" />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity">
        <div className="absolute bottom-2 left-2 w-full h-full border-b-2 border-l-2 border-primary/40" />
      </div>

      <div className="p-12 flex flex-col lg:flex-row lg:items-center gap-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 flex-1">
          {/* LEFT COL: Logo + Rating */}
          <div className="flex flex-col items-center gap-8 min-w-[180px]">
            <div className="relative w-44 h-28 bg-black/60 rounded-none p-6 flex items-center justify-center border border-primary/20 group-hover:border-primary transition-all duration-500 overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-pinstripe-bg opacity-10" />
              <Image src={brand.logo} alt={brand.name} fill className="object-contain p-6 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-none rotate-45 ${i < Math.floor(brand.rating / 2) ? 'bg-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/5'}`} />
                ))}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black gold-text">{brand.rating.toFixed(1)}</span>
                <span className="text-xs font-bold text-accent/20 uppercase tracking-[0.3em]">Rating</span>
              </div>
            </div>
          </div>

          {/* RIGHT COL: Bonus Text */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <div className="flex flex-wrap items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary border-b-2 border-primary/10 pb-1">Privileged Offer</span>
            </div>
            <div className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
              {brand.bonus}
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black text-accent/30 uppercase tracking-[0.3em] group-hover:text-accent transition-colors">Fast Payouts</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black text-accent/30 uppercase tracking-[0.3em] group-hover:text-accent transition-colors">UK Regulated</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button & Disclaimer */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <button className="w-full py-7 rounded-none bg-zinc-950 border-2 border-primary/40 text-primary font-black uppercase tracking-[0.5em] text-sm hover:bg-primary hover:text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 relative overflow-hidden group/btn">
            <span className="relative z-10">Enter The Casino</span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
          </button>
          <p className="text-[10px] text-center text-accent/10 font-black uppercase tracking-[0.3em]">
            18+ | Respect The Game | T&Cs Apply
          </p>
        </div>
      </div>
    </div>
  );
}
