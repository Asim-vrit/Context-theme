import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
const localTheme = JSON.parse(localStorage.getItem("theme"));

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(
    localTheme || {
      colorThemeName: "default",
      color: "#B0DB9C",
      backgroundColor: "#ECFAE5",
      font: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    }
  );
  function themeSetter(value) {
    localStorage.setItem("theme", JSON.stringify(value));
    setTheme(value);
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme: themeSetter }}>
      <div
        style={{
          "--text-color": theme.color,
          "--bg-color": theme.backgroundColor,
          "--font-family": theme.font,
          height: "100vh",
          overflow: "auto",
        }}
      >
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
