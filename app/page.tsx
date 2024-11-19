import Hero from "./components/hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navigation from "./components/navigation";
import Navigation1 from "./components/navigation1";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* <Navigation1/> */}
      {/* <Navigation /> */}
      <Hero />
      <AboutMe/>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
