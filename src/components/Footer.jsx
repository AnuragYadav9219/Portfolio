import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/AnuragYadav9219", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/anuragyadav7800", icon: Linkedin },
    { label: "Email", href: "mailto:anuragyad1398@gmail.com", icon: Mail },
  ];

  const navigation = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white pt-10">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="footer-grid absolute inset-0 opacity-[0.1]" />

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 bottom-[-100px] h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

        {/* TOP SECTION */}
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-10 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">

            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Status Badge */}
              <div className="mb-5 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400">
                  Open to opportunities
                </span>
              </div>

              {/* Name & Tagline */}
              <button onClick={scrollToTop} className="group text-left">
                <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl transition-colors group-hover:text-cyan-400">
                  Anurag<span className="text-cyan-400">.</span>
                </h2>
                <p className="mt-2 text-sm font-medium text-white/60">
                  Software Engineer building full-stack & AI-powered products.
                </p>
              </button>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-wrap gap-3"
            >
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group flex min-h-11 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 text-sm font-medium text-white/75 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:text-cyan-300 shadow-md"
                  >
                    <Icon size={15} />
                    <span>{social.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                    />
                  </motion.a>
                );
              })}
            </motion.div>

          </div>
        </div>

        {/* NAVIGATION & BACK TO TOP */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium text-white/60 transition-colors hover:text-cyan-400"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex w-fit items-center gap-2.5 text-xs font-medium text-white/60 transition-colors hover:text-cyan-400"
          >
            <span>Back to top</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
              <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
            </span>
          </motion.button>
        </div>

        {/* BOTTOM COPYRIGHT & STACK */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium text-white/45">
            © {new Date().getFullYear()} Anurag Yadav. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-medium text-white/40">
            <Sparkles size={12} className="text-cyan-400" />
            <span>Designed & built with React & Tailwind CSS.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;