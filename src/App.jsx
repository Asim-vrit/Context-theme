import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import AboutInnerPage from "./pages/about/[id]";
import Products from "./pages/products";
import ProductInnerPage from "./pages/products/[id]";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/:name",
        element: <AboutInnerPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductInnerPage />,
      },
    ],
  },
]);

const localTheme = JSON.parse(localStorage.getItem("theme"));

function App() {
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
        <RouterProvider router={router} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
