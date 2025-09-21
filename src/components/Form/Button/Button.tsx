import clsx from "clsx";

import type { IBaseButtonProps } from "./interface";
import { baseClasses, fabButtonClasses, iconButtonClasses } from "./classes";

const Button = ({ variant, ...props }: IBaseButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex items-center justify-center",
        {
          [iconButtonClasses]: variant === "icon",
          [baseClasses]: variant === "normal" || variant === "fab",
          [fabButtonClasses]: variant === "fab",
        },
        props.className,
      )}
    />
  );
};

export default Button;
