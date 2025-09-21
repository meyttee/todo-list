import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  ControlledInput,
  ControlledSelect,
  RangeInput,
} from "../../Form";
import { useAppState } from "../../../hooks";

import { schema, type formType } from "./schema";

const ModalContent = ({
  submitCallback,
  id,
}: {
  submitCallback: () => void;
  id: string;
}) => {
  const { dispatch } = useAppState();

  const { handleSubmit, control, setValue, watch } = useForm<formType>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      title: "",
      priority: 1,
      status: { label: "todo", value: "todo" },
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch({
      type: "CREATE_TASK",
      key: id,
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
