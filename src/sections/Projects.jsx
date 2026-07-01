import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../components/Reveal";

const Projects = () => {
  return (
    <section id="projects" className="py-4 md:py-20">
      <Reveal>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="My Work"
            title="Projects"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-500 group-hover:opacity-100">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-violet-500"
                    >
                      View Project
                    </a>

                  </div>

                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl transition group-hover:text-violet-400 font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                   {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:scale-105 hover:bg-violet-500"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 transition hover:scale-105 hover:border-violet-500 hover:text-violet-400"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;