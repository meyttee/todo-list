import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type formType } from "./schema";
import { useAppState } from "../../hooks";
import { Button, ControlledInput } from "..";

const ModalContent = ({ submitCallback }: { submitCallback: () => void }) => {
  const { dispatch } = useAppState();

  const { handleSubmit, control } = useForm<formType>({
    resolver: zodResolver(schema),
    defaultValues: {
      colName: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch({ type: "CREATE_COLUMN", key: data.colName });
    submitCallback();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <ControlledInput name="colName" control={control} label="column name" />
      <Button variant="normal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ModalContent;
