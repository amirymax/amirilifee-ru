import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { PythonRoadmap } from "@/components/roadmaps/PythonRoadmap";
import { DjangoRoadmap } from "@/components/roadmaps/DjangoRoadmap";
import { TelegramRoadmap } from "@/components/roadmaps/TelegramRoadmap";
import { AlgorithmsRoadmap } from "@/components/roadmaps/AlgorithmsRoadmap";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Roadmaps = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("python");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roadmapTabs = [
    { name: "Python", value: "python" },
    { name: "Django", value: "django" },
    { name: "Создание телеграм бота", value: "telegram" },
    { name: "Алгоритмы", value: "algorithms" },
  ];

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
  <Button
    size="lg"
    className="w-full py-5 px-6 gap-2 text-sm sm:text-base flex items-center justify-center" // Увеличенные размеры кнопки
    onClick={handleContactClick}
  >
    <MessageCircle className="h-5 w-5" /> {/* Размер иконки остается прежним */}
    <span className="block text-center">
      Нужен ментор?<br />Оставь заявку
    </span>
  </Button>
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
