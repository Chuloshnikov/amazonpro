"use client"

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Heart, ShoppingBagIcon, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/constants/data';

const Navbar = () => {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    console.log(pathname);

    


  return (
    <div
    className='w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-lg'
    >
        <div
        className='max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0'
        >
            {/*Logo*/}
            <Logo/>
            {/*Navigation*/}
            <nav>
              <ul
              className='hidden md:flex items-center gap-5 text-sm uppercase font-semibold'
              >
                  {
                      navigation.map((item) => (
                        <Link href={item?.href} key={item?._id}>
                        <li
                          className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${
                            item.href === pathname && "text-designColor"
                          }`}
                        >
                          {item?.title}
                          <span
                            className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${
                              item.href === pathname && "translate-x-0 bg-designColor"
                            }`}
                          />
                        </li>
                      </Link>
                    ))
                  }
              </ul>
              {openMenu && (
                <div
                className='z-50 absolute top-0 right-0 h-screen w-screen bg-zinc-100 flex flex-col gap-5'
                >
                  <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className='flex justify-end my-6 mx-4'
                  >
                    <X
                    className='w-7 h-7'
                    />
                  </button>
                      <ul
                      className='text-2xl flex flex-col gap-5 items-center px-20'
                      >
                      <li
                      className=""
                        >
                        Login
                        <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"/>
                    </li>
                      {
                        navigation.map((item) => (
                          <Link 
                          onClick={() => setOpenMenu(!openMenu)}
                          href={item?.href} 
                          key={item?._id}
                          >
                          <li
                          >
                            {item?.title}
                            <span/>
                          </li>
                        </Link>
                      ))
                      }
                    </ul>
                </div>
                  
                  )
            }
            </nav>
            {/*icons*/}
            <div
            className="flex items-center gap-x-5"
            >
                <Link
                href={'/wishlist'}
                className='hover:text-black cursor-pointer duration-200 relative group'
                >
                <Heart
                className='w-7 h-7'
                />
                <span
                className='absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white'
                >
                    0
                </span>
                </Link>
                <Link
                href={'/cart'}
                className='hover:text-black cursor-pointer duration-200 relative group'
                >
                <ShoppingBagIcon
                className='w-7 h-7'
                />
                <span
                className='absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white'
                >
                    0
                </span>
                </Link>
                <button
                 className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold hidden lg:block"
                >
                    Login
                    <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"/>
                </button>
                <button
                className='lg:hidden'
                onClick={() => setOpenMenu(!openMenu)}
                >
                      <Menu
                      className='w-7 h-7'
                      />
                </button>
            </div>

        </div>
    </div>
  )
}

export default Navbar;