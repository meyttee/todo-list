import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { schema, type formType } from "./schema";
import { Button, ControlledInput } from "..";
import { useAppState } from "../../hooks";

const ModalContent = ({
  submitCallback,
  id,
}: {
  submitCallback: () => void;
  id: string;
}) => {
  const { dispatch } = useAppState();

  const { handleSubmit, control } = useForm<formType>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: "",
      title: "",
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
      <Button variant="normal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ModalContent;
