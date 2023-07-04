import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const Images = ({ image, about, head }) => {
  const [visible, setVisible] = useState(false);
  function modal(){
    setVisible(!visible);
  }
  return (
    <>
      <img src={image} alt="figma" className='cursor-pointer' onClick={modal}/>
      {visible && (<div className='fixed w-screen h-screen  top-0 bottom-10 right-60 left-0'>
        <div className=' bg-transparent fixed w-screen h-screen  top-0 bottom-10 right-60 left-0'>
          <div className=' bg-input border-4 border-theme rounded-md m-10 h-[88%] flex relative'>
            <div className='absolute right-4 top-4 border-2 border-theme rounded-full p-2 cursor-pointer' onClick={modal}>
              <FaTimes />
            </div>
            <img src={image} alt="" className=' rounded-md'/>
            <div className='m-5'>
              <h1>{head}</h1>
              <p className=' text-xl'>{about}</p>
            </div>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Images