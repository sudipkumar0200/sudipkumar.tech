import Hero from "./components/hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <Hero />
      <AboutMe/>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
