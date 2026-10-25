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
    accent: "purple",
    rotation: -0.8,
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative w-full overflow-hidden bg-[#050505] text-white py-28 sm:py-32 lg:py-40">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="projects-grid absolute inset-0 opacity-20" />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-64 -top-64 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-cyan-400/[0.03] blur-[170px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-72 -left-64 h-[400px] sm:h-[550px] w-[400px] sm:w-[550px] rounded-full bg-purple-500/[0.03] blur-[170px]"
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
                className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.8] tracking-[-0.08em] text-white"
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
            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              />
              Click any project card to explore details
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Wall Grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="border-t border-white/[0.08] pt-16 sm:pt-20">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">Project archive</span>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">Things I've built.</h3>
            </div>
            <div className="text-[10px] tracking-[0.25em] text-white/50">03 / 03</div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.number} project={project} index={index} onOpen={() => setActiveProject(index)} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mx-auto mt-24 max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Built with purpose</span>
          </div>
          <span className="text-[10px] text-white/50">Design · Code · Ship</span>
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
  
  const spotX = useMotionValue(-300);
  const spotY = useMotionValue(-300);
  const smoothSpotX = useSpring(spotX, { stiffness: 100, damping: 20 });
  const smoothSpotY = useSpring(spotY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 4);
    mouseY.set(-y * 4);
    spotX.set(event.clientX - rect.left);
    spotY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    spotX.set(-300);
    spotY.set(-300);
  };

  const accentColorClass = 
    project.accent === "orange" ? "text-orange-400" : 
    project.accent === "purple" ? "text-purple-400" : "text-cyan-400";

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pt-6 sm:pt-8"
    >
      {/* Hanging Wire & Nail */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-30 h-8 w-14 -translate-x-1/2 rounded-t-full border-l border-r border-t border-white/20 hidden sm:block" />
      <div className="pointer-events-none absolute top-5 left-1/2 z-40 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/30 bg-zinc-500 shadow-[0_2px_8px_rgba(0,0,0,0.9)] hidden sm:block" />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onOpen}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={{ y: -6, scale: 1.01 }}
        className="group relative z-10 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transform-gpu transition-colors hover:border-white/25 flex flex-col h-full"
      >
        {/* Spotlight Follower */}
        <motion.div
          style={{ left: smoothSpotX, top: smoothSpotY, translateX: "-50%", translateY: "-50%" }}
          className="pointer-events-none absolute z-20 h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-2xl transition-opacity duration-300"
        />

        <div className="pointer-events-none absolute inset-1 z-30 rounded-xl border border-white/[0.05]" />

        <ProjectImage src={project.image} title={project.title} />

        <div className="relative z-20 border-t border-white/[0.08] bg-[#0b0b0b] px-5 py-6 sm:px-6 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className={`text-[9px] font-semibold uppercase tracking-[0.25em] ${accentColorClass}`}>
                {project.category}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-white/40">{project.number}</span>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <p className="mt-3 text-xs leading-[1.8] text-white/70 sm:text-sm line-clamp-2">{project.description}</p>
          </div>

          <div>
            {/* Tags Section */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-white/75 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4 text-[10px] text-white/50">
              <span className="uppercase tracking-[0.25em] transition-colors group-hover:text-cyan-400">View project</span>
              <span>Tap to open</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

/* ============================================================
   PROJECT IMAGE (Redesigned Title Overlay)
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
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#0c0c0c] to-[#050505] p-4 text-center">
          <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400">Project preview</span>
          <span className="mt-2 text-xl font-semibold text-white">{title}</span>
          <span className="mt-1 text-[10px] text-white/40">Add screenshot in /assets</span>
        </div>
      )}

      {/* Subtle Gradient Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Clean Bottom-Right Minimalist Title Tag */}
      <div className="absolute bottom-3 right-4 z-10 flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/90 drop-shadow-md">
          {title}
        </span>
      </div>
    </div>
  );
};

/* ============================================================
   PROJECT MODAL
============================================================ */
const ProjectModal = ({ project, onClose }) => {
  const accentColorClass = 
    project.accent === "orange" ? "text-orange-400" : 
    project.accent === "purple" ? "text-purple-400" : "text-cyan-400";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/[0.15] bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/20"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        <div className="relative aspect-video w-full overflow-hidden bg-[#111]">
          <img src={project.image} alt={`${project.title} project`} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
            <span className={`text-[9px] font-semibold uppercase tracking-[0.3em] ${accentColorClass}`}>
              {project.category}
            </span>
            <h3 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">{project.title}</h3>
          </div>
        </div>

        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.5fr] lg:p-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50">About the project</h4>
            <p className="mt-3 text-sm leading-[1.8] text-white/80 sm:text-base">{project.description}</p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/90">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10">
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition-transform hover:scale-105">
                  <ExternalLink size={14} /> Live Demo
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