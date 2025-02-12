
import { TopicCard } from "./TopicCard";
import { TopicSection } from "./types";

const djangoTopics: TopicSection[] = [
  {
    title: "1. ORM и Базы данных",
    problems: [
      {
        name: "Оптимизация запросов: N+1 проблема",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/department-top-three-salaries/",
      },
      {
        name: "Сложные агрегации",
        difficulty: "Hard" as const,
        url: "https://leetcode.com/problems/trips-and-users/",
      },
      {
        name: "Работа с несколькими моделями",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/department-highest-salary/",
      },
    ],
  },
  {
    title: "2. REST API",
    problems: [
      {
        name: "Проектирование API эндпоинтов",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/design-twitter/",
      },
      {
        name: "Пагинация и фильтрация",
        difficulty: "Easy" as const,
        url: "https://leetcode.com/problems/design-hashmap/",
      },
      {
        name: "Аутентификация и авторизация",
        difficulty: "Hard" as const,
        url: "https://leetcode.com/problems/design-authentication-manager/",
      },
    ],
  },
  {
    title: "3. Кеширование",
    problems: [
      {
        name: "Реализация LRU кеша",
        difficulty: "Medium" as const,
        url: "https://leetcode.com/problems/lru-cache/",
      },
      {
        name: "Распределенное кеширование",
        difficulty: "Hard" as const,
        url: "https://leetcode.com/problems/design-in-memory-file-system/",
      },
    ],
  },
];

export const InterviewDjango = () => {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Django Interview Problems
        </h2>
        <p className="text-muted-foreground">
          Подборка задач для подготовки к техническим собеседованиям по Django. 
          Включает задачи на проектирование API, оптимизацию ORM и работу с базами данных.
        </p>
      </div>

      {djangoTopics.map((topic, index) => (
        <TopicCard key={index} {...topic} />
      ))}
    </div>
  );
};
