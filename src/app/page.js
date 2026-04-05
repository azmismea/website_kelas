import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Teacher } from "@/components/sections/Teacher";
import { Students } from "@/components/sections/Students";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Teacher />
        <Students />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
