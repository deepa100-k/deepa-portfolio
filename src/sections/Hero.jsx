import profile from "../assets/images/profile.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20 sm:pt-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400 sm:text-sm">
              Frontend Developer
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              I'm <span className="text-violet-500">Deepa</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-400 lg:mx-0 lg:mt-6 lg:leading-8">
Passionate Frontend Developer dedicated to building modern, responsive, and user-friendly web applications with clean code, intuitive user experiences, and a strong focus on performance.            </p>

            {/* Location */}
            <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 lg:mt-6 lg:justify-start">
              <span>📍</span>
              <span>New Delhi, India</span>
            </div>

            {/* Button */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-10 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500 sm:w-auto sm:text-base"
              >
                View Projects
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center justify-center gap-4 lg:mt-10 lg:justify-start lg:gap-6">
              <a
                href="https://github.com/deepa100-k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400 sm:h-12 sm:w-12 sm:text-xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/deepa88026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400 sm:h-12 sm:w-12 sm:text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:deepa100091@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400 sm:h-12 sm:w-12 sm:text-xl"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-800 pt-6 lg:mt-12 lg:gap-4 lg:pt-8">
              <div>
                <h3 className="text-xl font-bold text-violet-400 sm:text-2xl">
                  5+
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-violet-400 sm:text-2xl">
                  React
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Frontend
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-violet-400 sm:text-2xl">
                  100%
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Responsive
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-violet-600 opacity-30 blur-3xl"></div>

              <img
                src={profile}
                alt="Deepa"
                className="relative h-60 w-60 rounded-full border-4 border-violet-500/70 object-cover shadow-[0_0_50px_rgba(139,92,246,0.35)] transition duration-500 hover:scale-105 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;