import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';

const WireframeSketches = ({ color = "rgba(226, 240, 164, 0.35)" }: { color?: string }) => {
  const transitionProps = (delay: number) => ({
    duration: 4,
    delay,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" as const
  });

  return (
    <>
      {/* Left Side - Mobile App Wireframe */}
      <svg viewBox="0 0 200 400" className="absolute left-[5%] md:left-[10%] bottom-[20%] sm:bottom-auto sm:top-[20%] w-24 sm:w-32 md:w-48 h-auto pointer-events-none">
        <motion.rect x="10" y="10" width="180" height="380" rx="20" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(0)} />
        <motion.rect x="30" y="40" width="140" height="100" rx="10" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(0.5)} />
        <motion.line x1="30" y1="160" x2="170" y2="160" stroke={color} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1)} />
        <motion.line x1="30" y1="180" x2="120" y2="180" stroke={color} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.2)} />
        <motion.circle cx="50" cy="230" r="20" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.5)} />
        <motion.rect x="80" y="220" width="90" height="20" rx="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.7)} />
        <motion.rect x="30" y="270" width="140" height="80" rx="10" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(2)} />
      </svg>

      {/* Right Side - Web Dashboard Wireframe */}
      <svg viewBox="0 0 300 250" className="absolute right-[5%] md:right-[10%] bottom-[25%] sm:bottom-auto sm:top-[30%] w-32 sm:w-48 md:w-72 h-auto pointer-events-none">
        <motion.rect x="10" y="10" width="280" height="230" rx="10" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(0)} />
        <motion.line x1="10" y1="40" x2="290" y2="40" stroke={color} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(0.5)} />
        <motion.circle cx="30" cy="25" r="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1)} />
        <motion.circle cx="50" cy="25" r="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.2)} />
        <motion.circle cx="70" cy="25" r="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.4)} />
        <motion.rect x="30" y="60" width="70" height="150" rx="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.5)} />
        <motion.rect x="120" y="60" width="150" height="80" rx="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(1.8)} />
        <motion.rect x="120" y="160" width="150" height="50" rx="5" stroke={color} strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transitionProps(2.1)} />
      </svg>
    </>
  );
};

export function Hero() {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const [radius, setRadius] = useState(150);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 1280) {
        setRadius(350); // Large Desktop
      } else if (window.innerWidth >= 1024) {
        setRadius(280); // Desktop
      } else if (window.innerWidth >= 768) {
        setRadius(220); // Tablet
      } else {
        setRadius(150); // Mobile
      }
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        mouseX.set(clientX - rect.left);
        mouseY.set(clientY - rect.top);
      }
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    return () => {
      window.removeEventListener('resize', updateRadius);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [mouseX, mouseY]);

  const clipPath = useMotionTemplate`circle(${radius}px at ${mouseX}px ${mouseY}px)`;

  return (
    <section ref={heroRef} id="home" className="relative h-screen w-full flex flex-col items-center overflow-hidden bg-[#131313] cursor-default">
      {/* Blurred Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="https://github.com/Lumystik/PortfolioLucia/blob/main/images/me.jpg?raw=true" className="w-full h-full object-cover blur-[10px] scale-105" alt="Hero Background Blurred" />
        <WireframeSketches color="" />
      </div>
      
      {/* Sharp Background with Clip Path */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath }}
      >
        <img src="https://github.com/Lumystik/PortfolioLucia/blob/main/images/mememe.png?raw=true" className="w-full h-full object-cover" alt="Hero Background Sharp" />
        <WireframeSketches color="rgba(211, 211, 211, 0.65)" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pointer-events-none">
        <div className="relative flex flex-col w-full h-full justify-end pb-10 md:pb-8 lg:pb-6">
          
          {/* Labels */}
          <div className="flex justify-between w-full text-white font-mono text-[10px] md:text-sm uppercase tracking-widest mb-4 md:mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            >
              Interaction Designer
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
            >
              UX/UI Designer
            </motion.span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
            className="w-full flex justify-between text-[11.5vw] md:text-[10vw] lg:text-[9vw] xl:text-[115px] leading-[0.8] tracking-tighter text-white font-medium m-0 p-0 whitespace-nowrap"
          >
            {"LUCÍA".split('').map((char, i) => <span key={`first-${i}`}>{char}</span>)}
            <span className="w-[4vw] md:w-[3vw]"></span>
            {"MEDINA".split('').map((char, i) => <span key={`last-${i}`}>{char}</span>)}
          </motion.h1>
        </div>
      </div>

      {/* Orange Text Reveal Layer */}
      <motion.div 
        className="absolute inset-0 z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pointer-events-none"
        style={{ clipPath }}
      >
        <div className="relative flex flex-col w-full h-full justify-end pb-10 md:pb-8 lg:pb-6">
          <div className="flex justify-between w-full text-[#E54D2E] font-mono text-[10px] md:text-sm uppercase tracking-widest mb-4 md:mb-6">
            <span>Interaction Designer</span>
            <span>UX/UI Designer</span>
          </div>
          <h1 className="w-full flex justify-between text-[11.5vw] md:text-[10vw] lg:text-[9vw] xl:text-[115px] leading-[0.8] tracking-tighter text-transparent font-medium m-0 p-0 whitespace-nowrap">
            {"LUCÍA".split('').map((char, i) => <span key={`first-orange-${i}`}>{char}</span>)}
            <span className="w-[4vw] md:w-[3vw]"></span>
            {"MEDINA".split('').map((char, i) => <span key={`last-orange-${i}`}>{char}</span>)}
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
