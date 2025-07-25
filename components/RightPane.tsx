import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { 
    PROJECTS, 
    EXPERIENCE, 
    EDUCATION, 
    SKILLS,
    GITHUB_URL,
    LINKEDIN_URL,
    WEBSITE_URL,
    EMAIL_ADDRESS,
    GithubIcon,
    LinkedinIcon,
    WebsiteIcon
} from '../constants';
import { Project, Experience as ExperienceType, EducationItem } from '../types';

// Custom hook to detect if an element is on screen
const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, options: IntersectionObserverInit = { threshold: 0.1 }): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                observer.unobserve(entry.target);
            }
        }, options);
        
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return isIntersecting;
};


// Animated wrapper component
const AnimatedDiv: React.FC<{children: ReactNode; className?: string}> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div
            ref={ref}
            className={`${className} transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </div>
    );
};

// Sub-components for RightPane
const SectionHeader: React.FC<{title: string}> = ({ title }) => (
    <div className="mb-6 px-0 py-0">
        <h2 className="text-lg font-bold uppercase tracking-widest text-slate-200">{title}</h2>
    </div>
);

const ProjectCard: React.FC<{project: Project}> = ({ project }) => (
    <li className="mb-6">
        <AnimatedDiv>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:col-span-8">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-xl">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>{project.title}</span>
                        </div>
                    </h3>
                    <ul className="mt-2 text-sm leading-normal list-disc pl-5">
                        {project.description.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </div>
            </div>
        </AnimatedDiv>
    </li>
);

const ExperienceCard: React.FC<{item: ExperienceType}> = ({ item }) => (
    <li className="mb-6">
        <AnimatedDiv>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.period}>{item.period}</header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-lg">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{item.role} · <span className="inline-block">{item.company}</span></span>
                            </span>
                        </div>
                    </h3>
                    <ul className="mt-2 text-sm leading-normal list-disc pl-5">
                        {item.description.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </div>
            </div>
        </AnimatedDiv>
    </li>
);

const EducationCard: React.FC<{item: EducationItem}> = ({item}) => (
    <AnimatedDiv className="rounded-md p-3 transition-all duration-300 hover:bg-slate-800/50">
        <p className="font-medium text-slate-200">{item.institution}</p>
        <p className="text-slate-400">{item.degree}</p>
        <div className="flex justify-between text-sm text-slate-500">
            <span>{item.period}</span>
            {item.grade && <span>{item.grade}</span>}
        </div>
    </AnimatedDiv>
);

const RightPane: React.FC = () => {
    return (
        <main className="px-4 sm:px-8 lg:w-7/12 lg:py-16">
            <section id="about" className="pt-8 mb-8 scroll-mt-12 md:pt-16 md:mb-12 lg:mb-16 lg:scroll-mt-16" aria-label="About me">
                <SectionHeader title="About" />
                <AnimatedDiv>
                    <p className="mb-4">Final-year B.E. student specializing in Artificial Intelligence and Machine Learning with strong technical exposure to full-stack development, data science, and AI integration. Passionate about technology and coding, I thrive on solving complex problems through data-driven approaches.</p>
                    <p className="mb-4">With hands-on experience in machine learning concepts and a strong foundation in programming, I am eager to apply my skills and continue learning as an intern in ML engineering or data science. I am enthusiastic about collaborating with innovative teams and contributing to impactful tech projects.</p>
                </AnimatedDiv>
            </section>

            <section id="skills" className="pt-8 mb-8 scroll-mt-12 md:mb-12 lg:mb-16 lg:scroll-mt-16" aria-label="Skills">
                <SectionHeader title="Skills" />
                 <AnimatedDiv>
                    {SKILLS.map((category) => (
                        <div key={category.title} className="mb-3">
                            <h3 className="font-bold text-slate-300 mb-2 text-lg">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <div key={skill} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </AnimatedDiv>
            </section>

            <section id="projects" className="pt-8 mb-8 scroll-mt-12 md:mb-12 lg:mb-16 lg:scroll-mt-16" aria-label="Projects">
                <SectionHeader title="Projects" />
                <ul className="group/list">
                    {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
                </ul>
            </section>
            
            <section id="experience" className="pt-8 mb-8 scroll-mt-12 md:mb-12 lg:mb-16 lg:scroll-mt-16" aria-label="Experience">
                <SectionHeader title="Experience" />
                <ul className="group/list">
                    {EXPERIENCE.map((item, index) => <ExperienceCard key={index} item={item} />)}
                </ul>
            </section>

            <section id="education" className="pt-8 mb-8 scroll-mt-12 md:mb-12 lg:mb-16 lg:scroll-mt-16" aria-label="Education">
                <SectionHeader title="Education" />
                <AnimatedDiv>
                    <div className="space-y-2">
                        {EDUCATION.map((item, index) => <EducationCard key={index} item={item} />)}
                    </div>
                </AnimatedDiv>
            </section>
            
            <footer className="max-w-md pt-16 pb-16 text-sm text-slate-500 md:pt-0">
                <ul className="flex justify-between items-center mb-8">
                    <a href="https://yellowbrickring.com/webring?from=example.com&to=prev">← Prev</a> |
                    <strong><a href="https://yellowbrickring.com">Yellow Brick Ring</a></strong> |
                    <a href="https://yellowbrickring.com/webring?from=example.com&to=next">Next →</a>
                </ul>
                <ul className="flex items-center" aria-label="Social media">
                  <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={GITHUB_URL} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                      <GithubIcon className="h-6 w-6" />
                    </a>
                  </li>
                  <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                      <LinkedinIcon className="h-6 w-6" />
                    </a>
                  </li>
                  <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={WEBSITE_URL} target="_blank" rel="noreferrer noopener" aria-label="Personal Website">
                      <WebsiteIcon className="h-6 w-6" />
                    </a>
                  </li>
                   <li className="mr-5 shrink-0">
                    <a className="block hover:text-slate-200" href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <p className="mt-4">Built with React, Tailwind CSS, and TypeScript. Designed and developed by Joshua Royar.</p>
            </footer>
        </main>
    );
};

export default RightPane;
