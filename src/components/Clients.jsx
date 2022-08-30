import React from 'react'
import { FaGoogle, FaAmazon } from 'react-icons/fa'

const Clients = () => {
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <section className='w-full'>
            <h2 id="clients" className="secondary-title">Clients</h2>
            <p className='section-paragraph'>i've had the pleasure of working with multiple fortune 500 company</p>

            <div className='space-y-12 my-16'>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <FaAmazon size='4rem'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>Google, Inc</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">ui/ux</div>
                            <div className='badge'>Front End Web Development</div>
                        </div>
                        <p>I've had pleasure working with multiple Fortune 500 companies</p>
                    </div>
                </div>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <FaAmazon size='4rem'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>Google, Inc</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">ui/ux</div>
                            <div className='badge'>Front End Web Development</div>
                        </div>
                        <p>I've had pleasure working with multiple Fortune 500 companies</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Clients