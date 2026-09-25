import { motion } from "framer-motion";

const PageLoader = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 1.9, duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[9999] overflow-hidden bg-[#050505] text-white"
        >
            {/* Background Grids & Glows */}
            <div className="page-loader-grid absolute inset-0" />
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.11 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[180px]"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="pointer-events-none absolute bottom-[-250px] left-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-300 blur-[180px]"
            />

            {/* Top Details */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/35">
                    Portfolio / 2026
                </span>
            </motion.div>

            <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute right-6 top-6 text-[9px] font-mono tracking-[0.2em] text-white/25 sm:right-10 sm:top-10"
            >
                01
            </motion.span>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full px-6 sm:px-10">
                    {/* Eyebrow */}
                    <div className="mx-auto mb-6 flex max-w-6xl items-center justify-center gap-4">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 45, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="h-px bg-white/20"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            className="text-[9px] font-medium uppercase tracking-[0.45em] text-white/35"
                        >
                            Software Engineer
                        </motion.p>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 45, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="h-px bg-white/20"
                        />
                    </div>

                    {/* Name Section */}
                    <div className="relative mx-auto w-fit">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.45 }}
                            className="pointer-events-none absolute inset-0 bg-cyan-400 blur-[80px]"
                        />

                        <div className="relative overflow-hidden">
                            <motion.h1
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="relative whitespace-nowrap text-[clamp(4rem,15vw,12rem)] font-black leading-[0.78] tracking-[-0.1em] text-white"
                            >
                                ANURAG<span className="text-cyan-400">.</span>
                            </motion.h1>

                            {/* Cyan Sweep */}
                            <motion.div
                                initial={{ x: "-120%" }}
                                animate={{ x: "120%" }}
                                transition={{ duration: 1, delay: 0.95, ease: [0.76, 0, 0.24, 1] }}
                                className="pointer-events-none absolute inset-y-0 left-0 w-[25%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent blur-md"
                            />
                        </div>

                        {/* Underline */}
                        <div className="relative mt-7 h-px overflow-hidden bg-white/10">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.05 }}
                        className="mt-7 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.3em]"
                    >
                        <span className="text-white/30">CODE</span>
                        <span className="text-cyan-400">/</span>
                        <span className="text-white/30">DESIGN</span>
                        <span className="text-cyan-400">/</span>
                        <span className="text-white/30">AI</span>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Status */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-10 sm:left-10 sm:right-10"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                    Building digital experiences
                </span>

                <div className="flex items-center gap-3">
                    <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/20 sm:block">
                        Entering
                    </span>
                    <div className="h-px w-12 overflow-hidden bg-white/10 sm:w-20">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.2, delay: 0.75, ease: "easeOut" }}
                            className="h-full w-full bg-cyan-400"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Exit Line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.55, duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.5)]"
            />
        </motion.div>
    );
};

export default PageLoader;