import React from 'react'
import Card from './card'
import { myWorkData } from './myWorkData'

const MyWork = () => {
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
      <section className='w-full'>
        <h2 id="my-work" className="secondary-title">My Work</h2>
        <p className='section-paragraph'>Here are some of my recent projects.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
          {myWorkData.map((work) => (
            <Card
              key={work.id}
              imageSrc={work.imageSrc}
              title={work.title}
              description={work.description}
              badges={work.badges}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default MyWork