import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500">

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

        <span className="rounded-full bg-violet-600/20 px-4 py-1 text-sm text-violet-400">
          {project.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
};

export default ProjectCard;