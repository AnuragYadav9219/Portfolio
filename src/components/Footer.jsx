import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
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
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="footer-grid absolute inset-0 opacity-[0.08]" />

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[-180px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-cyan-400 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

        {/* TOP */}
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-10 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">

            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Status */}
              <div className="mb-5 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400">
                  Open to opportunities
                </span>
              </div>

              {/* Name */}
              <button onClick={scrollToTop} className="group text-left">
                <h2 className="text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl">
                  Anurag<span className="text-cyan-400">.</span>
                </h2>
                <p className="mt-2 text-sm font-medium text-white/55">
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
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex min-h-11 items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.035] px-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:text-cyan-300"
                  >
                    <Icon size={15} />
                    <span>{social.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                    />
                  </a>
                );
              })}
            </motion.div>

          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium text-white/55 transition-colors hover:text-cyan-400"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group flex w-fit items-center gap-2.5 text-xs font-medium text-white/55 transition-colors hover:text-cyan-400"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.06]">
              <ArrowUp size={13} />
            </span>
          </motion.button>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium text-white/40">
            © {new Date().getFullYear()} Anurag Yadav. All rights reserved.
          </p>
          <p className="text-[11px] font-medium text-white/35">
            Designed & built with React.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;