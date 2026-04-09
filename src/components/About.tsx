import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 w-full bg-white text-[#131313]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        <div className="md:col-span-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-xs md:text-sm font-mono uppercase tracking-widest"
          >
            About
          </motion.h2>
        </div>
        <div className="md:col-span-2 flex flex-col gap-12 md:gap-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-3xl font-medium leading-snug"
          >
          Interaction Designer with a background in digital and UI/UX design, working end-to-end from research to high-fidelity prototyping. Sometimes I also write the code behind my designs (passion for CSS and HTML... and a bit of React).
          </motion.p>
          <div className="flex flex-col gap-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs md:text-sm font-mono uppercase tracking-widest text-gray-500"
            >
              Education
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl font-medium"
            >
              MSc Digital & Interaction Design at Politecnico di Milano
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
