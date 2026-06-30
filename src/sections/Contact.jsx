import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
     toast.error("Failed to send message!");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-20 md:py-28">
      <Reveal>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <SectionTitle
            subtitle="Get In Touch"
            title="Let's Work Together"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">

              <h3 className="text-2xl font-bold">
                Contact Information
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                I'm always open to discussing new projects,
                freelance opportunities or full-time roles.
              </p>



              <div className="mt-8 space-y-6">

                {/* Email */}
                <a
                  href="mailto:deepa100091@gmail.com"
                  className="flex items-center gap-4 transition hover:text-violet-400"
                >
                  <FaEnvelope className="text-xl text-violet-400" />
                  <span>deepa100091@gmail.com</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-xl text-violet-400" />
                  <span>Delhi, India</span>
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/deepa100-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition hover:text-violet-400"
                >
                  <FaGithub className="text-xl text-violet-400" />
                  <span>github.com/deepa100-k</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/deepa88026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition hover:text-violet-400"
                >
                  <FaLinkedin className="text-xl text-violet-400" />
                  <span>linkedin.com/in/deepa88026</span>
                </a>

              </div>



            </div>

            {/* Right */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8"
            >
              <div className="grid gap-5">
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-violet-500"
                />

                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-violet-500"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-violet-500"
                />

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-violet-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-violet-600 py-4 font-semibold transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

          </div>

        </div>
      </ Reveal>

    </section>
  );
};

export default Contact;