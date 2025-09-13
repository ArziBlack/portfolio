import React from 'react';
import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';

interface ClientCardProps {
  icon?: IconType; // For FaCoins, FaViacoin, or other React icons
  imageSrc?: string; // For image sources like '/Img/logo.png'
  title: string;
  badges: string[];
  description: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ icon, imageSrc, title, badges, description }) => {
  return (
    <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
      <div className="mb-6 lg:mb-0">
        {icon && React.createElement(icon)}
        {imageSrc && <img src={imageSrc} className='w-18 p-3 bg-secondary rounded-md'/>}
      </div>
      <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
        <h3 className='text-white text-3xl font-semibold'>{title}</h3>
        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
          {badges.map((badge, index) => (
            <div key={index} className="badge">{badge}</div>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ClientCard;