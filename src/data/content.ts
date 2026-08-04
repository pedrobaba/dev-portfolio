import type { SkillCategory } from '@/types';

export const profile = {
  name: 'Sogo Omolanbe',
  title: 'Frontend Developer',
  tagline: 'I build thoughtful, responsive interfaces with React, JavaScript, and CSS.',
  bio: `I'm a self-directed frontend developer building a strong foundation in HTML, CSS, JavaScript, React, and TypeScript. I enjoy turning ideas into clear, accessible interfaces and learning by building projects from start to finish.

I'm currently looking for a Frontend opportunity where I can contribute to a supportive team, strengthen my engineering practice, and keep growing through real product work. The projects shown here are personal learning projects, and I describe them honestly so you can see how I think and what I can build.`,
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

