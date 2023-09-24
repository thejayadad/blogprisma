'use client'
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="flex justify-between p-4 bg-primary text-gray-500 h-[100px] items-center min-w-full">
      <div className="flex space-x-1 cursor-pointer flex-1">
        <span
          className="text-pink-500 hover:text-pink-700"
        >
          <FaInstagram size={24} />
        </span>
        <span
          className="text-red-500 hover:text-red-700"
        >
          <FaYoutube size={24} />
        </span>
        <span
          className="text-blue-500 hover:text-blue-700"
        >
          <FaFacebook size={24} />
        </span>
        <span
          className="text-black hover:text-gray-700"
        >
          <FaTiktok size={24} />
        </span>
      </div>
      <div className="hidden md:flex items-center flex-1">
      <h1 className="text-3xl font-extrabold text-blue-500">Culinary</h1>
      <h2 className="text-3xl font-semibold text-orange-500">Experience</h2>
    </div>

      <div className=' flex flex-1 justify-end gap-2'>
        <Link
        className='px-2 py-1 bg-orange-500 rounded-sm text-white hover:bg-orange-700'
        href={'/login'}
        >Login</Link>
                <Link
        className='px-2 py-1 bg-blue-500 rounded-sm text-white hover:bg-blue-700'
        href={'/register'}
        >Register</Link>
      </div>
    </header>
  );
};

export default Navbar;
