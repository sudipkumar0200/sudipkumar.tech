"use client";
import { ArrowDownIcon, Github, Linkedin} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
const resumePath = "/SudipResume.pdf";
import { motion } from "framer-motion";

const languages = [
  "JavaScript",
  "TypeScript",
  "Express.js",
  "Hono.js",
  "PostgreSQL",
  "Github",
  "AWS",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "SQL",
  "GraphQL",
  "Docker",
  "Prisma",
  "reverseProxy",
];

export default function Hero() {
  const [glitchText, setGlitchText] = useState("Developer");


 const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // useEffect(() => {
  //   setDimensions({
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   });
  // }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const titles = ["Developer", "Engineer", "Designer"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setGlitchText(titles[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {languages.map((lang) => (
          <motion.div
            key={lang}
            className="absolute text-green-500 text-opacity-30 font-mono"
            initial={{
              x: Math.random() * dimensions.width,
              // x: Math.random() * window.innerWidth,
              y: Math.random() * dimensions.height,
              // y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                // Math.random() * window.innerWidth,
                // Math.random() * window.innerWidth,
                // Math.random() * window.innerWidth,
                Math.random() * dimensions.width,
                Math.random() * dimensions.width,
                Math.random() * dimensions.width,

              ],
              y: [
                // Math.random() * window.innerHeight,
                // Math.random() * window.innerHeight,
                // Math.random() * window.innerHeight,
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
                Math.random() * dimensions.height
              ],
            }}
            transition={{
              duration:10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {lang}
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-40">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border border-white-500/20" />
        ))}
      </div>
      <div className="container px-4 flex flex-col items-center text-center relative">
        <h1 className="text-7xl font-bold mb-6  text-green-500">
          Full Stack
          <span className="block text-white text-6xl">{glitchText}</span>
        </h1>
        {/* <Terminal className="w-14 h-14 mx-auto mb-8 animate-bounce  text-green-500" /> */}
        <div
          className="flex gap-4 mb-12 animate-slide-up opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-white card-hover shimmer h-14 w-16 p-3 border border-white rounded-lg hover:text-green-500"
            asChild
          >
            <a
              href="https://github.com/sudipkumar0200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-8 w-8" />
              {/* <p className="text-xl">Github</p> */}
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="gap-1 card-hover shimmer h-14 w-16 p-3 border border-white rounded-lg hover:text-green-500"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/sudip-kumar-sk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-8 w-8" strokeWidth={1.5} />
              {/* <p className="text-xl">Linkedin</p> */}
            </a>
          </Button>
        </div>
        <div
          className="animate-slide-up opacity-0"
          style={{ animationDelay: "600ms" }}
        >
          <Button className="card-hover animate-pulse-slow h-10 w-40" asChild>
            <a href={resumePath} download>
              Resume <ArrowDownIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
