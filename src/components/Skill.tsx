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
    <section
      id="skills"
      className="relative overflow-hidden bg-[#24150d] px-6 py-32 text-[#f6d78b]"
    >
      <div
        className="
    pointer-events-none
    absolute
    left-0
    top-1/2
    h-[500px]
    w-[500px]
    -translate-y-1/2
    rounded-full
    bg-[#a66a32]/10
    blur-[140px]
  "
      />

      <div
        className="
    pointer-events-none
    absolute
    right-0
    top-20
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
        leading-tight
        tracking-wide
        text-[#ffe8ad]
        drop-shadow-[4px_4px_0_#3b2415]
        md:text-6xl
      "
          >
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
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
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="
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
            bg-[#d49a55]"
              />

              <span
                className="
            absolute
            right-0
            bottom-0
            h-2
            w-16
            bg-[#d49a55]
          "
              />

              <div
                className="
            border-2
            border-[#4f321f]
            bg-[#24150d]
            p-6
            md:p-8
          "
              >

                <div
                  className="
              mb-8
              flex
              items-center
              justify-between
              border-b-2
              border-[#4f321f]
              pb-6
            "
                >
                  <div className="flex items-center gap-4">

                    <div
                      className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border-2
                  border-[#8b5e34]
                  bg-[#332016]
                  text-[#d49a55]
                  shadow-[3px_3px_0_#1c1009]
                "
                    >
                      {category.icon}
                    </div>

                    <div>
                      <h3
                        className="
                    mt-1
                    font-mono
                    text-xl
                    font-black
                    uppercase
                    tracking-wider
                    text-[#f6d78b]
                    md:text-2xl
                  "
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <div
                    className="
                      border-2
                      border-[#5c3b24]
                      bg-[#332016]
                      px-3
                      py-2
                      font-mono
                      text-[9px]
                      font-black
                      uppercase
                      text-[#9b6b3d]
                    "
                  >
                    {category.skills.length} Skills
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.03,
                        y: -3,
                      }}
                      className="
                    group
                    grid grid-cols-2
                    justify-center items-center
                    relative
                    border-2
                    border-[#4f321f]
                    bg-[#332016]
                    p-4
                    shadow-[3px_3px_0_#1c1009]
                    transition-all
                    duration-150
                    hover:border-[#8b5e34]
                    hover:bg-[#3a2417]
                  "
                    >

                      <div
                        className="
                          mb-3
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          border
                          border-[#5c3b24]
                          bg-[#24150d]
                          text-[#9b6b3d]
                          transition-colors
                          group-hover:border-[#d49a55]
                          group-hover:text-[#d49a55]
                        "
                      >
                        {skill.icon}
                      </div>

                      <p
                        className="
                          font-mono
                          text-md
                          font-black
                          uppercase
                          text-[#cdb88b]
                          transition-colors
                          group-hover:text-[#ffe8ad]
                        "
                      >
                        {skill.name}
                      </p>

                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
