import Image from "next/image";
import React from "react";
import IconSvg from '@/components/logoIcoon';

export default function Home() {

  return (      
    <main>
      <section className="flex gap-x-12 h-[calc(100vh-12rem)]">
        <div className="w-1/2">
          <Image 
            src="/profielfoto.jpg"
            width={2000}
            height={2000} 
            alt={"Foto van Reindert Beyaert"}  
            className="h-full w-full rounded-3xl"        
          />
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-center h-full">
            <div>
              <Image 
                src="/logo-transparent.png"
                alt="Logo"
                width={8031}
                height={5197}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
