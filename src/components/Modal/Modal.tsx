import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";

import { Button } from "../Button";
import type { IModalProps } from "./interface";

export default function Modal(props: IModalProps) {
  const { isOpen, onClose, title, children } = props;

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/25" onClick={onClose} />
      <div
        className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-[#2a2b2f]"
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium dark:text-white">{title}</h3>
          <Button variant="icon" onClick={onClose}>
            <Icon
              icon="majesticons:close"
              width="20"
              height="20"
              className="text-[#1C1D22] dark:text-white"
            />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
