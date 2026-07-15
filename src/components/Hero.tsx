import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiFacebook,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import myImg from "./../assets/jzp.png";

const techStack = ["React", "TypeScript", "Node.js", "Express", "MySQL"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24">
      {/* Background Glow */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-slate-400 text-lg">Hello, I'm</p>

          <h1 className="mt-3 text-6xl md:text-7xl lg:text-8xl font-black leading-none">
            Joshua
          </h1>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold">
            <span className="text-slate-300">Full Stack</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-2xl">
            I build modern, scalable web applications with exceptional user
            experiences using React, TypeScript, Node.js, and cloud
            technologies.
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-slate-900/70
                  border
                  border-slate-700
                  text-slate-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-2xl
                bg-cyan-500
                hover:bg-cyan-400
                transition-all
                hover:-translate-y-1
              "
            >
              View Projects
              <FiArrowRight />
            </a>

            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1BsQW5XvxEnNWdL8lVViji1feVvi1dsg_/view?usp=sharing",
                  "_blank",
                )
              }
              className="
                inline-flex
                items-center
                gap-2
                px-8
                py-4
                rounded-2xl
                border
                border-slate-700
                hover:border-cyan-400
                hover:text-cyan-400
                transition-all
                hover:-translate-y-1
              "
            >
              <FiDownload />
              Download CV
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-12">
            <a
              href="https://github.com/joshuazpedragosa"
              target="_blank"
              rel="noreferrer"
              className="
                p-4
                rounded-2xl
                bg-slate-900
                border
                border-slate-800
                hover:border-cyan-400
                hover:text-cyan-400
                transition-all
                hover:-translate-y-1
              "
            >
              <FiGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/joshua-pedragosa-83601b339/"
              target="_blank"
              rel="noreferrer"
              className="
                p-4
                rounded-2xl
                bg-slate-900
                border
                border-slate-800
                hover:border-cyan-400
                hover:text-cyan-400
                transition-all
                hover:-translate-y-1
              "
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href="https://www.facebook.com/joshua.pedragosa.71"
              className="
                p-4
                rounded-2xl
                bg-slate-900
                border
                border-slate-800
                hover:border-cyan-400
                hover:text-cyan-400
                transition-all
                hover:-translate-y-1
              "
            >
              <FiFacebook size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[120px]" />

            <div
              className="
                relative
                p-3
                rounded-full
                bg-slate-900/70
                backdrop-blur-xl
                border
                border-slate-700
              "
            >
              <img
                src={myImg}
                alt="Joshua"
                className="
                  w-72
                  h-72
                  md:w-96
                  md:h-96
                  object-cover
                  rounded-full
                "
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-4
                -left-6
                px-5
                py-3
                rounded-2xl
                bg-slate-900/90
                backdrop-blur-xl
                border
                border-slate-700
              "
            >
              <p className="text-sm text-slate-400">Software Engineer</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          hidden md:block
        "
      >
        <div className="flex justify-center">
          <div className="w-5 h-5 border-r-[3px] border-b-[3px] border-cyan-400 rotate-45 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
