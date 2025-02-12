
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface LeetCodeProblem {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
}

interface TopicCardProps {
  title: string;
  problems: LeetCodeProblem[];
}

const difficultyColors = {
  Easy: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  Medium: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
  Hard: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
};

export const TopicCard = ({ title, problems }: TopicCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
            >
              <span className="flex-1">{problem.name}</span>
              <div className="flex items-center gap-3">
                <Badge
                  variant="secondary"
                  className={difficultyColors[problem.difficulty]}
                >
                  {problem.difficulty}
                </Badge>
                <a
                  href={problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
