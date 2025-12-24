import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu, BarChart3 } from "lucide-react";

const boxVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function FeaturesBento() {
  return (
    <section className='py-32 px-6 bg-black text-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-20'>
          <h2 className='text-4xl md:text-6xl font-bold mb-6'>
            Everything you need. <br />
            <span className='text-slate-500'>Nothing you don't.</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]'>
          {/* Card 1: Analytics (Large) */}
          <motion.div
            variants={boxVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='md:col-span-2 rounded-3xl bg-neutral-900/50 border border-white/10 p-8 relative overflow-hidden group'
          >
            <div className='absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition duration-500'>
              <BarChart3 size={100} />
            </div>
            <div className='relative z-10 h-full flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4'>
                  <BarChart3 size={20} />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Real-time Analytics</h3>
                <p className='text-slate-400'>
                  Track every pixel. Heatmaps, conversion funnels, and retention
                  cohorts out of the box.
                </p>
              </div>
              {/* Micro Chart Animation */}
              <div className='flex items-end gap-2 h-24 w-full opacity-50 group-hover:opacity-100 transition duration-500'>
                {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className='flex-1 bg-gradient-to-t from-blue-500/10 to-blue-500 rounded-t-sm'
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Security */}
          <motion.div
            variants={boxVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='md:col-span-1 rounded-3xl bg-neutral-900/50 border border-white/10 p-8 relative overflow-hidden group hover:border-green-500/30 transition duration-500'
          >
            <div className='absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition duration-500'></div>
            <div className='w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 mb-4'>
              <ShieldCheck size={20} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Bank Grade</h3>
            <p className='text-slate-400 text-sm mb-6'>
              SOC2 Type II Certified. End-to-end encryption for all data at
              rest.
            </p>
            <div className='absolute -right-6 -bottom-6 text-green-500/10'>
              <ShieldCheck size={140} />
            </div>
          </motion.div>

          {/* Card 3: AI (Tall) */}
          <motion.div
            variants={boxVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='md:row-span-2 rounded-3xl bg-neutral-900/50 border border-white/10 p-8 relative overflow-hidden group'
          >
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_50%)]'></div>
            <div className='w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4'>
              <Cpu size={20} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Built-in AI</h3>
            <p className='text-slate-400 text-sm mb-8'>
              Predictive inventory and automated support agents.
            </p>

            {/* Pulsing Brain Effect */}
            <div className='absolute bottom-0 left-0 right-0 h-64 flex items-center justify-center'>
              <div className='w-32 h-32 rounded-full bg-purple-500 blur-[80px] animate-pulse'></div>
              <Cpu
                size={120}
                className='relative z-10 text-white opacity-20 group-hover:opacity-50 transition duration-500'
              />
            </div>
          </motion.div>

          {/* Card 4: Global */}
          <motion.div
            variants={boxVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='md:col-span-1 rounded-3xl bg-neutral-900/50 border border-white/10 p-8 relative overflow-hidden group'
          >
            <div className='w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4'>
              <Globe size={20} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Global Edge</h3>
            <p className='text-slate-400 text-sm'>
              Deployed to 35 regions automatically.
            </p>
          </motion.div>

          {/* Card 5: Performance */}
          <motion.div
            variants={boxVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='md:col-span-1 rounded-3xl bg-neutral-900/50 border border-white/10 p-8 relative overflow-hidden group'
          >
            <div className='w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4'>
              <Zap size={20} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Sub 50ms</h3>
            <p className='text-slate-400 text-sm'>
              Optimized middleware for instant loads.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
