import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PythonRoadmap } from "@/components/roadmaps/PythonRoadmap";
import { DjangoRoadmap } from "@/components/roadmaps/DjangoRoadmap";
import { TelegramRoadmap } from "@/components/roadmaps/TelegramRoadmap";
import { AlgorithmsRoadmap } from "@/components/roadmaps/AlgorithmsRoadmap";
import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Roadmaps = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        </div>
      </nav>

      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 lg:pr-8 sticky top-20">
            <Tabs defaultValue="python" orientation="vertical">
              <TabsList className="flex flex-col gap-4">
                <TabsTrigger
                  value="python"
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Python
                </TabsTrigger>
                <TabsTrigger
                  value="django"
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Django
                </TabsTrigger>
                <TabsTrigger
                  value="telegram"
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Создание телеграм бота
                </TabsTrigger>
                <TabsTrigger
                  value="algorithms"
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Алгоритмы
                </TabsTrigger>
              </TabsList>
              <div className="mt-8">
                <Link
                  to="/#contact"
                  className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
                >
                  Нужен ментор? Оставь заявку
                </Link>
              </div>
            </Tabs>
          </aside>

          <main className="w-full lg:w-3/4">
            <Tabs defaultValue="python" className="w-full">
              <TabsContent value="python">
                <PythonRoadmap />
              </TabsContent>
              <TabsContent value="django">
                <DjangoRoadmap />
              </TabsContent>
              <TabsContent value="telegram">
                <TelegramRoadmap />
              </TabsContent>
              <TabsContent value="algorithms">
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
