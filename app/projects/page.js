const projects = [
    { id: 1, title: 'E-Commerce Website', description: 'An online store with tracking...', link: 'https://github.com/...' },
    { id: 2, title: 'Blog Platform', description: 'A dynamic blog built with Next.js...', link: 'https://demo...' },
  ];
  
  export default function Projects() {
    return (
      <div className="bg-gradient-to-b from-purple-600 to-blue-600 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {projects.map((project, index) => (
            <div
            key={index} 
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  