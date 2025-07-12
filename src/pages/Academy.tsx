
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Smartphone, Wifi, Clock, Heart } from "lucide-react";

const Academy = () => {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof courses[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: ">_ CODE: Python",
      price: "490",
      strikePrice: "600",
      currency: "TJS",
      image: "/lovable-uploads/bbb02758-f381-4d59-8a17-6d073e8d98e9.png",
      description: " Python аз 0 + Сохтани Telegram-ботҳо",
      topics: [
        { text: "Асосҳои Python, Структураҳои додаҳо", included: true },
        { text: "Синтаксис, Типҳо", included: true },
        { text: "Кор бо ададҳо, сатрҳо", included: true },
        { text: "Рӯйхат (list) ва луғат (dict)", included: true },
        { text: "Функсияҳо, модулҳо, JSON", included: true },
        { text: "Барномасозии Объектӣ OOP", included: true },
        { text: "Ботсозӣ бо Aiogram", included: true },
      ],
      whatYouGet: [
        { text: "Дастрасии абадӣ (1 бор пардохт)", included: true },
        { text: "Дарсҳои видеоӣ + маводи амалӣ", included: true },
        { text: "Ментори шахсӣ, гурӯҳи саволу ҷавоб", included: true },
        { text: "Тестҳо, машқҳо", included: true },
        { text: "Зангҳои гурӯҳӣ", included: true },
      ],
      requirements: [
        { text: "Ноутбук ё телефон", included: true },
        { text: "Интернет", included: true },
        { text: "Вақти озод", included: true },
        { text: "Хоҳиши омӯзиш", included: true },
      ],
      
      cardClass: "bg-gray-900 text-white border-gray-700",
      buttonClass: "bg-white text-gray-900 hover:bg-gray-100",
      descriptionClass: "text-white"
    },
    {
      title: ">_ Web AI: lowCODE",
      price: "590",
      strikePrice: "700",
      currency: "TJS",
      image: "/lovable-uploads/9466b3fd-b2f6-4a52-8a7a-2b5960b320fb.png",
      description: "Вебсайт бо Истифодаи AI (No-Code + Low-Code",
      // requirements: "Ноутбук, интернет, вақт, хоҳиши эҷод",
      topics: [
        { text: "Cохтани вебсайт бо Зеҳни Сунъӣ", included: true },
        { text: "ChatGPT | Claude AI", included: true },
        { text: "Lovable.Dev, Bolt.New", included: true },
        { text: "VS Code & Cursor", included: true },
        { text: "Генерацияи контент", included: true },
        { text: "Интегратсия бо Telegram Bot API", included: true },
        { text: "Автоматизатсияи формаҳои заявка", included: true },
      ],
      
      whatYouGet: [
        { text: "Дастрасии абадӣ (1 бор пардохт)", included: true },
        { text: "Созиши 3+ сайт бо дасти худ", included: true },
        { text: "Ментори шахсӣ, гурӯҳи саволу ҷавоб", included: true },
        { text: "Маводи иловагӣ ва AI-платформаҳо", included: true },
        { text: "Зангҳои гурӯҳӣ", included: true },
        
      ],

      requirements: [
        { text: "Ноутбук/Компютер", included: true },
        { text: "Интернет, вақти озод", included: true },
        { text: "Вақти озод", included: true },
        { text: "Хоҳиши эҷод ва омӯзиш", included: true },
      ],
      cardClass: "bg-white text-gray-900 border-2 border-primary shadow-xl relative",
      buttonClass: "bg-primary text-white hover:bg-primary/90",
      descriptionClass: "text-gray-900"
    },
    {
      title: ">_ Алгоритм-CODE",
      price: "349",
      strikePrice: "500",
      currency: "TJS",
      image: "/lovable-uploads/025a29d9-7daa-4ed7-bd69-bcceb903f302.png",
      description: " Алгоритм, Структураҳои додаҳо ва Таёрӣ ба Интервюи Компанияҳои Бузурги IT (BigTech)",
      // requirements: "Дониши Python ё C++, ноутбук, интернет, вақти ҷиддӣ",
      topics: [
        { text: "Алгоритмҳои асосӣ: ҷустуҷӯ, сортировка", included: true },
        { text: "Рекурсия, Барномасозии динамикӣ DP", included: true },
        { text: "Рӯйхат (list), стек,  дарахт, графҳо", included: true },
        { text: "Омодагӣ ба саволҳои техникӣ ва real-case analysis", included: true },
        { text: "Фикркунии алгоритмӣ", included: true },
        
      ],
      whatYouGet: [
        { text: "Дастрасии абадӣ (1 бор пардохт)", included: true },
        { text: "Машқҳои LeetCode-style", included: true },
        { text: "Ментори шахсӣ, гурӯҳи саволу ҷавоб", included: true },
        { text: "Mock interviews", included: true },
        { text: "Зангҳои гурӯҳӣ", included: true },
        { text: "Баррасии кодҳо", included: true },
      ],
      requirements: [
        { text: "Ноутбук/Компютер", included: true },
        { text: "Интернет, вақт", included: true },
        { text: "Дониши ибтидоӣ аз Python", included: true },
        { text: "Зангҳои гурӯҳӣ", included: true },
      ],
      cardClass: "bg-purple-900 text-white border-red-500",
      buttonClass: "bg-white text-purple-900 hover:bg-gray-100",
      descriptionClass: "text-white"
    },
    {
      title: ">_ Пакети Пурра❗️",
      price: "1200",
      strikePrice: "490 + 590 + 349 = 1429",
      currency: "TJS",
      image: "full.png",
      description: "❗️Ҳамаи курсҳо якҷоя бо тахфифи 200 СОМОНӢ❗️",
      // requirements: "Дониши Python ё C++, ноутбук, интернет, вақти ҷиддӣ",
      topics: [
        { text: "Алгоритмҳои асосӣ: ҷустуҷӯ, сортировка", included: true },
        { text: "Рекурсия, Барномасозии динамикӣ DP", included: true },
        { text: "Рӯйхат (list), стек,  дарахт, графҳо", included: true },
        { text: "Омодагӣ ба саволҳои техникӣ ва real-case analysis", included: true },
        { text: "Фикркунии алгоритмӣ", included: true },
        
      ],
      whatYouGet: [
        { text: "Дастрасии абадӣ (1 бор пардохт)", included: true },
        { text: "Машқҳои LeetCode-style", included: true },
        { text: "Ментори шахсӣ, гурӯҳи саволу ҷавоб", included: true },
        { text: "Mock interviews", included: true },
        { text: "Зангҳои гурӯҳӣ", included: true },
        { text: "Баррасии кодҳо", included: true },
      ],
      requirements: [
        { text: "Ноутбук/Компютер", included: true },
        { text: "Интернет, вақт", included: true },
        { text: "Дониши ибтидоӣ аз Python", included: true },
        { text: "Зангҳои гурӯҳӣ", included: true },
      ],
      cardClass: "bg-purple-900 text-white border-red-500",
      buttonClass: "bg-white text-purple-900 hover:bg-gray-100",
      descriptionClass: "text-white"
    }
  ];

  const handlePurchaseClick = (course: typeof courses[0]) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/amiricode", "_blank");
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
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5, 
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className={`h-full ${course.cardClass} overflow-hidden transition-transform hover:scale-105`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                  </div>

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {course.title}
                    </CardTitle>

                    <div className="text-2xl line-through mb-2">
                      {course.strikePrice}
                      {course.currency && <span className="text-2xl ml-1">{course.currency}</span>}
                    </div>
                    <div className="text-4xl font-bold mb-2">
                      <u>{course.price}</u>
                      {course.currency && <span className="text-lg ml-1">{course.currency}</span>}
                    </div>
                    <p className="text-sm mt-2">{course.description}</p>
                  </CardHeader>

                  <CardContent className="text-center flex-1 flex flex-col">
                    <CardDescription className="leading-relaxed mb-4 flex-1">
                      <p className={`${course.descriptionClass} text-sm space-y-3 mt-2`}>
                        <b>💯Мавзӯъҳои асосӣ:</b>
                        </p>
                    </CardDescription>

                    <div className="space-y-3">
                      {course.topics.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />                          
                          <span className={`text-sm ${!feature.included ? 'opacity-50 line-through' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <CardDescription className="leading-relaxed mb-4 flex-1">
                      <p className={`${course.descriptionClass} text-sm space-y-3 mt-2`}>
                        <b>Чӣ мегирӣ❓</b>
                        </p>
                    </CardDescription>

                    <div className="space-y-3">
                      {course.whatYouGet.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />                          
                          <span className={`text-sm ${!feature.included ? 'opacity-50 line-through' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <CardDescription className="leading-relaxed mb-4 flex-1">
                      <p className={`${course.descriptionClass} text-sm space-y-3 mt-2`}>
                        <b>📕Талабот:</b>
                        </p>
                    </CardDescription>

                    <div className="space-y-3">
                      {course.requirements.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />                          
                          <span className={`text-sm ${!feature.included ? 'opacity-50 line-through' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <br></br>
                    <Button
                      onClick={() => handlePurchaseClick(course)}
                      className={`w-full mt-6 ${course.buttonClass}`}
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
            © 2025 AMIRI Academy. Ҳамаи ҳуқуқҳо ҳифз шудаанд.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Academy;
