import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiLayers, FiArrowRight } from "react-icons/fi";

const stats = [
  {
    icon: <FiBriefcase size={24} />,
    title: "3 Years",
    subtitle: "Building Web Applications",
  },
  {
    icon: <FiLayers size={24} />,
    title: "20+ Projects",
    subtitle: "Completed Projects",
  },
  {
    icon: <FiCode size={24} />,
    title: "10+ Technologies",
    subtitle: "Modern Tech Stack",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#24150d] px-6 py-32 text-[#f6d78b]"
    >

      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#a66a32]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#6b4728]/10 blur-[100px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
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
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="mb-10">

            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
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
                  About Me
                </h2>

              </div>
            </div>
          </div>

          <div
            className="
        relative
        border-4
        border-[#6b4728]
        bg-[#2e1c13]
        p-2
        shadow-[8px_8px_0_#160c07]
      "
          >

            <span className="absolute left-0 top-0 h-2 w-20 bg-[#d49a55]" />
            <span className="absolute right-0 top-0 h-2 w-20 bg-[#d49a55]" />
            <span className="absolute bottom-0 left-0 h-2 w-20 bg-[#d49a55]" />
            <span className="absolute bottom-0 right-0 h-2 w-20 bg-[#d49a55]" />

            <div
              className="
          border-2
          border-[#4f321f]
          bg-[#24150d]
          p-6
          md:p-10
        "
            >
              <div className="grid items-start gap-12 lg:grid-cols-2">

                <div>

                  <h3
                    className="
                max-w-xl
                font-mono
                text-2xl
                font-black
                uppercase
                leading-relaxed
                text-[#f6d78b]
                md:text-3xl
              "
                  >
                    Creating digital experiences
                    <span className="text-[#d49a55]"> through code.</span>
                  </h3>

                  <div className="mt-8 space-y-6">
                    <p
                      className="
                  font-mono
                  text-sm
                  leading-8
                  text-[#cdb88b]
                "
                    >
                      I'm a passionate Full Stack Developer who enjoys
                      transforming ideas into high-performance web applications.
                      I specialize in building scalable systems using React,
                      TypeScript, Node.js, Express, and modern cloud
                      technologies.
                    </p>

                    <p
                      className="
                  font-mono
                  text-sm
                  leading-8
                  text-[#9f8665]
                "
                    >
                      I enjoy solving complex problems, improving user
                      experiences, and continuously learning new technologies.
                      My goal is to build products that are functional,
                      intuitive, and visually engaging.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  border-2
                  border-[#d49a55]
                  bg-[#8b5e34]
                  px-6
                  py-3
                  font-mono
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#fff1bd]
                  shadow-[4px_4px_0_#1c1009]
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#a66a32]
                "
                  >
                    Start Conversation
                    <FiArrowRight
                      className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                    />
                  </a>
                </div>

                <div>

                  <div className="grid gap-4">
                    {stats.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: 60,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15,
                        }}
                        whileHover={{
                          x: 8,
                        }}
                        className="
                      group
                      relative
                      border-2
                      border-[#4f321f]
                      bg-[#332016]
                      p-5
                      shadow-[4px_4px_0_#1c1009]
                      transition-all
                      hover:border-[#8b5e34]
                    "
                      >

                        <div
                          className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1
                      bg-[#6b4728]
                      transition-colors
                      group-hover:bg-[#d49a55]
                    "
                        />

                        <div className="flex items-center gap-5">
                          <div
                            className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        border-2
                        border-[#6b4728]
                        bg-[#24150d]
                        text-[#d49a55]
                        transition-all
                        group-hover:border-[#d49a55]
                      "
                          >
                            {item.icon}
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-3">
                              <h3
                                className="
                            font-mono
                            text-xl
                            font-black
                            uppercase
                            text-[#f6d78b]
                          "
                              >
                                {item.title}
                              </h3>
                            </div>

                            <p
                              className="
                          mt-1
                          font-mono
                          text-xs
                          text-[#9f8665]
                        "
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
