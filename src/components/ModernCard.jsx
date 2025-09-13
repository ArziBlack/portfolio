import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ModernCard = ({ 
  children, 
  className = '',
  tiltStrength = 0.1,
  shadowIntensity = 0.2,
  hoverScale = 1.02,
  glowEffect = false,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10 * tiltStrength, -10 * tiltStrength]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10 * tiltStrength, 10 * tiltStrength]);

  // Handle mouse movement for tilt effect
  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (event.clientX - rect.left) / width - 0.5;
    const mouseY = (event.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-xl transition-all duration-300
        transform-gpu will-change-transform
        ${glowEffect ? 'shadow-lg' : 'shadow-md'}
        ${className}
      `}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        scale: hoverScale,
        boxShadow: `0 20px 40px rgba(0, 0, 0, ${shadowIntensity})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      {...props}
    >
      {/* Glow effect */}
      {glowEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-theme to-selected-text opacity-0 blur-xl"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Shine effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -skew-x-12"
        animate={{
          x: isHovered ? '100%' : '-100%',
          opacity: isHovered ? [0, 0.1, 0] : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      />

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Portfolio Card variant for project showcases
export const PortfolioCard = ({ 
  image, 
  title, 
  description, 
  tags = [], 
  link,
  className = '',
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ModernCard 
      className={`bg-badge border border-input-border cursor-pointer ${className}`}
      glowEffect={true}
      {...props}
    >
      <div className="p-0">
        {/* Image container */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover cursor-image"
            onLoad={() => setImageLoaded(true)}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ 
              scale: imageLoaded ? 1 : 1.1, 
              opacity: imageLoaded ? 1 : 0 
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-medium">View Project</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3 
            className="text-xl font-bold mb-2 text-white"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-secondary mb-4 leading-relaxed"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Tags */}
          {tags.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-theme bg-opacity-20 text-selected-text rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </ModernCard>
  );
};

// Feature Card for services/features
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  ...props 
}) => {
  return (
    <ModernCard 
      className={`bg-badge border border-input-border p-6 text-center ${className}`}
      tiltStrength={0.05}
      {...props}
    >
      {/* Icon */}
      <motion.div 
        className="mb-4 flex justify-center"
        whileHover={{ 
          rotate: 360,
          scale: 1.1 
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 bg-theme bg-opacity-20 rounded-full flex items-center justify-center text-theme text-2xl">
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
      <p className="text-secondary leading-relaxed">{description}</p>
    </ModernCard>
  );
};

// Testimonial Card
export const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  avatar,
  className = '',
  ...props 
}) => {
  return (
    <ModernCard 
      className={`bg-badge border border-input-border p-6 ${className}`}
      tiltStrength={0.08}
      {...props}
    >
      {/* Quote */}
      <div className="mb-6">
        <motion.div 
          className="text-4xl text-theme mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          "
        </motion.div>
        <p className="text-white italic leading-relaxed">{quote}</p>
      </div>

      {/* Author info */}
      <div className="flex items-center">
        {avatar && (
          <motion.img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full mr-4"
            whileHover={{ scale: 1.1 }}
          />
        )}
        <div>
          <h5 className="font-medium text-white">{author}</h5>
          <p className="text-secondary text-sm">{position}</p>
        </div>
      </div>
    </ModernCard>
  );
};

// Stat Card for numbers/metrics
export const StatCard = ({ 
  number, 
  label, 
  icon,
  prefix = '',
  suffix = '',
  className = '',
  ...props 
}) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const target = parseInt(number);
    const duration = 2000;
    const step = target / (duration / 16);
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <ModernCard 
      className={`bg-badge border border-input-border p-6 text-center ${className}`}
      tiltStrength={0.05}
      hoverScale={1.05}
      {...props}
    >
      {icon && (
        <motion.div 
          className="mb-2 flex justify-center text-theme text-3xl"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
      )}
      
      <motion.div 
        className="text-3xl font-bold text-white mb-1"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {prefix}{count}{suffix}
      </motion.div>
      
      <p className="text-secondary text-sm uppercase tracking-wide">{label}</p>
    </ModernCard>
  );
};

export default ModernCard;
