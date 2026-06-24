import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative z-10
          max-w-6xl mx-auto
          bg-slate-900/60
          backdrop-blur-xl
          border border-slate-800
          rounded-[32px]
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="p-10 lg:p-14">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              Get In Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Build Something Amazing Together
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Whether you need a modern web application, API integrations,
              or a full-stack solution, I'd love to hear about your project.
            </p>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800">
                  <FiMail className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-slate-200">
                    jz.pedragosa@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800">
                  <FiMapPin className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-slate-200">
                    Oriental Mindoro, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10 lg:p-14 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-800">
            <motion.a
              href="mailto:jz.pedragosa@gmail.com"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34,211,238,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                w-full
                bg-gradient-to-br
                from-cyan-500
                to-blue-600
                rounded-3xl
                p-10
                text-center
              "
            >
              <div className="flex justify-center">
                <div className="p-5 rounded-full bg-white/10 backdrop-blur">
                  <FiSend
                    size={36}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold mt-8">
                Start a Conversation
              </h3>

              <p className="text-cyan-100 mt-4">
                Let's discuss your ideas and turn them into reality.
              </p>

              <div className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur">
                Say Hello
                <FiSend />
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}