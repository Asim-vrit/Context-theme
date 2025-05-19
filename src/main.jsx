import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./Providers/ThemeContextProvider.jsx";
import AuthContextProvider from "./Providers/AuthContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        overlay
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
