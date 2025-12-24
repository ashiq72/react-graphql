"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <motion.div
      className='fixed top-0 left-0 w-8 h-8 border border-yellow-400 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference'
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.5,
      }}
    >
      <div className='absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2' />
    </motion.div>
  );
}
