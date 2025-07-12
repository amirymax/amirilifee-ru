
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Wifi, Clock, Heart } from "lucide-react";

const Academy = () => {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof courses[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: "Python аз 0 + Telegram-бот",
      image: "/lovable-uploads/bbb02758-f381-4d59-8a17-6d073e8d98e9.png",
      price: "399 TJS",
      description: "Асосҳои Python: синтаксис, структураҳо, OOP, кор бо файлҳо. Telegram Bot API: aiogram, командаҳо, клавиатураҳо ва кор бо медиа. Дастрасии абадӣ, видеодарсҳо, супоришҳо, ментори шахсӣ ва гурӯҳ барои саволу ҷавоб.",
      requirements: "Ноутбук ё телефон, интернет, вақт, хоҳиши омӯзиш"
    },
    {
      title: "Вебсайт бо Истифодаи AI",
      image: "/lovable-uploads/9466b3fd-b2f6-4a52-8a7a-2b5960b320fb.png",
      price: "399 TJS",
      description: "Таҳияи веб бо AI (Tilda, Framer, ChatGPT, Midjourney). Генерацияи контент, UX/UI, API, чатботҳо ва автоматизатсия. Дарсҳои видеоӣ, амалия, дастгирӣ ва сохтани сайти шахсӣ ё MVP.",
      requirements: "Ноутбук, интернет, вақт, хоҳиши эҷод"
    },
    {
      title: "Алгоритмҳо ва BigTech",
      image: "/lovable-uploads/025a29d9-7daa-4ed7-bd69-bcceb903f302.png",
      price: "399 TJS",
      description: "Алгоритмҳои асосӣ, структураҳои додаҳо, LeetCode-style машқҳо ва тайёрӣ ба собесаи техникӣ барои ширкатҳои BigTech. Mock-интервюҳо, менторинг ва супоришҳои амалӣ.",
      requirements: "Дониши Python ё C++, ноутбук, интернет, вақти ҷиддӣ"
    }
  ];

  const handlePurchaseClick = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/amirilifee", "_blank");
  };

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400">
                AMIRI Academy
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
              Ҳаёти нав бо Барномасозӣ!
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Дарсҳои амалӣ ва ментори шахсӣ барои омӯзиши технологияҳои муосир
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile-Friendly
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Wifi className="w-4 h-4 mr-2" />
              Дастрасии абадӣ
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Дастгирӣ
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-2" />
              Ментори шахсӣ
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Курсҳои мо
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-bold">
                        {course.price}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white text-xl mb-2">
                      {course.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                      {course.description}
                    </CardDescription>

                    <div className="mb-4">
                      <p className="text-xs text-gray-400 font-medium mb-2">Талабот:</p>
                      <p className="text-xs text-gray-300">{course.requirements}</p>
                    </div>

                    <Button
                      onClick={() => handlePurchaseClick(course)}
                      className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Харидан
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass border-border/50">
          <DialogHeader>
            <DialogTitle className="text-white text-xl mb-2">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Барои харидории курс ба Telegram нависед
            </DialogDescription>
          </DialogHeader>

          <div className="pt-4">
            <Button
              onClick={handleTelegramClick}
              className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Навиштан
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Amiri Academy. Ҳамаи ҳуқуқҳо маҳфуз аст.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Academy;
