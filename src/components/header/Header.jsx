import React, { useState } from "react";
import { logo, links } from "../../static";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center h-[70px] px-4">
        <div className="flex items-center space-x-2">
          {logo.map((item, index) => (
            <h1 key={index} className="text-black font-bold text-xl">
              {item}
            </h1>
          ))}
        </div>


        <nav className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[#393a3e] hover:text-blue-600 font-medium transition duration-200 ease-in-out"
            >
              {link}
            </a>
          ))}
        </nav>


        <div className="hidden md:flex items-center space-x-6 text-black">
          <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer hover:text-blue-600 transition duration-200" />
          <ShoppingCartIcon className="w-6 h-6 cursor-pointer hover:text-blue-600 transition duration-200" />
          <UserIcon className="w-6 h-6 cursor-pointer hover:text-blue-600 transition duration-200" />
        </div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-black" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-4">
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-[#393a3e] hover:text-blue-600 font-medium transition duration-200 ease-in-out"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex space-x-6 mt-4 text-black">
            <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer hover:text-blue-600 transition duration-200" />
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer hover:text-blue-600 transition duration-200" />
            <UserIcon className="w-6 h-6 cursor-pointer hover:text-blue-600 transition duration-200" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
