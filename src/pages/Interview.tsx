
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { InterviewPython } from "@/components/interview/InterviewPython";
import { AlgorithmsFlow } from "@/components/interview/AlgorithmsFlow";
import Navbar from "@/components/Navbar";

const Interview = () => {
  const [activeTab, setActiveTab] = useState("python");
  const navigate = useNavigate();

  const interviewTabs = [
    { name: "Python", value: "python" },
    { name: "Django", value: "django" },
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
      {interviewTabs.map((tab) => (
        <Button
          key={tab.value}
          variant={activeTab === tab.value ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.name}
        </Button>
      ))}
      
      <div className="mt-8 border-t pt-6">
        <Button
          size="lg"
          className="w-full py-6 px-6 gap-3 text-sm sm:text-base flex items-center justify-center leading-relaxed rounded-lg shadow-lg"
          onClick={handleContactClick}
          style={{height: '60px'}}
        >
          Нужен ментор?<br />Оставь заявку 💬 
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen pt-20 section-padding">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <aside className="hidden lg:block w-64 sticky top-24 h-fit">
            <SideMenu />
          </aside>

          <main className="flex-1 lg:pl-8">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="python" data-value="python">
                <InterviewPython />
              </TabsContent>
              <TabsContent value="algorithms" data-value="algorithms">
                <div className="space-y-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      Алгоритмы и структуры данных
                    </h2>
                    <p className="text-muted-foreground">
                      Интерактивная карта изучения алгоритмов и структур данных для подготовки к техническим собеседованиям.
                    </p>
                  </div>
                  <AlgorithmsFlow />
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Interview;
