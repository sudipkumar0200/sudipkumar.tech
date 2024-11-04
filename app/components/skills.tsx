import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  Backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'],
  DevOps: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
  Tools: ['VS Code', 'Postman', 'Figma', 'Jest', 'MongoDB'],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text animate-pulse-slow">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <Card 
              key={category}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0 
              }}
              className={`animate-${index % 2 === 0 ? 'slide-left' : 'slide-right'} card-hover`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="transition-colors hover:bg-primary hover:text-primary-foreground animate-fade-in"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}