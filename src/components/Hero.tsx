import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiDownload,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

import myImg from "./../assets/jzp.png";
import Window from "./Window";

const techStack = ["React", "TypeScript", "Node.js", "Express", "MySQL"];

const roles = [
  "AI Software Engineer",
  "Full Stack Developer",
  "API Builder",
  "Problem Solver",
];

const socials = [
  {
    label: "TikTok",
    icon: <SiTiktok size={18} />,
    href: "https://www.tiktok.com/@joshd3v2?_r=1",
  },
  {
    label: "LinkedIn",
    icon: <FiLinkedin size={18} />,
    href: "https://www.linkedin.com/in/joshua-pedragosa-83601b339/",
  },
  {
    label: "Facebook",
    icon: <FiFacebook size={18} />,
    href: "https://www.facebook.com/profile.php?id=61596349828234",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Types out each role, pauses, deletes it, then moves to the next
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 40 : 85;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const t = window.setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const role = useTypewriter(roles);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center px-4 pb-24 pt-28 sm:px-6 lg:pt-32"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY, opacity: fade }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-muted sm:text-base"
          >
            <span className="text-accent">&gt;</span> Hello, World! I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 text-6xl font-bold tracking-tight text-heading sm:text-7xl xl:text-8xl"
          >
            Joshua<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 min-h-[1.75em] font-mono text-lg text-body sm:text-2xl"
          >
            <span className="sr-only">AI Software Engineer</span>
            <span aria-hidden>
              <span className="text-accent">{"<"}</span>
              {role}
              <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.18em] animate-blink bg-accent" />
              <span className="text-accent">{" />"}</span>
            </span>
          </motion.p>

          <motion.div variants={item} className="mx-auto mt-8 max-w-2xl text-left lg:mx-0">
            <Window title="zsh — joshua@dev: ~" bodyClassName="p-5 font-mono text-[13px] leading-7 sm:p-6 sm:text-sm">
              <p className="text-card-ink">
                <span className="text-syn-green">➜</span>{" "}
                <span className="text-syn-var">~</span> whoami
              </p>
              <p className="mt-1 text-card-body">
                I build modern, scalable web applications and turn complex
                business workflows into reliable digital systems using React,
                TypeScript, Node.js, Laravel, and cloud technologies.
              </p>
              <p className="mt-3 text-card-ink">
                <span className="text-syn-green">➜</span>{" "}
                <span className="text-syn-var">~</span> cat stack.json
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.08, type: "spring", stiffness: 300 }}
                    whileHover={{ y: -3 }}
                    className="tag text-syn-string transition-colors hover:border-card-accent"
                  >
                    "{tech}"
                  </motion.span>
                ))}
              </div>
              <p className="mt-3 text-card-ink">
                <span className="text-syn-green">➜</span>{" "}
                <span className="text-syn-var">~</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-card-accent" />
              </p>
            </Window>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4 }}
              whileTap={{ y: 0, scale: 0.97 }}
              className="btn-primary group"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ y: -4 }}
              whileTap={{ y: 0, scale: 0.97 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1BsQW5XvxEnNWdL8lVViji1feVvi1dsg_/view?usp=sharing",
                  "_blank",
                )
              }
              className="btn-secondary group"
            >
              <FiDownload className="transition-transform group-hover:translate-y-0.5" />
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
                className="btn-icon"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: imageY }}
          className="order-1 flex justify-center lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-full bg-glow/30 blur-[90px]" />

            <motion.div
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Window
                title="profile.png"
                className="window-hover"
                right={
                  <span className="font-mono text-[10px] text-card-muted">
                    1:1
                  </span>
                }
                bodyClassName="relative p-2"
              >
                <img
                  src={myImg}
                  alt="Joshua"
                  className="h-56 w-56 rounded-md object-cover sm:h-72 sm:w-72 md:h-80 md:w-80 xl:h-96 xl:w-96"
                />
                <div className="pointer-events-none absolute inset-2 rounded-md bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </Window>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-2 rounded-lg border border-card-line bg-card px-4 py-2.5 font-mono text-xs text-card-ink shadow-(--card-shadow) sm:text-sm"
            >
              3 Years · AI Software Engineer
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        style={{ opacity: fade }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-accent md:block"
      >
        <FiChevronDown size={28} />
      </motion.a>
    </section>
  );
}
