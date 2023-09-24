'use client'

import Link from 'next/link';
import React from 'react';
import { FaPizzaSlice, FaHamburger, FaIceCream, FaCoffee } from 'react-icons/fa';

const categories = [
  { name: 'Pizza', icon: <FaPizzaSlice />, color: 'bg-red-200' },
  { name: 'Burgers', icon: <FaHamburger />, color: 'bg-yellow-200' },
  { name: 'Ice Cream', icon: <FaIceCream />, color: 'bg-blue-200' },
  { name: 'Coffee', icon: <FaCoffee />, color: 'bg-green-200' },
];

const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
      {categories.map((category, index) => (
        <Link
          href={`#${category.name}`}
          key={index}
        >
          <span
            className={`p-4 text-white text-center font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${category.color} flex flex-col items-center`}
          >
            {category.icon}
            <p className="mt-1">{category.name}</p>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
