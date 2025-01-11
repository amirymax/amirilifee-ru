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
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Master Python: Ваш пошаговый план освоения Python</h2>
              <p className="text-muted-foreground">
                Изучайте Python с нуля с помощью этого структурированного роудмапа. Будь вы новичком или хотите углубить свои знания, 
                это руководство поможет вам стать уверенным программистом и создавать реальные проекты.
              </p>
            </div>

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
                  
                  {section.project && (
                    <div>
                      <h4 className="font-semibold mb-2">Проект:</h4>
                      <p className="text-muted-foreground">{section.project}</p>
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
              Следуйте этому роудмапу, чтобы освоить Python и уверенно разрабатывать приложения, решающие реальные задачи. Удачи! 🚀
            </p>
          </TabsContent>

          <TabsContent value="django" className="space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Master Django: Ваш пошаговый план освоения Django</h2>
              <p className="text-muted-foreground">
                Изучайте Django с нуля с помощью этого структурированного роудмапа. Будь вы новичком или стремитесь создавать сложные веб-приложения, 
                это руководство поможет вам стать профессионалом в веб-разработке.
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

                  {section.project && (
                    <div>
                      <h4 className="font-semibold mb-2">Проект:</h4>
                      <p className="text-muted-foreground">{section.project}</p>
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
    title: "1. Основы Python (2-4 недели)",
    goal: "Освоить базовые концепции Python и научиться писать простые программы.",
    topics: [
      "Типы данных: числа (int, float), строки (str), списки (list), словари (dict), множества (set)",
      "Управляющие конструкции: условные операторы (if, else, elif), циклы (for, while)",
      "Функции: объявление и вызов, параметры, возвращаемые значения",
      "Работа с файлами: чтение, запись",
      "Обработка ошибок: try, except, finally",
    ],
    project: "Приложение \"Калькулятор\" для выполнения базовых арифметических операций",
    resources: [
      "Книга \"Изучаем Python\" Марка Лутца",
      "Онлайн-курс на Stepik",
    ],
  },
  {
    title: "2. Работа с библиотеками и инструментами (2-3 недели)",
    goal: "Узнать, как использовать стандартные и сторонние библиотеки Python.",
    topics: [
      "Работа с числами и случайными значениями: библиотеки math, random",
      "Управление датой и временем: библиотека datetime",
      "Работа с файловой системой: библиотеки os, shutil",
      "Установка и использование сторонних библиотек с помощью pip",
    ],
    project: "Скрипт для автоматического переименования и сортировки файлов в папке",
    resources: [
      "Официальная документация Python (python.org)",
    ],
  },
  {
    title: "3. Объектно-ориентированное программирование (2 недели)",
    goal: "Понять принципы ООП и научиться применять их в Python.",
    topics: [
      "Создание классов и объектов",
      "Методы, атрибуты, конструкторы (__init__)",
      "Принципы наследования, полиморфизма и инкапсуляции",
    ],
    project: "Приложение \"Менеджер задач\" с добавлением, удалением и сортировкой задач",
    resources: [
      "Книга \"Python Crash Course\" Эрика Маттеса",
    ],
  },
  {
    title: "4. Работа с данными (2-3 недели)",
    goal: "Освоить инструменты для обработки данных и их визуализации.",
    topics: [
      "Работа с табличными данными с помощью pandas",
      "Выполнение математических операций с numpy",
      "Создание графиков и диаграмм с использованием matplotlib",
    ],
    project: "Анализ и визуализация данных о продажах из CSV-файла",
    resources: [
      "Документация по pandas и matplotlib",
      "Уроки на YouTube (например, канал Corey Schafer)",
    ],
  },
  {
    title: "5. Создание реальных проектов (2+ недели)",
    goal: "Закрепить знания, создавая приложения для решения практических задач.",
    projects: [
      "Консольное приложение для управления паролями",
      "Простой веб-скрепер с использованием BeautifulSoup",
      "Телеграм-бот с базовыми функциями напоминаний",
    ],
    resources: [
      "Практика на Codewars или HackerRank",
    ],
  },
  {
    title: "6. Продвинутая практика и профессиональное развитие",
    goal: "Подготовиться к профессиональной разработке и решению сложных задач.",
    topics: [
      "Асинхронное программирование: изучение asyncio и aiohttp",
      "Создание API с использованием Flask или FastAPI",
      "Основы машинного обучения: использование библиотек scikit-learn или TensorFlow",
    ],
    resources: [
      "Участие в open-source проектах на GitHub",
      "Практика алгоритмов на LeetCode",
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
    project: "Создание блога или портфолио-сайта",
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
    project: "Разработка API для мобильного приложения или внешнего сервиса",
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