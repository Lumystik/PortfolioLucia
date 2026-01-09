import React, { useState, useRef } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Maximize,
  Minimize, 
  Download, 
  Image as ImageIcon,
  Palette,
  Sun,
  Moon,
  Copy,
  Check,
  Scan
} from 'lucide-react';

const App = () => {
  const [imageUrl, setImageUrl] = useState("https://github.com/Lumystik/PortfolioLucia/blob/main/images/Captura%20de%20pantalla%202026-01-09%20142312.png?raw=true");
  const [frameType, setFrameType] = useState('browser'); // browser, mobile, glass
  const [bgStyle, setBgStyle] = useState('gradient-1'); // gradient-1, gradient-2, solid-light, solid-dark
  const [darkMode, setDarkMode] = useState(false);
  const [padding, setPadding] = useState('medium'); // none, small, medium, large
  const [imgFit, setImgFit] = useState('object-cover'); // object-cover, object-contain
  const [showControls, setShowControls] = useState(true);
  const [copied, setCopied] = useState(false);

  // Configuration for backgrounds
  const backgrounds = {
    'gradient-1': 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100',
    'gradient-2': 'bg-gradient-to-tr from-blue-100 via-slate-100 to-emerald-100',
    'solid-light': 'bg-slate-50',
    'solid-dark': 'bg-black',
    'mesh': 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-orange-100 to-rose-200',
  };

  const paddings = {
    none: 'p-0',
    small: 'p-8',
    medium: 'p-16',
    large: 'p-32',
  };

  const handleCopyCode = () => {
    // In a real scenario, this might export HTML/CSS
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const MockupBrowser = ({ src, dark, fit }) => (
    <div className={`relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200/50'}`}>
      {/* Browser Header */}
      <div className={`h-10 border-b flex items-center px-4 space-x-2 ${dark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors"></div>
        </div>
        <div className={`flex-1 flex justify-center`}>
          <div className={`w-1/2 h-5 rounded-md flex items-center justify-center text-[10px] opacity-40 ${dark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
            example.com
          </div>
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
      {/* Browser Body */}
      {/* If fitting content, we allow height to adapt (h-auto), otherwise fixed aspect ratio */}
      <div className={`relative w-full ${fit === 'object-contain' ? 'aspect-auto min-h-[400px]' : 'aspect-video'} bg-gray-100 overflow-hidden group flex items-center justify-center`}>
        <img 
          src={src} 
          alt="Mockup Content" 
          className={`w-full h-full ${fit}`}
          onError={(e) => {e.target.src = 'https://via.placeholder.com/800x600?text=Invalid+Image+URL'}}
        />
      </div>
    </div>
  );

  const MockupMobile = ({ src, dark, fit }) => (
    <div className={`relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-8 overflow-hidden shadow-2xl transition-all duration-300 ${dark ? 'border-gray-800 bg-gray-900' : 'border-gray-900 bg-black'}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20"></div>
      
      {/* Screen */}
      <div className="w-full h-full bg-white overflow-hidden relative flex items-center justify-center">
        {/* Status Bar Mockup */}
        <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-black/40 to-transparent z-10 flex justify-between items-start px-6 pt-2 text-[10px] text-white font-medium">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
            <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
          </div>
        </div>
        <img 
          src={src} 
          alt="Mockup Content" 
          className={`w-full h-full ${fit}`}
          onError={(e) => {e.target.src = 'https://via.placeholder.com/400x800?text=Invalid+Image+URL'}}
        />
      </div>
    </div>
  );

  const MockupGlass = ({ src, dark, fit }) => (
    <div className={`relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 p-2 backdrop-blur-xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'}`}>
      <div className={`w-full h-full rounded-xl overflow-hidden relative aspect-[4/3] ${dark ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center`}>
         <img 
          src={src} 
          alt="Mockup Content" 
          className={`w-full h-full ${fit} transition-transform duration-700 hover:scale-105`}
          onError={(e) => {e.target.src = 'https://via.placeholder.com/800x600?text=Invalid+Image+URL'}}
        />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
      </div>
      {/* Minimal Footer */}
      <div className={`h-12 flex items-center justify-between px-4 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
        <div className="flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full ${dark ? 'bg-emerald-400' : 'bg-emerald-500'}`}></div>
           <span className="text-xs font-medium tracking-wide uppercase">Project Preview</span>
        </div>
        <Maximize className="w-4 h-4 opacity-50" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-indigo-100">
      
      {/* Navbar / Tool Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-bold text-lg tracking-tight">MockupGen</span>
        </div>

        <div className="flex items-center gap-4">
           <button 
             onClick={() => setShowControls(!showControls)}
             className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
           >
             {showControls ? 'Hide Controls' : 'Show Controls'}
           </button>
           <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
             <Download className="w-4 h-4" />
             Export
           </button>
        </div>
      </header>

      <main className="pt-16 min-h-screen flex">
        
        {/* Main Preview Stage */}
        <div className={`flex-1 relative overflow-hidden flex items-center justify-center transition-all duration-500 ${backgrounds[bgStyle]} ${paddings[padding]}`}>
           
           {/* The Mockup */}
           <div className="w-full transition-all duration-500 transform">
             {frameType === 'browser' && <MockupBrowser src={imageUrl} dark={darkMode} fit={imgFit} />}
             {frameType === 'mobile' && <MockupMobile src={imageUrl} dark={darkMode} fit={imgFit} />}
             {frameType === 'glass' && <MockupGlass src={imageUrl} dark={darkMode} fit={imgFit} />}
           </div>

           {/* Watermark / Helper text if empty */}
           {!imageUrl && (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="text-slate-400/50 text-4xl font-bold uppercase tracking-widest">Preview Area</span>
             </div>
           )}
        </div>

        {/* Configuration Sidebar */}
        <div 
          className={`fixed right-0 top-16 bottom-0 w-80 bg-white border-l border-gray-100 overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${showControls ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-6 space-y-8">
            
            {/* Image Input */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-3 h-3" /> Source
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Paste Image URL here..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
              <p className="text-[10px] text-gray-400">Paste a direct link to your image or screenshot.</p>
            </div>

            {/* Frame Type Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Monitor className="w-3 h-3" /> Frame Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setFrameType('browser')}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${frameType === 'browser' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'border-gray-100 hover:border-gray-200 text-gray-500'}`}
                >
                  <Monitor className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium">Browser</span>
                </button>
                <button 
                  onClick={() => setFrameType('mobile')}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${frameType === 'mobile' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'border-gray-100 hover:border-gray-200 text-gray-500'}`}
                >
                  <Smartphone className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium">Mobile</span>
                </button>
                <button 
                  onClick={() => setFrameType('glass')}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${frameType === 'glass' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'border-gray-100 hover:border-gray-200 text-gray-500'}`}
                >
                  <Layers className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium">Glass</span>
                </button>
              </div>
            </div>

            {/* Image Fit Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Scan className="w-3 h-3" /> Image Fit
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setImgFit('object-cover')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${imgFit === 'object-cover' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'border-gray-100 hover:border-gray-200 text-gray-500'}`}
                >
                  <Maximize className="w-4 h-4 mb-1" />
                  <span className="text-[10px] font-medium">Fill (Cover)</span>
                </button>
                <button 
                  onClick={() => setImgFit('object-contain')}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${imgFit === 'object-contain' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'border-gray-100 hover:border-gray-200 text-gray-500'}`}
                >
                  <Minimize className="w-4 h-4 mb-1" />
                  <span className="text-[10px] font-medium">Fit (Contain)</span>
                </button>
              </div>
            </div>

             {/* Appearance Toggle */}
             <div className="space-y-3">
               <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Sun className="w-3 h-3" /> Appearance
              </label>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button 
                  onClick={() => setDarkMode(false)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1 ${!darkMode ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
                >
                  <Sun className="w-3 h-3" /> Light
                </button>
                <button 
                  onClick={() => setDarkMode(true)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-all flex items-center justify-center gap-1 ${darkMode ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
                >
                  <Moon className="w-3 h-3" /> Dark
                </button>
              </div>
            </div>

            {/* Background Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Palette className="w-3 h-3" /> Background
              </label>
              <div className="grid grid-cols-5 gap-2">
                {Object.keys(backgrounds).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setBgStyle(bg)}
                    className={`w-full aspect-square rounded-full border-2 transition-all ${bgStyle === bg ? 'border-indigo-600 scale-110' : 'border-transparent hover:scale-110'}`}
                  >
                     <div className={`w-full h-full rounded-full ${backgrounds[bg].replace('bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]', 'bg-orange-200')} ${bg === 'solid-light' ? 'bg-slate-100' : ''} ${bg === 'solid-dark' ? 'bg-slate-800' : ''} ${bg === 'gradient-1' ? 'bg-gradient-to-br from-indigo-100 to-pink-100' : ''} ${bg === 'gradient-2' ? 'bg-gradient-to-tr from-blue-100 to-emerald-100' : ''}`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Padding Selector */}
            <div className="space-y-3">
               <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Maximize className="w-3 h-3" /> Inset / Padding
              </label>
              <input 
                type="range" 
                min="0" 
                max="3" 
                step="1" 
                value={
                  padding === 'none' ? 0 : 
                  padding === 'small' ? 1 : 
                  padding === 'medium' ? 2 : 3
                }
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setPadding(
                    val === 0 ? 'none' : 
                    val === 1 ? 'small' : 
                    val === 2 ? 'medium' : 'large'
                  );
                }}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                <span>None</span>
                <span>Small</span>
                <span>Med</span>
                <span>Large</span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
               <button 
                onClick={handleCopyCode}
                className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95"
               >
                 {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                 {copied ? 'Copied to Clipboard!' : 'Copy CSS / Config'}
               </button>
               <p className="text-center text-[10px] text-gray-400 mt-2">
                 Generate code to embed this style in your React project.
               </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
