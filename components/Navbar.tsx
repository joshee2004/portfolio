import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 h-16 bg-slate-900/80 backdrop-blur-sm">
        <a href="/" className="font-bold text-lg text-slate-200">Joshua Royar</a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block text-center bg-teal-400 text-slate-900 font-bold py-2 px-4 rounded-lg hover:bg-teal-300 transition-colors duration-300 text-sm">
          Download Resume
        </a>
        
        <button onClick={toggleMenu} className="z-50 text-slate-200 lg:hidden" aria-label="Toggle menu" aria-expanded={isOpen}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </header>

      {/* Full-screen menu */}
      <div className={`fixed inset-0 z-30 bg-slate-900 transition-opacity duration-300 ease-in-out lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center justify-center h-full pt-16">
          <ul className="text-center">
            {navItems.map((item) => (
              <li key={item.id} className="my-6">
                <a href={`#${item.id}`} onClick={closeMenu} className="text-3xl font-bold text-slate-300 hover:text-teal-300 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 text-center bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-300 transition-colors duration-300">
             Download Resume
           </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
