import Button from "../components/Button";
import profile from "../assets/images/profile.webp";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
// import resume from "../assets/resume/Deepa_Resume.pdf";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24"
        >
            <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

            <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 text-center lg:order-1 lg:text-left"
                    >

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
                            Frontend Developer
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                            Hi, I'm{" "}
                            <span className="text-violet-500">
                                Deepa
                            </span>
                        </h1>
                        <h2 className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl lg:text-3xl">
                            Frontend React Developer
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 lg:mx-0">
                            Passionate Frontend Developer specializing in React.js,
                            JavaScript and Tailwind CSS. I enjoy building clean,
                            responsive and user-friendly web applications with a
                            strong focus on performance and modern UI.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 lg:justify-start">
                            <span>📍</span>
                            <span>Delhi, India</span>
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

                           <a
  href="#projects"
  className="text-center inline-flex rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
>
  View Projects
</a>

                                
{/* <a
  href={resume}
  download="Deepa_Resume.pdf"
  className="..."
>
  Download Resume
</a> */}

                        </div>
                        <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">

                            <a
                                href="https://github.com/deepa100-k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/deepa88026"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:deepa100091@email.com"
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400"
                            >
                                <FaEnvelope />
                            </a>

                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">

                            <div>
                                <h3 className="text-2xl font-bold text-violet-400">
                                    10+
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-violet-400">
                                    React
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    Frontend
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-violet-400">
                                    100%
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
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

                            <div className="absolute inset-0 rounded-full bg-violet-600 blur-3xl opacity-30"></div>

                            <img
                                src={profile}
                                alt="Deepa"
                                className="relative h-72 w-72 rounded-full border-4 border-violet-500/70 object-cover shadow-[0_0_50px_rgba(139,92,246,0.35)] transition duration-500 hover:scale-105 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                            />

                        </div>

                        </motion.div>
                        </div>

                </div>
        </section>
    );
};

export default Hero;
