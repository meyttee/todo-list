import clsx from "clsx";

import type { IBaseButtonProps } from "./interface";
import { baseClasses, fabButtonClasses, iconButtonClasses } from "./classes";

/**
 * Renders a customizable button component with support for different visual variants.
 *
 * @remarks
 * The `Button` component applies different styles based on the `variant` prop:
 * - `"icon"`: Applies icon button styles.
 * - `"normal"`: Applies base button styles.
 * - `"fab"`: Applies floating action button styles.
 *
 * Additional props are spread onto the underlying `<button>` element.
 *
 * @param props - Props for the button, including `variant` and standard button attributes.
 * @param {"fab" | "normal" | "icon" } props.variant - Use variant to applies expected behavior.
 * @returns A styled `<button>` element.
 */

const Button = ({ variant = "normal", ...props }: IBaseButtonProps) => (
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

export default Button;
