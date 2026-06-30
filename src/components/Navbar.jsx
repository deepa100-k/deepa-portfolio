import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import resume from "../assets/resume/Deepa_Resume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar Shrink Effect
  useEffect(() => {
    const handleNavbar = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleNavbar);

    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-slate-800 bg-slate-950/95 py-3 shadow-lg backdrop-blur-xl"
          : "bg-slate-950/70 py-5 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white transition-transform duration-300 hover:scale-110"
        >
          <span className="text-violet-500">&lt;D</span>
          <span>/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative font-medium transition duration-300 ${activeSection === link.href.substring(1)
                  ? "text-violet-500"
                  : "text-slate-300 hover:text-violet-500"
                }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-violet-500 transition-all duration-300 ${activeSection === link.href.substring(1)
                    ? "w-full"
                    : "w-0"
                  }`}
              />
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href={resume}
          download="Deepa_Resume.pdf"
          className="hidden rounded-xl bg-violet-600 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-violet-500 md:inline-block"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 border-t border-slate-800" : "max-h-0"
          }`}
      >
        <nav className="bg-slate-950 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 transition ${activeSection === link.href.substring(1)
                  ? "text-violet-500"
                  : "text-slate-300 hover:text-violet-500"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;