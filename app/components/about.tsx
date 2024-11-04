import { Card, CardContent } from "../components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I am a passionate Full Stack Developer with expertise in building scalable web applications.
              With a strong foundation in both frontend and backend technologies, I create elegant
              solutions to complex problems. My approach combines clean code practices with modern
              development tools to deliver high-quality software that makes a difference.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}