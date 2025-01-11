import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
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
      {/* Sticky Top Navbar */}
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

      {/* Main Content */}
      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto flex flex-col lg:flex-row">
          {/* Sidebar with Popover */}
          <aside className="w-full lg:w-1/4 lg:pr-8 sticky top-20">
            <Popover className="relative">
              <PopoverButton className="inline-flex items-center w-full justify-between text-sm font-semibold text-gray-900 py-3 px-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200">
                <span>Роудмапы</span>
                <ChevronDownIcon className="w-5 h-5" />
              </PopoverButton>
              <PopoverPanel
                className="absolute left-0 z-10 mt-2 w-full rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5"
                transition
              >
                <div className="p-4">
                  {roadmapTabs.map((tab) => (
                    <button
                      key={tab.value}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => {
                        document.querySelector(`[data-value="${tab.value}"]`)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <div className="mt-8">
              <Link
                to="/#contact"
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
              >
                Нужен ментор? Оставь заявку
              </Link>
            </div>
          </aside>

          {/* Roadmap Content */}
          <main className="w-full lg:w-3/4">
            <Tabs defaultValue="python" className="w-full">
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
