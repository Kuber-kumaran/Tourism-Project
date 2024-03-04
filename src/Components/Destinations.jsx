import React from 'react'
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import keywest from '../assets/keywest.jpg';
import rockbeach from '../assets/rockbeach.jpg'
import Architecture from '../assets/Architecture.jpg'
import ThanjaiTemple from '../assets/ThanjaiTemple.jpg'
import Churches from '../assets/Churches.jpg'
import Mecca from '../assets/Mecca.jpg'
import Buddha from '../assets/Buddha.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All-Inclusive Resorts</h1>
      <p className='p-4'>On the caribbean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-6 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-4 row-span-2' src={borabora} alt="/"/> 
          <img className='w-full h-full object-cover' src={borabora2} alt="/"/> 
          <img className='w-full h-full object-cover' src={maldives} alt="/"/>  
          <img className='w-full h-full object-cover' src={keywest} alt="/"/> 
          <img className='w-full h-full object-cover' src={rockbeach} alt="/"/> 
      </div>
      <h1 className='p-4'>All Types of HOLY SPOTS</h1>
      <p className='p-2'>World Wide of All Spiritual Places</p>
      <div className='grid grid-rows-none md:grid-cols-6 py-4 gap-2 md:gap-4'>
          <img className='w-full h-full object-cover col-span-2 md:col-span-4 row-span-2' src={Architecture} alt="/"/> 
          <img className='w-full h-full object-cover' src={ThanjaiTemple} alt="/"/> 
          <img className='w-full h-full object-cover' src={Churches} alt="/"/>  
          <img className='w-full h-full object-cover' src={Mecca} alt="/"/> 
          <img className='w-full h-full object-cover' src={Buddha} alt="/"/> 
      </div>
    </div>
  )
}

export default Destinations
