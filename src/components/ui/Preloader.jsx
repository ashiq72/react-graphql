import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className='fixed inset-0 z-[999] bg-black flex items-center justify-center flex-col'
        >
          <div className='flex items-center gap-2 mb-4'>
            <div className='w-3 h-3 bg-yellow-400 rounded-full animate-bounce'></div>
            <div className='w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.1s]'></div>
            <div className='w-3 h-3 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]'></div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-white font-mono text-sm tracking-widest uppercase'
          >
            Initializing Suite...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
