import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ModernButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  icon = null,
  magneticStrength = 0.3,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Magnetic effect motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring animation for smooth movement
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  // Handle magnetic effect on mouse move
  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (event.clientX - centerX) * magneticStrength;
    const deltaY = (event.clientY - centerY) * magneticStrength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Ripple effect on click
  const handleClick = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(event);
    }
  };

  // Get button styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-theme text-white hover:bg-opacity-90 border-2 border-theme';
      case 'secondary':
        return 'bg-transparent text-theme border-2 border-theme hover:bg-theme hover:text-white';
      case 'outline':
        return 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-body';
      case 'ghost':
        return 'bg-transparent text-selected-text hover:bg-selected-text hover:bg-opacity-10';
      default:
        return 'bg-theme text-white hover:bg-opacity-90 border-2 border-theme';
    }
  };

  // Get size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`
        relative overflow-hidden font-bold rounded-lg transition-all duration-300
        transform-gpu will-change-transform
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
        flex items-center justify-center space-x-2
      `}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(63, 63, 255, 0.3)',
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      {...props}
    >
      {/* Background gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-selected-text to-theme opacity-0"
        animate={{
          opacity: isHovered ? 0.2 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white rounded-full opacity-30 pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{
            scale: 0,
            opacity: 0.3,
          }}
          animate={{
            scale: 2,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Button content */}
      <motion.div 
        className="relative z-10 flex items-center space-x-2"
        animate={{
          y: isHovered ? -1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            {icon}
          </motion.div>
        )}
        <span>{children}</span>
      </motion.div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rotate-45 w-6 h-full"
        animate={{
          left: isHovered ? '100%' : '-100%',
          opacity: isHovered ? [0, 0.3, 0] : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

// Floating Action Button variant
export const FloatingButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <motion.button
      className={`
        fixed bottom-8 right-8 w-16 h-16 bg-theme text-white rounded-full
        shadow-lg flex items-center justify-center z-40
        ${className}
      `}
      whileHover={{
        scale: 1.1,
        boxShadow: '0 8px 25px rgba(63, 63, 255, 0.4)',
      }}
      whileTap={{
        scale: 0.9,
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Icon Button variant
export const IconButton = ({ 
  children, 
  onClick, 
  size = 'medium',
  variant = 'ghost',
  className = '',
  ...props 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'w-8 h-8 p-1';
      case 'medium': return 'w-10 h-10 p-2';
      case 'large': return 'w-12 h-12 p-3';
      default: return 'w-10 h-10 p-2';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'ghost': return 'bg-transparent hover:bg-white hover:bg-opacity-10';
      case 'filled': return 'bg-theme text-white hover:bg-opacity-80';
      default: return 'bg-transparent hover:bg-white hover:bg-opacity-10';
    }
  };

  return (
    <motion.button
      className={`
        rounded-full flex items-center justify-center transition-colors
        ${getSizeClasses()}
        ${getVariantClasses()}
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ModernButton;
