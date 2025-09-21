import type { Control, FieldValues, Path } from "react-hook-form";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IConrolledSelectProps<TFieldValues extends FieldValues>
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "name"
  > {
  control?: Control<TFieldValues>;
  name: Path<TFieldValues>;
  description?: string;
  label: string;
}

export type { IConrolledSelectProps };
