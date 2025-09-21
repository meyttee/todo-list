interface ICardDetailProps {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  description: string;
  status: "done" | "todo";
  id: string;
  columnId: string;
  priority: number;
}

export type { ICardDetailProps };
