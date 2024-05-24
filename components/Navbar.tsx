'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import logoNavbar from '../public/blad.svg'

import { BreadcrumbLink } from './ui/breadcrumb'

const Navbar = () => {
const pathname = usePathname()

 
 return (
   <nav className='text-[1.3em] font-bold text-white h-[80px] mb-[-120px]'>
     <ul className='m-0 p-[25px] overflow-hidden mr-[2.5vw] text-right'>
         <Image
          width={30}
          height={30}
          src={logoNavbar}
          className='inline mr-4 hover:cursor-default'
          alt="logo van Beyaert Groenaanleg & Tuinonderhoud"
         />
         <BreadcrumbLink className="{`link ${pathname === '/' ? 'active' : ''}`} ml-[1.2em] inline hover:text-green-500" href="/">
           Home
         </BreadcrumbLink>

         <BreadcrumbLink
           className="{`link ${pathname === '/realisaties' ? 'active' : ''}`} ml-[1.2em] inline hover:text-green-500"
           href="/realisaties"
         >
           Realisaties
         </BreadcrumbLink>
              
         <BreadcrumbLink
           className="{`link ${pathname === '/diensten' ? 'active' : ''}`} ml-[1.2em] inline hover:text-green-500"
           href="/diensten"
         >
           Diensten
         </BreadcrumbLink>
              
         <BreadcrumbLink
           className="{`link ${pathname === '/contact' ? 'active' : ''}`} ml-[1.2em] inline hover:text-green-500"
           href="/contact"
         >
           Contact
         </BreadcrumbLink>

         <BreadcrumbLink
           className="{`link ${pathname === '/login' ? 'active' : ''}`} ml-[1.2em] inline hover:text-green-500"
           href="/login"
         >
           Login
         </BreadcrumbLink>
     </ul>
   </nav>
 )
}

export default Navbar
