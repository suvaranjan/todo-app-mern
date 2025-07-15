import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link className="text-lg font-medium text-gray-900" to="/todos">
              Todo App
            </Link>
          </div>

          {/* Right side - Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              to="/todos/add"
            >
              Add Task
            </Link>
            <Link
              to="/todos"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Task Lists
            </Link>
            <div className="relative">
              <Link
                className="flex items-center text-gray-700 hover:text-gray-900"
                to="/profile"
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">P</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link
              className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              to="/todos/add"
            >
              Add Task
            </Link>
            <Link
              className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              to="/todos"
            >
              Task Lists
            </Link>
            <Link
              className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              to="/profile"
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
