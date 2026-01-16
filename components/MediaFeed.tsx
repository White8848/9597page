
import React, { useState } from 'react';
import { MediaItem } from '../types';

const initialItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    category: 'Electronics',
    title: 'Vision Control Unit Iteration',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5TvqoaH2pHWRf8mZtyup2nhZkcg_cJMJ0Cc2f5bP21el8pqhsk6lgmHqvQtzoaTcjUPrldGHGeA11Bp40XgIUJv4G1lRx1eg-vOaYuGs0uU9_fpeKvOnm61uEdB6sKc5KJNjX3FPzK8LrUlFcF8jHgKAAIxmAziD_nxAvGmY9Gnfg-ek8y8frZtSBkMxWHAIZuM1kIpdkP3joFmm3nv1h1Zuazdsn5rmOl0JLsYSEMdj5v7ER8cliLUvZ9_7NtaPgLJidnIuXYk5K',
    metadata: { iso: '400', fstop: 'f/2.8', shutter: '1/250s' }
  },
  {
    id: '2',
    type: 'cad',
    category: 'Mechanical',
    title: 'LuBan Base Plate',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz1Cd5xwZivMR7tEBJwgqVwBjToDbUsC_Cpq7_lYy-Yt5JZZC1F2vNem4rmUQx9-4Qg2CMugCDsKgj3_U06Ry8PciLm1dJ02UFQfvkQXzAW5P0MVjgAom68rKUqlAk3djlfQ-xlBNsNvZkaUvtsMUfyRfGRdJoTGN4dx2dqg81_BhkuVEyM9HUU44g4F7Q8PGHl6cc94R0o7cndEWi7p19nDPQQk1-O94m-9f6QaSyPaz9l7TcObcqdIKeVgVFW08zkbWp68cudonR',
  },
  {
    id: '3',
    type: 'image',
    category: 'Software',
    title: 'Vision System Test',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY1XiO91G4mHbV0023PFVlbnTYTnk08talUl9b3eUTILhEA9nP3WJuaRytfW196cPj-0XNrMTxl-5UgYWr74PwYSODYr0drXQYRZ3yfdyJWCCwDzZmAa0R5P6Fo5YfSRgjF28_YyBfeqJsxOuFzq7gvsNRxYi5Q3ZryqcglfBWFz5M5fSuQejvUt2GeXDjpISNSkW4bVa7i0sXQstFLT5CumBVdUbnCmPHRznfNi5cYrYuoMsrUXi-ws2clx6ju6mXaG55ZceKhypR',
  },
  {
    id: '4',
    type: 'video',
    category: 'Match VODs',
    title: 'Match 42 Highlights',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgAb94wiJl_HEnFF6T2bLhbuIu6FB8VlQNoWNuVaYPvkbn_s4sQpQ5QUEXC8ZRUcLrve7bbWC-tp4MdQ-mhyIShLCYde1Skfm6sYgmPSEPXBCXsg8NmDmqdp59BQkh7xxOhew9rfcbwWNhSKyFPti76cL7LHNmEVuo4XqiFYtGQfHPO792ZVy9I4ozw5inHAUdK-wT7ev7ABO1gSpGycADF7_Uew7F_2pcDar62ajQ7KWHuhL7_GJveWgvvBfMeCaYUUtgrxeBYzYg',
    metadata: { vodRef: 'Match 42' }
  },
  {
    id: '5',
    type: 'image',
    category: 'Mechanical',
    title: 'Manipulator Stress Test',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg5ocybpVW8zmGQ6pqnRzzLozYWkgjhkvRPTGalVl-Pfa89M_9FOrWpk_WcxPKuX3mXUJYHCA6fT668zKObTIAPTIdsGNyXWVfxXcWb_Y-Qryf_q8GCPMXfWPUnOKJp7ktN8NCopf5xq6ggt9e4AStqd8Mt0Ocgqa7ttBvSNUOn0VJZ3mPjz4BGMqc16fAlugbcW8fD-PiN8XjooBCOYFPGj54s5QmVaQNUqYYPOm_-dj7pGNtDxPcnHh4KxslRsCTr7pReJe1JG7Z',
  }
];

const MediaFeed: React.FC = () => {
  const [filter, setFilter] = useState<string>('All Data');
  const categories = ['All Data', 'Mechanical', 'Match VODs', 'Electronics'];

  const filteredItems = filter === 'All Data' 
    ? initialItems 
    : initialItems.filter(item => item.category === filter);

  return (
    <>
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold uppercase tracking-tight border-l-4 border-primary pl-4">Technical Media Feed</h2>
          <p className="text-white/40 text-sm">Visual logs of LuBan hardware iterations and competitive matches.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <div 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 cursor-pointer transition-all ${
                filter === cat ? 'bg-primary shadow-[0_0_10px_rgba(255,0,0,0.2)]' : 'glassmorphism hover:bg-white/10'
              }`}
            >
              <span className={`material-symbols-outlined text-lg ${filter === cat ? 'text-white' : 'text-white/60'}`}>
                {cat === 'All Data' ? 'grid_view' : cat === 'Mechanical' ? 'robot_2' : cat === 'Match VODs' ? 'videocam' : 'memory'}
              </span>
              <p className={`text-xs font-bold uppercase tracking-widest ${filter === cat ? 'text-white' : 'text-white/60'}`}>{cat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
        {/* Large Feature Item */}
        <div className="md:col-span-8 group relative aspect-video overflow-hidden rounded-xl border border-white/10 glowing-border transition-all">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
            style={{ backgroundImage: `url(${initialItems[0].imageUrl})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2 block font-bold">LUBAN_ARCHIVE_2024</span>
            <h3 className="text-2xl font-bold uppercase mb-4">{initialItems[0].title}</h3>
            <div className="flex gap-4">
              <div className="glassmorphism py-1 px-3 rounded text-[10px] font-mono border-primary/20">ISO {initialItems[0].metadata?.iso}</div>
              <div className="glassmorphism py-1 px-3 rounded text-[10px] font-mono border-primary/20">{initialItems[0].metadata?.fstop}</div>
              <div className="glassmorphism py-1 px-3 rounded text-[10px] font-mono border-primary/20">{initialItems[0].metadata?.shutter}</div>
            </div>
          </div>
          <div className="absolute top-6 right-6 flex size-12 items-center justify-center rounded-full glassmorphism opacity-0 group-hover:opacity-100 transition-opacity border-primary/50 text-primary">
            <span className="material-symbols-outlined">zoom_in</span>
          </div>
        </div>

        {/* Awards Card */}
        <div className="md:col-span-4 glassmorphism rounded-xl p-8 flex flex-col justify-between border-primary/40 bg-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">military_tech</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">System Awards</span>
            </div>
            <h3 className="text-2xl font-bold uppercase leading-tight">Excellence in Engineering Design</h3>
            <p className="text-white/50 text-sm leading-relaxed">Recognized for the LuBan spatial mapping algorithm used in the State Championship Finals.</p>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
            <span className="text-xs font-mono text-white/30 tracking-tighter">REF_ID: #LUBAN-9597-ST</span>
            <button className="text-xs font-bold uppercase text-primary tracking-widest hover:underline underline-offset-4">View Cert</button>
          </div>
        </div>

        {/* Grid Items */}
        {filteredItems.slice(1).map((item) => (
          <div key={item.id} className="md:col-span-4 group relative aspect-square overflow-hidden rounded-xl border border-white/10 glowing-border transition-all">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="size-16 rounded-full glassmorphism flex items-center justify-center group-hover:scale-110 transition-transform border-primary/50 text-primary">
                  <span className="material-symbols-outlined text-3xl">play_arrow</span>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                  {item.category === 'Match VODs' ? `VOD: ${item.metadata?.vodRef}` : item.category}
                </span>
                <h4 className="text-sm font-bold uppercase">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}

        {/* Technical Specs Card */}
        <div className="md:col-span-4 glassmorphism rounded-xl p-8 flex flex-col gap-6 border-white/5">
          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
            <span className="material-symbols-outlined text-primary">memory</span>
          </div>
          <div>
            <h4 className="text-lg font-bold uppercase mb-4 tracking-tight">Technical Specs</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/40 text-xs uppercase tracking-widest">Motors</span>
                <span className="text-xs font-mono text-primary font-bold">12x NEO Brushless</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/40 text-xs uppercase tracking-widest">Processors</span>
                <span className="text-xs font-mono text-primary font-bold">Jetson Orin Nano</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/40 text-xs uppercase tracking-widest">Weight</span>
                <span className="text-xs font-mono text-primary font-bold">118.5 lbs</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-white/40 text-xs uppercase tracking-widest">Vision</span>
                <span className="text-xs font-mono text-primary font-bold">Limelight 3 + OpenCV</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Feature Item Bottom */}
        <div className="md:col-span-8 group relative aspect-video overflow-hidden rounded-xl border border-white/10 glowing-border transition-all">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
            style={{ backgroundImage: `url(${initialItems[4].imageUrl})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-primary font-bold uppercase">Testing Session</span>
              <h3 className="text-2xl font-bold uppercase">{initialItems[4].title}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaFeed;
