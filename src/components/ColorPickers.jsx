import { useThemeContext } from "../hooks/useContextHooks";

function ColorPickers() {
  const { setTheme, theme } = useThemeContext();

  function onBgColorChange(hex) {
    console.log("bg", hex);
    setTheme({ ...theme, backgroundColor: hex });
  }
  function onTextColorChange(hex) {
    console.log("text", hex);
    const newData = { ...theme, color: hex };
    setTheme(newData);
  }

  return (
    <div>
      Bg Color:
      <input
        value={theme.backgroundColor}
        onChange={(e) => {
          onBgColorChange(e.target.value);
        }}
        type="color"
      />
      <br />
      <div>
        Text Color:
        <input
          value={theme.color}
          onChange={(e) => {
            onTextColorChange(e.target.value);
          }}
          type="color"
        />
      </div>
    </div>
  );
}

export default ColorPickers;
