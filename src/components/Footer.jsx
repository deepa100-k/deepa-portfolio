import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Deepa
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Frontend React Developer passionate about creating
              modern, responsive and user-friendly web applications
              with React.js and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="text-slate-400 transition hover:text-violet-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-slate-400 transition hover:text-violet-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="text-slate-400 transition hover:text-violet-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="text-slate-400 transition hover:text-violet-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-slate-400 transition hover:text-violet-400">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Right */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/deepa100-k"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/deepa88026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:deepa100091@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition hover:border-violet-500 hover:bg-violet-500 hover:text-white"
              >
                <FaEnvelope size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Deepa. All Rights Reserved.
          </p>

          <p>
            Made with using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;