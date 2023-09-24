'use client'
import React from 'react';

const Card = () => {
  return (
    <div className="bg-white shadow-sm overflow-hidden p-4" style={{ height: '420px', width: '350px' }}>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="date bg-primary text-white w-10 h-10 rounded-full absolute top-3 right-3 flex items-center justify-center text-sm font-semibold">
          06 Mar
        </div>
        <div className="tag bg-gray-300 rounded-sm m-2 text-white absolute bottom-0 text-center text-xs font-semibold p-2">
          popular
        </div>
      </div>
      <div className="p-4">
        <div className="text-xl font-semibold">Best Coffee Shops Town</div>

        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.{' '}
          <a href="#" className="text-red-600 font-semibold">
            Read More
          </a>
        </p>
        <div className="flex items-center mt-5">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
            <img src="images/avatar4.png" alt="Author Avatar" className="w-full" />
          </div>
          <div>
            <span className="text-sm text-gray-200">Justine Myranda</span>
          </div>
          <button className="btn btn-sm ml-auto">
            <i className="fa fa-share-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
