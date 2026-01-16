
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative mb-16 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">TEAM 9597 | MISSION CYCLE 2024.01</span>
            </div>
            <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tighter">
              LUBAN<br/><span className="text-primary italic">ROBOTICS</span> UNIT
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              High-fidelity visual intelligence, spatial mapping data, and technical logs for the current competitive deployment cycle of Team 9597.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="group flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg h-14 px-6 bg-primary text-white text-sm font-bold uppercase tracking-widest transition-all hover:translate-y-[-2px] shadow-[0_4px_20px_rgba(255,0,0,0.4)]">
              <span>Technical Logs</span>
              <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward_ios</span>
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg h-14 px-6 glassmorphism text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined text-sm text-primary">sensors</span>
              <span>Initial Scan</span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] flex items-center justify-center">
          <div 
            className="relative w-full h-full bg-cover bg-center rounded-2xl glassmorphism overflow-hidden border border-white/5" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADbebJ3wuSfCXkdxYehsXsxECvpy8Q_4IRP-gRfPcvwFYhdXCir2uXTsJZo2PWuUxR6WeTAfGGUJfBJLl_BnQJrfagXTNWBfbSy2IG9EkV_rlN-7UZXR4yTehmtBGuM60C5vkGp4Po8ay28DdIXqQZY_fyyal9L11OXEy4yXPt84ry853KUEJ2AkNX8iSU5jE8EZCTOUEMTnj7stFdSYkkrkXwNysHvSVhFNVdlv2e_AupNnzYEU15uNuLRvfIJuzYoQYN5rHTYmz6")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="glassmorphism p-3 rounded-lg flex items-center gap-3 border-primary/30">
                <div className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#FF0000]"></div>
                <span className="text-[10px] font-mono uppercase tracking-tighter text-primary">Live Status: Operational</span>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="w-full h-full border border-primary/20 rounded-2xl"></div>
              <div className="absolute left-1/4 top-1/4 w-32 h-32 border-l-2 border-t-2 border-primary"></div>
              <div className="absolute right-1/4 bottom-1/4 w-32 h-32 border-r-2 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
