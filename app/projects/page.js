const projects = [
  {
    id: "DGH", title: 'E-Commerce Website', description: `An online store for our clients to expand their customer 
  base beyond physical stores. In addition, we implemented features for 
  managing orders, products, and sales reports. To enhance efficiency, 
  we also created a mobile app that allows clients to scan and manage 
  products and orders.`, link: 'https://github.com/...'
  },
  {
    id: "EF", title: 'Empowered Futures', description: `Id incididunt sunt eu labore mollit do qui ea. 
  Commodo amet proident deserunt duis cupidatat officia. Magna mollit nostrud ad ex. Nostrud velit ut ea
   officia ullamco exercitation occaecat. Culpa proident eiusmod Lorem enim velit proident minim sunt id 
   aute eiusmod. 
  Nostrud culpa culpa sit cupidatat anim excepteur eu cillum.`, link: 'https://demo...'
  },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:px-16 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 md:p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-2xl py-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <img
              src={`/images/${project.id}/01.jpg`}
              alt={project.id}
              className="w-[300px] md:w-[500px] object-cover my-4"
            />
            <a href={project.link} target="_blank" className="text-gray-500">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}
