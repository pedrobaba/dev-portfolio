import type { SkillCategory } from '@/types';

export const profile = {
  name: 'Sogo Omolanbe',
  title: 'Frontend Developer',
  tagline: 'I build thoughtful, responsive interfaces with React, JavaScript, and CSS.',
  bio: `I build web applications using HTML, CSS, JavaScript, React, and TypeScript. My focus is on turning design concepts into reality through clean architecture and accessible UI. I am passionate about engineering systems that are as intuitive for the user as they are maintainable for the developer. Currently looking to join a forward-thinking engineering team to build the next generation of web products.`,
  email: 'femilanbe@outlook.com',
  social: {
    github: 'https://github.com/pedrobaba',
    linkedin: 'https://linkedin.com/in/sogo-omolanbe',
    twitter: 'https://twitter.com/devfemii',
  },
  phone: '+2347049000008',
  location: 'Nigeria · Open to remote opportunities',
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'Code' },
      { name: 'HTML5', icon: 'FileCode' },
      { name: 'CSS3', icon: 'Palette' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: 'Component' },
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'TypeScript', icon: 'Braces' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Supabase', icon: 'Database' }
    ],
  },
];

export const learningExperience = [
  {
    role: 'Independent frontend development',
    company: 'Personal learning and projects',
    period: 'Ongoing',
    description:
      'Practising responsive layouts, component design, API integration, accessibility, and deployment by building personal web projects.',
  },
  {
    role: 'Frontend learning journey',
    company: 'Self-directed study',
    period: 'Ongoing',
    description:
      'Developing practical knowledge of HTML, CSS, JavaScript, React, TypeScript, Git, and modern frontend development workflows.',
  },
];

