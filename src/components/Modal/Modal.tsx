import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";

import { Button } from "../Form";
import type { IModalProps } from "./interface";

/**
 * Modal component that displays its children in a centered overlay dialog.
 *
 * @remarks
 * Uses React Portal to render the modal outside the DOM hierarchy of its parent.
 * The modal is only rendered when `isOpen` is `true`.
 * Clicking the backdrop or the close button will trigger the `onClose` callback.
 *
 * @param props - Props for the Modal component.
 * @param {boolean} props.isOpen - Controls whether the modal is visible.
 * @param {function} props.onClose - Callback invoked when the modal should be closed.
 * @param {string} props.title - Title displayed at the top of the modal.
 * @param {ReactNode} props.children - Content to be rendered inside the modal.
 *
 * @returns The modal dialog as a React portal, or `null` if not open.
 */

export default function Modal(props: IModalProps) {
  const { isOpen, onClose, title, children } = props;

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/25" onClick={onClose} />
      <div
        className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800"
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
              className="text-neutral-800 dark:text-white"
            />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
