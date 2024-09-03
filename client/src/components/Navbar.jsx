import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const gradientStyle = {
  background: "white",
  height: "4px",
  width: "100%",
  border: "none",
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center bg-blue-600">
        <div className="flex flex-row items-center font-bold text-2xl text-white">
          <a href="/">EDU-Academy</a>
        </div>

        <div className="flex-1 flex justify-center items-center space-x-8">
          <h1 className="font-medium text-xxl text-white">
            <a href="/organisations">Organisations</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/courses">Courses</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/certificate">Certificates</a>
          </h1>
          <h1 className="font-medium text-xxl text-white">
            <a href="/landing">Join Us</a>
          </h1>
        </div>

        <div className="text-white">
        <ConnectButton/>
        </div>
      </div>
      <div style={gradientStyle} />
    </nav>
  )
}

export default Navbar
