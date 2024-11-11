
"use client"
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[80px] bg-pink-100 flex justify-center items-center border-b-2 border-black">
      <div className="w-full md:w-[80%] h-full bg-red-300 flex justify-between items-center px-4">
        {/* Left Side - Logo */}
        <div>
          <h1 className="text-3xl font-bold">KidsParty</h1>
        </div>

        {/* Right Side - Navigation */}
        <div className="hidden md:flex">
          <ul className="flex gap-x-5 mr-4">
            <li>
              <Link className="hover:underline" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={"/contact"}>
                Contact
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-rose-950 text-white text-center py-4">
              <ul>
                <li>
                  <Link className="hover:underline" href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={"/contact"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" href={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
