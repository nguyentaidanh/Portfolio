
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const handleSwitch = (lang: 'en' | 'vi') => {
        setLanguage(lang);
    };

    return (
        <div className="flex items-center space-x-1 bg-gray-200 dark:bg-secondary p-1 rounded-full">
            <button
                onClick={() => handleSwitch('en')}
                className={`px-2 py-0.5 text-sm font-semibold rounded-full transition-colors ${
                    language === 'en'
                        ? 'bg-highlight text-white'
                        : 'text-gray-600 dark:text-gray-300'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => handleSwitch('vi')}
                className={`px-2 py-0.5 text-sm font-semibold rounded-full transition-colors ${
                    language === 'vi'
                        ? 'bg-highlight text-white'
                        : 'text-gray-600 dark:text-gray-300'
                }`}
            >
                VI
            </button>
        </div>
    );
};

export default LanguageSwitcher;
