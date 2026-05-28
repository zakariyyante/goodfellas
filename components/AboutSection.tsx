export default function AboutSection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden pinstripe-bg">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-[7rem] font-black mb-24 text-center tracking-tighter uppercase">
          The <span className="gold-text italic">Good Fellas</span> Code
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl mx-auto border border-primary/20">
          {/* Why Our Reviews Stand Out */}
          <div className="bg-black/40 backdrop-blur-sm p-12 md:p-20 relative group border-r border-primary/10">
            <div className="absolute top-12 right-12 text-7xl opacity-5 group-hover:opacity-10 transition-opacity grayscale">👑</div>
            <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter text-accent">
              Why We Are <span className="gold-text">Untouchable</span>
            </h3>
            <ul className="space-y-12">
              {[
                "Unbiased and independent testing of every operator.",
                "Real-money deposits to verify payout speeds.",
                "Deep dive into T&Cs to find hidden requirements.",
                "Mobile experience testing on iOS and Android.",
                "Direct contact with support to test responsiveness."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-8">
                  <div className="mt-2 w-3 h-3 bg-primary shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.8)] rotate-45" />
                  <p className="text-accent/30 font-bold leading-tight text-xl uppercase tracking-[0.1em] group-hover:text-accent/60 transition-colors">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="bg-black/20 backdrop-blur-sm p-12 md:p-20 relative group">
            <div className="absolute top-12 right-12 text-7xl opacity-5 group-hover:opacity-10 transition-opacity grayscale">♠️</div>
            <h3 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter text-accent">
              The <span className="text-secondary">Omertà</span> of Safety
            </h3>
            <p className="text-accent/20 font-bold leading-relaxed text-xl mb-12 uppercase tracking-[0.1em]">
              We take care of our own. Gambling is a game of respect. If the fun stops, you walk away. No questions asked.
            </p>
            
            <div className="space-y-10">
              <div className="p-12 bg-black/60 border border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pinstripe-bg opacity-10" />
                <h4 className="font-black text-primary uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-4 relative z-10">
                  <span className="w-3 h-3 bg-primary animate-pulse rotate-45"></span>
                  Need a Way Out?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {[
                    { name: "BeGambleAware", url: "https://www.begambleaware.org" },
                    { name: "GamStop", url: "https://www.gamstop.co.uk" },
                    { name: "GamCare", url: "https://www.gamcare.org.uk" },
                    { name: "GA UK", url: "https://www.gamblersanonymous.org.uk" }
                  ].map((org) => (
                    <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-5 bg-zinc-950 hover:bg-primary hover:text-black border border-primary/20 transition-all duration-500 text-accent font-black text-[11px] uppercase tracking-[0.3em]">
                      {org.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
