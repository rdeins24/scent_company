import { motion, useReducedMotion } from "framer-motion";

// Apariție la scroll: ridicare ușoară + fade, o singură dată. Fără animație la prefers-reduced-motion.
export default function Reveal({ children, className, as = "div" }) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
