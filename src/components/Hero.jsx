import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowRight,
  Zap,
  Globe,
  TrendingUp,
  CreditCard,
  LayoutDashboard,
  Box,
} from "lucide-react";

// --- Sub-Components ---

const GridBeam = () => {
  return (
    <motion.div
      initial={{ top: "-10%" }}
      animate={{ top: "110%" }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className='absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent shadow-[0_0_20px_2px_rgba(234,179,8,0.3)] z-0'
    />
  );
};

const FloatingCard = ({ icon: Icon, label, value, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: y + 30 }}
    animate={{ opacity: 1, y: y }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    className='absolute hidden lg:flex flex-col gap-1 p-4 bg-[#0A0A0A]/90 backdrop-blur-md border border-yellow-500/20 rounded-xl shadow-[0_0_30px_-10px_rgba(234,179,8,0.2)] z-30'
    style={{ left: x, top: y }}
  >
    <div className='flex items-center gap-3 mb-1'>
      <div className='p-1.5 rounded-lg bg-yellow-500/10'>
        <Icon className='w-4 h-4 text-yellow-500' />
      </div>
      <span className='text-xs text-zinc-400 font-medium'>{label}</span>
    </div>
    <span className='text-xl font-bold text-white tracking-tight'>{value}</span>
  </motion.div>
);

// --- Main Hero ---

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Mouse Position for Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt Logic
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), {
    damping: 20,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), {
    damping: 20,
    stiffness: 300,
  });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  }

  // Spotlight Gradient
  const background = useMotionTemplate`radial-gradient(600px circle at ${
    mouseX.get() * 100
  }% ${mouseY.get() * 100}%, rgba(234, 179, 8, 0.15), transparent 80%)`;

  // Scroll Effects
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  const yDashboard = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className='relative min-h-[110vh] flex flex-col items-center justify-start pt-32 overflow-hidden bg-black text-white selection:bg-yellow-500/30 perspective-[2000px]'
    >
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Spotlight Effect */}
        <motion.div
          className='absolute inset-0 opacity-100 z-0'
          style={{ background }}
        />

        {/* Grid Pattern */}
        <div className='absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

        {/* Scanning Beam */}
        <GridBeam />

        {/* Top Glow */}
        <div className='absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent blur-[100px]' />
      </div>

      {/* --- HERO TEXT CONTENT --- */}
      <motion.div
        style={{ opacity, scale }}
        className='relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center'
      >
        {/* Animated Pill Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 transition-colors mb-8 cursor-pointer overflow-hidden'
        >
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700' />
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-yellow-500'></span>
          </span>
          <span className='relative text-sm font-medium text-zinc-300 group-hover:text-yellow-400 transition-colors'>
            Bponi Suite 3.0 is Live
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-tight'>
          <span className='block text-white drop-shadow-2xl'>Building the</span>
          <span className='block text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 relative z-10 pb-2'>
            Gold Standard
          </span>
        </h1>

        <p className='text-lg md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed'>
          The complete operating system for modern commerce.{" "}
          <br className='hidden md:block' />
          Designed for speed, scaled for{" "}
          <span className='text-yellow-400 font-semibold'>
            global dominance.
          </span>
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-5 items-center justify-center w-full mb-20'>
          <button className='relative group px-10 py-5 rounded-full bg-yellow-400 text-black font-bold text-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(250,204,21,0.6)]'>
            <span className='relative z-10 flex items-center gap-2'>
              Start Building Now
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform text-black' />
            </span>
            <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out' />
          </button>

          <button className='px-10 py-5 rounded-full bg-zinc-900 border border-zinc-800 text-white font-semibold text-lg hover:bg-zinc-800 hover:border-yellow-500/30 transition-all flex items-center gap-2'>
            <Globe className='w-5 h-5 text-zinc-400' />
            <span>Global Infrastructure</span>
          </button>
        </div>
      </motion.div>

      {/* --- 3D INTERFACE PREVIEW --- */}
      <motion.div
        style={{ rotateX, rotateY, y: yDashboard }}
        className='relative z-20 w-full max-w-[1200px] mx-auto px-4 perspective-[1000px]'
      >
        <motion.div
          initial={{ y: 100, opacity: 0, rotateX: 20 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='relative rounded-t-2xl bg-[#09090b] border border-white/10 shadow-2xl overflow-hidden'
        >
          {/* Top Bar */}
          <div className='h-12 bg-black border-b border-white/10 flex items-center px-4 justify-between'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50' />
              <div className='w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50' />
              <div className='w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50' />
            </div>
            <div className='px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-500 flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-yellow-500 animate-pulse' />
              Live Connection
            </div>
          </div>

          {/* Dashboard Content */}
          <div className='p-8 grid grid-cols-12 gap-6 min-h-[600px] bg-gradient-to-b from-zinc-900/50 to-black'>
            {/* Sidebar */}
            <div className='hidden md:flex col-span-2 flex-col gap-2'>
              {[
                { icon: LayoutDashboard, active: true },
                { icon: TrendingUp, active: false },
                { icon: Box, active: false },
                { icon: CreditCard, active: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl flex items-center gap-3 ${
                    item.active
                      ? "bg-yellow-500/10 border border-yellow-500/20"
                      : "hover:bg-zinc-900"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      item.active ? "text-yellow-500" : "text-zinc-600"
                    }`}
                  />
                  <div
                    className={`h-2 w-16 rounded-full ${
                      item.active ? "bg-yellow-500/20" : "bg-zinc-800"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Main Stats Area */}
            <div className='col-span-12 md:col-span-10 flex flex-col gap-6'>
              {/* Header Text */}
              <div className='flex justify-between items-end'>
                <div>
                  <h3 className='text-zinc-400 text-sm font-medium mb-1'>
                    Total Revenue
                  </h3>
                  <h2 className='text-4xl font-bold text-white'>
                    $1,294,300<span className='text-yellow-500'>.00</span>
                  </h2>
                </div>
                <div className='px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium rounded-lg'>
                  +24.5% vs last month
                </div>
              </div>

              {/* The Chart (Visual) */}
              <div className='flex-1 w-full bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group'>
                {/* Grid Lines */}
                <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]' />

                {/* Dynamic Bars */}
                <div className='absolute bottom-0 left-0 right-0 h-64 flex items-end justify-between px-6 pb-6 gap-2'>
                  {[40, 65, 50, 80, 55, 90, 70, 95, 80, 100, 85, 60].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className='flex-1 bg-yellow-500/20 border-t border-yellow-500/50 rounded-t-sm relative hover:bg-yellow-500/40 transition-colors'
                      >
                        {/* Top glow dot */}
                        <div className='absolute -top-[2px] left-0 right-0 h-[2px] bg-yellow-400 shadow-[0_0_10px_2px_rgba(250,204,21,0.5)] opacity-0 hover:opacity-100 transition-opacity' />
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Bottom Row Cards */}
              <div className='grid grid-cols-3 gap-6'>
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className='h-24 bg-zinc-900/50 border border-white/5 rounded-xl p-4 flex flex-col justify-between'
                  >
                    <div className='w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center'>
                      <Zap className='w-4 h-4 text-yellow-500' />
                    </div>
                    <div className='h-2 w-20 bg-zinc-800 rounded-full' />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Live Data Cards */}
          <FloatingCard
            icon={Zap}
            label='Server Load'
            value='12ms'
            x={-50}
            y={100}
            delay={1.2}
          />
          <FloatingCard
            icon={TrendingUp}
            label='Daily Sales'
            value='$42.5k'
            x={750}
            y={-40}
            delay={1.5}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
