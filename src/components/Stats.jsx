import { stats } from "../data/constants";
import CountUp from "./ui/CountUp";

export default function Stats() {
  // Parse string values like "12K+" to numbers (12000) for the animator
  const parseValue = (str) => {
    const num = parseInt(str.replace(/[^0-9]/g, ""));
    const suffix = str.includes("K") ? "K+" : str.includes("M") ? "M+" : "+";
    return { num, suffix };
  };

  return (
    <section className='py-20 border-y border-white/5 bg-black relative overflow-hidden'>
      {/* Background Grid Accent */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]'></div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, idx) => {
            const { num, suffix } = parseValue(stat.value);
            return (
              <div
                key={idx}
                className='flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] transition duration-500 group'
              >
                <h4 className='text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors'>
                  <CountUp end={num} suffix={suffix} />
                </h4>
                <p className='text-xs text-slate-500 font-bold uppercase tracking-widest'>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
