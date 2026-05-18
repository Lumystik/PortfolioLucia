import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';

const projectsData: Record<string, any> = {
  "museon": {
    id: "museon",
    title: "MUSE*ON",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_hero.jpg?raw=true",
    overview: "Developing an all-in-one software for small museum staff that aims to streamline the workflow and improve the management of different areas of the institution, in order to optimize current museum resources.",
    scope: "End-to-End App",
    role: "UX Research, Branding, UX/UI Design",
    timeline:"4 months",
    team: "Lucia Medina, Martina Braidotti, Ilario Pedone, Agnese Rosselli, Mark Waisara",
    prototypeLink: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8...",
    userPersona: true // Added flag to trigger the persona section
  }
  // (Your other projects remain here)
};

export function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
    }
  }, [id]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">
      <Navbar />
      
      {/* ... (Your existing Hero, Overview, and Middle Sections remain exactly the same here) ... */}

      {/* STATIC USER PERSONA MOODBOARD */}
      {project.userPersona && (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 w-full text-white">
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12 text-center md:text-left">
            User Persona
          </h3>
          <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 md:gap-16 shadow-2xl">
            
            {/* Left Column (1 Column Mobile, 1/3 Desktop) */}
            <div className="w-full md:w-1/3 flex flex-col gap-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 rounded-full bg-gray-700 mb-6 overflow-hidden border-2 border-green-500/50">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" 
                    alt="Emily" 
                    className="w-full h-full object-cover grayscale" 
                  />
                </div>
                <h4 className="text-3xl font-bold mb-1">Emily, 32</h4>
                <p className="text-green-500 uppercase tracking-widest text-sm font-semibold">
                  Small Museum Curator
                </p>
              </div>

              <div className="bg-white/5 border-l-4 border-green-500 p-5 rounded-r-xl">
                <p className="italic text-gray-300 text-sm md:text-base leading-relaxed">
                  "I need a tool that simplifies my daily tasks so I can focus on creating better experiences for our visitors."
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 border-b border-white/10 pb-2">
                    Motivations
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5"><span className="text-gray-300 font-medium">Efficiency</span></div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5"><span className="text-gray-300 font-medium">Innovation</span></div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[65%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 border-b border-white/10 pb-2">
                    Frustrations
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5"><span className="text-gray-300 font-medium">Manual Work</span></div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[90%] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1.5"><span className="text-gray-300 font-medium">Disorganization</span></div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[75%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 border-b border-white/10 pb-2">
                    Brands
                  </h5>
                  <div className="flex gap-4 opacity-80">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 font-bold">A</div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 font-bold">N</div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 font-bold">S</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (1 Column Mobile, 2/3 Desktop) */}
            <div className="w-full md:w-2/3 flex flex-col gap-10">
              <div>
                <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-green-500">
                  About Emily
                </h4>
                <p className="text-gray-300 leading-relaxed md:text-lg">
                  Emily is a dedicated professional working at a small, independent museum. She wears multiple hats, from managing collections to organizing community events. Due to limited staff and budget, she often struggles with outdated tools and fragmented workflows. She values intuitive software that can help streamline operations, allowing her to dedicate more time to the museum's core mission rather than administrative burdens.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-green-500">
                  Goals
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300 md:text-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0"></div>
                    <span>Centralize museum inventory and visitor data in one accessible platform.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 md:text-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0"></div>
                    <span>Reduce time spent on repetitive manual data entry.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 md:text-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0"></div>
                    <span>Enhance collaboration among the small museum staff.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-green-500">
                  Challenges
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300 md:text-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                    <span>Currently relies on a mix of spreadsheets and paper records.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 md:text-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                    <span>Limited budget for expensive, enterprise-level museum software.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300 md:text-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                    <span>Feeling overwhelmed by the volume of administrative tasks.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* CONTINUING FROM YOUR EXISTING FILE BOTTOM SNIPPET */}
      {project.takeaways && (
        <section className="py-16 md:py-20 w-full bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-10">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">Takeaways</h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed whitespace-pre-line max-w-3xl mx-auto font-medium">{project.takeaways}</p>
          </div>
        </section>
      )}

      {project.nextProject && (
        <section className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden group">
          <img src={project.nextProject.image} alt="Next Project" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/85 transition-colors duration-500 group-hover:bg-black/75" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 mb-4 block">Next Project</span>
            <Link to={project.nextProject.link} className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-white hover:text-gray-300 transition-colors">
              {project.nextProject.title}
            </Link>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}
