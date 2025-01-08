import { Code2, Bot, BookOpen, Users, MessageSquare, Binary } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Creating modern, responsive websites with cutting-edge technologies.",
  },
  {
    icon: Bot,
    title: "Telegram Bot Creation",
    description: "Developing custom Telegram bots for various purposes.",
  },
  {
    icon: BookOpen,
    title: "Python Programming",
    description: "Teaching Python programming fundamentals to beginners.",
  },
  {
    icon: Users,
    title: "Individual Mentorship",
    description: "One-on-one guidance for aspiring developers.",
  },
  {
    icon: MessageSquare,
    title: "Bot Training",
    description: "Comprehensive training on creating and managing Telegram bots.",
  },
  {
    icon: Binary,
    title: "Algorithm Training",
    description: "Learning essential algorithms and problem-solving techniques.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои Услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Комплексные решения, адаптированные под ваши потребности, от веб-разработки до
            обучения программированию.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg hover-card"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;