import React from "react";
import images from "../../Data/Images";

function ForgotPassword() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <img src={images.logo} alt="Logo" className="h-12" />
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Forgot password?
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Don’t worry! It happens. Please enter the address <br />
              associated with your account.
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email address"
                 class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
              />
              <img
                src="https://dreamspos.dreamstechnologies.com/tailwind/template/assets/img/icons/mail.svg"
                alt="icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
            </div>
          </div>

          <div className="mt-6">
            <a
              href="signin.html"
              className="w-full inline-block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
