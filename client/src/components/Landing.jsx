import React from 'react';

const Landing = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-y-8 mt-[100px] min-h-screen"
      style={{
        backgroundImage: `url('https://www.opencampus.xyz/static/media/opening-illustration.5bb9ba880a1179f4ab2a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center gap-x-12">
        <div className='bg-black text-white p-6 rounded-lg shadow-lg border border-blue-700 transition duration-300'>
          <a href='/organisation-listing'>Join as Institute</a>  
        </div>
        <div className='bg-black text-white p-6 rounded-lg shadow-lg border border-blue-700 transition duration-300'>
          <a href='student-listing'>Join as Student</a> 
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Organization Info 1 */}
        <div className='bg-green-300 text-blue-700 p-6 rounded-lg shadow-lg border border-blue-700 transition duration-300'>
          <h1 className="font-bold text-xl">Expand Your Reach</h1>
          <p className="mt-2">
            As an institute, you can join our platform to reach a global audience of eager learners. 
            Increase your visibility and impact by offering courses to students worldwide.
          </p>
        </div>
        {/* Student Benefit 1 */}
        <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg border border-blue-700 transition duration-300'>
          <h1 className="font-bold text-xl">Learn & Earn</h1>
          <p className="mt-2">
            As a student, you can earn financial rewards by completing courses. 
            Our platform offers a unique opportunity to learn new skills while getting rewarded for your efforts.
          </p>
        </div>
        {/* Organization Info 2 */}
        <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg border border-blue-700 transition duration-300'>
          <h1 className="font-bold text-xl">Showcase Your Expertise</h1>
          <p className="mt-2">
            Highlight your institution's strengths by providing high-quality, specialized courses. 
            Enhance your reputation as a leader in education by contributing to the learning community.
          </p>
        </div>
        {/* Student Benefit 2 */}
        <div className='bg-green-300 text-blue-700 p-6 rounded-lg shadow-lg border border-blue-700 transition duration-300'>
          <h1 className="font-bold text-xl">Get Certified</h1>
          <p className="mt-2">
            Earn verifiable, on-chain certificates upon completing courses. 
            These certifications enhance your professional credentials and are recognized by employers globally.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
