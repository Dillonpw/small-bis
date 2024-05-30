import ThemeToggle from "./theme.tsx"; 
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex justify-between">
          <a href="/#/">Logo</a>
          <ul className="mr-4 flex gap-4">
            <li>
              <a className="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/Reviews">Reviews</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <ThemeToggle />
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative mx-20 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">Logo</a>
          <div>
            <ThemeToggle />
            <button
              className="mx-4 px-4 hover:scale-110"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </nav>
        {isOpen && (
          <ul className="absolute border-2 right-0 z-10 flex flex-col items-end gap-4 w-[60%] rounded-md bg-gray-100 p-4 text-black shadow-lg">
            <li>
              <a className="hover:underline" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/About">
                About
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/Reviews" className="hover:underline">
                Reviews
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
