import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const projects = [
  {
    title: "BeBetter",
    description: "Платформа которая поможет вам саморазвиваться",
    image: "/lovable-uploads/5b5f502d-c863-455e-9af7-5509228f8467.png",
    github: "https://github.com/amirymax/BeBetter",
    tags: ["Python", "Django", "Bootstrap", "Telegram API"],
  },
  {
    title: "SofiAI",
    description: "Продвинутый голосовой ассистент с интеграцией машинного обучения для интерактивного и контекстно-зависимого взаимодействия",
    image: "/lovable-uploads/f817e49f-155d-4b13-a8d3-4c604d7fe143.png",
    github: "https://github.com/amirymax/SofiAI",
    tags: ["Python", "JavaScript", "Vosk", "Flask"],
  },
  {
    title: "TwitClone",
    description: "Клон Twitter, разработанный с использованием Django",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    github: "https://github.com/amirymax/TwitClone",
    tags: ["Python", "Django", "Bootstrap", "SQLite"],
  },
  {
    title: "MoodMonitorBot",
    description: "Этот бот поможет определить ваше эмоциональное состояние на основе текста, аудио и видео",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    github: "https://github.com/amirymax/MoodMonitorBot",
    tags: ["Python", "Aiogram", "OpenCV"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/5">
      <div className="container max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg overflow-hidden hover-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain transition-transform duration-300 hover:scale-110"
              />
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
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
