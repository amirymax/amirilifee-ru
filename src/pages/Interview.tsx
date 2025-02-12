
import { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { InterviewPython } from "@/components/interview/InterviewPython";

const Interview = () => {
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
                <InterviewPython />
              </TabsContent>
              {/* Остальные табы будут добавлены позже */}
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Interview;
