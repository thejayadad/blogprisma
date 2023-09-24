'use client'

import React from 'react'

const Featured = () => {
  return (
    <section>
            <div className="relative bg-cover bg-center bg-fixed h-screen  rounded-sm" style={{ backgroundImage: "url('https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <div className="absolute inset-0 bg-black opacity-40  rounded-sm"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to CulinaryExperience
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Explore the world of culinary delights with us.
          </p>
          <a
            href="#your-link"
            className="px-6 py-3 bg-gray-400 hover:bg-gray-200 text-white text-lg font-semibold rounded-sm transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Featured