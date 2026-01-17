import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY > lastScroll) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      lastScroll = window.scrollY;

      ["home", "projects", "contact"].forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const pos = element.getBoundingClientRect();
        if (pos.top <= 150 && pos.bottom >= 150) {
          setCurrentSection(section);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projectList = [
    {
      title: "Invesync – Investment Tracking Platform",
      tech: "MERN Stack • MongoDB • REST APIs",
      desc: "A web-based investment tracking platform that helps users monitor portfolios, analyze returns, and visualize asset distribution. Built scalable MongoDB schemas, REST APIs with Node.js & Express, and interactive dashboards using React."
    },
    {
      title: "GenCare – AI Healthcare Platform",
      tech: "Generative AI • Data Analysis",
      desc: "An AI-driven healthcare platform that provides preliminary medical insights using Generative AI. Focused on clean data flow, usability, and accessible design."
    },
    {
      title: "Online Food Booking System",
      tech: "PHP • MySQL",
      desc: "A full-stack food ordering system with user registration, menu browsing, and order placement. Optimized backend queries and handled multiple concurrent users smoothly."
    }
  ];

  const techSkills = [
    "SQL",
    "Excel",
    "Python",
    "React",
    "Node.js",
    "MongoDB",
    "MySQL",
    "JavaScript",
    "Java",
    "C/C++"
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-100 text-black"
        }`}
      >
        {/* background glow */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className={`absolute top-[-200px] left-[-200px] w-[500px] h-[500px] blur-[120px] ${
              darkMode ? "bg-purple-600/40" : "bg-purple-400/30"
            }`}
          />
          <div
            className={`absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] blur-[120px] ${
              darkMode ? "bg-pink-600/40" : "bg-pink-400/30"
            }`}
          />
        </div>

        {/* navbar */}
        <motion.nav
          initial={{ y: 0 }}
          animate={{ y: navVisible ? 0 : -80 }}
          transition={{ duration: 0.2 }}
          className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-white/10
          flex justify-between items-center px-10 transition-all
          ${isScrolled ? "py-2 bg-black/60" : "py-4 bg-black/40"}`}
        >
          <h1 className="text-2xl font-bold">
            SUMIT<span className="text-purple-500">DUBEY</span>
          </h1>

          <div className="flex gap-4 items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className={currentSection === "projects" ? "text-purple-400" : ""}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={currentSection === "contact" ? "text-purple-400" : ""}
            >
              Contact
            </button>

            <a
              href={`${process.env.PUBLIC_URL}/RESUME-SUMIT.pdf`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition"
            >
             View Resume
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </motion.nav>

        {/* hero */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold">
            Heyy, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Sumit Dubey
            </span>
          </h2>

          <p className="mt-8 text-xl opacity-80 max-w-3xl">
            Business Analyst • Full-Stack Developer • Data-Oriented Thinker
          </p>

          <p className="mt-4 opacity-70 max-w-2xl">
            B.Tech IT student (Honors in Data Science) passionate about
            building data-driven products and scalable web applications.
          </p>

          <div className="mt-12 flex gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:scale-110 transition"
            >
              View Work
            </button>

            <a
              href={`${process.env.PUBLIC_URL}/RESUME-SUMIT.pdf`}
              download
              className="px-8 py-4 rounded-full border border-current/30 hover:bg-black/10 transition font-bold hover:scale-110 transition"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-full border border-current/30 hover:bg-black/10 transition font-bold hover:scale-110 transition"
            >
              Contact
            </button>
          </div>
        </motion.section>

        {/* skills */}
        <section className="px-10 py-24">
          <h3 className="text-3xl font-bold text-center mb-16">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {techSkills.map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-current/10 hover:border-purple-400/50 transition text-center font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="px-10 py-28">
          <h3 className="text-3xl font-bold text-center mb-16">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {projectList.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl p-8 bg-white/5 border border-current/10 cursor-pointer"
                onClick={() => setSelectedProject(proj)}
              >
                <h4 className="text-2xl font-bold">{proj.title}</h4>
                <p className="opacity-60 mt-3">{proj.tech}</p>
                <p className="mt-6 text-purple-400 font-semibold">
                  View Details →
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="px-10 py-28 bg-black/10">
          <h3 className="text-3xl font-bold text-center mb-12">
            Get In Touch (Let's Connect)
          </h3>

          <div className="max-w-xl mx-auto grid gap-5">
            <input
              className="p-4 rounded-xl bg-white/5 border border-current/10"
              placeholder="sumitdubey2507@gmail.com"
            />
            <textarea
              className="p-4 rounded-xl bg-white/5 border border-current/10"
              placeholder="Your message"
            />
            <button
              onClick={() => alert("Message sent")}
              className="mt-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition"
            >
              Send Message
            </button>

            <a
              href="https://www.linkedin.com/in/sumit-dubey-07s"
              target="_blank"
              rel="noreferrer"
              className="text-center text-purple-400 font-semibold mt-4"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </section>

        <footer className="text-center py-8 opacity-60">
          © 2026 Sumit Dubey • Business Analyst & Full-Stack Developer
        </footer>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111] rounded-3xl p-8 max-w-md w-full border border-white/10"
              >
                <h3 className="text-2xl font-bold">
                  {selectedProject.title}
                </h3>
                <p className="text-purple-400 mt-2">
                  {selectedProject.tech}
                </p>
                <p className="opacity-70 mt-4">
                  {selectedProject.desc}
                </p>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 px-6 py-2 rounded-full bg-purple-500"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
