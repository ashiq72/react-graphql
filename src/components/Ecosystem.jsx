import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/constants";
import SpotlightCard from "./ui/SpotlightCard";

export default function Ecosystem() {
  return (
    <section id='ecosystem' className='py-32 bg-black relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='mb-20 flex flex-col md:flex-row justify-between items-end gap-6'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight'>
              The <span className='text-yellow-400'>Ecosystem</span>
            </h2>
            <p className='text-slate-400 text-lg'>
              A modular architecture designed for infinite scalability.
            </p>
          </div>
          <button className='text-white border-b border-yellow-400 pb-1 hover:text-yellow-400 transition'>
            View Full Roadmap
          </button>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {projects.map((project, idx) => (
            <SpotlightCard key={idx} className='h-full'>
              <div className='p-8 h-full flex flex-col relative z-20'>
                <div className='mb-6 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center'>
                  {React.cloneElement(project.icon, {
                    className: "w-8 h-8 text-yellow-400",
                  })}
                </div>

                <h3 className='text-2xl font-bold text-white mb-3'>
                  {project.title}
                </h3>
                <p className='text-slate-400 mb-8 leading-relaxed flex-grow'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 font-medium border border-white/5'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Background Pattern inside card */}
              <div className='absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
