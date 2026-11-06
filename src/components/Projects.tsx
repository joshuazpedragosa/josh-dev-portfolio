import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Window from "./Window";
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
      "PiskelApp - Designing Tiles",
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
];

const tagColors = [
  "text-syn-string",
  "text-syn-fn",
  "text-syn-green",
  "text-syn-var",
  "text-syn-keyword",
];

const slug = (title: string) =>
  title
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
         
          command="git log --projects"
          title="Featured Projects"
          center
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80, rotate: index % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Window
                title={`~/projects/${slug(project.title)}`}
                className="window-hover flex h-full flex-col"
                bodyClassName="flex flex-1 flex-col"
              >
                <div className="relative h-48 overflow-hidden border-b border-card-line bg-card-2 sm:h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-85 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-md border border-card-line bg-card/80 px-2 py-0.5 font-mono text-[10px] text-card-accent backdrop-blur">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold leading-snug text-card-ink transition-colors group-hover:text-card-accent sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-card-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={tech}
                        className={`tag ${tagColors[i % tagColors.length]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.demo_available && (
                    <div className="mt-auto flex gap-3 border-t border-card-line pt-5">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn-card flex-1"
                      >
                        <FiGithub />
                        Source
                      </motion.a>

                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn-primary flex-1 px-4 py-2.5 text-xs"
                      >
                        <FiExternalLink />
                        Visit
                      </motion.a>
                    </div>
                  )}
                </div>
              </Window>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
