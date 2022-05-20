import React from 'react';
import '../styles/Home.module.css';

export const SearchBar = () => {
  return (
    <input type="text" className='flex transition-all duration-500 hover:transform hover:scale-110 px-2 py-1 font-quicksand rounded-sm bg-white dark:bg-black dark:text-white focus:outline-none'>
    </input>
  )
}
