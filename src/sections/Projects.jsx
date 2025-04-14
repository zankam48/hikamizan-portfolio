import ProjectCard from "../cards/ProjectCard";

const projects = [
    {
        id: 1,
        title: "3D Reconstruction",
        description: "3D Reconstruction with Python and Perspective Projection",
        tech: ["Python", "Numpy", "Open3D", "Linear Algebra"],
        image: "/images/projects/3drec.png"
    },
    {
        id: 2,
        title: "Robotic Arm Simulation Web API",
        description: "Robotic Arm Simulation Web API with .NET and Three.js",
        tech: [".NET", "Three.js", "gRPC", "SignalR", "SQLite"],
        image: "/images/projects/roboticarm.png"
    },
    {
        id: 3,
        title: "Autonomous Drone",
        description: "Autonomous Drone Project for Gadjah Mada Flying Object Research Center",
        tech: ["Python", "C++", "Ros", "Raspberry Pi", "Linux"],
        image: "/images/projects/3drec.png",
        confidential: true
    },
    {
        id: 4,
        title: "ORB-SLAM Python",
        description: "ORB-SLAM Python",
        tech: ["Python"],
        image: "/images/projects/orbslam.jpg",
    },
    {
        id: 5,
        title: "Manim Project",
        description: "Mathematical Animation with Manim",
        tech: ["Python", "Manim", "Matplotlib"],
        image: "/images/projects/manim.jpg"
    },
    {
        id: 6,
        title: "Obsidian MCP Server",
        description: "Model Context Protocol for Obsidian",
        tech: ["C#", ".NET", "Python", "Claude"],
        image: "/images/projects/obs.png"
    }
];

const Projects = ({ darkMode }) => {
    return (
      <section 
        id="projects" 
        className={`py-16 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
          <p className="text-center mb-10 max-w-3xl mx-auto">
            This section showcases projects to which I have contributed, both individually and in team environments
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;

