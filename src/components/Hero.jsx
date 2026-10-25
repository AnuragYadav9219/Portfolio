import { useRef } from "react";
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
      {/* BACKGROUND IMAGE WITH PARALLAX */}
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

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-10 bg-black/25" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/[0.94] via-black/[0.65] to-black/[0.1]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/85 lg:hidden" />
      <div className="absolute bottom-0 left-0 right-0 z-10 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* DYNAMIC CURSOR LIGHT */}
      <motion.div
        style={{ left: lightX, top: lightY }}
        className="absolute z-10 hidden h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[110px] pointer-events-none md:block"
      />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 z-10 hero-grid pointer-events-none opacity-20" />

      {/* CONTENT CONTAINER */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1500px] items-center px-5 sm:px-8 lg:px-16"
      >
        <div className="w-full max-w-3xl pt-24 sm:pt-28 lg:pt-14">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-5 flex items-center gap-3 sm:mb-7"
          >
            <span className="text-xs font-semibold text-cyan-400">01</span>
            <span className="h-px w-8 bg-cyan-400/70 sm:w-10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 sm:text-xs">
              Software Engineer
            </span>
          </motion.div>

          {/* COLORED GRADIENT NAME */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-[clamp(3.6rem,15vw,8.5rem)] font-black leading-[0.8] tracking-[-0.075em] text-transparent drop-shadow-[0_10px_40px_rgba(34,211,238,0.2)]"
            >
              ANURAG
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-purple-400 via-cyan-200 to-white bg-clip-text text-[clamp(3.6rem,15vw,8.5rem)] font-black leading-[0.8] tracking-[-0.075em] text-transparent"
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
            <h2 className="text-base font-medium text-white/90 sm:text-xl md:text-2xl">
              Full-Stack Java & React Developer<span className="text-cyan-400">.</span>
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 max-w-xl text-sm leading-[1.8] text-white/75 sm:mt-5 sm:text-base md:text-lg"
          >
            I design and build scalable digital products with clean architecture, modern interfaces, and reliable backend systems.
          </motion.p>

          {/* IMPROVED STACK CHIPS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <TechChip name="Java" color="border-orange-500/30 text-orange-400 bg-orange-500/[0.04]" />
            <TechChip name="Spring Boot" color="border-emerald-500/30 text-emerald-400 bg-emerald-500/[0.04]" />
            <TechChip name="React" color="border-cyan-500/30 text-cyan-400 bg-cyan-500/[0.04]" />
            <TechChip name="MySQL" color="border-blue-500/30 text-blue-400 bg-blue-500/[0.04]" />
            <TechChip name="AI Systems" color="border-purple-500/30 text-purple-400 bg-purple-500/[0.04]" />
          </motion.div>

          {/* ANIMATED MAGNETIC BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row"
          >
            <MagneticButton onClick={() => scrollTo("projects")} primary>
              Explore my work
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton onClick={() => scrollTo("contact")}>
              Let's connect
            </MagneticButton>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 flex items-center gap-3.5"
          >
            <Social href="https://github.com/AnuragYadav9219" icon={<Github size={16} />} />
            <Social href="https://linkedin.com/in/anurag-yadav7800" icon={<Linkedin size={16} />} />
            <Social href="mailto:anuragyad1398@gmail.com" icon={<Mail size={16} />} />
          </motion.div>

        </div>
      </motion.div>


      {/* DESKTOP MOUSE HINT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-9 right-10 z-30 hidden items-center gap-2 text-white/40 lg:right-16 md:flex"
      >
        <MousePointer2 size={13} className="animate-bounce" />
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Move your cursor
        </span>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 transition hover:text-cyan-400"
      >
        <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown size={13} />
      </motion.button>
    </section>
  );
};

/* IMPROVED TECH CHIP */
const TechChip = ({ name, color }) => (
  <motion.span
    whileHover={{ y: -2, scale: 1.05 }}
    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium backdrop-blur-md transition-colors ${color}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
    {name}
  </motion.span>
);

/* MAGNETIC BUTTON WITH HOVER SHIMMER */
const MagneticButton = ({ children, onClick, primary = false }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-xs font-semibold sm:w-auto sm:text-sm transition-all duration-300 ${
        primary
          ? "bg-white text-black shadow-[0_15px_40px_rgba(255,255,255,0.18)] hover:bg-cyan-300 hover:shadow-[0_20px_50px_rgba(34,211,238,0.3)]"
          : "border border-white/20 bg-black/30 text-white/85 backdrop-blur-md hover:border-cyan-400/50 hover:bg-white/[0.06] hover:text-white"
      }`}
    >
      {primary && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

/* SOCIAL */
const Social = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4, scale: 1.12, rotate: 5 }}
    whileTap={{ scale: 0.92 }}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/70 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/10 shadow-lg"
  >
    {icon}
  </motion.a>
);

export default Hero;