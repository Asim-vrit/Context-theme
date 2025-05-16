import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { setTheme, theme } = useContext(ThemeContext);
  function themeChange(value) {
    switch (value) {
      case "light":
        setTheme({
          ...theme,
          colorThemeName: "light",
          backgroundColor: "#ffffff",
          color: "#000000",
        });
        break;
      case "dark":
        setTheme({
          ...theme,
          color: "#ffffff",
          backgroundColor: "#000000",
          colorThemeName: "dark",
        });
        break;
      case "red":
        setTheme({
          ...theme,
          color: "#3A0519",
          backgroundColor: "#EF88AD",
          colorThemeName: "red",
        });
        break;
      default:
        setTheme({
          ...theme,
          colorThemeName: "default",
          color: "#B0DB9C",
          backgroundColor: "#ECFAE5",
        });
        break;
    }
  }
  return (
    <>
      <select
        value={theme.colorThemeName}
        onChange={(e) => {
          themeChange(e.target.value);
        }}
      >
        <option value="default">Default theme</option>
        <option value="light">Light theme</option>
        <option value="dark">Dark theme</option>
        <option value="red">Red theme</option>
      </select>
    </>
  );
}

export default ThemeSwitcher;
