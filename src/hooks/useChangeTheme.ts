import { useEffect } from "react";
import useAppState from "./useAppState";

const useChangeTheme = () => {
  const { state, dispatch } = useAppState();

  const changeThemeHandler = () => dispatch({ type: "TOGGLE_THEME" });

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      state.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }, [state.theme]);

  return { changeThemeHandler, theme: state.theme };
};

export default useChangeTheme;
