import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  label?: string;
}

interface IControlledProps<TFieldValues extends FieldValues>
  extends Omit<IInputProps, "name"> {
  control?: Control<TFieldValues>;
  name: Path<TFieldValues>;
  description?: string;
  label?: string;
}

export type { IControlledProps, IInputProps };
