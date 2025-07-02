import { Mail, Lock } from "lucide-react";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
const SignupPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col lg:flex-row bg-gradient-to-br from-[#fff7f2] to-[#fffaf7]">
        {/* Left Image Section */}

        <div className="hidden lg:flex w-full lg:w-1/2 bg-[#d6dc9d] items-center justify-center py-7 ">
          <img
            src="https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8"
            alt="Product"
            className="max-h-[650px] object-contain rounded-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
              <img src={logo} alt="Logo" className="h-20" />
            </div>

            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold text-black text-center">
                Get Started
              </h2>
              <p className="mt-2 text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#fdd824] text-black py-2 rounded-md hover:bg-yellow-500 transition duration-200"
              >
                Get Started →
              </button>
            </form>

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-yellow-600 font-medium hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
