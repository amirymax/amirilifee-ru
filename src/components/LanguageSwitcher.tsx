import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLanguage } from "@/context/LanguageContext";

type Language = "ru" | "en";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = {
    en: {
      flag: "🇺🇸",
      label: "English",
    },
    ru: {
      flag: "🇷🇺",
      label: "Русский",
    },
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-16 px-2">
          <span className="text-xl">{languages[language].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(Object.keys(languages) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className="cursor-pointer"
          >
            <span className="text-xl mr-2">{languages[lang].flag}</span>
            {languages[lang].label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;