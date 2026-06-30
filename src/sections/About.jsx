import SectionTitle from "../components/SectionTitle";
import { FaReact, FaCode, FaMobileAlt, FaLaptopCode } from "react-icons/fa";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <Reveal>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionTitle
          subtitle="About Me"
          title="Who I Am"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              Frontend React Developer
            </h3>

            <p className="mt-6 text-slate-400 leading-8">
              I'm a passionate Frontend Developer who enjoys building
              modern, responsive and user-friendly web applications.
              I love turning ideas into beautiful digital experiences
              using React.js, JavaScript and Tailwind CSS.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <FaReact className="text-2xl text-violet-500" />
                <span>React.js</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCode className="text-2xl text-violet-500" />
                <span>Clean Code</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-2xl text-violet-500" />
                <span>Responsive Design</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-2xl text-violet-500" />
                <span>Modern UI</span>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-violet-500">
                10+
              </h2>

              <p className="mt-3 text-slate-400">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-violet-500">
                1+
              </h2>

              <p className="mt-3 text-slate-400">
                Years Learning
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-violet-500">
                100%
              </h2>

              <p className="mt-3 text-slate-400">
                Responsive
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-violet-500">
                React
              </h2>

              <p className="mt-3 text-slate-400">
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