import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles, X } from "lucide-react";

/* ============================================================
   PROJECT DATA
============================================================ */

const projects = [
  {
    number: "01",
    title: "Invoxa",
    category: "SAAS / FULL STACK",
    description: "A complete invoicing platform for shop owners to manage invoices, payments, customers and business operations.",
    image: "/assets/invoice.png",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/AnuragYadav9219/Invoxa",
    live: "http://invoxa.indevs.in/",
    accent: "cyan",
    rotation: -1,
  },
  {
    number: "02",
    title: "VirtualMentor",
    category: "AI / INTERVIEW PLATFORM",
    description: "An AI-powered interview preparation platform with technical interviews, voice interactions, intelligent feedback and personalized progress tracking.",
    image: "/assets/virtualmentor.webp",
    technologies: ["React", "Spring Boot", "AI", "RAG", "Voice AI"],
    github: "https://github.com/AnuragYadav9219/pitchpilot",
    live: "https://virtualmentor.com/",
    accent: "orange",
    rotation: 1,
  },
  {
    number: "03",
    title: "AuthApp",
    category: "BACKEND / SECURITY",
    description: "A reusable authentication service with JWT authentication, role-based access control, secure API authorization and user management.",
    image: "/assets/authApp.webp",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT"],
    github: "https://github.com/AnuragYadav9219/UniversalAuthService",
    live: "#",
    accent: "orange",
    rotation: -0.8,
  },
];

/* ============================================================
   MAIN
============================================================ */

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-[#050505] text-white py-28 sm:py-32 lg:py-40">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="projects-grid absolute inset-0" />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[170px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-72 -left-64 h-[550px] w-[550px] rounded-full bg-purple-500/[0.025] blur-[170px]"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="text-xs font-semibold text-cyan-400">04</span>
              <span className="h-px w-10 bg-cyan-400/70" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/50">Selected work</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.8] tracking-[-0.08em] text-white"
              >
                PROJECTS
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md"
          >
            <p className="text-sm leading-[1.9] text-[#bdbdbd] sm:text-base">
              A collection of products, experiments and systems built across full-stack development, AI and modern software engineering.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#666]">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              />
              Click a project to explore
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Wall */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="border-t border-white/[0.08] pt-16 sm:pt-20">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">Project archive</div>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">Things I've built.</h3>
            </div>
            <div className="text-[9px] tracking-[0.25em] text-[#555]">03 / 03</div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:gap-x-16 lg:gap-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.number} project={project} index={index} onOpen={() => setActiveProject(index)} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#777]">Built with purpose</span>
          </div>
          <span className="text-[10px] text-[#555]">Design · Code · Ship</span>
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <ProjectModal project={projects[activeProject]} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ============================================================
   PROJECT CARD
============================================================ */

const ProjectCard = ({ project, index, onOpen }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(mouseX, { stiffness: 180, damping: 24 });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 5);
    mouseY.set(-y * 5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, rotate: project.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: project.rotation }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Hanging Wire & Nail */}
      <div className="pointer-events-none absolute -top-8 left-1/2 z-30 h-8 w-16 -translate-x-1/2 rounded-t-full border-l border-r border-t border-white/25" />
      <div className="pointer-events-none absolute -top-3 left-1/2 z-40 h-3 w-3 -translate-x-1/2 rounded-full border border-white/30 bg-zinc-500 shadow-[0_2px_10px_rgba(0,0,0,0.9)]" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpen}
        style={{ rotateX, rotateY }}
        whileHover={{ y: -8, scale: 1.015 }}
        className="group relative z-10 cursor-pointer overflow-hidden rounded-[12px] border border-white/[0.14] bg-[#0a0a0a] shadow-[0_30px_80px_rgba(0,0,0,0.65)] transform-gpu"
      >
        <div className="pointer-events-none absolute inset-1 z-50 rounded-[9px] border border-white/[0.06]" />

        <ProjectImage src={project.image} title={project.title} />

        <div className="relative z-20 border-t border-white/[0.1] bg-[#0b0b0b] px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex items-center justify-between">
            <span className={`text-[8px] font-semibold uppercase tracking-[0.25em] ${project.accent === "orange" ? "text-orange-400" : project.accent === "purple" ? "text-purple-400" : "text-cyan-400"
              }`}>
              {project.category}
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#555]">{project.number}</span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors group-hover:border-cyan-400/40 group-hover:text-cyan-400"
            >
              <ArrowUpRight size={17} />
            </motion.div>
          </div>

          <p className="mt-4 text-[12px] leading-[1.8] text-[#bdbdbd] sm:text-[13px]">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-white/[0.12] bg-white/[0.035] px-3 py-1.5 text-[8px] font-medium text-[#aaa] transition-colors group-hover:border-white/[0.2] group-hover:text-white">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
            <span className="text-[8px] uppercase tracking-[0.25em] text-[#555] transition-colors group-hover:text-cyan-400">Explore project</span>
            <span className="text-[9px] text-[#555]">Click to open</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="pointer-events-none absolute inset-0 z-40 rounded-[12px] ring-1 ring-cyan-400/25" />
        <motion.div initial={{ x: "-160%" }} whileHover={{ x: "180%" }} transition={{ duration: 0.9, ease: "easeInOut" }} className="pointer-events-none absolute bottom-[-20%] top-[-20%] z-50 w-[25%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
      </motion.div>
    </motion.article>
  );
};

/* ============================================================
   PROJECT IMAGE
============================================================ */

const ProjectImage = ({ src, title }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
      {!failed ? (
        <motion.img
          src={src}
          alt={`${title} project preview`}
          onError={() => setFailed(true)}
          initial={{ scale: 1.02 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#0c0c0c] to-[#050505]">
          <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-400">Project preview</span>
          <span className="mt-3 text-2xl font-semibold text-white">{title}</span>
          <span className="mt-2 text-[9px] text-[#666]">Add project screenshot</span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
      <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur-md">
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/75">{title}</span>
      </div>
      <div className="absolute bottom-5 left-5 z-10">
        <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-400">Project preview</span>
      </div>
    </div>
  );
};

/* ============================================================
   PROJECT MODAL
============================================================ */

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.96 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/[0.14] bg-[#0a0a0a] shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
          aria-label="Close project"
        >
          <X size={17} />
        </button>

        <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
          <img src={project.image} alt={`${project.title} project`} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <span className={`text-[9px] uppercase tracking-[0.3em] ${project.accent === "orange" ? "text-orange-400" : project.accent === "purple" ? "text-purple-400" : "text-cyan-400"
              }`}>
              {project.category}
            </span>
            <h3 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">{project.title}</h3>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.6fr] lg:p-10">
          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-[#555]">About the project</div>
            <p className="mt-4 text-sm leading-[1.9] text-[#bdbdbd] sm:text-base">{project.description}</p>
          </div>

          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-[#555]">Technology</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] text-[#bbb]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[9px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10">
                  <Github size={13} /> GitHub
                </a>
              )}
              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-black transition-transform hover:scale-105">
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;