import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type THTMLButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface IBaseButtonProps extends THTMLButtonProps {
  variant: "normal" | "icon" | "fab";
}

export type { IBaseButtonProps };
