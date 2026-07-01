import SectionTitle from "../components/SectionTitle";
import {
  FaReact,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";
import Reveal from "../components/Reveal";

const About = () => {
  return (
   <section id="about" className="pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-20 lg:pb-12">
      <Reveal>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle subtitle="About Me" />

         <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">

            {/* Left Side */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Frontend React Developer
              </h3>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 lg:mx-0 lg:mt-6 lg:leading-8">
               I'm a passionate Frontend Developer who loves turning ideas into modern, responsive, and engaging web applications. I focus on writing clean code and creating seamless user experiences with the latest frontend technologies.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-10">

                <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-violet-500 lg:flex-row">
                  <FaReact className="text-3xl text-violet-500" />
                  <span className="text-sm sm:text-base">React.js</span>
                </div>

                <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-violet-500 lg:flex-row">
                  <FaCode className="text-3xl text-violet-500" />
                  <span className="text-sm sm:text-base">Clean Code</span>
                </div>

                <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-violet-500 lg:flex-row">
                  <FaMobileAlt className="text-3xl text-violet-500" />
                  <span className="text-sm sm:text-base">
                    Responsive
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-violet-500 lg:flex-row">
                  <FaLaptopCode className="text-3xl text-violet-500" />
                  <span className="text-sm sm:text-base">Modern UI</span>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-violet-500">
                <h2 className="text-3xl font-bold text-violet-500 sm:text-4xl">
                  5+
                </h2>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-violet-500">
                <h2 className="text-3xl font-bold text-violet-500 sm:text-4xl">
                  1+
                </h2>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Years Learning
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-violet-500">
                <h2 className="text-3xl font-bold text-violet-500 sm:text-4xl">
                  100%
                </h2>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Responsive
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-violet-500">
                <h2 className="text-3xl font-bold text-violet-500 sm:text-4xl">
                  React
                </h2>

                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Frontend
                </p>
              </div>

            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;