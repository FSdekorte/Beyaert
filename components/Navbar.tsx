"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconSvg from '@/components/logoIcoon';

export default function Navbar () {

const currentPath = usePathname();  

  return (
    <nav className="flex justify-center py-4 space-x-4">
      <Link href="/" className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-all duration-500 ease-in-out">
        <IconSvg className="w-6 h-6" />
      </Link>
      <div className="flex items-center space-x-8 bg-gray-200 px-6 py-2 rounded-full text-xl font-bold shadow-md">
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