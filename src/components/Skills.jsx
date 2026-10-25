import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  MousePointer2,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

/* =============================================================
   SKILL DATA
============================================================= */
const skills = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Interfaces & experiences",
    description: "Building responsive and interactive interfaces with modern React architecture and clean component systems.",
    icon: Code2,
    accent: "cyan",
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "APIs & application logic",
    description: "Designing scalable backend services, REST APIs and business logic using Java and the Spring ecosystem.",
    icon: Server,
    accent: "blue",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "Maven"],
  },
  {
    number: "03",
    title: "Security",
    subtitle: "Authentication & protection",
    description: "Implementing secure authentication flows, authorization and token-based access control for applications.",
    icon: LockKeyhole,
    accent: "purple",
    technologies: ["Spring Security", "JWT", "OAuth", "Role Based Access", "CORS"],
  },
  {
    number: "04",
    title: "Data",
    subtitle: "Persistence & architecture",
    description: "Designing relational data models and persistence layers with a focus on reliability and maintainability.",
    icon: Database,
    accent: "emerald",
    technologies: ["MySQL", "PostgreSQL", "JPA", "Hibernate", "SQL", "Data Modeling"],
  },
  {
    number: "05",
    title: "Engineering",
    subtitle: "Tools & development",
    description: "Using modern development tools and engineering practices to build, test and ship software efficiently.",
    icon: GitBranch,
    accent: "orange",
    technologies: ["Git", "GitHub", "Postman", "Docker", "Maven", "Vercel"],
  },
  {
    number: "06",
    title: "AI & Emerging Tech",
    subtitle: "Intelligent applications",
    description: "Exploring AI-powered product experiences through LLM APIs, retrieval systems and intelligent automation.",
    icon: Sparkles,
    accent: "pink",
    technologies: ["LLM APIs", "RAG", "AI Integration", "Prompt Engineering", "Machine Learning"],
  },
];

/* =============================================================
   ACCENTS
============================================================= */
const accentStyles = {
  cyan: { text: "text-cyan-400", border: "group-hover:border-cyan-400/30", bg: "bg-cyan-400/[0.04]", line: "bg-cyan-400", shadow: "rgba(34,211,238,0.18)" },
  blue: { text: "text-blue-400", border: "group-hover:border-blue-400/30", bg: "bg-blue-400/[0.04]", line: "bg-blue-400", shadow: "rgba(96,165,250,0.18)" },
  purple: { text: "text-purple-400", border: "group-hover:border-purple-400/30", bg: "bg-purple-400/[0.04]", line: "bg-purple-400", shadow: "rgba(192,132,252,0.18)" },
  emerald: { text: "text-emerald-400", border: "group-hover:border-emerald-400/30", bg: "bg-emerald-400/[0.04]", line: "bg-emerald-400", shadow: "rgba(52,211,153,0.18)" },
  orange: { text: "text-orange-400", border: "group-hover:border-orange-400/30", bg: "bg-orange-400/[0.04]", line: "bg-orange-400", shadow: "rgba(251,146,60,0.18)" },
  pink: { text: "text-pink-400", border: "group-hover:border-pink-400/30", bg: "bg-pink-400/[0.04]", line: "bg-pink-400", shadow: "rgba(244,114,182,0.18)" },
};

/* =============================================================
   MAIN COMPONENT
============================================================= */
const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#050505] text-white pt-24 sm:pt-28 lg:pt-36 pb-24 sm:pb-32 lg:pb-40">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="skills-grid absolute inset-0 opacity-[0.1]" />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], opacity: [0.05, 0.11, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-180px] right-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-cyan-400 blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-180px] left-[-100px] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-purple-500 blur-[160px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-20 items-end mb-14 sm:mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="text-cyan-400 text-xs font-semibold">03</span>
              <span className="w-10 h-px bg-cyan-400/70" />
              <span className="text-xs uppercase tracking-[0.35em] text-white/75">Technical expertise</span>
            </motion.div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3.5rem,10vw,9rem)] font-black tracking-[-0.08em] leading-[0.8]"
              >
                SKILLS
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pb-2"
          >
            <p className="max-w-md text-sm sm:text-base leading-[1.8] text-white/75">
              A practical stack built around full-stack development, scalable backend systems, modern interfaces and intelligent applications.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60">
              <MousePointer2 size={12} /> Explore the stack
            </div>
          </motion.div>
        </div>

        {/* Skill Rows */}
        <div className="relative">
          <div className="absolute left-[5px] sm:left-[7px] top-0 bottom-0 w-px bg-white/[0.06] hidden sm:block" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-[5px] sm:left-[7px] top-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/30 to-transparent hidden sm:block"
          />
          {skills.map((skill, index) => (
            <SkillRow
              key={skill.number}
              skill={skill}
              index={index}
              isActive={activeSkill === index}
              onActivate={() => setActiveSkill(activeSkill === index ? null : index)}
            />
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10"
        >
          <SummaryItem icon={<Terminal size={18} />} value="Full Stack" label="Primary focus" />
          <SummaryItem icon={<Layers3 size={18} />} value="Modern" label="Development approach" />
          <SummaryItem icon={<Braces size={18} />} value="AI Ready" label="Emerging technologies" />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/75">03 / Skills</span>
          <span className="text-sm text-white/90">Learn → Build → Improve</span>
        </motion.div>
      </div>
    </section>
  );
};

/* =============================================================
   SKILL ROW
============================================================= */
const SkillRow = ({ skill, index, isActive, onActivate }) => {
  const Icon = skill.icon;
  const styles = accentStyles[skill.accent];
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, amount: 0.2 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (event) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-300);
    mouseY.set(-300);
  };

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 45 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 }}
      transition={{ duration: 0.75, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onActivate}
      className="group relative cursor-pointer border-b border-white/10 py-8 sm:py-10 lg:py-12 pl-0 sm:pl-8"
    >
      {/* Spotlight */}
      <motion.div
        style={{ left: smoothX, top: smoothY, translateX: "-50%", translateY: "-50%" }}
        className={`pointer-events-none absolute w-56 h-56 rounded-full ${styles.line} opacity-0 group-hover:opacity-[0.035] blur-3xl transition-opacity duration-300`}
      />
      <motion.div initial={false} animate={{ opacity: isActive ? 1 : 0 }} className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
      <motion.div
        initial={false}
        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={`absolute left-0 top-5 bottom-5 w-[2px] ${styles.line} origin-top hidden sm:block`}
      />

      {/* Improved responsive layout grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[60px_1.1fr_1.2fr_minmax(150px,220px)] gap-6 lg:gap-8 items-start">
        {/* Number */}
        <div className="hidden lg:block text-[11px] tracking-[0.2em] text-white/60 pt-2">
          <motion.span animate={{ color: isActive ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.2)" }}>
            {skill.number}
          </motion.span>
        </div>

        {/* Title & Icon */}
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ scale: isActive ? 1.08 : 1, rotate: isActive ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border border-white/10 ${styles.bg} flex items-center justify-center ${styles.text} transition-all duration-500 ${styles.border}`}
            style={{ boxShadow: isActive ? `0 0 30px ${styles.shadow}` : "none" }}
          >
            <Icon size={19} />
          </motion.div>
          <div>
            <div className="lg:hidden text-xs tracking-[0.2em] text-white/60 mb-1">{skill.number}</div>
            <motion.h3
              animate={{ x: isActive ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 22 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white group-hover:text-white transition-colors"
            >
              {skill.title}
            </motion.h3>
            <p className={`mt-1 text-xs uppercase tracking-[0.2em] ${styles.text} opacity-60`}>
              {skill.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="max-w-lg text-sm sm:text-base leading-[1.8] text-white/85 group-hover:text-white/80 transition-colors">
            {skill.description}
          </p>
          <motion.div initial={false} animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 18 : 0 }} className="overflow-hidden lg:hidden">
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((technology, techIndex) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, delay: techIndex * 0.035 }}
                  className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] text-sm text-white/90"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <div className="lg:hidden mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/60">
            <span>{isActive ? "Close details" : "Tap to explore"}</span>
            <motion.span animate={{ rotate: isActive ? 90 : 0 }}>
              <ArrowUpRight size={11} />
            </motion.span>
          </div>
        </div>

        {/* Technologies - Desktop */}
        <div className="hidden lg:flex flex-wrap gap-1.5 lg:justify-end">
          {skill.technologies.map((technology, techIndex) => (
            <motion.span
              key={technology}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: isInView ? 0.25 + techIndex * 0.035 : 0 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="px-2.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium text-white/85 whitespace-nowrap group-hover:text-white group-hover:border-white/[0.14] transition-all duration-300"
            >
              {technology}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8, y: isActive ? 0 : 8 }}
        transition={{ duration: 0.3 }}
        className={`absolute right-0 bottom-8 hidden xl:block ${styles.text}`}
      >
        <ArrowUpRight size={18} />
      </motion.div>
    </motion.div>
  );
};

/* =============================================================
   SUMMARY ITEM
============================================================= */
const SummaryItem = ({ icon, value, label }) => {
  return (
    <motion.div whileHover={{ backgroundColor: "rgba(255,255,255,0.045)" }} className="bg-[#080808] p-5 sm:p-6 flex items-center gap-4 transition-colors">
      <motion.div whileHover={{ rotate: 8, scale: 1.08 }} className="w-10 h-10 shrink-0 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] flex items-center justify-center text-cyan-400">
        {icon}
      </motion.div>
      <div>
        <div className="text-sm font-medium text-white/90">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/75">{label}</div>
      </div>
    </motion.div>
  );
};

export default Skills;