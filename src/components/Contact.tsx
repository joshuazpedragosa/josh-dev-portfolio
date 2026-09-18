import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
    relative
    overflow-hidden
    bg-[#24150d]
    px-6
    py-32
    text-[#f6d78b]
  "
    >
      <div
        className="
      pointer-events-none
      absolute
      left-1/2
      top-0
      h-[700px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-[#a66a32]/10
      blur-[150px]
    "
      />

      <div
        className="
      pointer-events-none
      absolute
      bottom-0
      right-0
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

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
      relative
      z-10
      mx-auto
      max-w-6xl
      border-4
      border-[#6b4728]
      bg-[#2e1c13]
      p-2
      shadow-[10px_10px_0_#160c07]
    "
      >

        <span
          className="
        absolute
        left-0
        top-0
        h-2
        w-24
        bg-[#d49a55]
      "
        />

        <span
          className="
        absolute
        right-0
        top-0
        h-2
        w-24
        bg-[#d49a55]
      "
        />

        <span
          className="
        absolute
        bottom-0
        left-0
        h-2
        w-24
        bg-[#d49a55]
      "
        />

        <span
          className="
        absolute
        bottom-0
        right-0
        h-2
        w-24
        bg-[#d49a55]
      "
        />

        <div
          className="
        overflow-hidden
        border-2
        border-[#4f321f]
        bg-[#24150d]
      "
        >

          <div className="grid lg:grid-cols-2">

            <div className="p-8 lg:p-14">

              <h2
                className="
              font-mono
              text-3xl
              font-black
              uppercase
              leading-tight
              text-[#ffe8ad]
              drop-shadow-[4px_4px_0_#3b2415]
              md:text-5xl
            "
              >
                Have a project in
                <br />
                <span className="text-[#d49a55]">Mind?</span>
              </h2>

              <p
                className="
              mt-6
              max-w-xl
              font-mono
              text-sm
              leading-8
              text-[#9f8665]
            "
              >
                Whether you need a modern web application, API integrations, or
                a full-stack solution, send me your quest and let's build
                something useful together.
              </p>


              <div className="mt-10 space-y-5">
                <div
                  className="
                flex
                items-center
                gap-4
                border-2
                border-[#4f321f]
                bg-[#2e1c13]
                p-4
                shadow-[4px_4px_0_#1c1009]
              "
                >
                  <div
                    className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  border-2
                  border-[#6b4728]
                  bg-[#332016]
                "
                  >
                    <FiMail className="text-xl text-[#d49a55]" />
                  </div>

                  <div>
                    <p
                      className="
                    font-mono
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#6f4b2d]
                  "
                    >
                      Contact Address
                    </p>

                    <p
                      className="
                    mt-1
                    font-mono
                    text-sm
                    font-bold
                    text-[#cdb88b]
                  "
                    >
                      jz.pedragosa@gmail.com
                    </p>
                  </div>
                </div>

                {/* Location */}

                <div
                  className="
                flex
                items-center
                gap-4
                border-2
                border-[#4f321f]
                bg-[#2e1c13]
                p-4
                shadow-[4px_4px_0_#1c1009]
              "
                >
                  <div
                    className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  border-2
                  border-[#6b4728]
                  bg-[#332016]
                "
                  >
                    <FiMapPin className="text-xl text-[#d49a55]" />
                  </div>

                  <div>
                    <p
                      className="
                    font-mono
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-[#6f4b2d]
                  "
                    >
                      Current Location
                    </p>

                    <p
                      className="
                    mt-1
                    font-mono
                    text-sm
                    font-bold
                    text-[#cdb88b]
                  "
                    >
                      Oriental Mindoro, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
            flex
            items-center
            justify-center
            border-t-2
            border-[#4f321f]
            bg-[#2e1c13]
            p-8
            lg:border-l-2
            lg:border-t-0
            lg:p-14
          "
            >
              <motion.a
                href="mailto:jz.pedragosa@gmail.com"
                whileHover={{
                  y: -6,
                  boxShadow: "8px 8px 0 #160c07",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
              group
              relative
              w-full
              border-4
              border-[#d49a55]
              bg-[#8b5e34]
              p-8
              text-center
              shadow-[6px_6px_0_#1c1009]
              transition-all
              md:p-10
            "
              >

                <span
                  className="
                absolute
                left-0
                top-0
                h-2
                w-16
                bg-[#ffe8ad]
              "
                />

                <span
                  className="
                absolute
                right-0
                top-0
                h-2
                w-16
                bg-[#ffe8ad]
              "
                />

                <span
                  className="
                absolute
                bottom-0
                left-0
                h-2
                w-16
                bg-[#ffe8ad]
              "
                />

                <span
                  className="
                absolute
                bottom-0
                right-0
                h-2
                w-16
                bg-[#ffe8ad]
              "
                />

                <div className="flex justify-center">
                  <div
                    className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  border-4
                  border-[#ffe8ad]
                  bg-[#6b4728]
                  shadow-[4px_4px_0_#1c1009]
                "
                  >
                    <FiSend
                      size={34}
                      className="
                    text-[#fff1bd]
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                    />
                  </div>
                </div>

                <h3
                  className="
                mt-3
                font-mono
                text-2xl
                font-black
                uppercase
                leading-tight
                text-[#fff1bd]
                md:text-3xl
              "
                >
                  Start a
                  <br />
                  Conversation
                </h3>

                <p
                  className="
                mx-auto
                mt-4
                max-w-sm
                font-mono
                text-xs
                leading-6
                text-[#f6d78b]
              "
                >
                  Send your project details and let's discuss how we can turn
                  your idea into reality.
                </p>

                {/* Button */}

                <div
                  className="
                mt-8
                inline-flex
                items-center
                gap-3
                border-2
                border-[#ffe8ad]
                bg-[#6b4728]
                px-7
                py-4
                font-mono
                text-[10px]
                font-black
                uppercase
                tracking-widest
                text-[#fff1bd]
                shadow-[4px_4px_0_#1c1009]
                transition-all
                group-hover:-translate-y-1
                group-hover:bg-[#a66a32]
              "
                >
                  Say hello
                  <FiSend />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
