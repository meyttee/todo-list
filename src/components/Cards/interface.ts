interface ICardProps {
  title: string;
  description: string;
  status: "done" | "todo";
  id: string;
  columnId: string;
  priority: number;
}

export type { ICardProps };
