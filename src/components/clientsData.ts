import type { ReactNode } from 'react';
import { FaGoogle, FaAmazon, FaCoins, FaViacoin } from 'react-icons/fa';

export interface ClientData {
  id: string;
  icon?: any;
  imageSrc?: string;
  title: string;
  badges: string[];
  description: string;
}

export const clientsData: ClientData[] = [
  {
    id: 'techhub',
    icon: FaCoins,
    title: 'Tech Hub, Bayelsa State.',
    badges: ['React.js Developer', 'React Native Developer', 'Front End Web Development', 'Mobile Development'],
    description: "I've had the pleasure of working with Tech Hub in Bayelsa State.",
  },
  {
    id: 'fudlist',
    imageSrc: '/Img/logo.png',
    title: 'Fudlist, Bayelsa State.',
    badges: ['React.js Developer', 'React Native', 'Mobile Development', 'Front End Web Development', 'Redux Toolkit', 'Postman'],
    description: "I've had the pleasure of working with Fudlist (Online Restaurant) in Bayelsa State.",
  },
  {
    id: 'nftbasetrader',
    icon: FaViacoin,
    title: 'NFT BaseTrader, Bayelsa State.',
    badges: ['React.js Developer', 'Front End Web Development', 'Redux Toolkit', 'Postman'],
    description: "I've had the pleasure of working on the NFT BaseTrader website (NFT and Crypto Exchange).",
  },
  {
    id: 'tensfer',
    imageSrc: '/Img/tensfer.png',
    title: 'Tensfer, Bayelsa State.',
    badges: ['React.js Developer', 'React Native Developer', 'Front End Web Development', 'Mobile Development', 'Redux Toolkit', 'Postman', 'Chakra UI', 'TailwindCSS'],
    description: "I am currently working with Tensfer (Cryptocurrency Exchange) in Bayelsa State.",
  },
  {
    id: 'google',
    icon: FaGoogle,
    title: 'Google Solution, Inc.',
    badges: ['UI/UX', 'Front End Web Development', 'Backend Web Development', 'React.js', 'Next.js', 'Express.js', 'TailwindCSS'],
    description: "I've had the pleasure of working on the Google Solution Challenge (Waste Management Solution) as the Assistant Lead.",
  }
];