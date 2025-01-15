"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const links=[
    {
        name:"Ana Sayfa",
        path:"/"
    },
    {
        name:"Özgeçmiş",
        path:"/resume"
    },
    {
        name:"Çalışmalarım",
        path:"/work"
    },
    {
        name:"Bana Ulaşın",
        path:"/contact"
    },

]

function Nav() {
    const pathname=usePathname();
    console.log(pathname);

    return (
        <nav className='flex gap-8'>
            {links.map((link,index)=>{
                return(
                    <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav