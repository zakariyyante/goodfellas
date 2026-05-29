import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="casino-card-bg p-10 md:p-16">
          <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-white">
            Cookie <span className="gold-text italic">Policy</span>
          </h1>

          <div className="space-y-10 text-white/50 font-medium leading-relaxed">
            <section>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">Last updated: May 2026</p>
              <p>
                This Cookie Policy explains how GoodFellasCasino.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-accent uppercase tracking-widest mb-6">What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help us understand how visitors use our site and allow us to improve your experience. Cookies do not contain personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-accent uppercase tracking-widest mb-6">Types of Cookies We Use</h2>
              <ul className="space-y-6">
                {[
                  { type: "Essential Cookies", desc: "Required for the website to function correctly. These cannot be disabled." },
                  { type: "Analytics Cookies", desc: "Used to understand how visitors interact with our site (e.g. Vercel Analytics, Google Analytics). Data is anonymised." },
                  { type: "Marketing Cookies", desc: "Used to track affiliate conversions and measure the performance of our affiliate links via Google Tag." },
                  { type: "Preference Cookies", desc: "Remember your settings and preferences across visits." },
                ].map((item) => (
                  <li key={item.type} className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-primary rotate-45 shrink-0" />
                    <div>
                      <span className="text-white font-black uppercase tracking-wider text-sm">{item.type}: </span>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-accent uppercase tracking-widest mb-6">Third-Party Cookies</h2>
              <p>
                Some cookies are set by third-party services that appear on our pages, including Google (analytics and advertising), Vercel (performance monitoring), and affiliate networks. These third parties have their own privacy and cookie policies which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-accent uppercase tracking-widest mb-6">Managing Cookies</h2>
              <p>
                You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of this website. For more information on managing cookies, visit{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-accent uppercase tracking-widest mb-6">Contact</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{" "}
                <a href="mailto:info@goodfellascasino.com" className="text-primary hover:underline">info@goodfellascasino.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
