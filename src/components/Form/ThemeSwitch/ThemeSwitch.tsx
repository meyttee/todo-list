import { Switch } from "../Switch";
import { useChangeTheme } from "../../../hooks";

const ThemeSwitch = () => {
  const { changeThemeHandler, theme } = useChangeTheme();
  return (
    <Switch
      checked={theme === "light"}
      onChange={changeThemeHandler}
      variant="theme"
    />
  );
};

export default ThemeSwitch;
