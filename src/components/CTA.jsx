import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className='py-32 px-6 relative overflow-hidden bg-black flex flex-col items-center justify-center'>
      {/* Animated Beams / Warp Speed Effect */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-yellow-500/20 blur-[100px] opacity-50 animate-pulse-slow'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10'></div>
      </div>

      <div className='max-w-4xl mx-auto text-center relative z-20'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter'
        >
          Ready to Build the <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600'>
            Future?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-slate-400 text-xl mb-12 max-w-2xl mx-auto'
        >
          Join the ecosystem today. Whether you are an investor or a client, we
          have the architecture to scale your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className='flex flex-col sm:flex-row gap-4 justify-center'
        >
          <button className='px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition flex items-center justify-center gap-2 group'>
            Get Started Now
            <ArrowRight className='group-hover:translate-x-1 transition-transform' />
          </button>
          <button className='px-10 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition backdrop-blur-sm'>
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
