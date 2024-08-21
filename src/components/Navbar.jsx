import React from 'react'
import { appleImg, bagImg } from '../utils'
import { searchImg } from '../utils'
import {navLists} from "../constants"
function Navbar() {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full justify-between items-center screen-max-width'>

            {/* We do not give image in react as we do in html i.e img src="" because in react we have to import the image and import is javascript part and
            we write js code in curly braces in react */}

            <img src={appleImg} alt='apple' height={18} width={15} ></img>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav,i)=>(

                    <div className='pl-10 cursor-pointer text-gray hover:text-white transition-all' key={i}>
                        {nav}
                    </div>
                ))}
            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img className='ml-10' src={searchImg} alt="search" width={15} heigth={18}></img>
                <img className='ml-5' src={bagImg} alt="cart" width={15} height={18}></img>
            </div>
        </nav>
    </header>
  )
}

export default Navbar