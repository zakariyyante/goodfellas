export default function Hero() {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="relative py-24 md:py-48 overflow-hidden felt-texture pinstripe-bg">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center px-8 py-3 mb-12 rounded-none border border-primary/40 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-4 shadow-[0_0_10px_rgba(212,175,55,1)]"></span>
          <span className="text-xs font-black tracking-[0.4em] uppercase text-accent">
            UK&apos;s Independent Casino Guide {currentYear}
          </span>
        </div>
        
        {/* H1 */}
        <h1 className="text-6xl md:text-[10rem] font-black mb-12 tracking-tighter leading-[0.85] uppercase">
          <span className="text-white/10 block text-4xl md:text-6xl tracking-[0.2em] mb-4">The Elite</span>
          <span className="gold-text">Good Casino</span> <br />
          <span className="text-secondary italic">Fellas</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-accent/40 mb-24 max-w-4xl mx-auto font-medium leading-tight uppercase tracking-[0.2em]">
          Where respect is earned and <br className="hidden md:block" />
          loyalty is rewarded with the city&apos;s best deals.
        </p>
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-6xl mx-auto border border-primary/20">
          {[
            { 
              title: "The Code", 
              desc: "UKGC Regulated",
              icon: "👑"
            },
            { 
              title: "Loyalty", 
              desc: "Exclusive Rewards",
              icon: "♠️"
            },
            { 
              title: "Respect", 
              desc: "Rapid Payouts",
              icon: "💰"
            }
          ].map((badge) => (
            <div key={badge.title} className="flex flex-col items-center gap-4 p-10 bg-black/40 backdrop-blur-sm hover:bg-primary/5 transition-all duration-700 group cursor-default border-r border-primary/10 last:border-r-0">
              <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-black uppercase tracking-[0.3em] text-xl text-accent group-hover:text-primary transition-colors">{badge.title}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold mt-2">{badge.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-black to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black via-black/80 to-transparent" />
    </section>
  );
}
