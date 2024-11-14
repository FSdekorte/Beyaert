"use client"

import Image from "next/image";

const items = [
  { color: "bg-gray-800", rotate: "-rotate-30", zIndex: "z-10" },
  { color: "bg-gray-600", rotate: "-rotate-15", zIndex: "z-20" },
  { color: "bg-gray-400", rotate: "rotate-0", zIndex: "z-30" },
  { color: "bg-gray-600", rotate: "rotate-15", zIndex: "z-20" },
  { color: "bg-gray-800", rotate: "rotate-30", zIndex: "z-10" },
];

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
      <section>
      <div className="flex justify-center items-center h-screen">
      <div className="relative flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-32 h-48 ${item.color} rounded-lg absolute ${item.rotate} ${item.zIndex}`}
            style={{
              left: `${index * 20}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
      </section>
    </main>
  );
}
