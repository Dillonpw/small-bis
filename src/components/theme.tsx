import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  return (
    <button
      className="m-1 text-2xl font-bold text-yellow-400"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
