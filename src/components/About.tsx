import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/fa503710-1190-4914-a9b1-1668ddfcf673.png"
                alt="Amirilifee"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Обо Мне</h2>
            <p className="text-muted-foreground mb-6">
              Я увлеченный разработчик с опытом в веб-разработке, автоматизации
              и обучении программированию. За годы работы в создании
              инновационных решений я помог многим клиентам воплотить их идеи в
              жизнь.
            </p>
            <p className="text-muted-foreground mb-6">
              Мой путь в программировании начался с любопытства понять, как
              работают вещи. Сегодня я направляю это любопытство на создание элегантных
              решений и помощь другим в изучении программирования через наставничество и
              обучение.
            </p>
            <a 
              href="https://drive.google.com/file/d/1rAu9AYIxFAIw_iiwNejZtBxvlqT0ODVk/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="group">
                <FileText className="mr-2 h-4 w-4" />
                Скачать Резюме
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;