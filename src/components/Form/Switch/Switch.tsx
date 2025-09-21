import clsx from "clsx";
import type { ReactNode } from "react";

import type { ISwitchProps } from "./interface";

const Switch = ({
  checked,
  label,
  onChange,
  variant,
}: ISwitchProps): ReactNode => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={clsx(
          `peer inset-shadow-md relative h-6 w-11 rounded-full bg-gray-200 inset-shadow-gray-500 duration-700 peer-checked:bg-blue-600 peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600`,
          {
            [`h-7 duration-700 after:border-none after:!bg-transparent after:content-['🌜'] peer-checked:after:rotate-[360deg] peer-checked:after:content-['🌞']`]:
              variant === "theme",
          },
        )}
      />
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
    </label>
  );
};

export default Switch;
