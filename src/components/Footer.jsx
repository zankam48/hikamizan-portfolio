import { Github } from 'lucide-react';

const Footer = ({ darkMode }) => {
    return (
      <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} py-10 px-6 transition-colors duration-300`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Hika<span className="text-blue-400">Mizan</span></h2>
              <p className="text-gray-400">Jack of all trades, master of none.</p>
            </div>
  
            <div className="flex space-x-6 mb-6 md:mb-0">
              {/* GitHub */}
              <a href="#" className="text-gray-400 hover:text-white" aria-label="GitHub Profile">
                <Github size={24} />
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram Profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> {/* Finishing the previous tag */}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                   <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Muhammad Mizanul Hikam. All rights reserved.
          </div>
        </div>
      </footer>
    );
};

export default Footer;