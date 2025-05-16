import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function FontSwitch() {
  const { setTheme, theme } = useContext(ThemeContext);
  return (
    <div>
      <select
        onChange={(e) => {
          setTheme({ ...theme, font: e.target.value });
        }}
        value={theme.font}
      >
        <option value="'Courier New', Courier, monospace">Courier</option>
        <option value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">
          Impact
        </option>
      </select>
    </div>
  );
}

export default FontSwitch;
