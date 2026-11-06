import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CodeBackground from "./components/CodeBackground";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

const socials = [
  {
    label: "GitHub",
    icon: <FiGithub size={16} />,
    href: "https://github.com/joshuazpedragosa",
  },
  {
    label: "LinkedIn",
    icon: <FiLinkedin size={16} />,
    href: "https://www.linkedin.com/in/joshua-pedragosa-83601b339/",
  },
  {
    label: "Facebook",
    icon: <FiFacebook size={16} />,
    href: "https://www.facebook.com/joshua.pedragosa.71",
  },
];

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden text-ink">
        <CodeBackground />
        <ScrollProgress />
        <Navbar />
        <div className="relative z-10">
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <footer className="border-t border-line bg-page/70 px-4 py-8 backdrop-blur sm:px-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 sm:flex-row sm:justify-between sm:pr-20">
              <a href="#home" className="font-mono text-sm font-bold">
                <span className="text-accent">{"<"}</span>
                <span className="text-heading">josh</span>
                <span className="text-accent">.dev /&gt;</span>
              </a>
              <p className="font-mono text-xs text-muted">
                © {new Date().getFullYear()} Joshua. All rights reserved.
              </p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="btn-icon h-9 w-9"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
        <BackToTop />
      </div>
    </MotionConfig>
  );
}

export default App;
