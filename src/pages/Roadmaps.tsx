import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { PythonRoadmap } from "@/components/roadmaps/PythonRoadmap";
import { DjangoRoadmap } from "@/components/roadmaps/DjangoRoadmap";
import { TelegramRoadmap } from "@/components/roadmaps/TelegramRoadmap";
import { AlgorithmsRoadmap } from "@/components/roadmaps/AlgorithmsRoadmap";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Roadmaps = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("python");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за обращение. Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const roadmapTabs = [
    { name: "Python", value: "python" },
    { name: "Django", value: "django" },
    { name: "Создание телеграм бота", value: "telegram" },
    { name: "Алгоритмы", value: "algorithms" },
  ];

  const SideMenu = () => (
    <div className="flex flex-col gap-2">
      {roadmapTabs.map((tab) => (
        <Button
          key={tab.value}
          variant={activeTab === tab.value ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.name}
        </Button>
      ))}
      <div className="mt-4 border-t pt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" variant="default">
              Нужен ментор? Оставь заявку
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Оставить заявку на менторство</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше Имя"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Ваш Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше Сообщение"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Отправить Сообщение
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );

  return (
    <div>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Amiri | Главное
          </Link>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <SideMenu />
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <aside className="hidden lg:block w-64 sticky top-24 h-fit">
            <SideMenu />
          </aside>

          <main className="flex-1 lg:pl-8">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="python" data-value="python">
                <PythonRoadmap />
              </TabsContent>
              <TabsContent value="django" data-value="django">
                <DjangoRoadmap />
              </TabsContent>
              <TabsContent value="telegram" data-value="telegram">
                <TelegramRoadmap />
              </TabsContent>
              <TabsContent value="algorithms" data-value="algorithms">
                <AlgorithmsRoadmap />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;