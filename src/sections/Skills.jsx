import SectionTitle from "../components/SectionTitle";
import { frontendSkills, tools } from "../data/skills";
import Reveal from "../components/Reveal";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
       <Reveal>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Skills"
          title="Technologies I Work With"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Frontend Skills */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {frontendSkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
                  >
                    <Icon className="text-5xl text-violet-500 transition-transform duration-300 group-hover:scale-110" />

                    <p className="mt-4 text-center text-sm font-medium">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
                  >
                    <Icon className="text-5xl text-violet-500 transition-transform duration-300 group-hover:scale-110" />

                    <p className="mt-4 text-center text-sm font-medium">
                      {tool.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      </Reveal>
    </section>
  );
};

export default Skills;