import { useParams, Link } from "react-router-dom";
import { allProjects } from "../../lib/main";

export default function WorkId() {
  const { workId } = useParams(); // must match the router path (not slug!)
  const project = allProjects.find((p) => p.slug.toLowerCase() === workId.toLowerCase());

  if (!project) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
        <p className="text-muted-foreground">We couldn’t find the project you’re looking for.</p>
        <Link to="/home" className="inline-block mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
          ⬅ Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-bold text-gray-900">{project.slug}</h1>
        <p className="text-lg text-gray-600">{project.description}</p>
      </div>

      <div className="flex justify-center">
        <img src={project.images} alt={project.title} className="rounded-2xl shadow-lg max-h-[500px] object-cover" />
      </div>

      <div className="text-center">
        <Link to="/home" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium  hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
