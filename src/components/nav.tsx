import ThemeToggle from "./theme";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden pt-2 text-4xl md:block">
        <nav className="ml-4 flex justify-between">
          <a href="/#/">Logo</a>
          <ul className="mr-4 flex gap-4">
            <li>
              <a href="/#/">About</a>
            </li>
            <li>
              <a href="/#/">Contact</a>
            </li>
            <ThemeToggle />
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="pt-2 text-4xl md:hidden">
        <nav className="mb-4 flex justify-between items-center">
          <a href="/#/">Logo</a>
          <div>
            <ThemeToggle />
            <button className="mx-4" onClick={toggle}>
              dd
            </button>
          </div>
        </nav>
        {isOpen && (
          <ul className="mr-4 flex flex-col items-end gap-4">
            <li>
              <a href="/#/">About</a>
            </li>
            <li>
              <a href="/#/">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Nav;
