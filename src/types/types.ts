// FIX: Using `import 'react'` correctly brings React's global type declarations (like the `JSX` namespace) into scope for augmentation within a module. This resolves a conflict that was preventing TypeScript from recognizing standard HTML elements in JSX.
import 'react';

// FIX: Centralized global type definition for the 'ion-icon' web component.
// Augmenting the JSX.IntrinsicElements interface here allows TypeScript to recognize
// 'ion-icon' as a valid JSX element across the entire application, while correctly
// merging with the default HTML element types provided by React.
declare global {
    // Add EmailJS global type for window.emailjs
    var emailjs: {
        send: (
            serviceID: string,
            templateID: string,
            templateParams: Record<string, unknown>,
            publicKey: string
        ) => Promise<{ status: number; text: string }>;
    };

    namespace JSX {
        interface IntrinsicElements {
            // FIX: Updated type definition for 'ion-icon' to use React.HTMLAttributes to resolve potential type conflicts.
            // This correctly extends JSX.IntrinsicElements for the custom web component.
            'ion-icon': React.HTMLAttributes<HTMLElement> & {
                name: string;
            };
        }
    }
}

export interface Skill {
    key: string;
    name: string;
    icon: React.ReactElement;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    demoUrl: string;
    githubUrl: string;
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
    technologies?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    date: string;
    description: string;
}

export interface TimelineItem {
    type: 'experience' | 'education';
    data: Experience | Education;
}

export interface GithubStatsData {
    repos: number;
    followers: number;
    stars: number;
}