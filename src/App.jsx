import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/about";
import AboutInnerPage from "./pages/about/[id]";
import Home from "./pages/home";
import Products from "./pages/products";
import ProductInnerPage from "./pages/products/[id]";
import Protected from "./components/Protected";
import Login from "./pages/login/login";
import Users from "./pages/users";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        Component: Protected,
        children: [
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
