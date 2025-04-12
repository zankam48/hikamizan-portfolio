import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-opacity-20 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    );
};

export default ThemeToggle;