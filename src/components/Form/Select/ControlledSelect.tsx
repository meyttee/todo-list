import type { Props } from "react-select";
import { Controller, type FieldValues } from "react-hook-form";

import CustomSelect from "./Select";
import type { IConrolledSelectProps } from "./interface";

const ControlledSelect = <TFieldValues extends FieldValues>({
  name,
  control,
  ...props
}: IConrolledSelectProps<TFieldValues> & Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <CustomSelect
          {...props}
          {...field}
          aria-errormessage={fieldState.error?.message}
        />
      )}
    />
  );
};

export default ControlledSelect;
