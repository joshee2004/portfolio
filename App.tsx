import React, { useState, useEffect } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScrollAndResize = () => {
      // Active section logic
      const sections = ['about', 'skills', 'projects', 'experience', 'education'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'about';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);

            // Background fade logic for all devices
            const fadeEnd = window.innerHeight * 0.5;
            const newOpacity = Math.max(0, 1 - window.scrollY / fadeEnd);
            setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScrollAndResize, { passive: true });
    window.addEventListener('resize', handleScrollAndResize, { passive: true });
    handleScrollAndResize(); // Initial check on load

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  return (
    <div className="bg-slate-900">
      {/* Background Image & Overlay */}
      <div
        className="fixed inset-0 z-0 transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/static/cover.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8">
          <div className="lg:flex lg:justify-between lg:gap-8">
            <LeftPane activeSection={activeSection} />
            <RightPane />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
