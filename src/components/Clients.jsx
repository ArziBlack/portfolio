import React from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaAmazon, FaCoins, FaViacoin } from 'react-icons/fa'

const Clients = () => {
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <motion.section className='w-full' initial={{ x:-200}} whileInView={{ x:0}} transition={{duration:1}} viewport={{once:false}}>
            <h2 id="clients" className="secondary-title">Clients</h2>
            <p className='section-paragraph'>i've had the pleasure of working with multiple Tech Companies in the past Years.</p>

            <div className='space-y-12 my-16'>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <FaCoins size='4rem'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>Tech Hub, Bayelsa State.</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">React.js Developer</div>
                            <div className="badge">React Native Developer</div>
                            <div className='badge'>Front End Web Development</div>
                            <div className='badge'>Mobile Development</div>
                        </div>
                        <p>I've had pleasure working with Tech-Hub Bayelsa State</p>
                    </div>
                </div>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <img src='/Img/logo.png' className='w-18 p-3 bg-secondary rounded-md'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>Fudlist, Bayelsa State.</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">React.js Developer</div>
                            <div className="badge">React Native</div>
                            <div className="badge">Mobile Development</div>
                            <div className='badge'>Front End Web Development</div>
                            <div className='badge'>Redux Toolkit</div>
                            <div className='badge'>Postman</div>
                        </div>
                        <p>I've had pleasure working with Fudlist (Online Resturant) Bayelsa State</p>
                    </div>
                </div>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <FaViacoin size='4rem'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>NFT BaseTrader, Bayelsa State.</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">React.js Developer</div>
                            <div className='badge'>Front End Web Development</div>
                            <div className='badge'>Redux Toolkit</div>
                            <div className='badge'>Postman</div>
                        </div>
                        <p>I've had pleasure working on the NFT BaseTrader Website (NFT and Crypto Exchange).</p>
                    </div>
                </div>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <img src='/Img/tensfer.png' className='w-22'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>Tensfer, Bayelsa State.</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">React.js Developer</div>
                            <div className="badge">React Native Developer</div>
                            <div className='badge'>Front End Web Development</div>
                            <div className='badge'>Mobile Development</div>
                            <div className='badge'>Redux Toolkit</div>
                            <div className='badge'>Postman</div>
                            <div className='badge'>Chakra UI</div>
                            <div className='badge'>TailwindCSS</div>
                        </div>
                        <p>I am currently working with Tensfer (Cryptocurrency exchange) Bayelsa State</p>
                    </div>
                </div>
                <div className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                    <div className="mb-6 lg:mb-0">
                        <FaGoogle size='4rem'/>
                    </div>
                    <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                        <h3 className='text-white text-3xl font-semibold'>Google Solution, Inc</h3>
                        <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                            <div className="badge">UI/UX</div>
                            <div className='badge'>Front End Web Development</div>
                            <div className='badge'>Backend End Web Development</div>
                            <div className="badge">React.js</div>
                            <div className="badge">Next.js</div>
                            <div className="badge">Express.js</div>
                            <div className="badge">TailwindCss</div>
                        </div>
                        <p>I've had pleasure working on the Google Solution Challange (Waste Management Solution) as the Assistant Lead</p>
                    </div>
                </div>
            </div>
        </motion.section>
    </div>
  )
}

export default Clients