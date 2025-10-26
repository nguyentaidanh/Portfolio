

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import dev from '../assets/images/dev.png';

const Hero: React.FC = () => {
    const { t, language } = useLanguage();
    const [text, setText] = useState('');
    const fullText = t.hero.title;

useEffect(() => {
  let isCancelled = false;

  const typeText = async () => {
    setText('');
    for (let i = 0; i < fullText.length; i++) {
      if (isCancelled) break;
      setText(prev => prev + fullText.charAt(i));
      await new Promise(res => setTimeout(res, 60)); // Delay 60ms
    }
  };

  typeText();

  return () => {
    isCancelled = true; // cleanup khi unmount hoặc đổi language
  };
}, [fullText, language]);

    
    return (
        <section id="hero" className="container mx-auto px-6 py-20 md:py-32 min-h-screen flex items-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                <div className="text-center md:text-left flex flex-col items-center ">

                    <img
                        src={PERSONAL_INFO.profilePicture}
                        alt={PERSONAL_INFO.name}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-center F mx-auto md:mx-0 mb-6 border-4 border-highlight shadow-lg opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '100ms' }}
                    />
                    <h1 
                        className="text-4xl md:text-6xl font-bold mb-2 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '200ms' }}
                    >
                        {t.hero.greeting} <span className="text-highlight">{PERSONAL_INFO.name}</span>
                    </h1>
                    <h2 
                        className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-10 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '300ms' }}
                    >
                        {text}<span className="animate-blink">|</span>
                    </h2>
                    
                    <div 
                        className="flex justify-center md:justify-start space-x-6 mb-6 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '400ms' }}
                    >
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-highlight transition-transform transform hover:scale-110">
                           
                           <Linkedin className='w-8 h-8'/>
                        </a>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-highlight transition-transform transform hover:scale-110">
                            <Github className="w-8 h-8"/>
                        </a>
                        <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="text-gray-600 dark:text-gray-400 hover:text-highlight transition-transform transform hover:scale-110">
                            <Mail className="w-8 h-8" />
                        </a>
                    </div>

                    <p 
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '500ms' }}
                    >
                        {t.hero.introduction}
                    </p>
                    <div 
                        className="flex justify-center md:justify-start space-x-4 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '600ms' }}
                    >
                        <a href="#contact" className="px-8 py-3 bg-highlight text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">{t.hero.contactBtn}</a>
                        <a href={PERSONAL_INFO.cvPath} target="_blank" rel="noopener noreferrer" download className="px-8 py-3 bg-highlight text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">{t.hero.cvBtn}</a>
                    </div>
                </div>
                <div 
                    className="hidden md:block opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '700ms' }}
                >
                     {/* <img src="https://picsum.photos/seed/hero/600/600" alt="Abstract illustration" className="rounded-lg shadow-2xl"/> */}
                     <img src={dev} alt="Abstract illustration" className="rounded-lg shadow-2xl"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;