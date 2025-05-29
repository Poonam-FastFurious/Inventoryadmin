import React, { useState } from "react";
import images from "../../Data/Images";
import { Link, useNavigate } from "react-router-dom";
import useAdminStore from "../../Store/useAdminStore";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAdminStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/"); // or your homepage route
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <img src={images.logo} alt="logo" className="mx-auto h-10" />
            <h3 className="text-2xl font-bold mt-4">Sign In</h3>
            <h4 className="text-gray-600">Please login to your account</h4>
          </div>

          <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300    "
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 ">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to="/forgetpassword"
                class="text-sm font-medium text-primary-600 hover:underline "
              >
                Forgot password?
              </Link>
            </div>
            <button class="w-full  bg-[#79d3f1] hover:bg-[#79d3f1] focus:ring-4 focus:outline-none focus:ring-[#79d3f1] font-medium rounded-lg text-sm px-5 py-2.5 text-center   ">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
