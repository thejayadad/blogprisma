'use client'

import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <section className='flex flex-col mt-12 items-center'>
 <div className='flex items-center'>
<h1 className="text-3xl font-extrabold text-blue-500">Blog</h1>
      <h2 className="text-3xl font-semibold text-orange-500">List</h2>
      </div>
<div className='grid grid-cols-2 gap-6 mt-12 p-6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

    </div>
    </section>
  )
}

export default CardList