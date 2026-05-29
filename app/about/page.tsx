import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-24 max-w-5xl">

        {/* Hero */}
        <div className="text-center mb-20">
          <div className="w-24 h-1 bg-primary mx-auto mb-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            The <span className="gold-text italic">Family</span>
          </h1>
          <p className="text-accent/40 text-xl max-w-2xl mx-auto uppercase tracking-wider font-medium">
            Who we are and how we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-primary/10 mb-16">
          {/* Who We Are */}
          <div className="casino-card-bg p-12 border-r border-primary/10">
            <h2 className="text-2xl font-black uppercase tracking-widest text-accent mb-8">Who We Are</h2>
            <p className="text-white/40 font-medium leading-relaxed text-lg mb-6">
              GoodFellasCasino.com is an independent casino review website serving UK players. Our team of experienced reviewers tests and evaluates online casinos so you don&apos;t have to.
            </p>
            <p className="text-white/40 font-medium leading-relaxed text-lg">
              We are not a casino operator. We do not accept deposits, handle real money, or provide gambling services of any kind. Our sole purpose is to provide honest, unbiased guidance to help players make informed decisions.
            </p>
          </div>

          {/* How We Work */}
          <div className="casino-card-bg p-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-accent mb-8">How We Work</h2>
            <ul className="space-y-6">
              {[
                "We independently test every casino we review.",
                "We earn affiliate commissions when users sign up via our links — this never influences our ratings.",
                "We only list operators that accept UK players and hold valid licences.",
                "Ratings are based on bonus value, payout speed, support quality, and game selection.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-2 w-2 h-2 bg-primary rotate-45 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  <p className="text-white/40 font-medium leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Advertiser Disclosure */}
        <div className="p-10 border border-primary/10 bg-white/[0.02] relative">
          <div className="absolute top-0 left-8 -translate-y-1/2">
            <span className="bg-background px-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary">Advertiser Disclosure</span>
          </div>
          <p className="text-white/30 text-sm leading-relaxed font-medium text-center max-w-3xl mx-auto">
            GoodFellasCasino.com is a free service. We earn revenue through affiliate partnerships and may receive a commission if you register with a casino via our links. This does not affect our editorial independence or the objectivity of our reviews.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
