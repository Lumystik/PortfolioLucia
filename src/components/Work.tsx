import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "museon",
    title: "MUSE*ON",
    tags: "UX/UI",
    description: "A UX research and design project that develops an all-in-one platform to help small museum staff manage exhibitions, tasks, and collaboration more efficiently.",
    image: "https://github.com/Lumystik/PortfolioLucia/blob/fdd73d17a16fbafd0cab50f392f48561db1fef98/images/thumbmuseon.jpg?raw=true",
    link: "/project/museon"
  },
  {
    id: "art-beyond-dimension",
    title: "Art Beyond Dimension",
    tags: "UX/UI",
    description: "An interactive museum concept that uses AI (GANs) to let visitors explore, transform, and personalize artworks, creating a more engaging and memorable experience.",
    image: "https://github.com/Lumystik/PortfolioLucia/blob/5d660d2c73f00e82faad2c680dcc90c630cce92b/images/thumbbeyond.jpg?raw=true",
    link: "/project/art-beyond-dimension"
  },
  {
    id: "films-foundation",
    title: "Films Foundation",
    tags: "UI",
    description: "A redesign of Cineteca Milano’s digital platform, including a design system and web/mobile interfaces, focused on improving usability, accessibility, and content organization.",
    image: "https://github.com/Lumystik/PortfolioLucia/blob/99a3aa0ebe21f3353b295d194bbfce9c00d460c0/images/thumbcinema.jpg?raw=true",
    link: "/project/films-foundation"
  },
  {
    id: "seedtag",
    title: "Seedtag",
    tags: "Creative Ads",
    description: "Interactive ad creatives for global brands.",
    image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/carseedtag2.png?raw=true",
    link: "/project/seedtag"
  },
  {
    id: "pixela",
    title: "Pixela",
    tags: "Game Dev",
    description: "Videogame Demo made in Unity",
    image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/pixela.png?raw=true",
    link: "/project/pixela"
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 w-full bg-white text-[#131313]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24 md:gap-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#131313] pb-8 gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight m-0"
          >
            Selected Work
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm font-mono uppercase tracking-widest text-gray-500"
          >
            (2020 – 2026)
          </motion.span>
        </div>
        
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <ProjectRow key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectRow: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 0.8 }}
      className="group"
    >
      <Link to={project.link} className="flex flex-col md:flex-row gap-12 md:gap-16 items-center w-full block cursor-pointer">
        {/* Text Column */}
        <div className="flex flex-col items-start text-left w-full md:w-5/12 gap-6 order-2 md:order-1">
          <span className="text-sm md:text-base text-gray-800 font-medium">{project.tags}</span>
          <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-[#E54D2E] transition-colors">{project.title}</h3>
          <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed">{project.description}</p>
          <span className="mt-4 text-sm font-bold uppercase tracking-widest border-b-2 border-[#E54D2E] pb-1 text-[#131313] group-hover:text-[#E54D2E] transition-colors w-fit">
            View Case Study
          </span>
        </div>
        
        {/* Image Column */}
        <div className="w-full md:w-7/12 order-1 md:order-2">
          <div className="w-full bg-[#FDFBF7] rounded-xl overflow-hidden aspect-[4/3] md:aspect-[16/11] shadow-sm flex items-center justify-center p-4 md:p-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
