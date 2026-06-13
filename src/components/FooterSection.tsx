import React from 'react';

export default function FooterSection() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="main-footer-section" 
      className="relative w-full h-screen bg-black text-white flex flex-col justify-between px-6 md:px-14 py-12 md:py-16 overflow-hidden border-t border-white/5 select-none"
    >
      {/* Background Subtle Gradient Overlay to match rest of the app */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-800/10 blur-[130px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[110px]" />
      </div>

      {/* Massive Brand Watermark taking up the upper part / center */}
      <div className="w-full flex-grow flex items-center justify-center relative z-10">
        <h1 className="font-bebas text-[18.2vw] leading-none tracking-normal text-white uppercase text-center select-none w-full font-black">
          OXYARENA
        </h1>
      </div>

      {/* Grid footer content */}
      <div className="w-full max-w-7xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-end mt-4">
        {/* Left Component Stack */}
        <div className="flex flex-col gap-8 md:gap-14 max-w-sm text-left">
          <p className="text-xs md:text-sm text-white/70 font-['Outfit'] font-light tracking-wide leading-relaxed">
            Professional coaching and modern training programs designed to help athletes grow stronger and perform better.
          </p>
          
          <div className="flex flex-col gap-3 font-['Outfit'] font-normal text-sm md:text-base">
            <button 
              onClick={() => handleScrollTo('hero-main-content')}
              className="group flex items-center gap-1 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <span className="border-b border-white pb-[2px] transition-opacity duration-200 hover:opacity-85">Quick Links</span>
              <span className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-white/50 group-hover:text-white">↗</span>
            </button>
            
            <button 
              onClick={() => handleScrollTo('facilities')}
              className="group flex items-center gap-1 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <span className="border-b border-white pb-[2px] transition-opacity duration-200 hover:opacity-85">Facilities</span>
              <span className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-white/50 group-hover:text-white">↗</span>
            </button>
            
            <button 
              onClick={() => handleScrollTo('about')}
              className="group flex items-center gap-1 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <span className="border-b border-white pb-[2px] transition-opacity duration-200 hover:opacity-85">Support Links</span>
              <span className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-white/50 group-hover:text-white">↗</span>
            </button>
          </div>
        </div>

        {/* Right Component Stack */}
        <div className="flex flex-col items-start md:items-end gap-8 md:gap-14 font-['Outfit']">
          <div className="flex flex-col items-start md:items-end gap-3 text-sm md:text-base">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-1 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <span className="border-b border-white pb-[2px] transition-opacity duration-200 hover:opacity-85">Address</span>
              <span className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-white/50 group-hover:text-white">↗</span>
            </a>
            
            <a 
              href="tel:+88012345678" 
              className="group flex items-center gap-1 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <span className="border-b border-white pb-[2px] transition-opacity duration-200 hover:opacity-85">Phone</span>
              <span className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-white/50 group-hover:text-white">↗</span>
            </a>
            
            <a 
              href="mailto:info@oxyarena.com" 
              className="group flex items-center gap-1 w-fit text-white/90 hover:text-white transition-colors duration-200"
            >
              <span className="border-b border-white pb-[2px] transition-opacity duration-200 hover:opacity-85">Email</span>
              <span className="text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-white/50 group-hover:text-white">↗</span>
            </a>
          </div>

          <p className="text-[10px] md:text-xs text-white/40 tracking-widest text-left md:text-right font-light">
            © 2026 OxyArena Sports Center.<br className="block md:hidden" /> All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
