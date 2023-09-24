'use client'
import React from 'react';
import Image from 'next/image';

const PostPage = ({ data, slug }) => {
  return (
    <section className='container mx-auto mt-12 flex flex-col md:flex-row md:items-center gap-12'>
<div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-500 mb-6">title</h1>
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src='https://images.pexels.com/photos/5643191/pexels-photo-5643191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" className="w-full h-full" />
            </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold">{data?.user.name}</span>
            <span className="text-gray-500">01.01.2024</span>
          </div>
        </div>
      </div>

        <div className="w-full md:w-1/2">
          <img
          src='https://images.pexels.com/photos/5643191/pexels-photo-5643191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt="pic" className="w-full h-auto rounded-lg" />
        </div>

      <div className="flex-1 mt-6 md:mt-0">
        <div className="text-xl md:text-2xl font-normal leading-relaxed mb-6">
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
        </div>
        <div className="mt-8">
          Comments
        </div>
      </div>
      <div className="flex-1 md:hidden">
        menu
      </div>
    </section>
  )
}

export default PostPage