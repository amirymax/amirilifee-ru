
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Wifi, Clock, Heart, Check } from "lucide-react";

const Academy = () => {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof courses[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: "Python аз 0 + Telegram-бот",
      price: "399 TJS",
      features: [
        "Асосҳои Python: синтаксис, типҳо, структураҳои додаҳо",
        "Усулҳои кор бо ададҳо, сатрҳо, рӯйхат ва луғат",
        "Функсияҳо, модулҳо, файлҳо (JSON), OOP, истисноҳо",
        "Telegram Bot API бо aiogram: ботсозӣ, командаҳо, клавиатураҳо",
        "Дастрасии абадӣ (1 пардохт)",
        "Дарсҳои видеоӣ + маводи амалӣ",
        "Ментори шахсӣ, гурӯҳи саволу ҷавоб",
        "Тестҳо, машқҳо, зангҳои гурӯҳӣ ва маслиҳатҳо"
      ],
      requirements: [
        "Ноутбук ё телефон",
        "Интернет",
        "Вақти озод",
        "Хоҳиш ва омодагӣ ба омӯзиш"
      ]
    },
    {
      title: "Алгоритмҳо ва Таёрӣ ба Интервюи BigTech",
      price: "399 TJS",
      features: [
        "Алгоритмҳои асосӣ: ҷустуҷӯ, сортировка, рекурсия, DP",
        "Структураҳои додаҳо: рӯйхат, стек, черӣ, дарахт, графҳо",
        "Омодагӣ ба саволҳои техникӣ ва real-case analysis",
        "Стратегияҳои ҳалли масъала ва фикркунии алгоритмӣ",
        "Машқҳои LeetCode-style",
        "Зангҳои таҷрибавӣ ва mock interviews",
        "Менторинг ва баррасии кодҳо",
        "Мавод барои такрор ва тестҳои худсанҷишӣ"
      ],
      requirements: [
        "Дониши ибтидоӣ аз Python ё C++",
        "Ноутбук ё компютер",
        "Интернет",
        "Вақти кофӣ ва хоҳиши ҷиддӣ"
      ]
    },
    {
      title: "Вебсайт бо Истифодаи AI (No-Code + Low-Code)",
      price: "399 TJS",
      features: [
        "Тарҳрезии вебсайт бо асбобҳои AI (Lovable Dev, Cursor, Bolt New, ChatGPT)",
        "Генерацияи контент бо ChatGPT, Midjourney, Copy.ai ва дигарон",
        "Дизайн ва UX/UI: шаблонҳо, мобилӣ-адаптивӣ, фидбек",
        "Интегратсия бо API, ботҳо, формҳо, автоматизатсия",
        "Созиши 3+ сайт бо дасти худ",
        "Маводи иловагӣ ва AI-платформаҳо",
        "Супоришҳои амалӣ ва баррасии гурӯҳӣ",
        "Дастгирӣ дар сохтани сайти худ ё MVP"
      ],
      requirements: [
        "Ноутбук",
        "Интернет",
        "Вақти озод",
        "Хоҳиши эҷод ва омӯзиш"
      ]
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-yellow-400">&gt;_ AMIRI</span>{" "}
              <span className="text-blue-400">Academy</span>
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white text-gray-900 border-none rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                      style={{ 
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1), 0 0 20px rgba(139, 92, 246, 0.15)",
                        filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.1))"
                      }}>
                  
                  {/* POPULAR Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-purple-600 text-white font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {course.title}
                    </h3>

                    {/* Price Section */}
                    <div className="mb-2">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">дастрасии абадӣ</p>
                    </div>

                    {/* Features with checkmarks */}
                    <div className="flex-1 mb-6">
                      <ul className="space-y-2">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Purchase Button */}
                    <Button
                      onClick={() => handlePurchaseClick(course)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-none"
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
