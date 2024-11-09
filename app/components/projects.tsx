import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using OpenAI API.',
    tech: ['Python', 'FastAPI', 'React', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-14">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text animate-pulse-slow">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              style={{ 
                animationDelay: `${index * 200}ms`,
                opacity: 0 
              }}
              className="animate-scale-in card-hover"
            >
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="transition-colors hover:bg-primary hover:text-primary-foreground animate-fade-in"
                      style={{ animationDelay: `${techIndex * 100 + 200}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="card-hover shimmer" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="card-hover" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}