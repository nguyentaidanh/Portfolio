import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[60]">
            <div
                className="h-full bg-highlight"
                style={{ width: `${scrollPercentage}%`, transition: 'width 0.1s linear' }}
            />
        </div>
    );
};

export default ScrollProgressBar;