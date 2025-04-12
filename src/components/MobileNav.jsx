import { X } from 'lucide-react';
import NavLinks from './NavLinks';

const MobileNav = ({ isOpen, toggleNav, darkMode }) => {
    if (!isOpen) return null;
    
    return (
      <div className={`fixed inset-0 ${darkMode ? 'bg-gray-900 bg-opacity-95' : 'bg-white bg-opacity-95'} z-50 md:hidden flex flex-col transition-colors duration-300`}>
        <div className="p-4 flex justify-end">
          <button 
            onClick={toggleNav}
            aria-label="Close navigation menu"
            className={darkMode ? "text-white" : "text-gray-800"}
          >
            <X size={24} />
          </button>
        </div>
        <nav className={`flex flex-col items-center space-y-8 mt-16 ${darkMode ? 'text-white' : 'text-gray-800'} text-lg`}>
          <NavLinks darkMode={darkMode} />
        </nav>
      </div>
    );
};

export default MobileNav;