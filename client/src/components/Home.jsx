import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-blue-500 flex flex-col justify-center items-center text-white text-center px-6'>
      <h1 className='text-4xl font-bold mb-6'>
        Welcome to Our DAO
      </h1>
      <p className='text-xl mb-8 max-w-2xl'>
        Our DAO helps organizations register and enables students to learn from institutes while earning rewards. Join us to be part of a decentralized future where learning and growth go hand in hand.
      </p>
      <div className='flex gap-x-6 mb-12'>
        <a href='#' className='bg-green-300 text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300'>
          Join as Institute
        </a>
        <a href='#' className='bg-green-300 text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300'>
          Join as Student
        </a>
      </div>

      <div className='grid grid-cols-4 gap-4 w-full max-w-4xl'>
        <div className='bg-green-300 text-blue-900 font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>1</h1>
          <p>This is the first box.</p>
        </div>
        <div className='bg-blue-500 text-white font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>2</h1>
          <p>This is the second box.</p>
        </div>
        <div className='bg-green-300 text-blue-500  border-blue-500 font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>3</h1>
          <p>This is the third box.</p>
        </div>
        <div className='bg-blue-500 text-white font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h1 className='text-3xl mb-4'>4</h1>
          <p>This is the fourth box.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
