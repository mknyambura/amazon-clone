import Image from 'next/image'
import React from 'react'
import logo from '../app/amazon.png'
import  {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <header>
        {/* Top Nav */}
        <div className='flex items-center bg-amazon_blue-light'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image
                    src={logo}
                    alt='amazon logo'
                    width={150}
                    height={40}
                    objectFit='contain'
                    className='cursor-pointer'
                />
            </div>

            {/* Search Bar */}
            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer'>
                <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' />
                <SearchIcon className='h-12 p-4'/>
            </div>

            <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                <div className='link'>
                    <p>Hello Mercie</p>
                    <p className='font-extrabold md:text-sm'>Account & Lists</p>
                </div>
                <div className='link'>
                    <p>Returns</p>
                    <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='link relative flex items-center'>
                    <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
                    <ShoppingCartIcon className='h-10'/>
                    <p className='hidden md:inline mt-2 font-extrabold md:text-sm'>Basket</p>
                </div>
            </div>

        </div>
        {/* Bottom Nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
                <MenuIcon className='h-6 mr-1'/>
                All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Today's Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
        </div>
    </header>
  )
}

export default Header