import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiLock,
  FiZap,
  FiUser,
  FiBriefcase,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import Window from "./Window";
import dcyImg from "./../../public/projects/Screenshot 2026-03-26 110703.png";
import CVFImg from "./../../public/projects/cvf.png";
import LogisticImg from "./../../public/projects/logistic.png";
import LeaveSystemImg from "./../../public/projects/leave_system.png";
import GameImg from "./../../public/projects/2dGame.png";
import LogisticPrototypeImg from "./../../public/projects/logistics-web-prototype.png";

type Category = "prototype" | "personal" | "internal";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: Category;
  status?: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Logistics Website Prototype",
    description:
      "A modern, responsive logistics website prototype designed to showcase transportation services, freight operations, and logistics management capabilities. The interface focuses on providing a professional digital presence for logistics businesses, featuring service information, shipment-related sections, and an intuitive user experience.",
    image: LogisticPrototypeImg,
    category: "prototype",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Vite"
    ],
    github: "",
    demo: "https://josh-dev-logistic-app-prototype.vercel.app/",
  },
  {
    title: "2D Game",
    description:
      "A web-based 2D RPG inspired by classic Pokémon GBA games, featuring tile-based exploration, interactive gameplay mechanics, and retro-style visuals.",
    image: GameImg,
    category: "personal",
    status: "In development",
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
  },
  {
    title: "AI CV Formatter",
    description:
      "An AI-powered platform that formats candidate resumes into company-branded templates and exports them as PDF or Word documents.",
    image: CVFImg,
    category: "internal",
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
  },
  {
    title: "Leave Management System",
    description:
      "A full-stack HR system for leave requests, approvals, notifications, and employee management.",
    image: LeaveSystemImg,
    category: "internal",
    technologies: [
      "React",
      "Express",
      "MySQL",
      "Tailwind",
      "JWT Authentication",
    ],
  },
  {
    title: "DCY Youth Connect",
    description:
      "A centralized church management system designed to track and manage church events, monitor members' activities, and record attendance in a single, organized platform.",
    image: dcyImg,
    category: "internal",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Inertia.js",
      "MySQL",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Logistic Freight & Accounting Management System",
    description:
      "A full-stack accounting management system that centralizes freight and shipping tracking, automates payment request processing, and supports multi-level managerial approvals and reporting.",
    image: LogisticImg,
    category: "internal",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Inertia.js",
      "MySQL",
      "Role-Based Access Control",
    ],
  },
];

const categories: {
  id: Category;
  label: string;
  command: string;
  blurb: string;
  icon: IconType;
}[] = [
  {
    id: "prototype",
    label: "Prototype Projects",
    command: "ls ./prototypes",
    blurb: "Working prototypes with live demos you can try.",
    icon: FiZap,
  },
  {
    id: "personal",
    label: "Personal Projects",
    command: "ls ./personal",
    blurb: "Side projects built to learn, explore, and have fun.",
    icon: FiUser,
  },
  {
    id: "internal",
    label: "Internal Business Systems",
    command: "ls ./internal",
    blurb: "Production systems built for organizations — source and access are private.",
    icon: FiBriefcase,
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

function TechTags({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = items.length - shown.length;
  return (
    <div className="flex flex-wrap gap-2">
      {shown.map((tech, i) => (
        <span key={tech} className={`tag ${tagColors[i % tagColors.length]}`}>
          {tech}
        </span>
      ))}
      {rest > 0 && (
        <span className="tag text-card-muted" title={items.slice(max).join(", ")}>
          +{rest}
        </span>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;
  return (
    <div className="mt-auto flex flex-col gap-3 border-t border-card-line pt-5 sm:flex-row">
      {project.github && (
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
      )}
      {project.demo && (
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          className="btn-primary flex-1 px-4 py-2.5 text-xs"
        >
          <FiExternalLink />
          Live Demo
        </motion.a>
      )}
    </div>
  );
}

function CardImage({
  project,
  badge,
  className = "",
}: {
  project: Project;
  badge: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-card-2 ${className}`}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover object-top opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">{badge}</div>
    </div>
  );
}

const badgeCls =
  "inline-flex items-center gap-1 rounded-md border border-card-line bg-card/80 px-2 py-0.5 font-mono text-[10px] backdrop-blur";

/* Prototype: wide, featured card — image beside content on large screens */
function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const hasDemo = Boolean(project.demo);
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Window
        title={`~/prototypes/${slug(project.title)}`}
        className="window-hover"
        bodyClassName="grid lg:grid-cols-5"
        right={
          <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] text-syn-green sm:inline-flex">
            <span className="relative flex h-2 w-2">
              {hasDemo && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-syn-green opacity-60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-syn-green" />
            </span>
            {hasDemo ? "live" : "demo soon"}
          </span>
        }
      >
        <CardImage
          project={project}
          className="aspect-video border-b border-card-line lg:col-span-3 lg:aspect-auto lg:min-h-80 lg:border-r lg:border-b-0"
          badge={
            <span className={`${badgeCls} text-card-accent`}>
              <FiZap /> prototype
            </span>
          }
        />
        <div className="flex flex-col p-5 sm:p-6 lg:col-span-2 lg:p-8">
          <h4 className="text-xl font-bold leading-snug text-card-ink transition-colors group-hover:text-card-accent sm:text-2xl">
            {project.title}
          </h4>
          <p className="mt-3 text-sm leading-7 text-card-muted">
            {project.description}
          </p>
          <div className="mt-5 mb-6">
            <TechTags items={project.technologies} />
          </div>
          {hasDemo || project.github ? (
            <ProjectLinks project={project} />
          ) : (
            <p className="mt-auto border-t border-card-line pt-5 font-mono text-xs text-card-muted">
              // live demo link coming soon
            </p>
          )}
        </div>
      </Window>
    </motion.div>
  );
}

/* Personal & internal: standard grid card */
function GridCard({
  project,
  index,
  internal,
}: {
  project: Project;
  index: number;
  internal?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <Window
        title={`~/${internal ? "internal" : "personal"}/${slug(project.title)}`}
        className="window-hover flex h-full flex-col"
        bodyClassName="flex flex-1 flex-col"
      >
        <CardImage
          project={project}
          className="aspect-video border-b border-card-line"
          badge={
            <>
              {internal && (
                <span className={`${badgeCls} text-card-muted`}>
                  <FiLock /> private
                </span>
              )}
              {project.status && (
                <span className={`${badgeCls} text-syn-fn`}>
                  {project.status}
                </span>
              )}
            </>
          }
        />
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h4 className="text-lg font-bold leading-snug text-card-ink transition-colors group-hover:text-card-accent">
            {project.title}
          </h4>
          <p className="mt-3 text-sm leading-7 text-card-muted">
            {project.description}
          </p>
          <div className="mt-5 mb-5">
            <TechTags items={project.technologies} max={internal ? 5 : undefined} />
          </div>
          <ProjectLinks project={project} />
        </div>
      </Window>
    </motion.div>
  );
}

function CategoryHeader({
  cat,
  index,
  count,
}: {
  cat: (typeof categories)[number];
  index: number;
  count: number;
}) {
  const Icon = cat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex flex-col gap-3 border-b border-card-line/40 pb-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="flex items-start gap-3 sm:items-center sm:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-card-line bg-card text-lg text-card-accent sm:h-12 sm:w-12 sm:text-xl">
          <Icon />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[11px] text-muted sm:text-xs">
            <span className="text-accent">0{index + 1}</span> $ {cat.command}
          </p>
          <h3 className="mt-1 text-xl font-bold text-heading sm:text-2xl md:text-3xl">
            {cat.label}
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-1">
        <p className="text-sm text-muted sm:max-w-xs sm:text-right">{cat.blurb}</p>
        <span className="shrink-0 font-mono text-xs text-accent">
          {count} {count === 1 ? "project" : "projects"}
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          command="git log --projects"
          title="Featured Projects"
          center
        />

        {/* Category quick-nav */}
        <nav className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href={`#projects-${cat.id}`}
                className="btn-card px-3 py-2 text-[11px] sm:px-4 sm:text-xs"
              >
                <Icon />
                {cat.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
          {categories.map((cat, ci) => {
            const items = projects.filter((p) => p.category === cat.id);
            if (!items.length) return null;

            return (
              <div key={cat.id} id={`projects-${cat.id}`} className="scroll-mt-24">
                <CategoryHeader cat={cat} index={ci} count={items.length} />

                {cat.id === "prototype" && (
                  <div className="space-y-8">
                    {items.map((p, i) => (
                      <FeaturedCard key={p.title} project={p} index={i} />
                    ))}
                  </div>
                )}

                {cat.id === "personal" && (
                  <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {items.map((p, i) => (
                      <GridCard key={p.title} project={p} index={i} />
                    ))}
                  </div>
                )}

                {cat.id === "internal" && (
                  <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {items.map((p, i) => (
                      <GridCard key={p.title} project={p} index={i} internal />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
