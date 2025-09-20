import { Icon } from "@iconify/react";

import { Button } from "../Button";
import { useAppState } from "../../hooks";
import { NewTaskModal } from "../NewTaskModal";

const ColumnAction = ({ id }: { id: string }) => {
  const { dispatch } = useAppState();

  return (
    <div>
      <div className="flex gap-4">
        <Button
          variant="icon"
          onClick={() => {
            dispatch({ type: "DELETE_COLUMN", key: id });
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
        <NewTaskModal id={id} />
      </div>
    </div>
  );
};

export default ColumnAction;
