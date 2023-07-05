import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const WorkFlow = () => {
    return (
        <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24'>
            <section className='w-full'>
                <h2 id='flow' className='secondary-title'>My Work Flow Process</h2>
                <p className='section-paragraph'>The Stages involved in our Work Flow Processes in Building Websites, Web Apps and Mobile Applications.</p>
                <div className=' flex items-center justify-center flex-wrap'>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border-4 border-theme hover:scale-110 cursor-pointer transition'>
                        <p className='text-center text-xl font-bold'>Strategy <br/> and Planning / Information <br/> Gathering</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border-4 border-theme hover:scale-110 cursor-pointer transition'>
                        <p className='text-xl font-bold text-center'>Product Design <br/> (UI/UX)</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border-4 border-theme hover:scale-110 cursor-pointer transition'>
                        <p className='text-center text-xl font-bold'>Website <br/> / Application Development</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border-4 border-theme hover:scale-110 cursor-pointer transition'>
                        <p className='text-xl font-bold text-center'>Testing and <br/> Deployment</p>
                    </div>
                    <FaArrowRight/>
                    <div className='m-3 flex items-center justify-center h-60 w-60 rounded-full border-4 border-theme hover:scale-110 cursor-pointer transition'>
                        <p className='text-xl font-bold text-center'>Support and <br/> Maintenance</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WorkFlow