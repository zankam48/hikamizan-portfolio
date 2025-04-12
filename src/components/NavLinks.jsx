import { Code, User, BookOpen, Layers } from 'lucide-react';

const NavLinks = ({ darkMode }) => {
    return (
      <>
        <a href="#about" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-1`}>
          <User size={16} /> About
        </a>
        <a href="#tech" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-1`}>
          <Code size={16} /> Tech Stack
        </a>
        <a href="#projects" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-1`}>
          <Layers size={16} /> Projects
        </a>
        <a href="#blog" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} flex items-center gap-1`}>
          <BookOpen size={16} /> Blog
        </a>
      </>
    );
};

export default NavLinks;