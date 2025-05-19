import { useState } from "react";
import { NavLink } from "react-router";
import { useAuthContext } from "../../hooks/useContextHooks";
import axios from "axios";

export default function Login() {
  const { isLoggedIn, login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(isLoggedIn);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    if (!password) {
      return;
    }
    const data = await axios.get("http://localhost:3000/users");
    const filteredData = data.data.filter((user) => user.email === email)[0];
    if (filteredData && filteredData.password === password) {
      console.log("Login successful");
      login("some token");
    } else {
      console.log("wrong password");
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <NavLink to="/">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
          </NavLink>
          <h2 className="mt-10 text-center text-3xl font-bold text-indigo-600">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14-day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
