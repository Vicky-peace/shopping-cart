import {Link } from "react-router-dom";
import { ShoppingCart,Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
   <nav className="bg-gray-800 p-4 flex items-center justify-between">
    {/* Logo */}
    <div className="text-white text-xl font-bold">
      <Link to="/">MyShop</Link>
    </div>

    {/* Desktop Links */}
    <ul className="hidden md:flex space-x-6 text-white">
      <li>
        <Link to="/" className="hover:text-gray-300">Home</Link>
      </li>

      <li>
        <Link to="/store"className="hover:text-gray-300">Store</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-gray-300">About</Link>
      </li>
    </ul>

    {/* Cart Icon */}
    <div className="relative text-white flex items-center">
      <Link to="/cart" className="hover:text-gray-300" >
      <ShoppingCart/>
     
      </Link>
    </div>

    {/* Mobile menu */}
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-gray-300 focus:outline-none ml-4"
        >
          <Menu className="w-6 h-6 stroke-current" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className="hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar