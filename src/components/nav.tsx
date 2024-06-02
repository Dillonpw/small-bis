import ThemeToggle from "./theme.tsx";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-nav bg-gray-100 text-black shadow-lg dark:bg-black dark:text-white dark:shadow-md dark:shadow-gray-800 ">
      {/* Desktop Navigation */}
      <div className=" mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <img className="h-14 rounded-full" src="/Cartoon.jpeg" alt="Logo" />
          </a>
          <ul className="mr-4 flex gap-8">
            <li>
              <a className="un rounded-lg md:text-xl lg:text-2xl" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="un rounded-lg md:text-xl lg:text-2xl">
                About
              </a>
            </li>
            <li>
              <a
                href="/Services"
                className="un rounded-lg md:text-xl lg:text-2xl"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/Reviews"
                className="un rounded-lg md:text-xl lg:text-2xl"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="un rounded-lg md:text-xl lg:text-2xl"
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
          <ul className="absolute right-0 z-10 flex w-[60%] flex-col items-end gap-4 rounded-md border-2 bg-gray-100 p-4 pb-6 text-black shadow-lg dark:border-none dark:bg-black dark:text-white">
            <li>
              <a className="un" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="un" href="/About">
                About
              </a>
            </li>
            <li>
              <a href="/Services" className="un">
                Services
              </a>
            </li>
            <li>
              <a href="/Reviews" className="un">
                Reviews
              </a>
            </li>
            <li>
              <a className="un" href="/Contact">
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
