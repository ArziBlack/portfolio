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
    imageSrc: "/Img/fudlist.png", // Placeholder image
    title: 'FudList',
    description: 'A cutting-edge web application built with React and Node.js.',
    badges: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: '2',
    imageSrc: "/Img/tens.png", // Placeholder image
    title: 'Tensfer',
    description: 'An intuitive mobile application developed using React Native.',
    badges: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: '3',
    imageSrc: "/Img/commune.png", // Placeholder image
    title: 'Commune',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '4',
    imageSrc: "/Img/fanful.jpg", // Placeholder image
    title: 'Fanful',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '5',
    imageSrc: "/Img/feasibility.png", // Placeholder image
    title: 'Feasibility Giant',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: '6',
    imageSrc: "/Img/chapta.jpeg", // Placeholder image
    title: 'Chapta',
    description: 'A scalable e-commerce solution with a focus on user experience.',
    badges: ['Next.js', 'Stripe', 'TypeScript', 'TailwindCSS'],
  },
];