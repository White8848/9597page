
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-10 px-6 lg:px-20 bg-background-dark">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded bg-primary">
              <span className="text-[10px] font-black">9597</span>
            </div>
            <h2 className="text-lg font-bold uppercase tracking-tight text-white">LuBan Robotics</h2>
          </div>
          <p className="text-white/30 text-xs max-w-xs uppercase tracking-widest">Team 9597 system architecture designed for high-performance visual logging and team telemetry.</p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">System</h4>
            <nav className="flex flex-col gap-2">
              <a className="text-xs text-white/50 hover:text-primary transition-colors uppercase" href="#">Data Log</a>
              <a className="text-xs text-white/50 hover:text-primary transition-colors uppercase" href="#">Hardware</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Team</h4>
            <nav className="flex flex-col gap-2">
              <a className="text-xs text-white/50 hover:text-primary transition-colors uppercase" href="#">Mission</a>
              <a className="text-xs text-white/50 hover:text-primary transition-colors uppercase" href="#">Connect</a>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a className="size-10 rounded-full glassmorphism flex items-center justify-center hover:bg-primary transition-all group" href="#">
            <span className="material-symbols-outlined text-sm text-white group-hover:text-white transition-colors">share</span>
          </a>
          <a className="size-10 rounded-full glassmorphism flex items-center justify-center hover:bg-primary transition-all group" href="#">
            <span className="material-symbols-outlined text-sm text-white group-hover:text-white transition-colors">terminal</span>
          </a>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">Copyright © 2024 LuBan Robotics Team 9597. All units operational.</p>
        <div className="flex items-center gap-2">
          <div className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_#FF0000]"></div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-tighter">Secure Hub Connection</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
