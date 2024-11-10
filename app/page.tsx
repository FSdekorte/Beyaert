import Image from "next/image";
import React from "react";

export default function Home() {

  return (      
    <main>
      <section className="flex gap-x-12 bg-red-400 h-[calc(100vh-12rem)]">
        <div className="w-1/2">
          <Image 
            src="/profielfoto.jpg"
            width={2000}
            height={2000} 
            alt={"Foto van Reindert Beyaert"}  
            className="h-full w-full rounded-3xl"        
          />
        </div>
        <div className="w-1/2 bg-secondary">
          p
        </div>
      </section>
    </main>
  );
}
