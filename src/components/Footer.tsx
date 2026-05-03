import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 md:pt-32 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img  className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
        <div className="flex flex-col items-start text-left gap-8 md:gap-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-medium max-w-4xl leading-tight"
          >
            I turn ideas into interactive and aesthetic systems.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Link 
              to="/#contact"
              className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest hover:bg-gray-200 transition-colors inline-block"
            >
              Contact
            </Link>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-white/20 pt-12">
          <div className="max-w-xs">
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Design-driven solutions for modern brands, built with purpose and passion.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div className="flex flex-col gap-4">
              <Link to="/#work" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">Work</Link>
              <Link to="/#about" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">About</Link>
              <Link to="/#contact" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">Instagram</a>
              <a href="#" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">X</a>
              <a href="#" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">LinkedIn</a>
              <a href="mailto:lu_1829med@outlook.com" className="text-[10px] md:text-xs font-mono uppercase tracking-widest hover:text-gray-400 transition-colors">Email me</a>
            </div>
         <div className="flex items-center gap-6 mt-8">
  <a 
    href="https://www.linkedin.com/in/lucia-medina-galan" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#131313] text-[#131313] hover:bg-[#131313] hover:text-white transition-all duration-300"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
  </a>

  <a 
    href="mailto:luciamedinagalan@outlook.com" 
    className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#131313] text-[#131313] hover:bg-[#131313] hover:text-white transition-all duration-300"
    aria-label="Email"
  >
    <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
  </a>
</div>
          </div>
        </div>
        
        <div className="w-full mt-10 md:mt-20">
          <h1 className="w-full flex justify-between text-[11.5vw] md:text-[10vw] lg:text-[9vw] xl:text-[115px] leading-[0.8] tracking-tighter font-medium m-0 p-0 whitespace-nowrap">
            {"LUCÍA".split('').map((char, i) => <span key={`first-${i}`}>{char}</span>)}
            <span className="w-[4vw] md:w-[3vw]"></span>
            {"MEDINA".split('').map((char, i) => <span key={`last-${i}`}>{char}</span>)}
          </h1>
        </div>
      </div>
    </footer>
  );
}
