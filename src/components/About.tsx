import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import dev from '../assets/images/dev1.png';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">{t.about.title}</h2>
        <div className="w-20 h-1 bg-highlight mx-auto mb-12"></div>

        <div className="grid md:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="md:col-span-2 animate-fade-in-up">
            <div className="relative p-2 bg-gradient-to-br from-highlight to-blue-400 rounded-lg shadow-lg">
              {/* <img
                src="https://picsum.photos/seed/about/500/500"
                alt={t.about.imageAlt}
                className="rounded-md w-full h-auto"
              /> */}
              <img
                src={dev}
                alt="Abstract illustration"
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>

          {/* Text Column */}
          <div
            className="md:col-span-3 text-left animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {t.about.description2}
            </p>

            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-light">
              {t.about.interestsTitle}
            </h3>
            <ul className="space-y-3">
              {(t.about.interests as string[]).map(
                (interest: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      {interest}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
