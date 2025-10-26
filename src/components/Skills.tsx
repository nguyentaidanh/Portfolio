import React from 'react';
import { SKILL_ICONS } from '../constants/constants';
import { Skill } from '../types/types';
import { useLanguage } from '../contexts/LanguageContext';

interface SkillCardProps {
    skill: { name: string; icon: React.ReactElement };
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
    return (
        <div 
            className="group flex flex-col items-center justify-center text-center p-6 bg-light dark:bg-secondary rounded-lg shadow-lg hover:shadow-glow hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {skill.icon}
            <span className="mt-4 font-semibold text-lg">{skill.name}</span>
        </div>
    );
};


const Skills: React.FC = () => {
    const { t } = useLanguage();
    const skillsWithIcons = t.skills.map(skill => ({
        ...skill,
        icon: SKILL_ICONS[skill.key]
    }));

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2">{t.skills_section.title}</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-12"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skillsWithIcons.map((skill, index) => (
                        <SkillCard key={skill.key} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;