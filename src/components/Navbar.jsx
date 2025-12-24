import { Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className='fixed top-6 left-0 right-0 z-50 flex justify-center px-4'>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full max-w-5xl backdrop-blur-xl bg-black/70 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl shadow-black/50'
      >
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)]'>
            <Layers className='text-black w-5 h-5' />
          </div>
          <span className='text-xl font-bold text-white tracking-tight hidden sm:block'>
            Bponi<span className='text-yellow-500'>Suite</span>
          </span>
        </div>

        <div className='hidden md:flex gap-8 text-sm font-medium text-slate-400'>
          <a href='#ecosystem' className='hover:text-white transition'>
            Ecosystem
          </a>
          <a href='#mobile' className='hover:text-white transition'>
            Mobile
          </a>
          <a href='#pricing' className='hover:text-white transition'>
            Pricing
          </a>
        </div>

        <button className='px-5 py-2 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition shadow-lg'>
          Get Started
        </button>
      </motion.nav>
    </div>
  );
}
