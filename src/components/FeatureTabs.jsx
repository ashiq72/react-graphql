import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Shield, BarChart, MousePointer2 } from "lucide-react";

const features = [
  {
    id: "speed",
    label: "Instant Deploy",
    icon: Zap,
    title: "Ship in Seconds",
    desc: "Global edge network ensures your changes propagate in <50ms.",
    visual: (
      <div className='w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-xl border border-yellow-500/20 p-6 relative overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500 rounded-full blur-[80px] animate-pulse'></div>
        <div className='relative z-10 flex flex-col gap-3'>
          <div className='flex items-center gap-3 bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/5'>
            <div className='w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]'></div>
            <div className='h-2 w-24 bg-white/20 rounded-full'></div>
            <div className='ml-auto h-2 w-12 bg-white/10 rounded-full'></div>
          </div>
          <div className='flex items-center gap-3 bg-black/40 backdrop-blur-md p-3 rounded-lg border border-white/5'>
            <div className='w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]'></div>
            <div className='h-2 w-32 bg-white/20 rounded-full'></div>
            <div className='ml-auto h-2 w-8 bg-white/10 rounded-full'></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "collab",
    label: "Collaboration",
    icon: MousePointer2,
    title: "Multiplayer by Default",
    desc: "See who is editing what in real-time. No more conflicts.",
    visual: (
      <div className='w-full h-full bg-neutral-900 rounded-xl border border-white/10 p-6 relative'>
        <div className='absolute top-10 left-10 w-8 h-8 rounded-full border-2 border-white bg-blue-500 z-20'></div>
        <div className='absolute top-10 left-10 ml-6 w-24 px-2 py-1 bg-blue-500 rounded-r-lg rounded-bl-lg text-[10px] text-white font-bold'>
          Alex is typing...
        </div>

        <div className='absolute bottom-20 right-20 w-8 h-8 rounded-full border-2 border-white bg-pink-500 z-20'></div>
        <div className='absolute bottom-20 right-20 mr-6 w-24 px-2 py-1 bg-pink-500 rounded-l-lg rounded-br-lg text-[10px] text-white font-bold text-right'>
          Sarah edited
        </div>
      </div>
    ),
  },
  {
    id: "secure",
    label: "Security",
    icon: Shield,
    title: "Enterprise Grade",
    desc: "SSO, Audit Logs, and Role Based Access Control included.",
    visual: (
      <div className='w-full h-full flex items-center justify-center bg-neutral-900 rounded-xl border border-white/10 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]'></div>
        <Shield size={80} className='text-white/20' />
        <div className='absolute bottom-6 flex gap-4'>
          <div className='px-3 py-1 rounded border border-green-500/30 bg-green-500/10 text-green-400 text-xs'>
            SOC2
          </div>
          <div className='px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs'>
            GDPR
          </div>
        </div>
      </div>
    ),
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <section className='py-32 px-6 bg-black'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Total Control
          </h2>
          <p className='text-slate-400'>Switch between modes instantly.</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left: Tabs */}
          <div className='flex flex-col gap-4'>
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature)}
                className={`group text-left p-6 rounded-2xl transition-all duration-300 border ${
                  activeTab.id === feature.id
                    ? "bg-white/10 border-white/10"
                    : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                <div className='flex items-center gap-4 mb-2'>
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab.id === feature.id
                        ? "bg-yellow-500 text-black"
                        : "bg-white/10 text-slate-400 group-hover:text-white"
                    }`}
                  >
                    <feature.icon size={20} />
                  </div>
                  <span
                    className={`text-xl font-bold ${
                      activeTab.id === feature.id
                        ? "text-white"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {feature.label}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeTab.id === feature.id
                      ? "max-h-20 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className='text-slate-400 text-sm pl-12'>{feature.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Visual Window */}
          <div className='h-[400px] lg:h-[500px] w-full relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className='absolute inset-0'
              >
                {activeTab.visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
