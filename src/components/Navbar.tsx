import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {

    const navigation = [
        {_id: 910, title: "Home", href: "/"},
        {_id: 911, title: "Phones", href: "/phones"},
        {_id: 912, title: "Phone Cases", href: "/phonecases"},
        {_id: 913, title: "Watches", href: "/watches"},
        {_id: 914, title: "Accessories", href: "/accessories"}

    ]


  return (
    <div
    className='w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600'
    >
        <div
        className='max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0'
        >
            {/*Logo*/}
            <Logo/>
            {/*Navigation*/}
            <ul
            className='hidden md:flex items-center gap-5 text-sm uppercase font-semibold'
            >
                {
                    navigation.map((item) => (
                        <li>
                            <Link
                            href={item?.href}
                            >{item?.title}</Link>
                        </li>
                    ))
                }
            </ul>
            {/*icons*/}
            <p>icons</p>
        </div>
    </div>
  )
}

export default Navbar;