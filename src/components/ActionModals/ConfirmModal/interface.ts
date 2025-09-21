interface IConfirmModalProps {
  title: string;
  description: string;
  handleSubmit: () => void;
  handleClose: () => void;
  isOpen: boolean;
}

export type { IConfirmModalProps };
