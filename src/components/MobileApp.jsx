import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Zap } from "lucide-react";

export default function MobileApp() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      id='mobile'
      className='py-32 px-6 bg-black overflow-hidden perspective-1000'
    >
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center'>
        <div className='relative z-10'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-6 border border-yellow-500/20'>
            <Smartphone size={14} /> Native Experience
          </div>
          <h2 className='text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter'>
            Pocket <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200'>
              Powerhouse.
            </span>
          </h2>
          <p className='text-slate-400 text-lg mb-10 leading-relaxed max-w-md'>
            Full bi-directional sync. Whatever happens on the web, reflects
            instantly on your device.
          </p>

          <div className='grid grid-cols-2 gap-6 mb-10'>
            <div className='p-4 rounded-2xl bg-white/5 border border-white/10'>
              <Zap className='text-yellow-400 mb-2' />
              <h4 className='text-white font-bold'>Real-time</h4>
              <p className='text-xs text-slate-500'>
                WebSocket powered updates
              </p>
            </div>
            <div className='p-4 rounded-2xl bg-white/5 border border-white/10'>
              <Smartphone className='text-yellow-400 mb-2' />
              <h4 className='text-white font-bold'>Offline Mode</h4>
              <p className='text-xs text-slate-500'>Works without internet</p>
            </div>
          </div>
        </div>

        <div className='relative flex justify-center perspective-[2000px]'>
          {/* 3D Phone Container */}
          <motion.div
            style={{ rotateX, scale }}
            className='relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[8px] border-neutral-800 shadow-2xl shadow-yellow-900/20 overflow-hidden'
          >
            {/* Screen Glow */}
            <div className='absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent pointer-events-none z-20'></div>

            {/* Notch */}
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-900 rounded-b-xl z-30'></div>

            {/* UI Mockup */}
            <div className='w-full h-full bg-neutral-900 p-6 pt-14 flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='w-10 h-10 rounded-full bg-white/10 animate-pulse'></div>
                <div className='w-8 h-8 rounded-lg bg-yellow-500/20 border border-yellow-500/50'></div>
              </div>

              <div className='h-40 rounded-2xl bg-gradient-to-br from-neutral-800 to-black border border-white/5 p-4 relative overflow-hidden group'>
                <div className='absolute top-0 right-0 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl -translate-y-1/2 translate-x-1/2'></div>
                <div className='w-2/3 h-4 bg-white/20 rounded mb-2'></div>
                <div className='w-1/2 h-4 bg-white/10 rounded'></div>
              </div>

              <div className='flex-1 rounded-2xl bg-white/5 border border-white/5 p-4 space-y-3'>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-lg bg-neutral-800'></div>
                    <div className='flex-1 space-y-1'>
                      <div className='w-full h-2 bg-white/10 rounded'></div>
                      <div className='w-2/3 h-2 bg-white/5 rounded'></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Back Glow behind phone */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-yellow-500/20 rounded-full blur-[120px] -z-10'></div>
        </div>
      </div>
    </section>
  );
}
