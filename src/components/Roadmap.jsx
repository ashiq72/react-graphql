import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { roadmap } from "../data/constants";

export default function Roadmap() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className='py-32 px-6 bg-black relative'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-20'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
            Strategic Roadmap
          </h2>
          <p className='text-slate-400'>Our journey through time.</p>
        </div>

        <div className='relative'>
          {/* The Timeline Track (Grey) */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2 rounded-full'></div>

          {/* The Timeline Fill (Yellow Gradient - Animated) */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-orange-500 to-purple-500 transform md:-translate-x-1/2 origin-top rounded-full z-10'
          />

          {roadmap.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row items-center mb-24 ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content Card */}
              <div className='flex-1 w-full md:w-auto pl-24 md:pl-0 md:px-12'>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative p-8 bg-neutral-900/50 backdrop-blur-md rounded-3xl border border-white/10 hover:border-yellow-500/30 transition-colors duration-300 group ${
                    idx % 2 === 0 ? "text-left" : "md:text-right text-left"
                  }`}
                >
                  <span className='absolute top-0 bottom-0 w-1 bg-yellow-500/20 absolute -left-[1px] md:left-auto md:right-auto opacity-0 group-hover:opacity-100 transition duration-300'></span>
                  <span className='text-yellow-400 font-bold text-5xl opacity-10 absolute right-4 top-2 select-none'>
                    {item.year}
                  </span>
                  <span className='text-yellow-500 font-bold text-xl block mb-2 relative z-10'>
                    {item.year}
                  </span>
                  <h3 className='text-xl font-bold text-white mb-3 relative z-10'>
                    {item.title}
                  </h3>
                  <p className='text-slate-400 text-sm leading-relaxed relative z-10'>
                    {item.desc}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className='absolute left-8 md:left-1/2 w-4 h-4 bg-black rounded-full border-2 border-yellow-500 transform -translate-x-1/2 md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(250,204,21,0.5)]'>
                <div className='absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20'></div>
              </div>

              <div className='flex-1 hidden md:block'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
