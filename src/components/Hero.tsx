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
    <section className="relative min-h-screen overflow-hidden bg-[#24150d] px-6 pt-28 text-[#f6d78b]">
      <div className="pointer-events-none absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-[#a66a32]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-[#6b4728]/20 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
        linear-gradient(#d49a55 1px, transparent 1px),
        linear-gradient(90deg, #d49a55 1px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-[#d49a55]/5 blur-xl" />

            <h1
              className="
          relative
          font-mono
          text-6xl
          font-black
          uppercase
          leading-none
          tracking-[0.08em]
          text-[#ffe8ad]
          drop-shadow-[4px_4px_0_#3b2415]
          md:text-7xl
          lg:text-8xl
        "
            >
              Joshua
            </h1>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span
              className="
          border-2
          border-[#8b5e34]
          bg-[#3a2417]
          px-3
          py-1
          font-mono
          text-[10px]
          font-black
          uppercase
          tracking-[0.2em]
          text-[#d49a55]
          shadow-[3px_3px_0_#1c1009]
        "
            >
              3 Years
            </span>

            <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#c7a66a]">
              Full Stack Developer
            </span>
          </div>

          <div
            className="
        relative
        mt-8
        max-w-2xl
        border-2
        border-[#6b4728]
        bg-[#332016]/90
        p-6
        shadow-[6px_6px_0_#1c1009]
      "
          >

            <span className="absolute left-0 top-0 h-2 w-8 bg-[#d49a55]" />
            <span className="absolute right-0 bottom-0 h-2 w-8 bg-[#d49a55]" />

            <p
              className="
          font-mono
          text-sm
          leading-7
          text-[#cdb88b]
          md:text-base
        "
            >
              I build modern, scalable web applications and turn complex
              business workflows into reliable digital systems using React,
              TypeScript, Node.js, Laravel, and cloud technologies.
            </p>
          </div>

          <div className="mt-8">
            <p
              className="
          mb-3
          font-mono
          text-[10px]
          font-black
          uppercase
          tracking-[0.25em]
          text-[#8b5e34]
        "
            >
              Equipped Skills
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                border-2
                border-[#5c3b24]
                bg-[#3a2417]
                px-3
                py-2
                font-mono
                text-xs
                font-bold
                text-[#d8bd82]
                shadow-[2px_2px_0_#1c1009]
                transition-all
                duration-150
                hover:-translate-y-0.5
                hover:border-[#d49a55]
                hover:bg-[#4b2e1b]
                hover:text-[#ffe8ad]
              "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
            group
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
            active:translate-y-0
            active:shadow-[1px_1px_0_#1c1009]
          "
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
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
            gap-3
            border-2
            border-[#6b4728]
            bg-[#2e1c13]
            px-6
            py-3
            font-mono
            text-xs
            font-black
            uppercase
            tracking-[0.15em]
            text-[#cdb88b]
            shadow-[4px_4px_0_#1c1009]
            transition-all
            hover:-translate-y-1
            hover:border-[#d49a55]
            hover:text-[#ffe8ad]
          "
            >
              <FiDownload />
              Download CV
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              {
                icon: <FiGithub size={18} />,
                href: "https://github.com/joshuazpedragosa",
              },
              {
                icon: <FiLinkedin size={18} />,
                href: "https://www.linkedin.com/in/joshua-pedragosa-83601b339/",
              },
              {
                icon: <FiFacebook size={18} />,
                href: "https://www.facebook.com/joshua.pedragosa.71",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border-2
              border-[#5c3b24]
              bg-[#2e1c13]
              text-[#9b6b3d]
              shadow-[3px_3px_0_#1c1009]
              transition-all
              hover:-translate-y-1
              hover:border-[#d49a55]
              hover:bg-[#3a2417]
              hover:text-[#ffe8ad]
            "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

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
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div
              className="
          absolute
          inset-0
          rounded-full
          bg-[#d49a55]/10
          blur-[100px]
        "
            />

            <div
              className="
          relative
          border-4
          border-[#6b4728]
          bg-[#2e1c13]
          p-3
          shadow-[10px_10px_0_#160c07]
        "
            >
              <div
                className="
            relative
            border-2
            border-[#a66a32]
            bg-[#1f120c]
            p-2
          "
              >
                <img
                  src={myImg}
                  alt="Joshua"
                  className="
                h-72
                w-72
                object-cover
                grayscale-[20%]
                md:h-96
                md:w-96
              "
                />

                <div
                  className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#24150d]/50
              via-transparent
              to-[#d49a55]/5
            "
                />
              </div>

              <span className="absolute left-0 top-0 h-5 w-2 bg-[#d49a55]" />
              <span className="absolute right-0 top-0 h-5 w-2 bg-[#d49a55]" />
              <span className="absolute bottom-0 left-0 h-5 w-2 bg-[#d49a55]" />
              <span className="absolute bottom-0 right-0 h-5 w-2 bg-[#d49a55]" />
            </div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
            absolute
            -bottom-7
            left-1/2
            w-[85%]
            -translate-x-1/2
            border-2
            border-[#8b5e34]
            bg-[#332016]
            px-5
            py-3
            text-center
            shadow-[5px_5px_0_#1c1009]
          "
            >
              <p
                className="
            mt-1
            font-mono
            text-sm
            font-black
            uppercase
            tracking-[0.12em]
            text-[#ffe8ad]
          "
              >
                Web Developer
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
      absolute
      bottom-8
      left-1/2
      hidden
      -translate-x-1/2
      md:block
    "
      ></motion.div>
    </section>
  );
}
