
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/10 bg-background-dark/80 px-6 py-4 backdrop-blur-md lg:px-20">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3 text-white">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary shadow-[0_0_15px_rgba(255,0,0,0.5)]">
            <span className="text-xs font-black">9597</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold leading-tight tracking-tight uppercase">LuBan Robotics</h2>
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">FRC TEAM 9597</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#">System Archive</a>
          <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#">Telemetry</a>
          <a className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider" href="#">Logistics</a>
        </nav>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full glassmorphism">
            <div className="text-white/50 flex items-center justify-center pl-4 border-r-0">
              <span className="material-symbols-outlined text-sm">search</span>
            </div>
            <input 
              className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 h-full placeholder:text-white/30 px-4 text-sm font-normal text-white" 
              placeholder="Query data..." 
            />
          </div>
        </label>
        <button className="flex min-w-[140px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary/80 transition-all shadow-[0_0_10px_rgba(255,0,0,0.3)]">
          <span>Connect System</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
