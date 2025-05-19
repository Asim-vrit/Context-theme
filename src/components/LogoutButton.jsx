import React from "react";
import { useAuthContext } from "../hooks/useContextHooks";

function LogoutButton() {
  const { logout } = useAuthContext();
  return <button onClick={logout}>LogoutButton</button>;
}

export default LogoutButton;
