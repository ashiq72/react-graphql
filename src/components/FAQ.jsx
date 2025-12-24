import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/constants";

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className='py-24 px-6 bg-black border-t border-white/5'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-white mb-4'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className='space-y-4'>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className='border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]'
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className='w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.05] transition'
              >
                <span className='font-semibold text-white'>{faq.q}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 text-slate-400 ${
                    activeAccordion === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeAccordion === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className='overflow-hidden'
                  >
                    <div className='p-6 pt-0 text-slate-400 leading-relaxed'>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
