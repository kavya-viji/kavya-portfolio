import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { LearningJourney } from "@/components/LearningJourney";
import { BeyondWork } from "@/components/BeyondWork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <LearningJourney />
        <BeyondWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
