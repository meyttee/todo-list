import type { ReactNode } from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

export type { IModalProps };
