"use client";

import { useEffect, useState } from "react";
import { brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function MobileModal() {
  const searchParams = useSearchParams();
  const gclid = searchParams.get('gclid');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const mobileBrands = brands.filter(b => b.isMobile);

    // Only show modal if there are actual isMobile:true brands — no fallback
    if (gclid && mobileBrands.length > 0 && isMobileDevice) {
      setIsOpen(true); // eslint-disable-line react-hooks/set-state-in-effect
      document.body.style.overflow = 'hidden';
    }
  }, [gclid]);

  if (!isOpen) return null;

  // Only isMobile:true brands — guaranteed non-empty because of the useEffect guard above
  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto">
      <div className="min-h-screen flex flex-col felt-texture pinstripe-bg">
        {/* Header — no close button */}
        <div className="sticky top-0 z-[110] bg-black/95 backdrop-blur-xl border-b border-primary/20 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-32 h-10">
              <Image
                src="/logo.png"
                alt="Good Casino Fellas"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="h-6 w-px bg-primary/20" />
            <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Mobile Exclusive</span>
          </div>
          {/* 18+ badge in place of close button */}
          <div className="w-10 h-10 border border-primary/40 flex items-center justify-center text-primary font-black text-xs">
            18+
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 pt-6 pb-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 bg-primary animate-pulse shadow-[0_0_8px_rgba(212,175,55,1)]"></span>
              <span className="text-[9px] font-black tracking-[0.35em] text-accent uppercase">Exclusive Offer Unlocked</span>
            </div>
            <h2 className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
              UK&apos;s Best <span className="gold-text italic">Casinos</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 relative z-10 max-w-2xl mx-auto">
            {mobileBrands.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                rank={index + 1}
                gclid={gclid || undefined}
                compact
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-primary/10 bg-black/60 text-center">
          <div className="flex justify-center items-center gap-6 mb-4">
            <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-[10px] font-black text-primary">18+</div>
            <div className="h-8 w-px bg-white/5"></div>
            <div className="text-[10px] font-black text-accent/30 tracking-[0.3em] uppercase">UKGC Regulated</div>
            <div className="h-8 w-px bg-white/5"></div>
            <div className="text-[10px] font-black text-accent/30 tracking-[0.3em] uppercase">BeGambleAware</div>
          </div>
          <p className="text-[9px] text-accent/10 font-black uppercase tracking-widest leading-relaxed">
            Please gamble responsibly. For help and support, call 0808 8020 133.
          </p>
        </div>
      </div>
    </div>
  );
}
