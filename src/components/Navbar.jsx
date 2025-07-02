import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="p-3 mt-4">
            <Link to="/" className=" ">
              <span className="text-xs font-semibold text-black">
                Your Skin Your Care Your Story
              </span>
              <img src={logo} alt="Logo" className="w-32" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/shop"
              className="text-black hover:text-blue-400 font-medium transition-colors duration-200 relative group"
            >
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              to={"/ingredientology"}
              className="text-black hover:text-blue-400 font-medium transition-colors duration-200 relative group"
            >
              Ingredientology
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="/unu-impact"
              className="text-black hover:text-blue-400 font-medium transition-colors duration-200 relative group"
            >
              Unu Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex items-center mr-4">
            <Link to={"/login"}>
              {" "}
              <button
                variant="outline"
                className="border-blue-300 text-blue-500 bg-yellow-200 rounded-xl px-4 py-2 text-semibold hover:text-blue-300 transition-all duration-200"
              >
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-emerald-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-100 py-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/shop"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Shop
            </Link>
            <Link
              to={"/ingredientology"}
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Ingredientology
            </Link>
            <Link
              href="/unu-impact"
              className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-200"
            >
              Unu Impact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
