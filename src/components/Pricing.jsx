import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { pricing } from "../data/constants";

export default function Pricing() {
  return (
    <section
      id='pricing'
      className='py-32 px-6 bg-black relative overflow-hidden'
    >
      {/* Background Gradients */}
      <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Transparent <span className='text-yellow-400'>Pricing</span>
          </h2>
          <p className='text-slate-400 max-w-lg mx-auto'>
            Start small and scale as you grow. No hidden fees. No credit card
            required for the sandbox.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 items-start'>
          {pricing.map((item, idx) => (
            <div key={idx} className='relative group'>
              {/* Animated Glow for Recommended Plan */}
              {item.recommended && (
                <div className='absolute -inset-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-2xl opacity-75 blur-md group-hover:opacity-100 transition duration-1000 animate-gradient-xy'></div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative h-full p-8 rounded-2xl border flex flex-col ${
                  item.recommended
                    ? "bg-[#0F0F0F] border-transparent"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.05]"
                } transition-all`}
              >
                {item.recommended && (
                  <div className='absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full uppercase tracking-wide flex items-center gap-1 shadow-lg'>
                    <Zap size={12} fill='black' /> Most Popular
                  </div>
                )}

                <h3
                  className={`text-xl font-bold mb-2 ${
                    item.recommended ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.plan}
                </h3>

                <div className='flex items-baseline gap-1 mb-6'>
                  <span className='text-5xl font-black text-white tracking-tight'>
                    {item.price}
                  </span>
                  {item.price !== "Custom" && (
                    <span className='text-slate-500 font-medium'>/mo</span>
                  )}
                </div>

                <p className='text-slate-400 text-sm mb-8 leading-relaxed'>
                  {item.desc}
                </p>

                <div className='w-full h-px bg-white/10 mb-8' />

                <ul className='space-y-4 mb-8 flex-1'>
                  {item.features.map((feat, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-3 text-sm text-slate-300'
                    >
                      <CheckCircle2
                        size={18}
                        className={
                          item.recommended
                            ? "text-yellow-400"
                            : "text-slate-600"
                        }
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-sm transition transform active:scale-95 ${
                    item.recommended
                      ? "bg-yellow-400 hover:bg-yellow-300 text-black shadow-lg shadow-yellow-400/20"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  Choose {item.plan}
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
