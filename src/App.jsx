import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';

import About from './sections/About';
import TechStack from './sections/TechStack'
import Projects from './sections/Projects';
import Blog from './sections/Blog';



const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <Header
        toggleNav={toggleNav}
        isNavOpen={isNavOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MobileNav isOpen={isNavOpen} toggleNav={toggleNav} darkMode={darkMode} />

      <main className={`${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
        <About darkMode={darkMode} />
        <TechStack darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Blog darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App; 