
    import React, { useState, useEffect } from 'react';
    import ThemeToggle from './ThemeToggle';
    import LanguageSwitcher from './LanguageSwitcher';
    import { PERSONAL_INFO } from '../constants/constants';
    import { useLanguage } from '../contexts/LanguageContext';

    interface HeaderProps {
        theme: string;
        toggleTheme: () => void;
    }

    const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);
        const [activeLink, setActiveLink] = useState('#hero');
        const { t } = useLanguage();

        const navLinks = [
            { href: "#hero", label: t.header.nav.about }, // Changed to #hero to match section id
            { href: "#about", label: t.about.title },
            { href: "#skills", label: t.header.nav.skills },
            { href: "#projects", label: t.header.nav.projects },
            { href: "#experience", label: t.header.nav.journey },
            { href: "#contact", label: t.header.nav.contact },
        ];

        // Effect for scroll-based styling
        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        // Effect for active link highlighting
        useEffect(() => {
            const sections = navLinks.map(link => document.querySelector(link.href)).filter(Boolean);
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            }, { rootMargin: '-50% 0px -50% 0px' }); // Trigger when section is in the middle of the viewport

            sections.forEach(section => {
                if (section) observer.observe(section);
            });

            return () => {
                sections.forEach(section => {
                    if (section) observer.unobserve(section);
                });
            };
        }, [navLinks]);

        const headerClasses = `
            sticky top-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-light/80 dark:bg-primary/80 backdrop-blur-sm shadow-md dark:shadow-accent/20' : 'bg-transparent'}
        `;

        return (
            <header className={headerClasses}>
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#hero" className="text-2xl font-bold text-highlight">{PERSONAL_INFO.headerName.split(' ')[0]}<span className="text-gray-800 dark:text-light">.</span></a>
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                className={`
                                    font-medium transition-colors duration-300
                                    ${activeLink === link.href 
                                        ? 'text-highlight' 
                                        : 'text-gray-600 dark:text-gray-300 hover:text-highlight dark:hover:text-highlight'
                                    }
                                `}
                            >
                                {link.label}
                            </a>
                        ))}
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <LanguageSwitcher />
                    </div>
                    <div className="md:hidden flex items-center">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <LanguageSwitcher />
                        <button onClick={() => setIsOpen(!isOpen)} className="ml-2 text-gray-800 dark:text-light">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </nav>
                {isOpen && (
                    <div className="md:hidden bg-light dark:bg-primary pb-4 animate-slide-down">
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)} 
                                className={`
                                    block py-2 px-6 text-center font-medium transition-colors
                                    ${activeLink === link.href 
                                        ? 'text-highlight bg-gray-200 dark:bg-secondary' 
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-secondary'
                                    }
                                `}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </header>
        );
    };

    export default Header;
