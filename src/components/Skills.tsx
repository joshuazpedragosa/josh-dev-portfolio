import { motion } from "framer-motion";
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

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium">
            Skills & Technologies
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            Building modern applications with
            <span className="text-cyan-400"> powerful tools</span>
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
            I enjoy working across the full stack, from designing responsive
            interfaces to building scalable backend systems and deploying
            applications to the cloud.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                  rounded-[28px]
                  border
                  border-slate-800
                  bg-slate-900/60
                  backdrop-blur-xl
                  p-8
                "
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                          group
                          flex
                          flex-col
                          items-center
                          justify-center
                          gap-3
                          rounded-2xl
                          border
                          border-slate-800
                          bg-slate-950/50
                          p-6
                          transition-all
                          duration-300
                          hover:border-cyan-400/50
                        "
                  >
                    <div className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {skill.icon}
                    </div>

                    <span className="text-slate-300 font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
