"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
const pathname = usePathname()
 
 return (
   <nav className='text-[1.3em] font-bold text-white h-[80px] mb-[-120px]'>
     <ul className='m-0 p-[25px] overflow-hidden ml-[2.5vw] mr-[2.5vw] text-right'>
         <Link className="{`link ${pathname === '/' ? 'active' : ''}`} mr-[1em] inline hover:text-green-500" href="/">
           Home
         </Link>

         <Link
           className="{`link ${pathname === '/realisaties' ? 'active' : ''}`} mr-[1em] inline hover:text-green-500"
           href="/realisaties"
         >
           Realisaties
         </Link>
          {/* <Link
            className="{`link ${pathname === '/realisaties/groenaanleg' ? 'active' : ''}`} mr-[1em] inline hover:text-green-500"
            href="/realisaties/groenaanleg"
          >
            Groenaanleg
          </Link> */}
              
         <Link
           className="{`link ${pathname === '/diensten' ? 'active' : ''}`} mr-[1em] inline hover:text-green-500"
           href="/diensten"
         >
           Diensten
         </Link>
              
         <Link
           className="{`link ${pathname === '/contact' ? 'active' : ''}`} mr-[1em] inline hover:text-green-500"
           href="/contact"
         >
           Contact
         </Link>
     </ul>
   </nav>
 )
}

export default Navbar
