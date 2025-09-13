import React from 'react'
import { motion } from 'framer-motion';
import Images from './Images';
import { ImageData } from './ImageData';
import { StaggerContainer, StaggerItem, TextReveal, FadeInUp } from './ScrollAnimations';
import { PortfolioCard } from './ModernCard';

const MyWork = () => {
  console.log(ImageData);
  return (
    <section id="work" className='container mt-64 mx-auto px-8 md:px-14 lg:px-24 w-full relative'>
      <div className="w-full">
        {/* Section Header */}
        <TextReveal className="text-center mb-16">
          <h2 className='secondary-title text-center'>My Work</h2>
        </TextReveal>
        
        <FadeInUp delay={0.2} className="max-w-4xl mx-auto text-center mb-12">
          <p className="section-paragraph text-lg leading-relaxed">
            I've had the pleasure of working on different projects where I implemented 
            Frontend Web and Mobile development technologies with <span className="text-theme font-semibold">Javascript</span>, 
            <span className="text-theme font-semibold"> React.js</span>, <span className="text-theme font-semibold">React Native</span>, 
            <span className="text-theme font-semibold">Next.js</span>, <span className="text-theme font-semibold">Redux Toolkit</span>, 
            <span className="text-theme font-semibold">Tailwindcss</span>, <span className="text-theme font-semibold">Express.js</span>, 
            <span className="text-theme font-semibold">Firebase</span>, <span className="text-theme font-semibold">PostgreSQL</span> and 
            <span className="text-theme font-semibold">MongoDB</span>.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3} className="text-center mb-12">
          <em className='text-selected-text text-sm bg-badge px-4 py-2 rounded-full inline-block'>
            ✨ Click on a project to explore more
          </em>
        </FadeInUp>

        {/* Portfolio Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {
            ImageData.map((data, idx) => {
              return (
                <StaggerItem key={idx}>
                  <PortfolioCard
                    image={data.image}
                    title={data.head}
                    description={data.about}
                    tags={['React', 'JavaScript', 'CSS']}
                    className="h-full"
                  />
                </StaggerItem>
              )
            })
          }
        </StaggerContainer>
        
        {/* Call to Action */}
        <FadeInUp delay={0.8} className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-badge bg-opacity-50 backdrop-blur-sm border border-input-border rounded-full px-8 py-4">
            <span className="text-sm text-secondary">Like what you see?</span>
            <a href="#hire" className="text-theme font-medium hover:text-selected-text transition-colors">
              Let's work together →
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default MyWork