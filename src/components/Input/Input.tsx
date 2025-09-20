import clsx from "clsx";

import type { IInputProps } from "./interface";

const Input = ({ error, ...props }: IInputProps) => (
  <div className="flex flex-col gap-1">
    <label
      htmlFor={props.name}
      className={clsx("dark:text-white", {
        "!text-red-400": !!error,
      })}
    >
      {props.label}
    </label>
    <input
      {...props}
      id={props.name}
      className={clsx(
        "text-md rounded-sm border border-gray-500 p-2 text-gray-950/80 outline-0 hover:border-gray-500/60 focus:border-gray-950 dark:text-white dark:hover:border-white/80 dark:focus:border-white/70",
        {
          "border-red-400": !!error,
        },
      )}
    />
    <span className="h-4 text-xs font-medium text-red-400">{error}</span>
  </div>
);

export default Input;
