
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MediaFeed from './components/MediaFeed';
import Footer from './components/Footer';
import TechnicalLogModal from './components/TechnicalLogModal';

const App: React.FC = () => {
  const [isLogOpen, setIsLogOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white font-display">
      <Header />
      
      <main className="flex flex-col flex-1 px-6 lg:px-20 py-10 max-w-[1440px] mx-auto w-full">
        {/* We intercept the Hero section buttons by wrapping or using event propagation if needed, 
            but for this demo, let's just use a simple wrapper that listens for clicks on buttons with "Technical Logs" text. */}
        <div onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.textContent?.includes('Technical Logs')) {
            setIsLogOpen(true);
          }
        }}>
          <Hero />
        </div>
        
        <Stats />
        <MediaFeed />
      </main>

      <Footer />

      <TechnicalLogModal 
        isOpen={isLogOpen} 
        onClose={() => setIsLogOpen(false)} 
      />
    </div>
  );
};

export default App;
