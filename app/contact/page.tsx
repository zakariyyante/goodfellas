import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-24 max-w-3xl">

        <div className="text-center mb-20">
          <div className="w-24 h-1 bg-primary mx-auto mb-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Get In <span className="gold-text italic">Touch</span>
          </h1>
          <p className="text-accent/40 text-xl max-w-2xl mx-auto uppercase tracking-wider font-medium">
            We&apos;re happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-primary/10 mb-16">
          <div className="casino-card-bg p-12 border-r border-primary/10">
            <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-8">General Enquiries</h2>
            <p className="text-white/40 font-medium leading-relaxed mb-6">
              For questions about our reviews, ratings, or content, reach out via email and we&apos;ll get back to you within 48 hours.
            </p>
            <a
              href="mailto:info@goodfellascasino.com"
              className="inline-flex items-center gap-3 px-6 py-4 border border-primary/40 text-primary font-black text-sm uppercase tracking-[0.3em] hover:bg-primary hover:text-black transition-all duration-300"
            >
              info@goodfellascasino.com
            </a>
          </div>

          <div className="casino-card-bg p-12">
            <h2 className="text-xl font-black uppercase tracking-widest text-accent mb-8">Responsible Gambling</h2>
            <p className="text-white/40 font-medium leading-relaxed mb-6">
              If you or someone you know needs help with gambling, please contact the National Gambling Helpline — free and available 24/7.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:08088020133" className="inline-flex items-center gap-3 px-6 py-4 border border-primary/20 text-accent/60 font-black text-sm uppercase tracking-[0.3em] hover:text-primary hover:border-primary transition-all duration-300">
                0808 8020 133
              </a>
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-4 border border-primary/20 text-accent/60 font-black text-sm uppercase tracking-[0.3em] hover:text-primary hover:border-primary transition-all duration-300">
                BeGambleAware.org
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 border border-primary/10 bg-white/[0.02] text-center">
          <p className="text-white/20 text-sm font-medium leading-relaxed">
            GoodFellasCasino.com is an independent review website. We do not accept deposits or any payments from users.
            For operator complaints, please contact the casino directly or raise a dispute with their licensing body.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
