import { Mail, Lock } from "lucide-react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-[#f9f3ef] items-center justify-center p-10">
          <img
            src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-cosmetics-and-skincare-promotion-png-image_5406476.jpg"
            alt="Product"
            className="max-h-[500px] object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
              <img src={logo} alt="Logo" className="h-20" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                Welcome Back!
              </h2>
              <p className="mt-2 text-sm text-gray-500 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
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

              <button
                type="submit"
                className="w-full bg-[#fdd824] text-black py-2 rounded-md hover:bg-yellow-500 transition duration-200"
              >
                Get Started →
              </button>
            </form>

            {/* Sign Up Link */}

            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-yellow-600 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
