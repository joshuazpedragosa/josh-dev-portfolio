import { motion } from "framer-motion";
import { FiCode, FiBriefcase, FiLayers, FiArrowRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

const stats = [
  {
    icon: <FiBriefcase size={22} />,
    title: "3 Years",
    subtitle: "Building Web Applications",
  },
  {
    icon: <FiLayers size={22} />,
    title: "20+ Projects",
    subtitle: "Completed Projects",
  },
  {
    icon: <FiCode size={22} />,
    title: "10+ Technologies",
    subtitle: "Modern Tech Stack",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading command="cat about.md" title="About Me" />

        <div className="mt-12 grid items-start gap-6 md:mt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <Window
              title="about.md"
              className="window-hover"
              right={
                <span className="hidden font-mono text-[10px] text-card-muted sm:inline">
                  Markdown
                </span>
              }
              bodyClassName="p-5 sm:p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold leading-snug text-card-ink sm:text-3xl">
                <span className="font-mono text-card-accent"># </span>
                Creating digital experiences
                <span className="text-card-accent"> through code.</span>
              </h3>

              <div className="mt-6 space-y-5 text-[15px] leading-8">
                <p className="text-card-body">
                  I'm a passionate AI Software Engineer who enjoys
                  transforming ideas into high-performance web applications. I
                  specialize in building scalable systems using React,
                  TypeScript, Node.js, Express, and modern cloud technologies.
                </p>

                <p className="border-l-2 border-card-accent/60 pl-4 text-card-muted">
                  I enjoy solving complex problems, improving user experiences,
                  and continuously learning new technologies. My goal is to
                  build products that are functional, intuitive, and visually
                  engaging.
                </p>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ y: -4 }}
                whileTap={{ y: 0, scale: 0.97 }}
                className="btn-primary group mt-8 w-full sm:w-auto"
              >
                Start Conversation
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </Window>
          </motion.div>

          <div className="grid gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 8 }}
                className="window window-hover group flex items-center gap-4 p-4 sm:gap-5 sm:p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-card-line bg-card-2 text-card-accent transition-all duration-300 group-hover:rotate-6 group-hover:border-btn group-hover:bg-btn group-hover:text-white sm:h-14 sm:w-14">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-card-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-card-muted">
                    <span className="text-syn-green">{"// "}</span>
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
