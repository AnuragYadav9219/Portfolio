import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Check,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    data.name.trim().length >= 2 &&
    isValidEmail(data.email) &&
    data.message.trim().length >= 5;

  const disabledMessage = !data.name.trim()
    ? "Enter your name"
    : data.name.trim().length < 2
      ? "Name must be at least 2 characters"
      : !isValidEmail(data.email)
        ? "Enter a valid email"
        : data.message.trim().length < 5
          ? "Message must be at least 5 characters"
          : "";

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error(disabledMessage || "Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("EmailJS Error: ", error);
        setLoading(false);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 sm:py-32 lg:px-16 lg:py-40"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="contact-grid absolute inset-0 opacity-20" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/[0.04] blur-[150px] sm:h-[550px] sm:w-[550px]" />
        <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-purple-500/[0.03] blur-[160px]" />
        <div className="contact-orb absolute left-[15%] top-[35%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div data-aos="fade-up" className="mb-16 lg:mb-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-semibold text-cyan-400">05</span>
            <span className="h-px w-10 bg-cyan-400/70" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-white/50 sm:text-xs">
              Let's connect
            </span>
          </div>

          <div className="overflow-hidden">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.78] tracking-[-0.08em] text-white"
            >
              CONTACT
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <p className="max-w-xl text-sm leading-[1.9] text-white/70 sm:text-base">
              Have an idea, a project, or just want to talk about technology? Drop me a message. I'd love to hear from you.
            </p>
            <span className="hidden h-px w-16 bg-white/10 sm:block" />
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-cyan-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Available for opportunities
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">

          {/* LEFT INFORMATION */}
          <div data-aos="fade-right" className="flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                Start a conversation
              </span>
              <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Let's build something <span className="text-cyan-400">meaningful.</span>
              </h3>
              <p className="mt-6 max-w-md text-sm leading-[1.9] text-white/70">
                Whether you're building a product, exploring an idea, or looking for a developer to join your team, feel free to reach out.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="mt-10 space-y-3">
              <a
                href="mailto:anuragyad1398@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 transition-transform group-hover:scale-105">
                  <Mail size={17} />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">Email</div>
                  <div className="mt-1 truncate text-xs text-white/80 transition-colors group-hover:text-white sm:text-sm">
                    anuragyad1398@gmail.com
                  </div>
                </div>
                <ArrowUpRight size={15} className="ml-auto shrink-0 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/[0.05]">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.8)]" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">Current status</div>
                  <div className="mt-1 text-xs text-white/85 sm:text-sm">Open to opportunities</div>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-10 hidden border-t border-white/[0.08] pt-6 lg:block">
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/50">
                <Sparkles size={12} className="text-cyan-400" />
                Keep building
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                Learn continuously. Build intentionally. Solve problems that matter.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="relative overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0a0a0a] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.05] blur-[90px]" />
            <div className="pointer-events-none absolute inset-1 rounded-[22px] border border-white/[0.04]" />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                    Send a message
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-white sm:text-2xl">
                    Tell me about your idea.
                  </h3>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan-400">
                  <MessageCircle size={17} />
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                {/* NAME */}
                <div className="group">
                  <label htmlFor="name" className="mb-2 block text-[9px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors group-focus-within:text-cyan-400">
                    Your name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/[0.1] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/[0.045] focus:shadow-[0_0_30px_rgba(34,211,238,0.05)]"
                    />
                    {data.name.trim().length >= 2 && (
                      <Check size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400" />
                    )}
                  </div>
                </div>

                {/* EMAIL */}
                <div className="group">
                  <label htmlFor="email" className="mb-2 block text-[9px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors group-focus-within:text-cyan-400">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/[0.1] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/[0.045] focus:shadow-[0_0_30px_rgba(34,211,238,0.05)]"
                    />
                    {isValidEmail(data.email) && (
                      <Check size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400" />
                    )}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="message" className="block text-[9px] font-medium uppercase tracking-[0.25em] text-white/60 transition-colors group-focus-within:text-cyan-400">
                      Message
                    </label>
                    <span className={`text-[9px] ${data.message.length >= 5 ? "text-green-400" : "text-white/30"}`}>
                      {data.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={data.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="Tell me a little about your project..."
                    className="w-full resize-none rounded-xl border border-white/[0.1] bg-white/[0.025] px-4 py-3.5 text-sm leading-relaxed text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/[0.045] focus:shadow-[0_0_30px_rgba(34,211,238,0.05)]"
                  />
                </div>

                {/* SUBMIT */}
                <div className="relative group">
                  <button
                    disabled={loading || !isFormValid}
                    type="submit"
                    className={`relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl py-4 text-sm font-semibold transition-all duration-300 ${
                      loading || !isFormValid
                        ? "cursor-not-allowed bg-white/[0.06] text-white/40"
                        : "bg-cyan-400 text-black hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_15px_40px_rgba(34,211,238,0.2)]"
                    }`}
                  >
                    {!loading && isFormValid && (
                      <span className="pointer-events-none absolute inset-y-0 -left-20 w-12 rotate-[20deg] bg-white/40 transition-transform duration-700 group-hover:translate-x-[550px]" />
                    )}

                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        Sending message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                        <ArrowUpRight size={15} />
                      </>
                    )}
                  </button>

                  {/* TOOLTIP ON HOVER IF INVALID */}
                  {!isFormValid && !loading && (
                    <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[#151515] px-3 py-2 text-[9px] text-white/80 opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">
                      {disabledMessage}
                    </div>
                  )}
                </div>
              </form>

              {/* EMAIL FALLBACK */}
              <div className="mt-8 border-t border-white/[0.08] pt-6 text-center">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Prefer direct email?
                </span>
                <a
                  href="mailto:anuragyad1398@gmail.com"
                  className="ml-2 text-xs text-cyan-400 transition-colors hover:text-cyan-300 hover:underline sm:text-sm"
                >
                  anuragyad1398@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-20 flex flex-col gap-5 border-t border-white/[0.08] pt-7 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              Let's create something extraordinary
            </span>
          </div>

          <div className="text-[10px] text-white/40">
            © {new Date().getFullYear()} Anurag Yadav. All rights reserved.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;