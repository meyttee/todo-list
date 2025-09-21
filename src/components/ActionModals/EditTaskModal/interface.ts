import type { ICardProps } from "../../Card";

interface IEditModalContentProps extends ICardProps {
  submitCallback: () => void;
}

export type { IEditModalContentProps };
