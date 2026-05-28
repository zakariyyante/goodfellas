import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandGrid from "@/components/BrandGrid";
import DisclaimerBar from "@/components/DisclaimerBar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import MobileModal from "@/components/MobileModal";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : undefined;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        <Hero />
        
        <Suspense fallback={
          <div className="py-24 bg-background flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <BrandGrid gclid={gclid} />
        </Suspense>
        
        <DisclaimerBar />
        
        <AboutSection />
      </div>
      
      <Footer />
      
      <Suspense fallback={null}>
        <MobileModal />
      </Suspense>
    </main>
  );
}
