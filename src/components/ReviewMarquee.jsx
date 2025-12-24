import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivard",
    role: "CEO, Acme",
    text: "It completely changed how we ship code.",
  },
  {
    name: "Sarah Chen",
    role: "DevOps",
    text: "The documentation is world class.",
  },
  {
    name: "James Wilson",
    role: "Founder",
    text: "I can't imagine building without Bponi.",
  },
  {
    name: "Maria Garcia",
    role: "CTO",
    text: "Scalability issues solved instantly.",
  },
  { name: "David Kim", role: "Product", text: "Beautiful UI and seamless UX." },
  {
    name: "Emma Davis",
    role: "Engineer",
    text: "The API is a joy to work with.",
  },
];

const ReviewCard = ({ review }) => (
  <div className='flex-shrink-0 w-[350px] p-6 mx-4 rounded-xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors'>
    <div className='flex gap-1 mb-3'>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className='text-yellow-500 fill-current' />
      ))}
    </div>
    <p className='text-slate-300 text-sm mb-4 leading-relaxed'>
      "{review.text}"
    </p>
    <div className='flex items-center gap-3'>
      <div className='w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900' />
      <div>
        <p className='text-white text-xs font-bold'>{review.name}</p>
        <p className='text-slate-500 text-[10px] uppercase'>{review.role}</p>
      </div>
    </div>
  </div>
);

export default function ReviewMarquee() {
  return (
    <section className='py-24 bg-black overflow-hidden border-b border-white/5'>
      <div className='mb-12 text-center'>
        <p className='text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2'>
          Community
        </p>
        <h2 className='text-3xl text-white font-bold'>Loved by Builders</h2>
      </div>

      <div className='relative flex flex-col gap-8'>
        {/* Left Gradient Fade */}
        <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10' />
        {/* Right Gradient Fade */}
        <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10' />

        {/* Row 1: Left Movement */}
        <div className='flex overflow-hidden'>
          <motion.div
            className='flex'
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...reviews, ...reviews, ...reviews].map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right Movement */}
        <div className='flex overflow-hidden'>
          <motion.div
            className='flex'
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...reviews, ...reviews, ...reviews].map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
