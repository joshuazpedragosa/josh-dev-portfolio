import { motion } from "framer-motion";

type SectionHeadingProps = {
  command: string;
  title: string;
  center?: boolean;
};

export default function SectionHeading({
  command,
  title,
  center = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center" : ""}
    >
      <p className="font-mono text-xs text-muted sm:text-sm">
        ~/portfolio{" "}
        <span className="text-accent">$</span> {command}
      </p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-heading sm:text-5xl md:text-6xl">
        {title}
        <span className="animate-blink text-accent">_</span>
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className={`mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-btn to-accent-soft ${
          center ? "mx-auto origin-center" : "origin-left"
        }`}
      />
    </motion.div>
  );
}
