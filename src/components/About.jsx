import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Database, Layers3, Sparkles } from "lucide-react";

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });
  const smoothImageX = useSpring(imageX, { stiffness: 80, damping: 20 });
  const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 20 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-[#050505] text-white pt-20 sm:pt-24 lg:pt-28 pb-24 sm:pb-28 lg:pb-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="about-grid absolute inset-0 opacity-[0.11]" />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.08, 0.16, 0.08], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-180px] top-[5%] h-[450px] w-[450px] rounded-full bg-cyan-400 blur-[150px]"
        />

        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.05, 0.11, 0.05], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-purple-500 blur-[150px]"
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

        {/* SECTION HEADER */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-xs font-semibold text-cyan-400">02</span>
            <span className="h-px w-10 bg-cyan-400/70" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/45 sm:text-xs">
              Get to know me
            </span>
          </motion.div>

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.78] tracking-[-0.08em] text-white"
              >
                ABOUT
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl lg:pb-1"
            >
              <h3 className="text-xl font-medium leading-tight tracking-tight text-white/90 sm:text-2xl lg:text-3xl">
                I build digital experiences <span className="text-cyan-400">that solve real problems.</span>
              </h3>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="max-w-xl text-sm leading-[1.8] text-white/45 sm:text-base">
                  A developer who enjoys turning complex problems into simple, scalable and meaningful digital experiences.
                </p>
                <span className="hidden h-px w-12 shrink-0 bg-white/10 sm:block" />
              </div>

              <span className="mt-5 inline-block text-[9px] uppercase tracking-[0.3em] text-cyan-400/60">
                Java · Spring Boot · React · AI
              </span>
            </motion.div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* LEFT — PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative aspect-[4/5] w-full max-w-[480px] [perspective:1200px]">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-cyan-400/10 sm:-inset-5"
              >
                <span className="absolute right-[-1px] top-1/2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-8 rounded-[2.5rem] border border-purple-400/[0.06] sm:-inset-10"
              />

              <motion.div
                style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
                className="relative h-full w-full transform-gpu rounded-[2rem] border border-white/10 bg-black shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
              >
                <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                  <motion.img
                    style={{ x: smoothImageX, y: smoothImageY, scale: 1.01 }}
                    src="/assets/standImg.webp"
                    alt="Anurag Yadav"
                    className="h-full w-full object-contain object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">Anurag Yadav</div>
                      <div className="mt-1 text-sm text-white/80">Software Engineer</div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-cyan-400 backdrop-blur-md">
                      <Code2 size={17} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-3 -top-4 z-20 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/75 shadow-xl backdrop-blur-xl sm:-right-8"
              >
                <span className="text-lg font-bold text-cyan-400">01</span>
                <span className="text-[7px] uppercase tracking-widest text-white/30">Profile</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -bottom-4 -left-3 h-8 w-8 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] sm:-left-5"
              />
            </div>
          </motion.div>

          {/* RIGHT — ABOUT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Who I am</span>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                I build software with <span className="text-cyan-400">purpose.</span>
              </h3>
              <p className="mt-6 max-w-2xl text-sm leading-[1.9] text-white/45 sm:text-base">
                I'm Anurag Yadav, a Software Engineer focused on building scalable full-stack applications. My primary stack revolves around Java, Spring Boot, React and relational databases.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-[1.9] text-white/45 sm:text-base">
                I enjoy working across the entire product lifecycle — from designing APIs and database architecture to building polished interfaces and integrating intelligent AI features.
              </p>
            </motion.div>

            {/* FOCUS CARDS */}
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <FocusCard icon={<Code2 size={18} />} number="01" title="Frontend" text="React & modern UI" delay={0} />
              <FocusCard icon={<Layers3 size={18} />} number="02" title="Backend" text="Java & Spring Boot" delay={0.1} />
              <FocusCard icon={<Database size={18} />} number="03" title="Systems" text="APIs & databases" delay={0.2} />
            </div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-9 grid grid-cols-3 gap-5 border-t border-white/10 pt-8"
            >
              <Stat value="5+" label="Projects" />
              <Stat value="3+" label="Domains" />
              <Stat value="1+" label="Years Building" />
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ x: 6 }}
              onClick={scrollToContact}
              className="group mt-8 flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-cyan-400"
            >
              Let's work together
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>

        {/* MY APPROACH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mt-24 flex flex-col gap-5 border-t border-white/10 pt-8 lg:mt-32 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={15} className="text-cyan-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">My approach</span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-white/30 md:text-right">
            Learn continuously. Build intentionally. Solve problems that matter.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

/* FOCUS CARD */
const FocusCard = ({ icon, number, title, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ y: -6 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]"
  >
    <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-cyan-400/[0.06] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex justify-between">
      <span className="text-cyan-400">{icon}</span>
      <span className="text-[8px] tracking-widest text-white/20">{number}</span>
    </div>
    <h4 className="relative mt-5 text-sm font-medium text-white/80">{title}</h4>
    <p className="relative mt-1 text-[10px] text-white/30">{text}</p>
  </motion.div>
);

/* STAT */
const Stat = ({ value, label }) => (
  <div>
    <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{value}</div>
    <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/25 sm:text-[10px]">{label}</div>
  </div>
);

export default About;