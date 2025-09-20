import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../Button";
import { useAppState } from "../../hooks";
import { ControlledInput } from "../Input";
import { RangeInput } from "../RangeInput";
import { ControlledSelect } from "../Select";

import { schema, type formType } from "./schema";

const ModalContent = ({
  submitCallback,
  id,
}: {
  submitCallback: () => void;
  id: string;
}) => {
  const { dispatch } = useAppState();

  const { handleSubmit, control, setValue, getValues } = useForm<formType>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      title: "",
      priority: 1,
      status: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch({
      type: "CREATE_TASK",
      key: id,
      value: { ...data, status: "todo", id: uuidv4() },
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
      <RangeInput
        onChange={(value) => setValue("priority", value)}
        value={getValues("priority")}
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

      <Button variant="normal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ModalContent;
