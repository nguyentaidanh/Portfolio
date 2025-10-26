import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollProgressBar from './components/ScrollProgressBar';


const App: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <LanguageProvider>
            <div className="text-gray-800 dark:text-dark-text transition-colors duration-300">
                <ScrollProgressBar />
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    {/* <GithubStats /> */}
                    <Experience />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
};

export default App;
