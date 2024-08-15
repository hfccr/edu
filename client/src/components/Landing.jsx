import React from 'react'

const Landing = () => {
  return (
    <div className='flex justify-center items-center gap-x-12 mt-[100px]'>
      <div className='bg-green-300 text-blue-700 p-6 rounded-lg shadow-lg border border-blue-700  transition duration-300'>
      <a href='/organisation-listing'>Join as Institute</a>  
      </div>
      <div className='bg-green-300 text-blue-700 p-6 rounded-lg shadow-lg border border-blue-700  transition duration-300'>
        Join as Student
      </div>
    </div>
  )
}

export default Landing

