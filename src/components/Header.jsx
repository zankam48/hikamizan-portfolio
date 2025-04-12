import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import NavLinks from './NavLinks';

const Header = ({ toggleNav, isNavOpen, darkMode, toggleDarkMode }) => {
    return (
      <header className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} py-4 px-6 sticky top-0 z-10 shadow-md transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hika<span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mizan</span></h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <NavLinks darkMode={darkMode} />
            </nav>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <button 
              className={darkMode ? "text-white" : "text-gray-800"}
              onClick={toggleNav}
              aria-label="Toggle navigation menu"
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    );
};

export default Header;