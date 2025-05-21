import { NavLink } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="">
      <nav className="flex justify-center">
        <ul
          style={{ backgroundColor: "var(--bg-color)" }}
          className="flex justify-center gap-5 text-4xl"
        >
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/products"}>
            <li>Products</li>
          </NavLink>
          <NavLink to={"/users"}>
            <li>Users</li>
          </NavLink>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}

export default Header;
