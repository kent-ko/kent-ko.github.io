import React from 'react'
import Title from './Title'

const Contacts = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form action="https://getform.io/f/axowmvmb"
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <Title>Contact</Title>
          <input type="text" name='Name' placeholder='Name' className='p-2 bg-transparent border-2 rounded-md foucus:outline-none' />
          <input type="text" name="Email" placeholder="Email" className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
          <input type="hidden" name="_gotcha"/>
          <textarea name='message' placeholder='Message' rows='10' className='p-2 mb-4 bg-transparent border-2 rounded-md'/>
          <button className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white' type='button'>
            Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacts