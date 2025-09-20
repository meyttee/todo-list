import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

interface IControlledProps<TFieldValues extends FieldValues>
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name"
  > {
  control?: Control<TFieldValues>;
  name: Path<TFieldValues>;
  description?: string;
  label?: string;
}

export type { IControlledProps };
