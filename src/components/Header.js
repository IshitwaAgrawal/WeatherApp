import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  return (
    <header className="bg-blue-900 shadow-lg">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="#" className="text-xl font-semibold text-white mx-2">
            Weather App
          </Link>
        </div>
        {/* <div className="hidden md:flex space-x-6">
          <Link href="/" className={`${
              router.pathname === '/'
                ? 'text-white hover:text-blue-200 underline'
                : 'text-white hover:text-blue-200'
            }`}>
            Home
          </Link>
					<Link href="/search" className={`${
              router.pathname === '/cart'
                ? 'text-white hover:text-blue-200 underline'
                : 'text-white hover:text-blue-200'
            }`}>
            Search
          </Link>
          <Link href="/about" className={`${
              router.pathname === '/products'
                ? 'text-white hover:text-blue-200 underline'
                : 'text-white hover:text-blue-200'
            }`}>
            About
          </Link>
          <Link href="/login" className={`${
              router.pathname === '/login'
                ? 'text-white hover:text-blue-200 underline'
                : 'text-white hover:text-blue-200'
            }`}>
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div> */}
      </div>
      {/* {menuOpen && (
        <div className="md:hidden bg-blue-600 py-2">
          <Link
            href="/"
            className="block px-6 py-2 text-white hover:bg-blue-700"
          >
            Home
          </Link>
          <hr />
          <Link
            href="/search"
            className="block px-6 py-2 text-white hover:bg-blue-700"
          >
            Search
          </Link>
          <hr />
          <Link
            href="/about"
            className="block px-6 py-2 text-white hover:bg-blue-700"
          >
            About
          </Link>
          <hr />
          <Link
            href="/login"
            className="block px-6 py-2 text-white hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      )} */}
    </header>
  );
};

export default Header;
