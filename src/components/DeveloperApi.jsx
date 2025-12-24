import { motion } from "framer-motion";
import { Terminal, Check, Copy } from "lucide-react";

const codeLines = [
  { text: "const bponi = new BponiSDK('API_KEY');", color: "text-purple-400" },
  { text: " ", color: "" },
  { text: "// Initialize Transaction", color: "text-slate-500" },
  { text: "const transaction = await bponi.pay({", color: "text-blue-400" },
  { text: "  amount: 5000,", color: "text-yellow-300 pl-4" },
  { text: "  currency: 'USD',", color: "text-green-400 pl-4" },
  { text: "  callback: '/api/webhook'", color: "text-green-400 pl-4" },
  { text: "});", color: "text-blue-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function DeveloperApi() {
  return (
    <section id='api' className='py-32 px-6 bg-black relative overflow-hidden'>
      {/* Right side glow */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-2 text-yellow-400 font-mono mb-6'>
            <Terminal size={20} />
            <span className='tracking-wider text-sm uppercase'>
              Developer First
            </span>
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-6 text-white leading-tight'>
            Designed for <br />{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-100'>
              Developers.
            </span>
          </h2>
          <p className='text-slate-400 text-lg leading-relaxed mb-8'>
            Extend the capabilities of Bponi Suite with our robust GraphQL and
            REST APIs. Build custom integrations, automate workflows, and access
            real-time data streams.
          </p>
          <div className='space-y-4'>
            {[
              "Comprehensive Documentation",
              "99.99% Uptime SLA",
              "Sandbox Environment",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className='flex items-center gap-3'
              >
                <div className='w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30'>
                  <Check size={12} className='text-green-400' />
                </div>
                <span className='text-slate-300 font-medium'>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IDE Window */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='relative rounded-xl overflow-hidden bg-[#0F0F0F] border border-white/10 shadow-2xl shadow-blue-900/10'
        >
          {/* IDE Header */}
          <div className='flex justify-between items-center px-4 py-3 bg-[#1A1A1A] border-b border-white/5'>
            <div className='flex gap-1.5'>
              <div className='w-3 h-3 rounded-full bg-[#FF5F56]' />
              <div className='w-3 h-3 rounded-full bg-[#FFBD2E]' />
              <div className='w-3 h-3 rounded-full bg-[#27C93F]' />
            </div>
            <span className='text-xs text-slate-500 font-mono'>payment.js</span>
            <Copy
              size={14}
              className='text-slate-500 cursor-pointer hover:text-white transition'
            />
          </div>

          {/* Code Content */}
          <div className='p-6 font-mono text-sm leading-relaxed overflow-x-auto min-h-[250px]'>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {codeLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  variants={lineVariants}
                  className={`${line.color || "text-white"}`}
                >
                  {line.text}
                </motion.div>
              ))}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className='inline-block w-2 h-4 bg-yellow-400 align-middle ml-1'
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
