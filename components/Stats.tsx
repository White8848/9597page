
import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { label: 'Efficiency Rate', value: '94.2%', trend: '+5.2%', icon: 'bolt' },
  { label: 'Active Nodes', value: '12/12', trend: 'Stable', icon: 'hub' },
  { label: 'Uptime Cycle', value: '99.9h', trend: '+0.1', icon: 'update' },
  { label: 'Global Rank', value: '#04', trend: '▲ Tier 1', icon: 'trophy' },
];

const Stats: React.FC = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      {stats.map((stat, idx) => (
        <div key={idx} className="glassmorphism rounded-xl p-6 flex flex-col gap-3 group transition-all hover:bg-primary/5 hover:border-primary/40">
          <div className="flex justify-between items-start">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            <span className="material-symbols-outlined text-primary text-xl">{stat.icon}</span>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <span className={`${stat.trend === 'Stable' ? 'text-white/20' : 'text-primary'} text-xs font-bold pb-1`}>
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
