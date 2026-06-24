import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import dcyImg from "./../../public/projects/Screenshot 2026-03-26 110703.png";
import CVFImg from "./../../public/projects/cvf.png";
import LogisticImg from "./../../public/projects/logistic.png";
import LeaveSystemImg from "./../../public/projects/leave_system.png";
import GameImg from "./../../public/projects/2dGame.png";

const projects = [
  {
    title: "AI CV Formatter",
    description:
      "An AI-powered platform that formats candidate resumes into company-branded templates and exports them as PDF or Word documents.",
    image: CVFImg,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "OpenAI",
      "MySQL",
      "JWT Authentication",
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
  {
    title: "Leave Management System",
    description:
      "A full-stack HR system for leave requests, approvals, notifications, and employee management.",
    image: LeaveSystemImg,
    technologies: [
      "React",
      "Express",
      "MySQL",
      "Tailwind",
      "JWT Authentication",
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
  {
    title: "DCY Youth Connect",
    description:
      "A centralized church management system designed to track and manage church events, monitor members' activities, and record attendance in a single, organized platform.",
    image: dcyImg,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Inertia.js",
      "MySQL",
      "Role-Based Access Control",
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
    {
    title: "Logistic Freight & Accounting Management System",
    description:
      "Developed a full-stack accounting management system that centralizes freight and shipping tracking, automates payment request processing, and supports multi-level managerial approvals and reporting.",
    image: LogisticImg,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Inertia.js",
      "MySQL",
      "Role-Based Access Control",
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
      {
    title: "2D game (Personal Project) - Under development",
    description:
      "Developed a web-based 2D RPG inspired by classic Pokémon GBA games, featuring tile-based exploration, interactive gameplay mechanics, and retro-style visuals.",
    image: GameImg,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Inertia.js",
      "MySQL",
      "Tiled - Designing map",
      "PiskelApp - Designing Tiles"
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Things I've
            <span className="text-cyan-400"> built</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            Here are some projects that showcase my experience in building
            full-stack applications, AI-powered systems, and modern web
            experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
              }}
              className="
            group
            overflow-hidden
            rounded-[28px]
            border
            border-slate-800
            bg-slate-900/60
            backdrop-blur-xl
          "
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-slate-800
                      border
                      border-slate-700
                      text-sm
                      text-slate-300
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demo_available && (
                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-slate-800
                  hover:bg-slate-700
                  transition-all
                "
                    >
                      <FiGithub />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-400
                  transition-all
                "
                    >
                      <FiExternalLink />
                      Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
