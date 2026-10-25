import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll & Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
          current = section.id;
        }
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => window.innerWidth >= 768 && setIsOpen(false));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => window.innerWidth >= 768 && setIsOpen(false));
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "px-4 sm:px-6 lg:px-10 pt-3" : "px-4 sm:px-6 lg:px-10 pt-3"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto h-[62px] sm:h-[68px] flex items-center justify-between px-4 sm:px-6 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "bg-[#080808]/85 border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
              : "bg-black/30 border-white/10 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3 text-left">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white text-black font-black text-sm overflow-hidden shadow-md"
            >
              AY
              <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.span>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                Anurag Yadav
              </div>
              <div className="text-[8px] uppercase tracking-[0.3em] text-white/40">Software Engineer</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="relative px-4 py-2 rounded-lg text-xs font-medium transition-colors duration-300"
                >
                  <span className={isActive ? "text-white font-semibold" : "text-white/60 hover:text-white"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Contact CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:bg-cyan-300 transition-all duration-300"
          >
            Let's talk <ArrowUpRight size={14} />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[82px] left-4 right-4 z-[90] md:hidden"
          >
            <div className="rounded-2xl border border-white/[0.14] bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] p-3 overflow-hidden">
              {links.map((link, index) => {
                const isActive = active === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm transition-colors ${
                      isActive ? "bg-white/[0.06] text-white font-medium" : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className={isActive ? "text-cyan-400 font-semibold" : ""}>
                      {link.name}
                    </span>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                  </motion.button>
                );
              })}

              <div className="h-px bg-white/10 my-2" />

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contact")}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-400 text-black text-sm font-semibold shadow-lg"
              >
                Let's talk <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;