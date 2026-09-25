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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "px-4 sm:px-6 lg:px-10 pt-3" : "px-4 sm:px-6 lg:px-10 pt-5"
          }`}
      >
        <div className={`max-w-7xl mx-auto h-[62px] sm:h-[68px] flex items-center justify-between px-4 sm:px-6 rounded-2xl border transition-all duration-500 ${scrolled ? "bg-black/70 border-white/10 shadow-2xl backdrop-blur-2xl" : "bg-black/25 border-white/10 backdrop-blur-md"
          }`}>
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3">
            <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white text-black font-black text-sm overflow-hidden">
              AY
              <span className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <div className="hidden sm:block text-left">
              <div className="text-sm font-semibold tracking-wide text-white">Anurag Yadav</div>
              <div className="text-[8px] uppercase tracking-[0.3em] text-white/35">Software Engineer</div>
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
                  <span className={isActive ? "text-white" : "text-white/45 hover:text-white/80"}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Contact */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-cyan-300 transition-colors duration-300"
          >
            Let's talk <ArrowUpRight size={14} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[82px] left-4 right-4 z-[90] md:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-[#080808]/95 backdrop-blur-2xl shadow-2xl p-3 overflow-hidden">
              {links.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm transition-colors hover:bg-white/5"
                >
                  <span className={active === link.id ? "text-cyan-400 font-medium" : "text-white/60"}>
                    {link.name}
                  </span>
                  <span className="text-[9px] text-white/20 uppercase tracking-widest">
                    0{index + 1}
                  </span>
                </motion.button>
              ))}

              <div className="h-px bg-white/10 my-2" />

              <button
                onClick={() => scrollTo("contact")}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black text-sm font-semibold"
              >
                Let's talk <ArrowUpRight size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;