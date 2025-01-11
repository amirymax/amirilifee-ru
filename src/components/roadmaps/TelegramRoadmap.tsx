import { RoadmapCard } from "./RoadmapCard";

export const telegramRoadmap = [
  {
    title: "1. Установка и настройка среды (1 неделя)",
    goal: "Подготовить рабочую среду для разработки.",
    topics: [
      "Установка Python и настройка виртуального окружения (venv)",
      "Регистрация бота через BotFather и получение API-токена",
      "Установка и основные функции библиотеки aiogram"
    ],
    resources: [
      "Документация Telegram Bot API",
      "Уроки на YouTube по aiogram"
    ]
  },
  {
    title: "2. Основы работы с ботами (1-2 недели)",
    goal: "Создавать простые команды и обрабатывать запросы пользователей.",
    topics: [
      "Реакция на команды (/start, /help)",
      "Отправка текстовых сообщений и медиа",
      "Создание кнопок: InlineKeyboardMarkup и ReplyKeyboardMarkup"
    ],
    project: "Бот с приветствием и базовой справочной информацией"
  },
  {
    title: "3. Управление состояниями и обработка данных (2-3 недели)",
    goal: "Создавать более сложные сценарии взаимодействия.",
    topics: [
      "Обработка пользовательского ввода (message.text, callback_query)",
      "FSM (Finite State Machine): работа с состояниями",
      "Сохранение данных в локальные переменные или базы данных"
    ],
    project: "Бот для проведения опросов или создания личного списка задач"
  },
  {
    title: "4. Интеграция с внешними сервисами и базы данных (3 недели)",
    goal: "Подключить внешние API и базы данных для хранения данных.",
    topics: [
      "Интеграция с внешними API (например, OpenWeather или Google Maps)",
      "Подключение SQLite/PostgreSQL через SQLAlchemy"
    ],
    project: "Бот для поиска и отображения погодных данных"
  },
  {
    title: "5. Деплой и оптимизация (1-2 недели)",
    goal: "Развернуть бот в продакшене и обеспечить его стабильную работу.",
    topics: [
      "Деплой на Heroku, Render или VPS",
      "Настройка Docker для удобства развертывания",
      "Мониторинг и логирование"
    ],
    resources: [
      "Документация Heroku и Render"
    ]
  }
];

export const TelegramRoadmap = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Создай своего Telegram-бота: пошаговый план для начинающих и профессионалов
        </h2>
        <p className="text-muted-foreground">
          Узнайте, как создавать полезных и функциональных Telegram-ботов с помощью Python. Этот роудмап проведет вас от первых шагов до создания сложных решений с интеграциями и базами данных.
        </p>
      </div>

      {telegramRoadmap.map((section, index) => (
        <RoadmapCard key={index} section={section} />
      ))}

      <p className="text-center text-lg text-muted-foreground mt-8">
        Создайте своего бота с уникальной функциональностью, интеграциями и профессиональным дизайном! 🚀
      </p>
    </div>
  );
};
