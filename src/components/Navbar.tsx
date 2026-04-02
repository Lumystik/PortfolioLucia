import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);
  
  const useDarkTheme = !isHome || isScrolled;
  
  const textColor = isScrolled ? 'text-black' : (useDarkTheme ? 'text-[#131313]' : 'text-black');
  const bgColor = isScrolled ? 'bg-[#FFFFFF] shadow-xl' : (useDarkTheme ? 'bg-white/90 shadow-sm' : 'bg-white');
  const blendMode = isHome && !isScrolled ? 'mix-blend-difference' : '';

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-full max-w-7xl px-6 ${textColor} ${blendMode} pointer-events-none transition-all duration-300`}
      >
        <Link to="/#home" className={`pointer-events-auto flex items-center justify-center transition-all duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="relative w-10 h-10 group">
            <img 
              src="https://github.com/Lumystik/PortfolioLucia/blob/main/images/butterfly.png?raw=true" 
              alt="Lucía Medina Logo" 
              className={`w-full h-full object-contain transition-all duration-300 group-hover:opacity-0 ${!isHome && !isScrolled ? 'brightness-0' : ''}`}
              referrerPolicy="no-referrer"
            />
            <div 
              className="absolute inset-0 bg-[#E54D2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                maskImage: `url(https://github.com/Lumystik/PortfolioLucia/blob/main/images/butterfly.png?raw=true)`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(https://github.com/Lumystik/PortfolioLucia/blob/main/images/butterfly.png?raw=true)`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>
        </Link>
        
        <div className={`flex items-center ${bgColor} backdrop-blur-md px-6 py-3 rounded-full pointer-events-auto transition-all duration-300 hover:bg-white hover:text-[#131313] hover:shadow-lg`}>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
             <Link to="/#work" className="text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">Work</Link>
             <Link to="/#about" className="text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">About</Link>
             <Link to="/#contact" className="text-xs font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">Contact</Link>
          </div>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex md:hidden items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Open Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#131313] text-white flex flex-col items-center justify-center gap-12 pointer-events-auto"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-8 right-8 p-4 hover:opacity-70 transition-opacity"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <Link to="/#work" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">Work</Link>
            <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">About</Link>
            <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-mono uppercase tracking-widest hover:opacity-70 transition-opacity">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
