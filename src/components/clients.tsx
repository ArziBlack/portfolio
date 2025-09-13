import React from 'react';
import { motion } from 'framer-motion';
import ClientCard from './ClientCard';
import { clientsData } from './clientsData';

const Clients: React.FC = () => {
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
      <motion.section
        className='w-full'
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 id="clients" className="secondary-title">Clients</h2>
        <p className='section-paragraph'>
          I've had the pleasure of working with multiple tech companies over the past few years.
        </p>

        <div className='space-y-12 my-16'>
          {clientsData.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <ClientCard
                icon={client.icon}
                imageSrc={client.imageSrc}
                title={client.title}
                badges={client.badges}
                description={client.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Clients;