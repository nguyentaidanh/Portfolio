

import React from 'react';
import { Experience as ExperienceType, Education, TimelineItem } from '../types/types';
import { useLanguage } from '../contexts/LanguageContext';
import { BriefcaseBusiness, School } from 'lucide-react';

const Card: React.FC<{item: ExperienceType | Education, isExperience: boolean}> = ({ item, isExperience }) => (
    <div className="group relative p-6 rounded-lg shadow-lg bg-light dark:bg-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-xl w-full overflow-hidden">
        {/* Gradient border effect on hover */}
        <div className="absolute inset-0 rounded-lg p-px bg-transparent group-hover:bg-gradient-to-br from-highlight to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
             <div className="w-full h-full bg-light dark:bg-accent rounded-[7px]"></div>
        </div>
        
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-highlight mb-1">{isExperience ? (item as ExperienceType).title : (item as Education).degree}</h3>
            <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                <p className="font-semibold">{isExperience ? (item as ExperienceType).company : (item as Education).institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 sm:ml-2 shrink-0">{item.location}</p>
            </div>
            <time className="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.date}</time>
            {isExperience ? (
                <>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-left mb-4">
                        {(item as ExperienceType).description.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                    {(item as ExperienceType).technologies && (
                        <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                            {(item as ExperienceType).technologies?.map(tech => (
                                <span key={tech} className="inline-block bg-gray-200 dark:bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <p className="text-gray-600 dark:text-gray-400 text-left">{(item as Education).description}</p>
            )}
        </div>
    </div>
);

const Experience: React.FC = () => {
    const { t } = useLanguage();
    const timelineData: TimelineItem[] = t.timeline;

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-secondary">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2">{t.experience_section.title}</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-12"></div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Updated Timeline bar */}
                    <div className="absolute top-0 h-full w-1 bg-gradient-to-b from-highlight to-gray-400 dark:to-accent left-4 md:left-1/2 transform md:-translate-x-1/2"></div>
                    
                    {timelineData.map((item, index) => {
                        const isExperience = item.type === 'experience';
                        const isCardOnLeftSide = index % 2 === 0;

                        const desktopFlexDirection = isCardOnLeftSide ? 'md:flex-row-reverse' : 'md:flex-row';
                        const desktopAnimation = isCardOnLeftSide ? 'md:animate-slide-in-left' : 'md:animate-slide-in-right';

                        return (
                            <div 
                                key={index}
                                className={`mb-10 relative flex w-full items-center ${desktopFlexDirection}`}
                            >
                                {/* Spacer for desktop layout */}
                                <div className="hidden md:block w-5/12"></div>
                                <div className="hidden md:block w-1/12"></div>
                                
                                {/* Card container with animation */}
                                <div className={`w-full md:w-5/12 pl-10 md:pl-0 opacity-0 animate-slide-in-right ${desktopAnimation}`} style={{ animationDelay: `${index * 150}ms` }}>
                                   <Card item={item.data} isExperience={isExperience}/>
                                </div>

                                {/* Icon Marker */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="group flex items-center justify-center w-9 h-9 bg-highlight rounded-full ring-4 ring-light dark:ring-secondary transition-all duration-300 hover:ring-8">
                                   {isExperience? <BriefcaseBusiness /> : <School />}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;