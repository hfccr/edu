import React from 'react'

const gradientStyle = {
    background:
      "white",
    height: "4px",
    width: "100%",
    border: "none",
  };

const Navbar = () => {
  return (
    <navbar className="sticky top-0 z-50 ">
    <div className="flex flex-row mx-auto px-[40px] py-[20px] justify-between items-center mt-[0px] bg-blue-500 ">
      <div className="flex flex-row items-center flex-start font-bold text-2xl text-white">
        <a href="/">EDU</a>
      </div>
      <div className="flex items-center space-x-8">
        <h1 className="font-medium text-xxl text-white">
          <a href="/">Dev Dashboard</a>
        </h1>
        <h1 className="font-medium text-xxl text-white">
          <a href="/landing">Join Us</a>
        </h1>
        <div className="text-white">
        Wallet
      </div>
      </div>
    </div>
    <div style={gradientStyle} />
  </navbar>
  )
}

export default Navbar
