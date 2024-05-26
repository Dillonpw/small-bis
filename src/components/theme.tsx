import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    console.log(`Initial dark mode state: ${isDarkMode}`);
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const isDarkMode = !darkMode;
    console.log(`Toggling theme. Dark mode: ${isDarkMode}`);
    setDarkMode(isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  };

  return (
    <button className="m-1 text-2xl font-bold" onClick={toggleTheme}>
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
