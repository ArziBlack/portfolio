import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const WorkFlow = () => {
    return (
        <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24'>
            <section className='w-full'>
                <h2 id='flow' className='secondary-title'>Work Flow</h2>
                <p className='section-paragraph'>The Stages involved in our Work Flow Processes.</p>
                <div className=' flex items-center justify-center flex-wrap'>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border border-theme'>
                        <p>Step One</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border border-theme'>
                        <p>Step Two</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border border-theme'>
                        <p>Step Three</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border border-theme'>
                        <p>Step Four</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border border-theme'>
                        <p>Step Five</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkFlow