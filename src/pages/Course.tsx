
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Users, Code, Bot, Award, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Course = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    plan: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Дархост фиристода шуд!",
      description: "Мо бо шумо дар наздиктарин вақт тамос мегирем.",
    });
    setFormData({ name: "", telegram: "", plan: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pricingPlans = [
    {
      name: "BASIC",
      price: "320",
      currency: "TJS",
      period: "3 ҳафта",
      description: "Барои шурӯъ кардани сафари барномасозӣ",
      features: [
        { text: "Дастрасӣ ба видеодарсҳо", included: true },
        { text: "Кортҳои амалӣ", included: true },
        { text: "Маводи таълимӣ", included: true },
        { text: "Дастгирии шахсӣ", included: false },
        { text: "Чат барои пурсишҳо", included: false },
        { text: "Дастрасии абадӣ", included: false },
      ],
      cardClass: "bg-gray-900 text-white border-gray-700",
      buttonClass: "bg-white text-gray-900 hover:bg-gray-100",
    },
    {
      name: "MENTORSHIP",
      price: "390",
      currency: "TJS",
      period: "дастрасии абадӣ",
      description: "Бо дастгирии шахсӣ ва пешниҳодҳо",
      popular: true,
      features: [
        { text: "Дастрасӣ ба видеодарсҳо", included: true },
        { text: "Кортҳои амалӣ", included: true },
        { text: "Маводи таълимӣ", included: true },
        { text: "Дастгирии шахсӣ", included: true },
        { text: "Чат барои пурсишҳо", included: true },
        { text: "Дастрасии абадӣ", included: true },
      ],
      cardClass: "bg-white text-gray-900 border-2 border-primary shadow-xl relative",
      buttonClass: "bg-primary text-white hover:bg-primary/90",
    },
    {
      name: "CAMP",
      price: "Фардӣ",
      currency: "",
      period: "дарсҳои шахсӣ",
      description: "Дарсҳои шахсӣ бо омӯзгор",
      features: [
        { text: "Барномаи фардӣ", included: true },
        { text: "Дарсҳои шахсӣ", included: true },
        { text: "Лоиҳаҳои воқеӣ", included: true },
        { text: "Портфолиои шахсӣ", included: true },
        { text: "Дастгирии доимӣ", included: true },
        { text: "Маслиҳати касбӣ", included: true },
      ],
      cardClass: "bg-red-600 text-white border-red-500",
      buttonClass: "bg-white text-red-600 hover:bg-gray-100",
    },
  ];

  const benefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Омӯзгор бо таҷрибаи 5+ сола",
      description: "Таҷрибаи амалӣ дар созишгарии ботҳо ва барномаҳо"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Амалиёти воқеӣ ва портфолио",
      description: "Лоиҳаҳои воқеӣ барои портфолиои шумо"
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Созишгарии ботҳо аз сифр",
      description: "Омӯзиши пурраи созишгарии ботҳои Telegram"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Бозхӯрди шахсӣ",
      description: "Баҳогузорӣ ва маслиҳат дар ҳар қадам"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Header Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              🔥 Курси CODE: Аз 0 то БОТСОЗӢ 🔥
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Барномаи омӯзишӣ барои онҳое, ки орзу доранд боти шахсии худро созанд.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="h-4 w-4 mr-2" />
                100+ хатмкардагон
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Star className="h-4 w-4 mr-2" />
                Аз сифр то мутахассис
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Clock className="h-4 w-4 mr-2" />
                Дастрасии 24/7
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Чаро курси моро интихоб кунед?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Нархҳои курс
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-white px-4 py-1 text-sm font-medium">
                      МАЪМУЛТАРИН
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.cardClass} transition-transform hover:scale-105`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      {plan.currency && <span className="text-lg ml-1">{plan.currency}</span>}
                    </div>
                    <p className="text-sm opacity-80">{plan.period}</p>
                    <p className="text-sm mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${!feature.included ? 'opacity-50 line-through' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full mt-6 ${plan.buttonClass}`}>
                      Интихоб кардан
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ҳозир ба курс ворид шавед!
            </h2>
            <p className="text-gray-300">
              Формро пур кунед ва мо бо шумо тамос мегирем
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Номи шумо"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Ники Telegram (@username)"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
                    >
                      <option value="" className="text-gray-900">Нархро интихоб кунед</option>
                      <option value="basic" className="text-gray-900">BASIC - 320 TJS</option>
                      <option value="mentorship" className="text-gray-900">MENTORSHIP - 390 TJS</option>
                      <option value="camp" className="text-gray-900">CAMP - Дарсҳои шахсӣ</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Паёми шумо (ихтиёрӣ)"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3">
                    📩 Дарсро сар кардан
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Course;
