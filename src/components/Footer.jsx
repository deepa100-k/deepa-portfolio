import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* CTA */}
        <div className="text-center">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
            Thanks for Visiting 
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
            I'm currently available for freelance projects and full-time
            Frontend React Developer opportunities.
            Let's create something modern together.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500"
          >
            Contact Me
          </a>

        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-800"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">

          <a
            href="https://github.com/deepa100-k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/deepa88026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:deepa100091@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            <FaEnvelope size={20} />
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Designed & Developed with React.js + Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;