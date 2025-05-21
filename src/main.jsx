import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./Providers/ThemeContextProvider.jsx";
import AuthContextProvider from "./Providers/AuthContextProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <ToastContainer />
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
