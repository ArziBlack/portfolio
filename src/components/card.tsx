import { CardContainer } from './ui/3d-card';
import { EvervaultCard, Icon } from './ui/evervault-card'

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, badges }) => {
  return (
    <CardContainer className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[35rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
 
      <img src={imageSrc} alt={title} className="w-full h-56 object-cover mb-4 rounded-none" />
 
      <h2 className="dark:text-white text-white mt-4 text-sm font-light">
        {title}
      </h2>
      <p className="text-sm font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {badges.map((badge, index) => (
          <span key={index} className="badge">{badge}</span>
        ))}
      </div>
    </CardContainer>
  )
}

export default Card