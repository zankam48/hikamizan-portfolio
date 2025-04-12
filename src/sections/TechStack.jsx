import TechStackAnimation from "../animations/TechStackAnimation";

const techStack = [
    { name: "Python", icon: "P", iconUrl: "/tech-icons/python.png", color: 0x61dafb },
    { name: "JavaScript", icon: "𝐉𝐒", iconUrl: "/tech-icons/javascript.png", color: 0xf7df1e },
    { name: ".NET", icon: "N", iconUrl: "/tech-icons/dotnet.png", color: 0x3178c6 },
    { name: "Node.js", icon: "🟢", iconUrl: "/tech-icons/nodejs.png", color: 0x68a063 },
    { name: "ROS", icon: "R", iconUrl: "/tech-icons/ros.png", color: 0x38bdf8 },
    { name: "OpenCV", icon: "▲", iconUrl: "/tech-icons/opencv.png", color: 0x000000 },
    { name: "Raspberry Pi", icon: "RP", iconUrl: "/tech-icons/raspi.png", color: 0xe535ab },
    { name: "Git", icon: "⎇", iconUrl: "/tech-icons/git.png", color: 0xf34f29 }
];

const TechStack = ({ darkMode }) => {
    return (
      <section 
        id="tech" 
        className={`py-16 px-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
          
          <div className="flex justify-center mb-10">
            <TechStackAnimation />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} px-4 py-2 rounded-full flex items-center transition-colors duration-200`}
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default TechStack;