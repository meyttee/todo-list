import type { DragEvent } from "react";

import { TaskCard } from "../TaskCard";
import { useAppState } from "../../hooks";

import { ColumnHeader } from "./ColumnHeader";

const Column = ({ columnId }: { columnId: string }) => {
  const { state, dispatch } = useAppState();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: DragEvent<HTMLDivElement>, id: string) => {
    const data = JSON.parse(e.dataTransfer.getData("application/json"));
    dispatch({
      type: "MOVE_TASK",
      fromCol: data.fromColumn,
      targetCol: id,
      taskId: data.id,
    });
  };

  return (
    <div
      id={columnId}
      onDragOver={handleDragOver}
      onDrop={(e) => onDrop(e, columnId)}
      className="flex h-[calc(100vh-144px)] max-h-full min-w-90 flex-col items-center justify-start gap-4 overflow-auto rounded-xl border border-gray-500 p-4 md:w-90 dark:bg-gray-800"
    >
      <ColumnHeader title={columnId} />
      {state.data.get(columnId)?.map((card) => (
        <TaskCard key={card.id} {...card} columnId={columnId} />
      ))}
    </div>
  );
};

export default Column;
