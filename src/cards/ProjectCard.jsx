const ProjectCard = ({ project, darkMode }) => {
    return (
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
          {project.confidential && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-red-600 text-white transform rotate-45 px-20 py-1 text-center text-sm font-bold absolute top-6 -right-14">
                NOT-PUBLIC
              </div>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-xl mb-1">{project.title}</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-3 text-sm`}>{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx} 
                className={`${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-800'} text-xs px-2 py-1 rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;