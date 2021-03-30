import ThemeState from "../models/client/ThemeState"; 
import { AnyAction as Action } from "redux";
 
const initialState: ThemeState = {
  theme: "light",
};

const themeState = (
  state: ThemeState = initialState,
  action: Action
): ThemeState => {
  switch (action.type) {
    case `theme`:
      if (state.theme === "light") {
        window.localStorage.setItem("theme", "dark");
        return { theme: "dark" };
      } else {
        window.localStorage.setItem("theme", "light");
        return { theme: "light" };
      }
    case `setTheme`:
        return {theme: action.data}
    default:
        return { theme: "light" }
  }
};

export default themeState;
