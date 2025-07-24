
import React from 'react';

interface LeftPaneProps {
  activeSection: string;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

const LeftPane: React.FC<LeftPaneProps> = ({ activeSection }) => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
      <div className="w-full pt-20 px-4 sm:px-8">
        <h1 className="text-5xl font-bold tracking-tight bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500 text-transparent sm:text-6xl">
          <a href="/">Joshua Royar</a>
        </h1>
        <h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-200 sm:text-3xl">
          AI & ML Engineer
        </h2>
        <p className="mt-6 max-w-xs leading-normal">
          I build intelligent applications and solve complex problems through data-driven approaches.
        </p>

        <nav className="hidden lg:block mt-16" aria-label="In-page navigation">
          <ul className="w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a className="group flex items-center py-3" href={`#${item.id}`}>
                  <span
                    className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                      activeSection === item.id ? 'w-16 bg-slate-200' : ''
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                      activeSection === item.id ? 'text-slate-200' : ''
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LeftPane;
