import type { DragEvent } from "react";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import { useAppState } from "../../hooks";
import { Card } from "../Card";

const Column = ({ id }: { id: string }) => {
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
      id={id}
      onDragOver={handleDragOver}
      onDrop={(e) => onDrop(e, id)}
      className="flex h-[calc(100vh-124px)] min-w-90 flex-col items-center justify-start gap-4 overflow-auto rounded-xl border border-dashed border-gray-500 p-4 md:w-90"
    >
      <ColumnHeader title={id} />
      {state.data.get(id)?.map((card) => (
        <Card key={card.id} {...card} colId={id} />
      ))}
    </div>
  );
};

export default Column;
