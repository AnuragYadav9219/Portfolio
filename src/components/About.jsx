import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Database, Layers3, Sparkles } from "lucide-react";

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], [-4, 4]);

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
      className="relative overflow-hidden bg-[#050505] text-white pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 lg:pb-40"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="about-grid absolute inset-0 opacity-[0.12]" />

        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [0.06, 0.14, 0.06], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-150px] top-[10%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.04] blur-[160px]"
        />

        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], opacity: [0.04, 0.1, 0.04], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-180px] left-[-120px] h-[500px] w-[500px] rounded-full bg-purple-500/[0.035] blur-[170px]"
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
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-xs">
              Get to know me
            </span>
          </motion.div>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.78] tracking-[-0.08em] text-white"
              >
                ABOUT
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl lg:pb-2"
            >
              <h3 className="text-xl font-medium leading-tight tracking-tight text-white/95 sm:text-2xl lg:text-3xl">
                I build digital experiences <span className="text-cyan-400">that solve real problems.</span>
              </h3>

              <p className="mt-4 text-sm leading-[1.8] text-white/70 sm:text-base">
                A software developer who enjoys turning complex architectural challenges into simple, scalable, and intuitive digital experiences.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {["Java", "Spring Boot", "React", "MySQL", "AI Systems"].map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* LEFT — PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative aspect-[4/5] w-full max-w-[450px] [perspective:1200px]">

              {/* Decorative Orbit Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-3 rounded-[2.2rem] border border-cyan-400/15 sm:-inset-4"
              >
                <span className="absolute right-[-1px] top-1/2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-7 rounded-[2.6rem] border border-purple-400/10 sm:-inset-8"
              />

              {/* Interactive Tilt Container */}
              <motion.div
                style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
                className="relative h-full w-full transform-gpu rounded-3xl border border-white/[0.14] bg-[#0a0a0a] shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden"
              >
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <motion.img
                    style={{ x: smoothImageX, y: smoothImageY, scale: 1.02 }}
                    src="/assets/standImg.webp"
                    alt="Anurag Yadav"
                    className="h-full w-full object-contain object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />

                  {/* Profile Card Footer Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-cyan-400">Anurag Yadav</div>
                      <div className="mt-0.5 text-xs font-medium text-white/90">Software Engineer</div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                      <Code2 size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-3 -top-4 z-20 flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-white/15 bg-black/80 shadow-2xl backdrop-blur-xl sm:-right-6"
              >
                <span className="text-base font-bold text-cyan-400">01</span>
                <span className="text-[7px] uppercase tracking-widest text-white/50">Profile</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — ABOUT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">Who I am</span>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                I craft software with <span className="text-cyan-400">precision and scale.</span>
              </h3>
              <p className="mt-5 text-sm leading-[1.9] text-white/75 sm:text-base">
                I'm Anurag Yadav, a Full-Stack Software Engineer specializing in building robust backend systems with Java and Spring Boot, paired with clean, responsive interfaces in React.
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-white/75 sm:text-base">
                Whether it's designing secure REST APIs, architecting relational databases, or exploring AI integration, I thrive on writing clean code that delivers exceptional user experiences.
              </p>
            </motion.div>

            {/* FOCUS CARDS */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <FocusCard icon={<Code2 size={17} />} number="01" title="Frontend" text="React & Modern UI" delay={0} />
              <FocusCard icon={<Layers3 size={17} />} number="02" title="Backend" text="Java & Spring Boot" delay={0.1} />
              <FocusCard icon={<Database size={17} />} number="03" title="Systems" text="APIs & Architecture" delay={0.2} />
            </div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 grid grid-cols-3 gap-5 border-t border-white/10 pt-6"
            >
              <Stat value="5+" label="Projects Built" />
              <Stat value="3+" label="Core Domains" />
              <Stat value="1+" label="Years Experience" />
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ x: 6 }}
              onClick={scrollToContact}
              className="group mt-8 flex items-center gap-2.5 text-sm font-medium text-white/80 transition-colors hover:text-cyan-400"
            >
              <span>Let's work together</span>
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
          className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 lg:mt-32 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">My approach</span>
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-white/60 md:text-right sm:text-sm">
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
  >
    <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-cyan-400/[0.06] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex justify-between items-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-400">{icon}</span>
      <span className="text-[9px] font-mono tracking-widest text-white/30">{number}</span>
    </div>
    <h4 className="relative mt-4 text-sm font-medium text-white/90">{title}</h4>
    <p className="relative mt-1 text-[11px] text-white/50">{text}</p>
  </motion.div>
);

/* STAT */
const Stat = ({ value, label }) => (
  <div>
    <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{value}</div>
    <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">{label}</div>
  </div>
);

export default About;