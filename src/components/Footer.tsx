
import React from 'react';
import { PERSONAL_INFO } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-secondary text-gray-400 py-6">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. {t.footer.rights}</p>
            </div>
        </footer>
    );
};

export default Footer;
