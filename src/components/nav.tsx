import ThemeToggle from "./theme.tsx";
import { useState } from "react";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
      {/* Desktop Navigation */}
      <div className=" mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <img
              className="h-14 rounded-full"
              src="/public/Cartoon.jpeg"
              alt="Logo"
            />
          </a>
          <ul className="mr-4 flex gap-4">
            <li>
              <a
                className="rounded-lg hover:bg-yellow-400 md:p-2 md:text-xl lg:text-2xl lg:p-4"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="rounded-lg hover:bg-yellow-400 md:p-2 md:text-xl lg:text-2xl lg:p-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Services"
                className="rounded-lg hover:bg-yellow-400 md:p-2  md:text-xl lg:text-2xl lg:p-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/reviews"
                className="rounded-lg hover:bg-yellow-400 md:p-2 md:text-xl lg:text-2xl lg:p-4"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="rounded-lg hover:bg-yellow-400 md:p-2 md:text-xl lg:text-2xl lg:p-4"
              >
                Contact
              </a>
            </li>
            <ThemeToggle />
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative mx-20 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <img
              className="h-14 rounded-full"
              src="/public/Cartoon.jpeg"
              alt="Logo"
            />
          </a>
          <div>
            <ThemeToggle />
            <button className="mx-4 px-4 hover:scale-110" onClick={toggle}>
              ☰
            </button>
          </div>
        </nav>
        {isOpen && (
          <ul className="roun ded-md absolute right-0 z-10 flex w-[60%] flex-col items-end gap-4 border-2 bg-gray-100 p-4 text-black shadow-lg dark:border-none dark:bg-black dark:text-white">
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
