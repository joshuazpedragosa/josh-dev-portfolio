import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Window from "./Window";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiTerminal,
  FiLock,
  FiCpu,
  FiMessageSquare,
  FiEye,
} from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiLaravel,
  SiDjango,
  SiLinux,
  SiUbuntu,
  SiPm2,
  SiGithubactions,
  SiOpenai,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiCode size={22} />,
    skills: [
      {
        name: "React",
        icon: <SiReact size={28} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={28} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={28} />,
      },
    ],
  },
  {
    title: "Backend",
    icon: <FiServer size={22} />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={28} />,
      },
      {
        name: "Express",
        icon: <SiExpress size={28} />,
      },
      {
        name: "Laravel",
        icon: <SiLaravel size={28} />,
      },
      {
        name: "DJango",
        icon: <SiDjango size={28} />,
      },
    ],
  },
  {
    title: "Database",
    icon: <FiDatabase size={22} />,
    skills: [
      {
        name: "MySQL",
        icon: <SiMysql size={28} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={28} />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={28} />,
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <FiTool size={22} />,
    skills: [
      {
        name: "Ubuntu",
        icon: <SiUbuntu size={28} />,
      },
      {
        name: "PM2",
        icon: <SiPm2 size={28} />,
      },
      {
        name: "GitHub Action",
        icon: <SiGithubactions size={28} />,
      },
      {
        name: "Shell Scripting",
        icon: <FiTerminal size={28} />,
      },
      {
        name: "SSL/TLS",
        icon: <FiLock size={28} />,
      },
      {
        name: "Linux Administration",
        icon: <SiLinux size={28} />,
      },
    ],
  },
  {
    title: "AI & Automation",
    icon: <FiCpu size={22} />,
    skills: [
      {
        name: "OpenAI API",
        icon: <SiOpenai size={28} />,
      },
      {
        name: "Prompt Engineering",
        icon: <FiMessageSquare size={28} />,
      },
      {
        name: "AI Integration",
        icon: <FiCpu size={28} />,
      },
      {
        name: "OCR",
        icon: <FiEye size={28} />,
      },
    ],
  },
];

const fileNames: Record<string, string> = {
  Frontend: "frontend",
  Backend: "backend",
  Database: "database",
  "DevOps & Cloud": "devops",
  "AI & Automation": "ai",
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
         
          command="ls ./skills"
          title="Skills & Technologies"
          center
        />

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const file = fileNames[category.title] ?? "skills";
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (categoryIndex % 2) * 0.15 }}
                whileHover={{ y: -6 }}
                className={
                  // Let the last card span both columns when the count is odd
                  categoryIndex === skillCategories.length - 1 &&
                  skillCategories.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }
              >
                <Window
                  title={`${file}.config.ts`}
                  className="window-hover h-full"
                  right={
                    <span className="rounded border border-card-line px-2 py-0.5 font-mono text-[10px] text-card-muted">
                      {category.skills.length} items
                    </span>
                  }
                  bodyClassName="p-4 sm:p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-card-line bg-card-2 text-card-accent">
                      {category.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-card-ink sm:text-2xl">
                        {category.title}
                      </h3>
                      <p className="truncate font-mono text-[11px] sm:text-xs">
                        <span className="text-syn-keyword">export const</span>{" "}
                        <span className="text-syn-var">{file}</span>{" "}
                        <span className="text-card-muted">= [</span>
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                    }}
                    className={`grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 ${
                      categoryIndex === skillCategories.length - 1 &&
                      skillCategories.length % 2 === 1
                        ? "lg:grid-cols-4"
                        : ""
                    }`}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          show: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        className="group flex items-center gap-3 rounded-lg border border-card-line bg-card-2 p-3 transition-colors duration-150 hover:border-card-accent/70 hover:bg-card-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-card text-card-muted transition-all duration-300 group-hover:-rotate-6 group-hover:text-card-accent [&_svg]:h-6 [&_svg]:w-6">
                          {skill.icon}
                        </div>
                        <p className="font-mono text-xs text-card-body transition-colors group-hover:text-card-ink sm:text-sm">
                          <span className="text-syn-string">"{skill.name}"</span>
                          <span className="text-card-muted">,</span>
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <p className="mt-4 font-mono text-xs text-card-muted">];</p>
                </Window>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
