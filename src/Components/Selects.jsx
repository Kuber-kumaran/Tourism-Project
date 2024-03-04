import React from 'react'
import borabora from '../assets/borabora.jpg';
import maldives from '../assets/maldives.jpg';
import keywest from '../assets/keywest.jpg';
import rockbeach from '../assets/rockbeach.jpg'
import Architecture from '../assets/Architecture.jpg'
import ThanjaiTemple from '../assets/ThanjaiTemple.jpg'
import Churches from '../assets/Churches.jpg'
import Mecca from '../assets/Mecca.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
        
    <SelectsCard bg={borabora} text='Bora Bora'/>
    <SelectsCard bg={keywest} text='Keywest'/>
    <SelectsCard bg={maldives} text='Maldives'/>
    <SelectsCard bg={rockbeach} text='Rockbeach'/>
    <SelectsCard bg={Architecture} text='Architecture'/>
    <SelectsCard bg={ThanjaiTemple} text='ThanjaiTemple'/>
    <SelectsCard bg={Churches} text='Churches'/>
    <SelectsCard bg={Mecca} text='Mecca'/>

       

    </div>
  )
}

export default Selects
