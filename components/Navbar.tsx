"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconSvg from '@/components/logoIcoon';

export default function Navbar () {

const currentPath = usePathname();  

  return (
    <nav className="flex fixed top-0 left-0 w-full items-center justify-center py-4 space-x-4 z-50 ">
      <Link href="/" className=" p-4 rounded-full bg-gray-100 hover:bg-gray-300 transition-all duration-500 ease-in-out backdrop-blur-lg">
        <IconSvg className="w-6 h-6" />
      </Link>
      <div className="bg-gray-100 bg-opacity-55 flex items-center space-x-8 px-6 py-4 rounded-full text-xl font-bold shadow-md backdrop-blur-xl">
          <Link href="/" >
            <p className={currentPath === "/" ? "text-primary" : "text-gray-300 hover:text-primary transition-all duration-500 ease-in-out"}>Home</p>
          </Link>

          <Link href="/realisaties" >
            <p className={currentPath === "/realisaties" ? "text-primary" : "text-gray-300 hover:text-primary transition-all duration-500 ease-in-out"}>Realisaties</p>
          </Link>

          <Link href="/diensten" >
            <p className={currentPath === "/diensten" ? "text-primary" : "text-gray-300 hover:text-primary transition-all duration-500 ease-in-out"}>Diensten</p>
          </Link>

          <Link href="/contact" >
            <p className={currentPath === "/contact" ? "text-primary" : "text-gray-300 hover:text-primary transition-all duration-500 ease-in-out"}>Contact</p>
          </Link>
      </div>
    </nav>
  );
};