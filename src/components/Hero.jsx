import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MousePointer2,
} from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 20, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 20, mass: 0.5 });

  const backgroundX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const backgroundY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);
  const contentX = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const contentY = useTransform(smoothY, [-0.5, 0.5], [-3, 3]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], ["25%", "75%"]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], ["30%", "65%"]);

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX / window.innerWidth - 0.5);
    mouseY.set(event.clientY / window.innerHeight - 0.5);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050505] text-white"
    >
      {/* IMAGE */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY, scale: 1.025 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/heroImg.webp"
          alt="Anurag Yadav"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[70%_center] lg:object-center"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/[0.92] via-black/[0.60] to-black/[0.05]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/25 to-black/80 lg:hidden" />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* CURSOR LIGHT */}
      <motion.div
        style={{ left: lightX, top: lightY }}
        className="absolute z-10 hidden h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[90px] pointer-events-none md:block"
      />

      {/* GRID */}
      <div className="absolute inset-0 z-10 hero-grid pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1500px] items-center px-5 sm:px-8 lg:px-16"
      >
        <div className="w-full max-w-3xl pt-24 sm:pt-28 lg:pt-10">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-5 flex items-center gap-3 sm:mb-7"
          >
            <span className="text-xs font-semibold text-cyan-400">01</span>
            <span className="h-px w-8 bg-cyan-400/70 sm:w-10" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
              Software Engineer
            </span>
          </motion.div>

          {/* NAME */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.6rem,15vw,8.5rem)] font-black leading-[0.8] tracking-[-0.075em]"
            >
              ANURAG
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-white via-cyan-100 to-white/35 bg-clip-text text-[clamp(3.6rem,15vw,8.5rem)] font-black leading-[0.8] tracking-[-0.075em] text-transparent"
            >
              YADAV
            </motion.h1>
          </div>

          {/* ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-7 sm:mt-9"
          >
            <h2 className="text-base font-medium text-white/85 sm:text-xl md:text-2xl">
              Full Stack Java Developer<span className="text-cyan-400">.</span>
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 max-w-xl text-[13px] leading-[1.75] text-white/60 sm:mt-5 sm:text-base md:text-lg"
          >
            I design and build scalable digital products with clean architecture, modern interfaces, and reliable backend systems.
          </motion.p>

          {/* STACK */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/35 sm:text-xs"
          >
            <Tech text="Java" />
            <Tech text="Spring Boot" />
            <Tech text="React" />
            <Tech text="MySQL" />
            <Tech text="AI / RAG" />
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-black shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-cyan-300 sm:w-auto sm:px-7 sm:text-sm"
            >
              Explore my work
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-black/25 px-6 py-3.5 text-xs font-medium text-white/80 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white sm:w-auto sm:px-7 sm:text-sm"
            >
              Let's connect
            </motion.button>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-7 flex items-center gap-3 sm:mt-8"
          >
            <Social href="https://github.com/AnuragYadav9219" icon={<Github size={15} />} />
            <Social href="https://linkedin.com/in/anurag-yadav7800" icon={<Linkedin size={15} />} />
            <Social href="mailto:anuragyad1398@gmail.com" icon={<Mail size={15} />} />
          </motion.div>

        </div>
      </motion.div>

      {/* MOBILE PHOTO INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-24 right-5 z-30 flex items-center gap-2 md:hidden"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
          Scroll to explore
        </span>
      </motion.div>

      {/* DESKTOP MOUSE HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-9 right-10 z-30 hidden items-center gap-2 text-white/25 lg:right-16 md:flex"
      >
        <MousePointer2 size={13} />
        <span className="text-[8px] uppercase tracking-[0.3em]">
          Move your cursor
        </span>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/35 transition hover:text-cyan-400"
      >
        <span className="text-[8px] uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown size={13} />
      </motion.button>
    </section>
  );
};

/* TECH */
const Tech = ({ text }) => (
  <span className="flex items-center gap-2">
    <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
    {text}
  </span>
);

/* SOCIAL */
const Social = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4, scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white/50 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
  >
    {icon}
  </motion.a>
);

export default Hero;