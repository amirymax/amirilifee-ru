import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Roadmaps = () => {
  return (
    <div className="min-h-screen pt-20 section-padding">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gradient">Roadmaps</h1>
        
        <Tabs defaultValue="python" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="django">Django</TabsTrigger>
            <TabsTrigger value="telegram">Создание телеграм бота</TabsTrigger>
            <TabsTrigger value="algorithms">Алгоритмы</TabsTrigger>
          </TabsList>

          <TabsContent value="python" className="space-y-8">
            {pythonRoadmap.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground"><strong>Цель:</strong> {section.goal}</p>
                  
                  {section.topics && (
                    <div>
                      <h4 className="font-semibold mb-2">Темы:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.topics.map((topic, i) => (
                          <li key={i} className="text-muted-foreground">{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.resources && (
                    <div>
                      <h4 className="font-semibold mb-2">Ресурсы:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.resources.map((resource, i) => (
                          <li key={i} className="text-muted-foreground">{resource}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.projects && (
                    <div>
                      <h4 className="font-semibold mb-2">Идеи проектов:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.projects.map((project, i) => (
                          <li key={i} className="text-muted-foreground">{project}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <p className="text-center text-lg text-muted-foreground mt-8">
              Готовы погрузиться в Python? Следуйте этой дорожной карте и начните создавать значимые проекты! 🚀
            </p>
          </TabsContent>

          <TabsContent value="django" className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Master Django: The Ultimate Roadmap for Web Development</h2>
              <p className="text-muted-foreground">
                Follow this roadmap to learn Django step by step. Whether you're a beginner or aiming to create complex web applications, 
                this guide will take you through the process of mastering Django.
              </p>
            </div>
            
            {djangoRoadmap.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground"><strong>Цель:</strong> {section.goal}</p>
                  
                  {section.topics && (
                    <div>
                      <h4 className="font-semibold mb-2">Темы:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.topics.map((topic, i) => (
                          <li key={i} className="text-muted-foreground">{topic}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.resources && (
                    <div>
                      <h4 className="font-semibold mb-2">Ресурсы:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {section.resources.map((resource, i) => (
                          <li key={i} className="text-muted-foreground">{resource}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <p className="text-center text-lg text-muted-foreground mt-8">
              Dive into Django and start building robust web applications with this roadmap. Ready to start? 🚀
            </p>
          </TabsContent>

          <TabsContent value="telegram">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Скоро будет доступно...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="algorithms">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Скоро будет доступно...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const pythonRoadmap = [
  {
    title: "1. Python Basics (2-4 недели)",
    goal: "Понять основы программирования на Python.",
    topics: [
      "Data types: integers, floats, strings, lists, dictionaries, sets",
      "Control structures: if-else, loops (for, while)",
      "Functions: defining, calling, arguments, return values",
      "File handling: reading and writing files",
      "Handling exceptions",
    ],
    resources: [
      "Official Python documentation (python.org)",
      '"Automate the Boring Stuff with Python" by Al Sweigart',
    ],
  },
  {
    title: "2. Libraries and Tools (2-3 недели)",
    goal: "Научиться использовать встроенные и внешние библиотеки Python.",
    topics: [
      "Math operations with math and random",
      "Working with dates and times using datetime",
      "File and OS operations with os and sys",
      "Install and manage libraries with pip",
    ],
    resources: [
      "Online tutorials and practice platforms like Real Python",
    ],
  },
  {
    title: "3. Object-Oriented Programming (2 недели)",
    goal: "Понять принципы ООП и их применение в Python.",
    topics: [
      "Classes and objects",
      "Inheritance and polymorphism",
      "Encapsulation and abstraction",
    ],
    resources: [
      '"Python Crash Course" by Eric Matthes',
    ],
    projects: [
      "Create a simple game or a CRUD (Create, Read, Update, Delete) application",
    ],
  },
  {
    title: "4. Data Analysis and Visualization (2-3 недели)",
    goal: "Научиться обрабатывать и визуализировать данные.",
    topics: [
      "Data manipulation with pandas",
      "Numerical computations with numpy",
      "Basic plotting with matplotlib",
    ],
    projects: [
      "Analyze and visualize a small dataset (e.g., CSV file with sales data)",
    ],
  },
  {
    title: "5. Projects and Practice (2+ недели)",
    goal: "Применить полученные навыки для решения реальных задач.",
    projects: [
      "To-Do List Manager (CLI application)",
      "Basic web scraper with BeautifulSoup",
      "Small automation scripts (e.g., rename files in a folder)",
    ],
    resources: [
      "GitHub: Contribute to open-source projects",
      "Practice platforms like HackerRank or LeetCode",
    ],
  },
];

const djangoRoadmap = [
  {
    title: "1. Основы Django (2-3 недели)",
    goal: "Освоить базовую структуру Django и научиться создавать простые приложения.",
    topics: [
      "Установка Django, работа с виртуальными окружениями",
      "Структура проекта Django: settings.py, urls.py, views.py",
      "Создание и подключение простого приложения",
      "Маршрутизация URL и базовые представления (views)",
    ],
    resources: [
      "Официальная документация (docs.djangoproject.com)",
      "Курс Django на YouTube",
    ],
  },
  {
    title: "2. Модели и базы данных (2 недели)",
    goal: "Научиться работать с ORM Django и управлять данными через базы данных.",
    topics: [
      "Создание моделей",
      "Миграции и управление базами данных",
      "Использование SQLite или PostgreSQL",
      "Админ-панель Django: настройка и управление моделями",
    ],
    resources: [
      "Django ORM Cookbook",
    ],
  },
  {
    title: "3. Шаблоны и фронтенд (2 недели)",
    goal: "Создать динамические веб-страницы с помощью шаблонов и HTML.",
    topics: [
      "Работа с шаблонами Django ({% extends %}, {% block %})",
      "Передача данных в шаблоны через контекст",
      "Использование Bootstrap для стилизации",
    ],
    projects: [
      "Создание блога или портфолио-сайта",
    ],
  },
  {
    title: "4. Аутентификация и авторизация (2 недели)",
    goal: "Реализовать систему пользователей и управление доступом.",
    topics: [
      "Регистрация, вход и выход пользователей",
      "Ограничение доступа к страницам",
      "Настройка пользовательской модели пользователей",
    ],
    resources: [
      "Официальная документация Django по аутентификации",
    ],
  },
  {
    title: "5. API и интеграции (3 недели)",
    goal: "Создать API с помощью Django REST Framework (DRF).",
    topics: [
      "Установка и настройка DRF",
      "Создание сериализаторов и представлений API",
      "Тестирование API с помощью Postman",
    ],
    projects: [
      "Разработка API для мобильного приложения или внешнего сервиса",
    ],
  },
  {
    title: "6. Деплой и оптимизация (2 недели)",
    goal: "Развернуть Django-приложение на сервере.",
    topics: [
      "Деплой на VPS: установка Gunicorn, настройка Nginx",
      "Управление статиками и медиафайлами",
      "Оптимизация производительности",
    ],
    resources: [
      "DigitalOcean, Render, или Heroku",
    ],
  },
];

export default Roadmaps;