import Link from "next/link";

export default function DisclaimerBar() {
  return (
    <div className="bg-zinc-950 border-y border-white/5 py-12 pinstripe-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 text-center lg:text-left">
          {/* 18+ Warning */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="w-16 h-16 rounded-none border border-primary flex items-center justify-center text-primary font-black text-2xl shadow-[0_0_20px_rgba(185,28,28,0.2)] bg-black">
              18+
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white uppercase tracking-tighter">Strictly 18+</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Code of Conduct</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="hidden lg:block h-16 w-px bg-white/5" />
          
          {/* Compliance Text */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/30 font-medium leading-relaxed max-w-4xl uppercase tracking-tight">
              Gamble responsibly. This is entertainment, not a business. If you&apos;re losing more than just your pride, it&apos;s time to step away. We support <Link href="https://www.begambleaware.org" className="text-white font-black hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">BeGambleAware</Link> and <Link href="https://www.gamstop.co.uk" className="text-white font-black hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">GamStop</Link>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Helpline: <span className="text-white/60">0808 8020 133</span></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Regulated: <span className="text-white/60">UK Gambling Commission</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
