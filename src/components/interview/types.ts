
export interface LeetCodeProblem {
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
}

export interface TopicSection {
  title: string;
  problems: LeetCodeProblem[];
}
