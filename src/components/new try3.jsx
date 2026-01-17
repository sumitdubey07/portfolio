import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

const [scrolled, setScrolled] = useState(false);
const [showNav, setShowNav] = useState(true);
const [active, setActive] = useState("home");

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);

    if (window.scrollY > lastScrollY) {
      setShowNav(false); // scrolling down → hide
    } else {
      setShowNav(true); // scrolling up → show
    }

    lastScrollY = window.scrollY;

    const sections = ["home", "projects", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Invesync – Investment Tracking Platform",
      tech: "MERN Stack • MongoDB • REST APIs",
      desc: "A web-based investment tracking platform enabling users to monitor portfolios, analyze returns, and visualize asset distribution. Designed scalable MongoDB schemas, built REST APIs using Node.js & Express, and developed interactive dashboards in React. Successfully handled 100+ simulated users with real-time updates."
    },
    {
      title: "GenCare – AI Healthcare Platform",
      tech: "Generative AI • Data Analysis • Web Platform",
      desc: "An AI-driven healthcare platform providing preliminary medical insights using Generative AI. Integrated healthcare datasets, structured data flow, and built a user-friendly interface for symptom-based interactions, improving accessibility and engagement."
    },
    {
      title: "Online Food Booking System",
      tech: "PHP • MySQL • Backend Development",
      desc: "A full-stack food ordering system with user registration, menu browsing, order placement, and optimized database management. Improved order processing efficiency and supported multiple concurrent users without errors."
    }
  ];

  const skills = [
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
    <div className={dark ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-500
        ${dark ? "bg-[#0a0a0a] text-white" : "bg-gray-100 text-black"}`}
      >
        {/* BACKGROUND GLOW */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className={`absolute top-[-200px] left-[-200px] w-[500px] h-[500px] blur-[120px]
            ${dark ? "bg-purple-600/40" : "bg-purple-400/30"}`} />
          <div className={`absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] blur-[120px]
            ${dark ? "bg-pink-600/40" : "bg-pink-400/30"}`} />
        </div>

        {/* NAVBAR */}
          <motion.nav
            initial={{ y: 0 }}
            animate={{ y: showNav ? 0 : -80}}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-white/10
            flex justify-between items-center px-10 transition-all
            ${scrolled ? "py-2 bg-black/60" : "py-4 bg-black/40"}`}
          >

          <h1 className="text-2xl font-bold">
            SUMIT<span className="text-purple-500">DUBEY</span>
          </h1>

          <div className="flex gap-4 items-center">
            <button
  onClick={() => scrollTo("projects")}
  className={active === "projects" ? "text-purple-400" : ""}
>
              Projects
            </button>
            <button
  onClick={() => scrollTo("contact")}
  className={active === "contact" ? "text-purple-400" : ""}
>
              Contact
            </button>
             {/* 🔥 VIEW RESUME BUTTON */}
            <a
  href="/RESUME-SUMIT.pdf"
  target="_blank"
  rel="noreferrer"
  className="hover:text-purple-400 transition"
>
  View Resume
</a>
            <button
              onClick={() => setDark(!dark)}
              className="ml-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </motion.nav>

        {/* HERO */}
        <motion.section id="home"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Heyy, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Sumit Dubey
            </span>
          </h2>

          <p className="mt-8 text-xl opacity-80 max-w-3xl">
            Business Analyst • Full-Stack Developer • Data-Driven Problem Solver
          </p>

          <p className="mt-4 opacity-70 max-w-2xl">
            Detail-oriented B.Tech IT student (Honors in Data Science) passionate about
            building data-driven products and scalable web applications.
          </p>

          <div className="mt-12 flex gap-6">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:scale-110 transition shadow-lg"
            >
              View Work
            </button>
            <a
              href="/RESUME-SUMIT.pdf"
              download
              className="px-8 py-4 rounded-full border border-current/30 hover:bg-black/10 transition font-semibold"
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-full border border-current/30 hover:bg-black/10 transition"
            >
              Contact
            </button>
          </div>
        </motion.section>

        {/* SKILLS */}
        <section className="px-10 py-24">
          <h3 className="text-3xl font-bold text-center mb-16">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-current/10 hover:border-purple-400/50 transition text-center font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-10 py-28">
          <h3 className="text-3xl font-bold text-center mb-16">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl p-8 bg-white/5 backdrop-blur border border-current/10 cursor-pointer"
                onClick={() => setActiveProject(p)}
              >
                <h4 className="text-2xl font-bold">{p.title}</h4>
                <p className="opacity-60 mt-3">{p.tech}</p>
                <p className="mt-6 text-purple-400 font-semibold">
                  View Details →
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-10 py-28 bg-black/10">
          <h3 className="text-3xl font-bold text-center mb-12">
            Let’s Work Together
          </h3>
          <div className="max-w-xl mx-auto grid gap-5">
            <input
              className="p-4 rounded-xl bg-white/5 border border-current/10 outline-none"
              placeholder="sumitdubey2507@gmail.com"
            />
            <textarea
              className="p-4 rounded-xl bg-white/5 border border-current/10 outline-none"
              placeholder="Your message"
            />
            <button
              onClick={() => alert("Message sent (demo)")}
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

        {/* FOOTER */}
        <footer className="text-center py-8 opacity-60">
          © 2026 Sumit Dubey • Business Analyst & Full-Stack Developer
        </footer>

        {/* PROJECT MODAL */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111] rounded-3xl p-8 max-w-md w-full border border-white/10"
              >
                <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                <p className="text-purple-400 mt-2">{activeProject.tech}</p>
                <p className="opacity-70 mt-4">{activeProject.desc}</p>

                <button
                  onClick={() => setActiveProject(null)}
                  className="mt-6 px-6 py-2 rounded-full bg-purple-500 hover:bg-purple-600 transition"
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
