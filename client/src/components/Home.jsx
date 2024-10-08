import React from 'react';
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome to our platform for  ",
      className: "text-4xl"
    },
    {
      text: "Learning & Earning .",
      className: "text-blue-700 text-4xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30px]">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

const Home = () => {
  return (
    <div className='min-h-screen bg-blue-500 flex flex-col justify-center items-center text-white text-center px-6'>
      <h1 className='text-4xl font-bold mb-6 mt-[50px]'>
        <TypewriterEffectSmoothDemo />
      </h1>

      <p className='text-xl mb-8 max-w-2xl'>
        Our DAO helps organizations register and enables students to learn from institutes while earning rewards. Join us to be part of a decentralized future where learning and growth go hand in hand.
      </p>
      <div className='flex gap-x-6 mb-12'>
        <a href='/organisation-listing' className='bg-green-300 text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300'>
          Join as Institute
        </a>
        <a href='/student-listing' className='bg-green-300 text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300'>
          Join as Student
        </a>
      </div>

      <img className='' src='https://www.opencampus.xyz/static/media/opening-illustration.5bb9ba880a1179f4ab2a.png' alt='img' />

      <div className='grid grid-cols-4 gap-4 w-full max-w-4xl mt-[120px]'>
        <div className='bg-green-300 text-blue-900 font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h3 className='text-2xl mb-2'>Learn-to-Earn Model</h3>
          <p className='text-sm'>Students earn financial rewards from a pool funded by participating organizations upon completing courses.</p>
        </div>
        <div className='bg-blue-500 text-white font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h3 className='text-2xl mb-2'>Decentralized Platform</h3>
          <p className='text-sm'>Built on blockchain, ensuring transparency, security, and trust in the educational process.</p>
        </div>
        <div className='bg-green-300 text-blue-500 border-blue-500 font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h3 className='text-2xl mb-2'>Organizational Collaboration</h3>
          <p className='text-sm'>Companies and institutions register to offer courses, contributing to a reward pool for students.</p>
        </div>
        <div className='bg-blue-500 text-white font-bold p-8 rounded-lg shadow-lg h-64 flex flex-col justify-center'>
          <h3 className='text-2xl mb-2'>Certification</h3>
          <p className='text-sm'>Students receive verifiable, on-chain certificates for course completion, enhancing their professional credentials.</p>
        </div>
      </div>

      <div className='mt-[80px]'>
        <img src='https://www.opencampus.xyz/static/media/about.a615f3609bdaa7ec77a4.png' alt='' />
      </div>
    </div>
  );
}

export default Home;
