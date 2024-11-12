"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react';

export default function Realisaties() {

  const stories = [
    { id: 1, style: 'Landelijk', Locatie: 'Brugge', image: '/project-1.jpg' },
    { id: 2, style: 'Modern', Locatie: 'Antwerpen', image: '/project-2.jpg' },
    { id: 3, style: 'Landelijk', Locatie: 'Sint-Martens-Latem', image: '/project-3.jpg' },
    { id: 4, style: 'Modern', Locatie: 'Keerbergen', image: '/project-4.jpg' },
    { id: 5, style: 'Landelijk', Locatie: 'Brugge', image: '/project-1.jpg' },
    { id: 6, style: 'Modern', Locatie: 'Antwerpen', image: '/project-2.jpg' },
    { id: 7, style: 'Landelijk', Locatie: 'Sint-Martens-Latem', image: '/project-3.jpg' },
    { id: 8, style: 'Modern', Locatie: 'Keerbergen', image: '/project-4.jpg' },
  ];

  const [activeStory, setActiveStory] = useState<typeof stories[0] | null>(null);

  return (
    <main>
      <section className="flex gap-x-12 h-[calc(100vh-12rem)]">
        <div className="w-1/2 flex items-center min-h-full">
          <div>
            <h1 className='font-bold text-8xl'>
              Realisaties
            </h1>
            <p className='font-bold text-2xl'>
              Zowel wij als onze klanten zijn uiterst trots op de realisaties.
              Ontdek de verschillende stijlen, van landelijk en romantisch tot strak en modern.
              Staat uw droom hier ergens tussen?
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-center h-full">
            <div>
              <Image 
                src="/realisaties-head.jpg"
                alt="Logo"
                width={8031}
                height={5197}
                className='rounded-3xl'
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center min-h-screen items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 p-4">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative w-full h-96 bg-black rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
              onClick={() => setActiveStory(story)}
            >
              <img src={story.image} alt={story.style} className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs p-1 rounded">
                {story.style} • {story.Locatie}
              </div>
            </div>
          ))}
        </div>

        {activeStory && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm" onClick={() => setActiveStory(null)}>
            <div className="relative w-full max-w-md h-[80vh] bg-black rounded-lg overflow-hidden shadow-lg" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 text-white text-2xl z-10"
              >
                &times;
              </button>
              <img
                src={activeStory.image}
                alt={activeStory.style}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4  from-black to-transparent">
                <div className="flex items-center bg-black bg-opacity-60 p-1 rounded">
                  <MapPin className='text-primary h-4'/>
                  <span className="text-base text-gray-300">{activeStory.Locatie}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
