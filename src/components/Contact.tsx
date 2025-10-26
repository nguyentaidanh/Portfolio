import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

// TODO: Go to https://www.emailjs.com/ to get your credentials
// and replace the placeholder values below.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  

// Define the structure for form data and errors
interface FormState {
    name: string;
    email: string;
    message: string;
}

const SuccessMessage: React.FC<{ onReset: () => void }> = ({ onReset }) => {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-green-100 dark:bg-secondary rounded-lg shadow-lg h-full animate-fade-in-up">
            {/* <ion-icon name="checkmark-circle-outline" className="w-20 h-20 text-green-500 mb-4"></ion-icon> */}
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-light">{t.contact.success.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{t.contact.success.message}</p>
            <button
                onClick={onReset}
                className="px-8 py-3 bg-highlight text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all transform hover:scale-105"
            >
                {t.contact.success.button}
            </button>
        </div>
    );
};


const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormState>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const validateField = (name: keyof FormState, value: string): string => {
        switch (name) {
            case 'name':
                return value.trim() ? '' : t.contact.form.validation.nameRequired;
            case 'email':
                if (!value.trim()) return t.contact.form.validation.emailRequired;
                if (!/^\S+@\S+\.\S+$/.test(value)) return t.contact.form.validation.invalidEmail;
                return '';
            case 'message':
                return value.trim() ? '' : t.contact.form.validation.messageRequired;
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as { name: keyof FormState; value: string };
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as { name: keyof FormState; value: string };
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message),
        };

        setErrors(newErrors);

        const isValid = Object.values(newErrors).every(error => error === '');

        if (isValid) {
            setIsSubmitting(true);
            setStatus(t.contact.status.sending);

            // This check prevents sending emails if credentials are not configured
            // It simulates a success for UI testing purposes.
            if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                console.error("EmailJS is not configured. Please add your credentials in components/Contact.tsx.");
                setTimeout(() => {
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({ name: '', email: '', message: '' });
                    setIsSubmitting(false);
                    setStatus('');
                    setShowSuccessMessage(true);
                }, 1500);
                return;
            }
            
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };

            window.emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({ name: '', email: '', message: '' });
                    setStatus('');
                    setShowSuccessMessage(true);
                },
                (error) => {
                    console.error('FAILED...', error);
                    setStatus(t.contact.status.error);
                }
            ).finally(() => {
                setIsSubmitting(false);
            });
        }
    };

    const statusIsError = status === t.contact.status.error;

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-2">{t.contact.title}</h2>
                <div className="w-20 h-1 bg-highlight mx-auto mb-12"></div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{t.contact.subtitle}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            {t.contact.description}
                        </p>
                        <div className="space-y-4">
                             <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-3 group">
                                <Mail className="w-6 h-6 text-highlight"/>
                                <span className="group-hover:underline">{PERSONAL_INFO.email}</span>
                            </a>
                             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                               <Linkedin  className="w-6 h-6 text-highlight"/>
                                <span className="group-hover:underline">LinkedIn</span>
                            </a>
                            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                                <Github  className="w-6 h-6 text-highlight"/>
                                <span className="group-hover:underline">GitHub</span>
                            </a>
                        </div>
                    </div>
                    {showSuccessMessage ? (
                        <SuccessMessage onReset={() => setShowSuccessMessage(false)} />
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    placeholder={t.contact.form.name} 
                                    required 
                                    aria-label={t.contact.form.name}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    className={`w-full p-3 bg-gray-100 dark:bg-secondary rounded-lg border dark:border-accent focus:outline-none focus:ring-2 focus:ring-highlight ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-accent'}`} />
                                {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>}
                            </div>
                             <div>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    placeholder={t.contact.form.email} 
                                    required 
                                    aria-label={t.contact.form.email}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                    className={`w-full p-3 bg-gray-100 dark:bg-secondary rounded-lg border dark:border-accent focus:outline-none focus:ring-2 focus:ring-highlight ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-accent'}`} />
                                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
                            </div>
                            <div>
                                <textarea 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                    placeholder={t.contact.form.message} 
                                    rows={5} 
                                    required 
                                    aria-label={t.contact.form.message}
                                    aria-invalid={!!errors.message}
                                    aria-describedby={errors.message ? 'message-error' : undefined}
                                    className={`w-full p-3 bg-gray-100 dark:bg-secondary rounded-lg border dark:border-accent focus:outline-none focus:ring-2 focus:ring-highlight ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-accent'}`}></textarea>
                                {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>}
                            </div>
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-3 bg-highlight text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all transform hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-accent disabled:scale-100 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? t.contact.status.sending : t.contact.form.submit}
                            </button>
                            {status && <p className={`text-center mt-4 font-medium ${statusIsError ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;