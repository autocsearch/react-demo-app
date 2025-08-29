import { useNavigate } from "react-router-dom";
import { allProjects } from "../../lib/main";

export default function OurWork() {
  const navigate = useNavigate();

  const handleRedirect = (slug) => {
    navigate(`/ourwork/${slug}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl text-center font-bold mb-8 text-blue-600">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
        {allProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={() => handleRedirect(project.slug)}>
            <img src={project.images} alt={project.slug} className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold mb-2">{project.slug.replace("-", " ").toUpperCase()}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="text-center pb-4">
              <button
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRedirect(project.slug);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
