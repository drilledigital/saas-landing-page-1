"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    className="flex flex-none gap-16 text-7xl md:text-8xl font-medium"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl flex items-center">
                                &#10038;
                            </span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}