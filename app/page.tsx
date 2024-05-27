import Navbar from "@/components/Navbar";
import React from "react";
import Image from 'next/image'
import profielFoto from '../public/profielfoto.jpg'
import logoHome from '../public/blad.svg'


export default function Home() {

  return (    
    <html>
      <body>    
      <Navbar/> 
      <section className="h-screen flex w-screen mt-[-80px] pt-[80px] ">
        <div className="w-1/2 h-screen  flex items-center justify-center mt-[-40px]">
          <Image
            objectFit="cover"
            src={profielFoto}
            className='inline ml-[1.2em] hover:cursor-default rounded-3xl'
            alt="Profielfoto van Reindert Beyaert"
          />
        </div>
        
        <div className="w-1/2 h-screen bg-gray">
        <Image
            objectFit="cover"
            src={logoHome}
            className='inline ml-[1.2em] hover:cursor-default rounded-3xl'
            alt="logo van Beyaert Groenaanleg & Tuinonderhoud"
          />
        </div>
      </section>
      <section className="h-screen flex w-screen">
        <div className="w-1/2 h-screen bg-red-700">

        </div>
        
        <div className="w-1/2 h-screen bg-white"></div>
      </section>
    </body>
    </html>
  );
}
