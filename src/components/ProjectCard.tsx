

import React from 'react';
import { Project } from '../types/types';
import { useLanguage } from '../contexts/LanguageContext';
import { Eye, Github } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { t } = useLanguage();

    return (
        <div className="group bg-light dark:bg-accent rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="h-56 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto pt-4">
                    <div className="mb-4">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="inline-block bg-gray-200 dark:bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 text-center px-4 py-2 bg-highlight text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <Eye className="w-5 h-5"/>
                            <span className='text-xs'>{t.project_card.demo}</span>
                        </a>
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 text-center px-4 py-2 bg-gray-600 dark:bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                        <Github  className="w-5 h-5"/>
                            <span className='text-xs'>{t.project_card.github}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;