import { Layers, Twitter, Linkedin, Github, Send } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Footer() {
  return (
    <footer className='bg-black py-20 px-6 border-t border-white/10 relative overflow-hidden'>
      {/* Decorative large text behind */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap select-none'>
        BPONI SUITE
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-12 mb-20'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center'>
                <Layers className='text-black w-5 h-5' />
              </div>
              <span className='text-2xl font-bold text-white tracking-tight'>
                Bponi<span className='text-yellow-500'>Suite</span>
              </span>
            </div>
            <p className='text-slate-500 mb-8 max-w-sm leading-relaxed'>
              The operating system for modern commerce. Scalable, secure, and
              designed for speed.
            </p>
            <div className='flex gap-4'>
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <MagneticButton
                  key={i}
                  className='w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer text-slate-400'
                >
                  <Icon size={18} />
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className='lg:col-span-1'>
            <h4 className='text-white font-bold mb-6'>Product</h4>
            <ul className='space-y-4 text-slate-500 text-sm'>
              {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map(
                (item) => (
                  <li
                    key={item}
                    className='hover:text-yellow-400 cursor-pointer transition'
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className='lg:col-span-1'>
            <h4 className='text-white font-bold mb-6'>Company</h4>
            <ul className='space-y-4 text-slate-500 text-sm'>
              {["About Us", "Careers", "Blog", "Contact", "Partners"].map(
                (item) => (
                  <li
                    key={item}
                    className='hover:text-yellow-400 cursor-pointer transition'
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className='lg:col-span-2'>
            <h4 className='text-white font-bold mb-6'>Stay Updated</h4>
            <p className='text-slate-500 text-sm mb-4'>
              Get the latest updates directly to your inbox.
            </p>
            <div className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition w-full'
              />
              <button className='bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-lg font-bold transition'>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600'>
          <p>&copy; 2024 Bponi Global Limited. All Rights Reserved.</p>
          <div className='flex gap-6'>
            <span className='hover:text-slate-400 cursor-pointer transition'>
              Privacy Policy
            </span>
            <span className='hover:text-slate-400 cursor-pointer transition'>
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
