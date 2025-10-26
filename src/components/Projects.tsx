

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PROJECT_ASSETS } from '../constants/constants';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { Project } from '../types/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
    const { t } = useLanguage();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    const [displayProjects, setDisplayProjects] = useState<Project[]>([]);
    const [scrollProgress, setScrollProgress] = useState(0);
    const isTransitioning = useRef(false);

    // Load original projects data when language changes
    useEffect(() => {
        const data: Project[] = t.projects.map(project => ({
            ...project,
            ...PROJECT_ASSETS[project.id],
        }));
        setProjectsData(data);
    }, [t.projects]);

    // Create the cloned list for infinite scroll effect
    useEffect(() => {
        if (projectsData.length > 1) {
            // Clone the list to place before and after the original for a seamless loop
            setDisplayProjects([...projectsData, ...projectsData, ...projectsData]);
        } else {
            setDisplayProjects(projectsData);
        }
    }, [projectsData]);

    const getEffectiveItemWidth = (container: HTMLElement): number => {
        if (container.children.length > 1) {
            const firstItem = container.children[0] as HTMLElement;
            const secondItem = container.children[1] as HTMLElement;
            return secondItem.offsetLeft - firstItem.offsetLeft;
        }
        return container.children.length > 0 ? (container.children[0] as HTMLElement).offsetWidth : 0;
    };

    const resetPosition = useCallback(() => {
        const container = scrollContainerRef.current;
        if (!container || projectsData.length <= 1) return;
        
        isTransitioning.current = true;
        container.style.scrollBehavior = 'auto';
        
        const effectiveItemWidth = getEffectiveItemWidth(container);
        // Start at the beginning of the middle (original) set of projects
        container.scrollLeft = effectiveItemWidth * projectsData.length;

        setTimeout(() => {
            if (container) container.style.scrollBehavior = 'smooth';
            isTransitioning.current = false;
            setScrollProgress(0);
        }, 50);
    }, [projectsData.length]);
    
    // Initial setup and on resize
    useEffect(() => {
        if (displayProjects.length > 0) {
            const initTimeout = setTimeout(resetPosition, 100);
            window.addEventListener('resize', resetPosition);
            
            return () => {
                clearTimeout(initTimeout);
                window.removeEventListener('resize', resetPosition);
            };
        }
    }, [displayProjects, resetPosition]);
    
    const handleScroll = useCallback(() => {
        if (isTransitioning.current || projectsData.length <= 1) return;
        const container = scrollContainerRef.current;
        if (!container) return;

        const effectiveItemWidth = getEffectiveItemWidth(container);
        if (effectiveItemWidth === 0) return;

        const originalSetWidth = effectiveItemWidth * projectsData.length;
        
        // --- Infinite Scroll Logic ---
        // When scroll reaches the end clone, jump back to the start of the original set
        if (container.scrollLeft >= originalSetWidth * 2) {
            isTransitioning.current = true;
            container.style.scrollBehavior = 'auto';
            container.scrollLeft -= originalSetWidth;
            setTimeout(() => {
                 if (container) container.style.scrollBehavior = 'smooth';
                 isTransitioning.current = false;
            }, 50);
        }
        // When scroll reaches the start clone, jump to the end of the original set
        else if (container.scrollLeft <= effectiveItemWidth * (projectsData.length -1) ) {
            isTransitioning.current = true;
            container.style.scrollBehavior = 'auto';
            container.scrollLeft += originalSetWidth;
            setTimeout(() => {
                if (container) container.style.scrollBehavior = 'smooth';
                isTransitioning.current = false;
            }, 50);
        }

        // --- Progress Bar Logic ---
        if (!isTransitioning.current) {
            const scrollableWidth = originalSetWidth - container.clientWidth;
            if (scrollableWidth > 0) {
                const scrollPositionInOriginalSet = container.scrollLeft - originalSetWidth;
                const progress = (scrollPositionInOriginalSet / scrollableWidth) * 100;
                setScrollProgress(Math.max(0, Math.min(100, progress)));
            } else {
                setScrollProgress(100); // Not scrollable, so it's fully "scrolled"
            }
        }
    }, [projectsData.length]);

    const handleNavClick = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth * 0.9;
        container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    };


    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-secondary">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2">{t.projects_section.title}</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-12"></div>
                <div className="relative group">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex items-stretch overflow-x-auto gap-8 pb-8 -mx-6 px-6 scrollbar-hide scroll-smooth"
                    >
                        {displayProjects.map((project, index) => (
                            <div key={`${project.id}-${index}`} className="flex-shrink-0 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => handleNavClick('left')}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:flex items-center justify-center"
                        aria-label="Previous Project"
                    >
                        <ChevronLeft className="w-9 h-8" />
                    </button>
                    <button
                        onClick={() => handleNavClick('right')}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:flex items-center justify-center"
                        aria-label="Next Project"
                    >
                        <ChevronRight  className="w-8 h-8"/>
                    </button>
                </div>
                {/* Progress Bar */}
                <div className="w-1/2 max-w-sm mx-auto mt-8 h-2 bg-gray-300 dark:bg-accent rounded-full overflow-hidden" role="presentation">
                    <div 
                        className="h-full bg-highlight rounded-full"
                        style={{ width: `${scrollProgress}%`, transition: 'width 150ms linear' }}
                        role="progressbar"
                        aria-valuenow={Math.round(scrollProgress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Projects scroll progress"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;