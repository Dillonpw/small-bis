import ThemeToggle from "./theme";
import { useState } from "react";
import type { FC } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <li>
    <a className="un rounded-lg md:text-xl lg:text-2xl xl:text-4xl" href={href}>
      {children}
    </a>
  </li>
);

const navItems = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Services", label: "Services" },
  { href: "/Reviews", label: "Reviews" },
  { href: "/Contact", label: "Contact" },
];

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed-nav bg-gray-100 shadow-lg transition-all duration-300 dark:bg-stone-800 dark:text-white dark:shadow-md">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <h1 className="font-bold">LOGO</h1>
          </a>
          <ul className="mr-4 flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative mx-20 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <p className="font-bold">LOGO</p>{" "}
          </a>
          <div className="flex items-center">
            <ThemeToggle />
            <button className="mx-4 px-4 hover:scale-110" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </nav>
        {isOpen && (
          <ul className="absolute right-0 z-10 flex w-[60%]  flex-col items-end gap-4 rounded-md bg-gray-100 p-4 pb-6 text-black shadow-lg transition-all duration-300  dark:bg-stone-800 dark:text-white">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Nav;
