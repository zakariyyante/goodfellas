import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="casino-card-bg p-10 md:p-16 rounded-[3rem]">
          <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-white">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          
          <div className="space-y-10 text-white/60 font-bold leading-relaxed">
            <section>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">Effective Date: May 29, 2026</p>
              <p>
                At GoodFellasCasino.com, accessible from goodfellascasino.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GoodFellasCasino.com and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Log Files</h2>
              <p>
                GoodFellasCasino.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Cookies and Web Beacons</h2>
              <p>
                Like any other website, GoodFellasCasino.com uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Google DoubleClick DART Cookie</h2>
              <p>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Privacy Policies</h2>
              <p>
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on GoodFellasCasino.com, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>
              <p className="mt-4">
                Note that GoodFellasCasino.com has no access to or control over these cookies that are used by third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
