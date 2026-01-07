import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Refurbished from "@/components/Refurbished";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-body bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300 selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Refurbished />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}