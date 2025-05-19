import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useAuthContext() {
  return useContext(AuthContext);
}
