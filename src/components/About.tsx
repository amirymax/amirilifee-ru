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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer with expertise in web development, automation,
              and programming education. With years of experience in creating
              innovative solutions, I've helped numerous clients bring their ideas to
              life.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in programming began with a curiosity to understand how
              things work. Today, I channel that curiosity into creating elegant
              solutions and helping others learn programming through mentorship and
              training.
            </p>
            <Button className="group">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;