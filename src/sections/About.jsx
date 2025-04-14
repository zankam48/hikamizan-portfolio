import { Github } from 'lucide-react';

const About = ({ darkMode }) => {
    return (
      <section 
        id="about" 
        className={`py-20 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img 
                src="/api/placeholder/400/400" 
                alt="Developer Profile" 
                className="w-64 h-64 rounded-full object-cover border-4 border-blue-400"
              />
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Muhammad Mizanul Hikam</span>
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-400">
                I Love Math, Engineering, Robotic, Computer Vision and Software Development
              </h2>
              
              <p className="text-lg mb-6">
                Recent Electronics and Instrumentation graduate (GPA: 3.60) with strong foundation in....
              </p>
              
              <p className="text-lg mb-8">
                Experienced in....
              </p>
              
              <div className="flex space-x-4 mb-8">
                <a 
                  href="#" 
                  className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded font-medium transition-colors flex items-center gap-2`}
                >
                  <span className="bg-white text-blue-500 p-1 rounded text-xs">📄</span> Resume
                </a>
                <a 
                  href="#" 
                  className={`${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'} text-white px-4 py-2 rounded font-medium transition-colors flex items-center gap-2`}
                >
                  <span className="bg-white text-teal-500 p-1 rounded text-xs">📋</span> CV
                </a>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>
                  <Github size={24} />
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
                Education
              </h3>
              <div className="flex items-start mb-4">
                <div className="min-w-8 mt-1">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                  <div className={`w-0.5 h-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} ml-0.75 mt-1`}></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Electronics and Instrumentation</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aug 2019 - May 2024</p>
                  <p>Gadjah Mada University, Yogyakarta - GPA 3.60</p>
                </div>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Experience
              </h3>
              <div className="flex items-start mb-4">
                <div className="min-w-8 mt-1">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                  <div className={`w-0.5 h-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} ml-0.75 mt-1`}></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Backend Dev...</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Jul 2024 - Aug 2024</p>
                  <p>Yogyakarta, Special Region of Yogyakarta</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="min-w-8 mt-1">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Programmer....</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dec 2020 - Dec 2022</p>
                  <p>Yogyakarta, Special Region of Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;