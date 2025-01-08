import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const projects = [
  {
    title: "SofiAI",
    description: "Умный AI-ассистент для Telegram, созданный с использованием OpenAI API",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    github: "https://github.com/amirymax/SofiAI",
    tags: ["Python", "OpenAI API", "Telegram API", "SQLite"],
  },
  {
    title: "TwitClone",
    description: "Клон Twitter с основными функциями социальной сети",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    github: "https://github.com/amirymax/TwitClone",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
  },
  {
    title: "MoodMonitorBot",
    description: "Telegram бот для отслеживания настроения и эмоционального состояния",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    github: "https://github.com/amirymax/MoodMonitorBot",
    tags: ["Python", "Telegram API", "SQLite", "Data Analysis"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Избранные Проекты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Демонстрация моих лучших работ, показывающая мои навыки и опыт в
            различных технологиях.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg overflow-hidden hover-card"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="secondary" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;