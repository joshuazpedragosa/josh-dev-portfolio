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
      "PiskelApp - Designing Tiles",
    ],
    github: "",
    demo: "",
    demo_available: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#24150d] px-6 py-32 text-[#f6d78b]"
    >
      <div
        className="
      pointer-events-none
      absolute
      right-0
      top-1/2
      h-[500px]
      w-[500px]
      -translate-y-1/2
      rounded-full
      bg-[#a66a32]/10
      blur-[150px]
    "
      />

      <div
        className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      h-[300px]
      w-[300px]
      rounded-full
      bg-[#6b4728]/10
      blur-[100px]
    "
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
        linear-gradient(#d49a55 1px, transparent 1px),
        linear-gradient(90deg, #d49a55 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >

          <h2
            className="
          font-mono
          text-4xl
          font-black
          uppercase
          tracking-wide
          text-[#ffe8ad]
          drop-shadow-[4px_4px_0_#3b2415]
          md:text-6xl
        "
          >
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
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
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
            group
            relative
            border-4
            border-[#6b4728]
            bg-[#2e1c13]
            p-2
            shadow-[8px_8px_0_#160c07]
          "
            >
              <span
                className="
              absolute
              left-0
              top-0
              h-2
              w-16
              bg-[#d49a55]
            "
              />

              <span
                className="
              absolute
              right-0
              top-0
              h-2
              w-16
              bg-[#d49a55]
            "
              />

              <span
                className="
              absolute
              bottom-0
              left-0
              h-2
              w-16
              bg-[#d49a55]
            "
              />

              <span
                className="
              absolute
              bottom-0
              right-0
              h-2
              w-16
              bg-[#d49a55]
            "
              />

              <div
                className="
              overflow-hidden
              border-2
              border-[#4f321f]
              bg-[#24150d]
            "
              >
                {/* =========================
                QUEST IMAGE
            ========================== */}

                <div
                  className="
                relative
                h-56
                overflow-hidden
                border-b-2
                border-[#4f321f]
                bg-[#160c07]
              "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                  h-full
                  w-full
                  object-cover
                  opacity-80
                  grayscale-[15%]
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:opacity-100
                "
                  />

                  <div
                    className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#24150d]
                  via-[#24150d]/20
                  to-transparent
                "
                  />
                </div>

                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="
                      mt-1
                      font-mono
                      text-xl
                      font-black
                      uppercase
                      leading-tight
                      text-[#f6d78b]
                      transition-colors
                      group-hover:text-[#ffe8ad]
                    "
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className="
                  mt-5
                  border-l-2
                  border-[#6b4728]
                  pl-4
                "
                  >
                    <p
                      className="
                    font-mono
                    text-xs
                    leading-7
                    text-[#9f8665]
                  "
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                        border
                        border-[#5c3b24]
                        bg-[#332016]
                        px-2.5
                        py-1.5
                        font-mono
                        text-[9px]
                        font-bold
                        uppercase
                        text-[#cdb88b]
                        transition-colors
                        group-hover:border-[#8b5e34]
                        group-hover:text-[#d49a55]
                      "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.demo_available && (
                    <div
                      className="
                    mt-7
                    flex
                    gap-3
                    border-t-2
                    border-[#4f321f]
                    pt-5
                  "
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                      group/button
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      border-2
                      border-[#5c3b24]
                      bg-[#332016]
                      px-4
                      py-3
                      font-mono
                      text-[9px]
                      font-black
                      uppercase
                      tracking-widest
                      text-[#cdb88b]
                      shadow-[3px_3px_0_#1c1009]
                      transition-all
                      hover:-translate-y-1
                      hover:border-[#d49a55]
                      hover:text-[#ffe8ad]
                    "
                      >
                        <FiGithub />
                        Source
                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      border-2
                      border-[#d49a55]
                      bg-[#8b5e34]
                      px-4
                      py-3
                      font-mono
                      text-[9px]
                      font-black
                      uppercase
                      tracking-widest
                      text-[#fff1bd]
                      shadow-[3px_3px_0_#1c1009]
                      transition-all
                      hover:-translate-y-1
                      hover:bg-[#a66a32]
                    "
                      >
                        <FiExternalLink />
                        Visit
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
