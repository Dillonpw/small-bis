import { useState, useEffect } from "react";
import ThemeToggle from "./theme";
import type { FC } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, children, isActive }) => (
  <li>
    <a
      className={`un rounded-lg md:text-xl lg:text-2xl xl:text-4xl ${
        isActive ? "font-bold text-blue-400 " : ""
      }`}
      href={href}
    >
      {children}
    </a>
  </li>
);
//update these values if you plan to change the names of any of the pages//
const navItems = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Services", label: "Services" },
  { href: "/Reviews", label: "Reviews" },
  { href: "/Contact", label: "Contact" },
  { href: "/#FAQ", label: "FAQ" },
];

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed-nav bg-gray-100 shadow-lg transition-all duration-300 dark:bg-neutral-950 dark:text-gray-100 dark:shadow-md">
      {/* Desktop Navigation */}
      <div className="mx-20 hidden py-2 text-2xl md:block">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            {/* Replace with your logo */}
            <h1 className="font-bold">LOGO</h1>
            {/* end of logo section */}
          </a>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activePath === item.href}
              >
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
      <div className="relative mx-5 py-2 text-4xl md:hidden">
        <nav className="my-4 flex items-center justify-between">
          <a href="/">
            <p className="text-2xl font-bold">Logo</p>
          </a>
          <div className="flex items-center">
            <ThemeToggle />
            <button
              className="px-2 hover:scale-110"
              aria-label="dropdown"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </nav>
        {isOpen && (
          <ul className="absolute right-0 z-10 flex w-[60%] flex-col items-end gap-4 rounded-md bg-gray-100 p-4 pb-6 text-black shadow-lg transition-all duration-300 dark:bg-neutral-950 dark:text-white">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activePath === item.href}
              >
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
