import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = useCallback(() => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [darkMode]);

  return (
    <div className="ml-2">
      <button
        aria-label="theme-toggle"
        className="mt-2 flex h-10 w-10 items-center justify-center text-2xl font-bold transition-transform duration-300 ease-in-out"
        onClick={toggleTheme}
      >
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          fixedWidth
          className="theme-icon text-5xl text-yellow-400 transition-transform duration-300 ease-out"
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
