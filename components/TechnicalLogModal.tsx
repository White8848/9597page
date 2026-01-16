
import React, { useEffect, useState } from 'react';
import { generateTechnicalLogs } from '../services/geminiService';
import { TechnicalLog } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TechnicalLogModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<TechnicalLog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      generateTechnicalLogs().then(data => {
        setLogs(data);
        setLoading(false);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl glassmorphism rounded-2xl overflow-hidden border-primary/20 shadow-2xl flex flex-col max-h-[80vh]">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-primary/5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">terminal</span>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">Live Technical Logs</h3>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto font-mono text-xs flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="size-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-primary animate-pulse">ESTABLISHING DATA LINK...</span>
            </div>
          ) : (
            <div className="space-y-4">
              {logs.map((log, idx) => (
                <div key={idx} className="border-l-2 border-white/10 pl-4 py-2 hover:bg-white/5 transition-colors group">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white/40">[{log.timestamp}]</span>
                    <span className={`font-bold ${
                      log.status === 'CRITICAL' ? 'text-primary' : 
                      log.status === 'WARNING' ? 'text-yellow-500' : 
                      'text-green-500'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                  <div className="text-primary font-bold mb-1 uppercase tracking-wider">{log.component}</div>
                  <p className="text-white/80 leading-relaxed">{log.message}</p>
                </div>
              ))}
              <div className="pt-4 text-primary/40 animate-pulse">_ TERMINAL_READY - LISTENING FOR NEXT CYCLE</div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-white/10 bg-black/50 flex justify-end">
          <button 
            onClick={() => {
               setLoading(true);
               generateTechnicalLogs().then(data => {
                 setLogs(data);
                 setLoading(false);
               });
            }}
            className="text-[10px] font-bold uppercase text-primary tracking-widest hover:underline"
          >
            Refresh Feed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalLogModal;
