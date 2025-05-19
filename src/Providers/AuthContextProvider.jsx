import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const isLoggedInInit = !!localStorage.getItem("token");
const initUser = {
  name: "",
  phone: "",
};

function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInInit);
  const [userData, setUserData] = useState(initUser);
  function login(token, userData) {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setUserData(userData);
  }
  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData(initUser);
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, userData, setUserData }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
