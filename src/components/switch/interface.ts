interface ISwitchProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
  variant: "theme" | "normal";
}

export type { ISwitchProps };
