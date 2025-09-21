import type { ICardProps } from "../../TaskCard";

interface IEditModalContentProps extends ICardProps {
  submitCallback: () => void;
}

export type { IEditModalContentProps };
