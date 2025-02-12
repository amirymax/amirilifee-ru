
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { InterviewPython } from "@/components/interview/InterviewPython";
import { InterviewDjango } from "@/components/interview/InterviewDjango";
import { AlgorithmsFlow } from "@/components/interview/AlgorithmsFlow";
import Navbar from "@/components/Navbar";

const interviewTopics = [
  { name: "Arrays & Hashing", value: "arrays" },
  { name: "Two Pointers", value: "two-pointers" },
  { name: "Binary Search", value: "binary-search" },
  { name: "Stack", value: "stack" },
  { name: "Binary Tree", value: "binary-tree" },
  { name: "Graph", value: "graph" },
  { name: "Dynamic Programming", value: "dp" },
  { name: "Sliding Window", value: "sliding-window" },
  { name: "Backtracking", value: "backtracking" },
  { name: "Heap", value: "heap" },
  { name: "Greedy", value: "greedy" },
  { name: "Intervals", value: "intervals" },
  { name: "Math & Geometry", value: "math" },
];

const Interview = () => {
  const [activeTab, setActiveTab] = useState(interviewTopics[0].value);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const SideMenu = () => (
    <div className="flex flex-col gap-2">
      {interviewTopics.map((topic) => (
        <Button
          key={topic.value}
          variant={activeTab === topic.value ? "secondary" : "ghost"}
          className="w-full justify-start text-left"
          onClick={() => setActiveTab(topic.value)}
        >
          {topic.name}
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
              {interviewTopics.map((topic) => (
                <TabsContent key={topic.value} value={topic.value}>
                  <div className="space-y-8">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-4">
                        {topic.name}
                      </h2>
                      <p className="text-muted-foreground">
                        Задачи для подготовки по теме {topic.name.toLowerCase()}
                      </p>
                    </div>
                    <InterviewPython />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Interview;
