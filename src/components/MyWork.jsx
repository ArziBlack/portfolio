import React from 'react'

const MyWork = () => {
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24'>
        <section className="w-full">
            <h2 id='work' className='secondary-title'>My Work</h2>
            <p>I've Had the pleasure of working with multiple Fortune 500 campaign and <br />
              implementing both frontend and backend
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <img src="/Img/work/figma.jpg" alt="figma" />
              <img src="/Img/work/digital-clock.jpg" alt="clock" />
              <img src="/Img/work/Dashboard.jpg" alt="dashboard" />
              <img src="/Img/work/Landing-page.jpg" alt="Landing-page" />
              <img src="/Img/work/crypto-currency-website.jpg" alt="Crypto-Currency" />
              <img src="/Img/work/Responsive-mobile-application.jpg" alt="Responsive-design" />
            </div>
        </section>
    </div>
  )
}

export default MyWork