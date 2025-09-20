import { Icon } from "@iconify/react";

import { Button } from "../Button";
import { useAppState } from "../../hooks";
import { NewTaskModal } from "../NewTaskModal";

const ColumnAction = ({ id }: { id: string }) => {
  const { dispatch } = useAppState();

  const onClick = () => {
    dispatch({ type: "DELETE_COLUMN", key: id });
  };

  return (
    <div className="flex gap-4">
      <Button variant="icon" onClick={onClick} title="delete column">
        <Icon
          icon="majesticons:close"
          width="20"
          height="20"
          className="text-red-300"
        />
      </Button>
      <NewTaskModal id={id} />
    </div>
  );
};

export default ColumnAction;
