import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/constants";

export default function Testimonials() {
  return (
    <section className='py-24 bg-black'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center gap-2 mb-8'>
          <Quote className='text-yellow-500 fill-current' />
          <h2 className='text-3xl font-bold text-white'>What People Say</h2>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='p-8 bg-white/[0.05] rounded-2xl border border-white/5 shadow-sm'
            >
              <div className='flex gap-1 mb-4 text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill='currentColor' />
                ))}
              </div>
              <p className='text-slate-300 mb-6 italic'>"{review.text}"</p>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-white/10'></div>
                <div>
                  <h4 className='font-bold text-white text-sm'>
                    {review.name}
                  </h4>
                  <p className='text-xs text-slate-500'>{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
