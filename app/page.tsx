import Hero from "./components/hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navigation from "./components/navigation";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutMe/>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
