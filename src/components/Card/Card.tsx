import { useState } from "react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { useAppState } from "../../hooks";
import { CardDetailModal } from "../CardDetail";
import { Button } from "../Button";

const Card = ({
  description,
  status,
  title,
  id,
  colId,
}: {
  title: string;
  description: string;
  status: "done" | "todo";
  id: string;
  colId: string;
}) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);
  const { dispatch } = useAppState();

  const handleDragStart = (
    e: React.DragEvent,
    fromColumn: string,
    id: string,
  ) => {
    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({ fromColumn, id }),
    );
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, colId, id)}
      className="flex w-full items-center rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#292B31]"
    >
      <CardDetailModal
        id={id}
        isOpen={showModal}
        onClose={onClose}
        description={description}
        title={title}
        status={status}
      />
      <div
        className={clsx("w-full cursor-pointer dark:text-white", {
          "line-through": status === "done",
        })}
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      >
        {title}
      </div>
      <Button
        variant="icon"
        onClick={() => {
          dispatch({ type: "DELETE_TASK", colId, taskId: id });
        }}
        title="delete column"
      >
        <Icon
          icon="majesticons:close"
          width="20"
          height="20"
          className="text-[#FF7979]"
        />
      </Button>
    </div>
  );
};
export default Card;
