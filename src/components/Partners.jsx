import { motion } from "framer-motion";
import { brands } from "../data/constants";

export default function Partners() {
  return (
    <section className='py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 mb-6 text-center'>
        <p className='text-xs font-bold uppercase tracking-widest text-slate-500'>
          Trusted by Industry Leaders
        </p>
      </div>
      <div className='relative flex overflow-x-hidden group'>
        <motion.div
          className='flex gap-16 items-center whitespace-nowrap'
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <span
              key={idx}
              className='text-2xl font-bold text-slate-700 uppercase tracking-tighter hover:text-yellow-400 transition cursor-default'
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
