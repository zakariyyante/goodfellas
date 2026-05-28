import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-24 max-w-4xl">
        <div className="casino-card-bg p-10 md:p-16 rounded-[3rem]">
          <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-white">
            Terms of <span className="text-primary">Service</span>
          </h1>
          
          <div className="space-y-10 text-white/60 font-bold leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">1. Acceptance of Terms</h2>
              <p>
                By accessing the website at goodfellascasino.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on GoodFellasCasino.com&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on GoodFellasCasino.com&apos;s website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">3. Disclaimer</h2>
              <p>
                The materials on GoodFellasCasino.com&apos;s website are provided on an &apos;as is&apos; basis. GoodFellasCasino.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">4. Limitations</h2>
              <p>
                In no event shall GoodFellasCasino.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GoodFellasCasino.com&apos;s website, even if GoodFellasCasino.com or a GoodFellasCasino.com authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on GoodFellasCasino.com&apos;s website could include technical, typographical, or photographic errors. GoodFellasCasino.com does not warrant that any of the materials on its website are accurate, complete or current. GoodFellasCasino.com may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">6. Links</h2>
              <p>
                GoodFellasCasino.com has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GoodFellasCasino.com of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
