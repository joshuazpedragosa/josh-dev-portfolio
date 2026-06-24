import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiLayers, FiArrowRight } from "react-icons/fi";

const stats = [
  {
    icon: <FiBriefcase size={24} />,
    title: "2+ Years",
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
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            About Me
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Creating digital experiences with
            <span className="text-cyan-400"> clean code</span>
            <br />
            and thoughtful design.
          </h2>

          {/* Main Card */}
          <div
            className="
              mt-14
              bg-slate-900/60
              backdrop-blur-xl
              border border-slate-800
              rounded-[32px]
              p-8 md:p-12
            "
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <p className="text-slate-300 text-lg leading-9">
                  I'm a passionate Full Stack Developer who enjoys transforming
                  ideas into high-performance web applications. I specialize in
                  building scalable systems using React, TypeScript, Node.js,
                  Express, and modern cloud technologies.
                </p>

                <p className="text-slate-400 leading-8 mt-8">
                  I love solving complex problems, improving user experiences,
                  and continuously learning new technologies. My goal is to
                  build products that are not only functional but also intuitive
                  and visually engaging.
                </p>

                <a
                  href="#contact"
                  className="
                        mt-10
                        inline-flex
                        items-center
                        gap-2
                        px-6
                        py-3
                        rounded-xl
                        bg-cyan-500
                        hover:bg-cyan-400
                        transition-all
                        hover:-translate-y-1
                    "
                >
                  Let's Connect
                  <FiArrowRight />
                </a>
              </div>

              {/* Right */}
              <div className="grid gap-5">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      scale: 1.03,
                      x: 10,
                    }}
                    className="
                      p-6
                      rounded-2xl
                      bg-slate-800/60
                      border border-slate-700
                      flex items-center gap-5
                      cursor-pointer
                    "
                  >
                    <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>

                      <p className="text-slate-400">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
