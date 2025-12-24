import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "Real-time Sync", us: true, them: true },
  { name: "Global Edge Network", us: true, them: false },
  { name: "99.999% Uptime SLA", us: true, them: false },
  { name: "AI Support Agents", us: true, them: false },
  { name: "Free SSL Certificates", us: true, them: true },
  { name: "Unlimited Bandwidth", us: true, them: "Capped" },
  { name: "Dedciated Support", us: true, them: "Paid Add-on" },
];

export default function ComparisonTable() {
  return (
    <section className='py-24 px-6 bg-black relative'>
      {/* Background Glow */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neutral-900/50 blur-[100px] rounded-full -z-10'></div>

      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
            Don't Settle
          </h2>
          <p className='text-slate-400'>
            See why market leaders switch to Bponi.
          </p>
        </div>

        <div className='relative overflow-x-auto rounded-3xl border border-white/10 bg-black/50 backdrop-blur-md'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='border-b border-white/10'>
                <th className='p-6 text-slate-500 font-medium'>Features</th>
                <th className='p-6 text-yellow-500 font-bold text-xl bg-white/[0.02]'>
                  Bponi Suite
                </th>
                <th className='p-6 text-slate-500 font-medium'>Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, idx) => (
                <tr
                  key={idx}
                  className='border-b border-white/5 hover:bg-white/[0.02] transition'
                >
                  <td className='p-6 text-white font-medium'>{item.name}</td>
                  <td className='p-6 bg-white/[0.02]'>
                    {item.us === true ? (
                      <div className='w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center'>
                        <Check size={16} className='text-yellow-400' />
                      </div>
                    ) : (
                      <span className='text-white'>{item.us}</span>
                    )}
                  </td>
                  <td className='p-6'>
                    {item.them === true ? (
                      <div className='w-8 h-8 rounded-full bg-white/10 flex items-center justify-center'>
                        <Check size={16} className='text-slate-400' />
                      </div>
                    ) : item.them === false ? (
                      <div className='w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center'>
                        <X size={16} className='text-red-400' />
                      </div>
                    ) : (
                      <span className='text-slate-500 text-sm'>
                        {item.them}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
