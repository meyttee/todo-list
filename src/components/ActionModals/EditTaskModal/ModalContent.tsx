import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../Form/Button";
import { useAppState } from "../../../hooks";
import { ControlledInput } from "../../Form/Input";
import { RangeInput } from "../../Form/RangeInput";
import { ControlledSelect } from "../../Form/Select";
import type { ICardProps } from "../../Card/interface";

import { schema, type formType } from "./schema";

const ModalContent = ({
  submitCallback,
  ...props
}: {
  submitCallback: () => void;
} & ICardProps) => {
  const { columnId, description, id, priority, status, title } = props;
  const { dispatch } = useAppState();

  const { handleSubmit, control, setValue, watch } = useForm<formType>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: description,
      title: title,
      priority: priority,
      status: { label: status, value: status },
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch({
      type: "UPDATE_TASK",
      columnId,
      taskId: id,
      value: {
        ...data,
        status: data.status.value as "done" | "todo",
        id: uuidv4(),
      },
    });
    submitCallback();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <ControlledInput name="title" control={control} label="title" />
      <ControlledInput
        name="description"
        control={control}
        label="description"
      />
      <ControlledSelect
        name="status"
        control={control}
        label="status"
        options={[
          { label: "done", value: "done" },
          { label: "todo", value: "todo" },
        ]}
      />
      <RangeInput
        label="proirity"
        onChange={(value) => setValue("priority", value)}
        value={watch("priority")}
      />

      <Button variant="normal" type="submit" className="mt-5">
        Submit
      </Button>
    </form>
  );
};

export default ModalContent;
