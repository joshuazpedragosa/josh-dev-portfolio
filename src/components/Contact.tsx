import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Window from "./Window";

const details = [
  {
    key: "email",
    label: "Contact Address",
    value: "jz.pedragosa@gmail.com",
    href: "mailto:jz.pedragosa@gmail.com",
    icon: <FiMail size={18} />,
  },
  {
    key: "location",
    label: "Current Location",
    value: "Oriental Mindoro, Philippines",
    icon: <FiMapPin size={18} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading command="./contact.sh" title="Get In Touch" />

            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-2xl font-bold text-heading sm:text-3xl"
            >
              Have a project in <span className="text-accent">mind?</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-xl text-base leading-8 text-body"
            >
              Whether you need a modern web application, API integrations, or a
              full-stack solution, send me your quest and let's build something
              useful together.
            </motion.p>

            <div className="mt-8 space-y-4">
              {details.map((d, i) => (
                <motion.div
                  key={d.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="window window-hover group flex items-center gap-4 p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-card-line bg-card-2 text-card-accent transition-colors group-hover:border-btn group-hover:bg-btn group-hover:text-white">
                    {d.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-card-muted">
                      <span className="text-syn-green">{"// "}</span>
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-0.5 block break-words font-mono text-sm text-card-ink hover:text-card-accent"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 break-words font-mono text-sm text-card-ink">
                        {d.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Window
              title="bash — contact.sh"
              className="window-hover"
              bodyClassName="p-5 font-mono text-[13px] leading-7 sm:p-7 sm:text-sm"
            >
              <p className="text-card-ink">
                <span className="text-syn-green">➜</span>{" "}
                <span className="text-syn-var">~</span> ./contact.sh --new
              </p>
              <p className="text-card-muted">Initializing conversation...</p>
              <p className="mt-3">
                <span className="text-syn-keyword">const</span>{" "}
                <span className="text-syn-var">message</span>{" "}
                <span className="text-card-muted">=</span>{" "}
                <span className="text-card-muted">{"{"}</span>
              </p>
              <p className="pl-5">
                <span className="text-syn-fn">to</span>
                <span className="text-card-muted">:</span>{" "}
                <span className="break-all text-syn-string">
                  "jz.pedragosa@gmail.com"
                </span>
                <span className="text-card-muted">,</span>
              </p>
              <p className="pl-5">
                <span className="text-syn-fn">subject</span>
                <span className="text-card-muted">:</span>{" "}
                <span className="text-syn-string">"Start a Conversation"</span>
                <span className="text-card-muted">,</span>
              </p>
              <p className="pl-5 text-card-muted">
                <span className="text-syn-green">{"// "}</span>
                Send your project details and let's discuss how we can turn
                your idea into reality.
              </p>
              <p className="text-card-muted">{"};"}</p>

              <motion.a
                href="mailto:jz.pedragosa@gmail.com"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary group mt-6 w-full py-4 text-base"
              >
                Say hello
                <FiSend className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12" />
              </motion.a>

              <p className="mt-4 text-card-ink">
                <span className="text-syn-green">➜</span>{" "}
                <span className="text-syn-var">~</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-card-accent" />
              </p>
            </Window>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
