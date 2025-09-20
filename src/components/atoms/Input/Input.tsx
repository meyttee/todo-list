import clsx from "clsx";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

const Input = ({
  error,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: string; label?: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        className={clsx("dark:text-white", {
          "!text-[#FF7979]": !!error,
        })}
      >
        {props.label}
      </label>
      <input
        {...props}
        className={clsx(
          "text-md rounded-sm border border-[#888DA7] p-2 text-[#1C1D22]/80 outline-0 hover:border-[#1C1D22]/60 focus:border-[#1C1D22] dark:text-white dark:hover:border-white/80 dark:focus:border-white/70",
          {
            "border-[#FF7979]": !!error,
          },
        )}
      />
      <span className="h-4 text-xs font-medium text-[#FF7979]">{error}</span>
    </div>
  );
};

export default Input;
