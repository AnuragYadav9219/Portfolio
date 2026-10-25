import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PageLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    // Simulate smooth progress percentage count-up
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 1.9, duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-[9999] overflow-hidden bg-[#050505] text-white select-none"
        >
            {/* Background Grids & Ambient Glows */}
            <div className="page-loader-grid absolute inset-0 opacity-40" />

            {/* Pulsing Central Core Glow */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.22, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[180px]"
            />
            <motion.div
                animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.15, 0.06] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-purple-500 blur-[180px]"
            />

            {/* Top Details */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10"
            >
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/60">
                    Portfolio / 2026
                </span>
            </motion.div>

            <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute right-6 top-6 font-mono text-xs tracking-[0.2em] text-cyan-400 sm:right-10 sm:top-10"
            >
                {progress}%
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
                            className="text-[9px] font-bold uppercase tracking-[0.45em] text-cyan-400"
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

                    {/* Name Section with Interactive Glow */}
                    <div className="relative mx-auto w-fit">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.45 }}
                            className="pointer-events-none absolute inset-0 bg-cyan-400/25 blur-[100px]"
                        />

                        <div className="relative overflow-hidden py-2">
                            <motion.h1
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="relative whitespace-nowrap text-[clamp(3.8rem,14vw,11rem)] font-black leading-[0.78] tracking-[-0.1em] text-white drop-shadow-[0_15px_50px_rgba(0,0,0,0.8)]"
                            >
                                ANURAG<span className="text-cyan-400 animate-pulse">.</span>
                            </motion.h1>

                            {/* Neon Sweep Effect */}
                            <motion.div
                                initial={{ x: "-120%" }}
                                animate={{ x: "120%" }}
                                transition={{ duration: 1, delay: 0.95, ease: [0.76, 0, 0.24, 1] }}
                                className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent blur-md"
                            />
                        </div>

                        {/* Animated Gradient Underline */}
                        <div className="relative mt-7 h-[2px] overflow-hidden bg-white/10">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,1)]"
                            />
                        </div>
                    </div>

                    {/* Tech Badges / Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.05 }}
                        className="mt-8 flex items-center justify-center gap-3 text-[9px] font-mono tracking-[0.3em]"
                    >
                        <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-white/60">JAVA</span>
                        <span className="text-cyan-400">·</span>
                        <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-white/60">SPRING BOOT</span>
                        <span className="text-cyan-400">·</span>
                        <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-white/60">REACT</span>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Status & Progress Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-10 sm:left-10 sm:right-10"
            >
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                    Initializing experience...
                </span>

                <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-cyan-400">
                        {progress}%
                    </span>
                    <div className="h-1 w-20 overflow-hidden rounded-full bg-white/15 sm:w-32">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 1.2, delay: 0.75, ease: "easeOut" }}
                            className="h-full w-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Glowing Exit Line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.55, duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)]"
            />
        </motion.div>
    );
};

export default PageLoader;