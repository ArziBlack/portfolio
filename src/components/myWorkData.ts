import React from 'react';
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"

interface WorkData {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
}

export const myWorkData: WorkData[] = [
  {
    id: '1',
    imageSrc: one, // Placeholder image
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js.',
    badges: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: '2',
    imageSrc: two, // Placeholder image
    title: 'Mobile App Beta',
    description: 'An intuitive mobile application developed using React Native.',
    badges: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: '3',
    imageSrc: two, // Placeholder image
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '4',
    imageSrc: two, // Placeholder image
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '5',
    imageSrc: two, // Placeholder image
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
];