import { Controller, type FieldValues } from "react-hook-form";
import Input from "./Input";
import type { IControlledProps } from "./interface";

const ControlledInput = <TFieldValues extends FieldValues>({
  name,
  control,
  ...rest
}: IControlledProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input error={fieldState.error?.message} {...field} {...rest} />
      )}
    />
  );
};

export default ControlledInput;
