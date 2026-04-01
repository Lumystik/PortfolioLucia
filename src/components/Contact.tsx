import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 w-full bg-white text-[#131313] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        <div className="md:col-span-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-mono uppercase tracking-widest text-gray-500"
          >
            Contact
          </motion.h2>
        </div>
        
        <div className="md:col-span-2 flex flex-col items-start gap-8">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-medium leading-tight tracking-tight"
          >
            Let's create something extraordinary together.
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-xl"
          >
            Whether you have a specific project in mind or just want to explore possibilities, I'm always open to new conversations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <a href="mailto:lu_1829med@outlook.com" className="text-2xl md:text-4xl font-medium hover:opacity-70 transition-opacity border-b-2 border-[#131313] pb-2">
              lu_1829med@outlook.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
