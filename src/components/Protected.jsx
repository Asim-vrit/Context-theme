import { Outlet } from "react-router";
import { useAuthContext } from "../hooks/useContextHooks";

function Protected() {
  const authData = useAuthContext();
  console.log(authData);
  if (!authData.isLoggedIn) {
    return <>You are not logged in</>;
  }
  return <Outlet />;
}

export default Protected;
