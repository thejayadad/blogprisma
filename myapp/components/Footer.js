'use client'
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12 ">
      <div className="mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8">
          <div className="flex items-center mb-4">
         <div className='flex items-center'>
        <h1 className="text-3xl font-extrabold text-blue-500">Blog</h1>
        <h2 className="text-3xl font-semibold text-orange-500">List</h2>
      </div>
          </div>
          <p className="text-sm font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus similique aspernatur
            obcaecati veritatis. Aperiam cum porro sequi, totam minima consequuntur, aspernatur deleniti vero
            repellendus dorales.
          </p>
          <div className="flex mt-4">
            <FaFacebook className="text-white mr-2" />
            <FaInstagram className="text-white mr-2" />
            <FaTiktok className="text-white mr-2" />
            <FaYoutube className="text-white" />
          </div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 px-4 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Links</h2>
          </div>
          <ul className="text-sm font-light">
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Tags</h2>
          </div>
          <ul className="text-sm font-light">
            <li>
              <Link href="/">Pizza</Link>
            </li>
            <li>
              <Link href="/">Burgers</Link>
            </li>
            <li>
              <Link href="/">IceCream</Link>
            </li>
            <li>
              <Link href="/">Coffee</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Social</h2>
          </div>
          <ul className="text-sm font-light">
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">Tiktok</Link>
            </li>
            <li>
              <Link href="/">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
