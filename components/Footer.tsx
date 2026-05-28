import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logo Centered */}
        <div className="flex flex-col items-center mb-20">
          <Link href="/" className="flex flex-col items-center gap-4 group">
            <div className="relative w-72 h-20">
              <Image 
                src="/logo.png" 
                alt="Good Casino Fellas Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black mt-2">
              INDEPENDENT CASINO REVIEWS
            </span>
          </Link>
        </div>

        {/* Advertiser Disclosure */}
        <div className="mb-16 p-8 border border-primary/10 bg-white/[0.02] relative">
          <div className="absolute top-0 left-8 -translate-y-1/2">
            <span className="bg-background px-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary">Advertiser Disclosure</span>
          </div>
          <p className="text-white/30 text-sm leading-relaxed font-medium text-center max-w-4xl mx-auto">
            GoodFellasCasino.com is a <strong className="text-white/60">free, independent casino review guide</strong>. We do not charge users any fees or accept payments from players. This website earns revenue through affiliate partnerships — we may receive a commission when you click a link and register with an operator. This does not affect our editorial independence or the objectivity of our reviews. All rankings are based on our own assessment criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Quick Links
            </h4>
            <nav className="flex flex-col gap-5">
              <Link href="/" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Home</Link>
              <Link href="/#brands" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Top Brands</Link>
              <Link href="/guide" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Casino Guide</Link>
              <Link href="/about" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">About Us</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Legal Info
            </h4>
            <nav className="flex flex-col gap-5">
              <Link href="/privacy" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Privacy Policy</Link>
              <Link href="/terms" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Terms of Service</Link>
              <Link href="/cookies" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Cookie Policy</Link>
              <Link href="/contact" className="text-white/40 hover:text-primary transition-colors text-xs font-black uppercase tracking-widest">Contact Us</Link>
            </nav>
          </div>

          {/* Disclaimer */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              18+ Responsible Gambling
            </h4>
            <p className="text-white/30 text-sm leading-relaxed font-medium max-w-xl">
              Gambling is for adults aged 18 and over only. Please gamble responsibly. If you feel you may have a problem, seek help from{" "}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware</a>,{" "}
              <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GamCare</a>, or{" "}
              <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GamStop</a>.
              National Gambling Helpline: <strong className="text-white/60">0808 8020 133</strong> (free, 24/7).
            </p>
          </div>
        </div>

        {/* Regulatory Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-12 py-12 border-y border-primary/10">
          {/* 18+ Badge */}
          <div className="flex items-center justify-center w-14 h-14 border-2 border-primary/30 text-primary font-black text-xl opacity-40 hover:opacity-100 transition-all duration-300 cursor-default">
            18+
          </div>

          {/* BeGambleAware */}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-12 w-44 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            aria-label="BeGambleAware"
          >
            <Image src="/gambleaware.png" alt="BeGambleAware" fill className="object-contain" />
          </a>

          {/* GamCare */}
          <a
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-12 w-36 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            aria-label="GamCare"
          >
            <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
          </a>

          {/* GamStop */}
          <a
            href="https://www.gamstop.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-12 w-36 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            aria-label="GamStop"
          >
            <Image src="/gamestop.png" alt="GamStop" fill className="object-contain" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-3">
          <p className="text-white/20 text-xs leading-relaxed font-medium max-w-3xl mx-auto">
            GoodFellasCasino.com is an independent casino review website. We do not accept deposits or any payments from our users. All content is provided for informational and entertainment purposes only.
          </p>
          <p className="text-white/10 text-[9px] font-black uppercase tracking-[0.5em]">
            © {currentYear} GOODFELLASCASINO.COM | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
