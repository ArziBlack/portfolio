import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation for cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Handle hover states for different elements
    const handleHoverStart = (e) => {
      const target = e.target;
      setIsHovering(true);
      
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setHoverType('link');
      } else if (target.classList.contains('cursor-text') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setHoverType('text');
      } else if (target.classList.contains('cursor-image') || target.tagName === 'IMG') {
        setHoverType('image');
      } else {
        setHoverType('hover');
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setHoverType('default');
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-cursor]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  const getCursorVariant = () => {
    switch (hoverType) {
      case 'link':
        return {
          height: 60,
          width: 60,
          backgroundColor: 'rgba(63, 63, 255, 0.2)',
          border: '2px solid #3f3fff',
          mixBlendMode: 'difference'
        };
      case 'text':
        return {
          height: 4,
          width: 2,
          backgroundColor: '#3f3fff',
          borderRadius: 0
        };
      case 'image':
        return {
          height: 80,
          width: 80,
          backgroundColor: 'rgba(163, 163, 255, 0.1)',
          border: '2px solid #a3a3ff'
        };
      case 'hover':
        return {
          height: 48,
          width: 48,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        };
      default:
        return {
          height: 32,
          width: 32,
          backgroundColor: 'rgba(163, 163, 255, 0.3)',
          border: '1px solid #a3a3ff'
        };
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={getCursorVariant()}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
      />
      
      {/* Cursor trail dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 w-1 h-1 bg-selected-text rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          opacity: isVisible && !isHovering ? 0.8 : 0,
        }}
        transition={{
          opacity: { duration: 0.15 },
        }}
      />

      {/* Hide default cursor */}
      <style jsx>{`
        * {
          cursor: none !important;
        }
        a, button, input, textarea, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
