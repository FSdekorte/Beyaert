import Navbar from "@/components/Navbar";
import React from "react";
import Image from 'next/image'
import project1 from '../public/project-1.jpg'
import project2 from '../public/project-2.jpeg'
import profielFoto from '../public/profielfoto.jpg'
import logoHome from '../public/logo-transparent.png'
<<<<<<< Updated upstream
import Testfoto from '../public/project-3.jpg'
import Link from "next/link";
=======

>>>>>>> Stashed changes

export default function Home() {

  return (    
    <html>
      <body>    
      <Navbar/> 
<<<<<<< Updated upstream
      <section className="h-screen flex w-screen pt-[80px] ">
=======
      <section className="h-screen flex w-screen mt-[-80px] pt-[80px] ">
>>>>>>> Stashed changes
        <div className="w-1/2 h-screen flex items-center justify-center mt-[-40px]">
          <Image
            objectFit="cover"
            src={profielFoto}
            className='rounded-3xl'
            alt="Profielfoto van Reindert Beyaert"
          />
        </div>
<<<<<<< Updated upstream
        <div className="w-1/2 h-screen flex items-center justify-center mt-[-40px] -ml-45">
          <Image
            src={logoHome}
            className='align-middle'
            alt="Logo van Beyaert Groenaanleg & Tuinonderhoud"
=======
        <div className="w-1/2 h-screen flex items-center justify-center mt-[-40px] -ml-35">
          <Image
            objectFit="cover"
            src={logoHome}
            className='align-middle'
            alt="Profielfoto van Reindert Beyaert"
>>>>>>> Stashed changes
          />
        </div>
      </section>
      <section className="h-screen w-screen">
<<<<<<< Updated upstream
        <div className="w-screen relative h-auto text-center">
          <h1 className="font-freight text-[3.5em] -ml-20">
          Creating
          </h1>
          <h3 className="font-freight-italic text-[2.7em] ml-20 text-green">
=======
        <div className="w-screen relative h-auto align-center bg-red-700">
          <h1 className="font-freight text-[3.5em]">
          Creating
          </h1>
          <h3 className="font-freight-italic text-[2.7em]">
>>>>>>> Stashed changes
            outdoor spaces
          </h3>
        </div>
        <div className="flex">
<<<<<<< Updated upstream
          <div className="w-1/2 h-screen">
          <Link href="/realisaties/groenaanleg/knokke">
            <div className="w-[44vw] ml-[4vw] mr-[2vw]   mt-[14vh]">
              <Image
                objectFit="cover"
                src={project1}
                className='align-middle rounded-3xl transition-all mb-4 hover:mb-10 hover:-mt-6 hover:ease-in-out duration-700'
                alt="Modern huis groenaanleg"
              />
              <h1 className="font-freight text-2xl transition-all duration-300 ease-in-out hover:text-green">Groenaanleg modern huis in Knokke</h1>
            </div>
          </Link> 
          </div>

          <div className="w-1/2 h-screen">
          <Link href="/realisaties/tuinonderhoud/middelkerke">
          <div className="w-[44vw] mr-[4vw] ml-[2vw] mt-[24vh]">
              <Image
                objectFit="cover"
                src={project2}
                className='align-middle rounded-3xl transition-all mb-4 hover:mb-10 hover:-mt-6 hover:ease-in-out duration-700'
                alt="Landelijk huis tuinonderhoud"
              />
              <h1 className="font-freight text-2xl transition-all duration-300 ease-in-out hover:text-green">Tuinonderhoud landelijk huis in Middelkerke</h1>
            </div>
          </Link>
          </div>
=======
        <div className="w-1/2 h-screen bg-blue-700">
          <h1>Test</h1>
        </div>
        <div className="w-1/2 h-screen bg-green-700">
          <h1>Test</h1>
        </div>
>>>>>>> Stashed changes
        </div>
      </section>

      
<<<<<<< Updated upstream
      <section className="h-screen relative flex w-screen">
      {/* <video width="320" height="240" controls preload="none">
      <source src="@/" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      <Image
        objectFit="cover"
        src={Testfoto}
        className='rounded-3xl w-5/6 h-5/6 m-auto bg-orange-500'
        alt="Modern huis groenaanleg"
      />
      {/* <div className="rounded-3xl w-5/6 h-5/6 m-auto bg-orange-500"/> */}

      <div className="absolute bottom-0 w-[100vw] flex items-center justify-center text-white">
        <h1 className='font-freight text-[2.25em] absolute -mt-96'>Het meest gedreven voor uw project.</h1>
        <h1 className='font-freight-italic text-[2.5em] absolute -mt-72'>Door mijn passie voor groen!</h1>
      </div>
      </section>

      <section className="h-screen flex w-screen">
        <div className="w-3/5 h-4/6 m-auto">
          <div className="flex items-center justify-center">
        <Image
            objectFit="cover"
            src={logoHome}
            className='w-3/5'
            alt="Profielfoto van Reindert Beyaert"
        />
        </div>
        <p className="text-2xl text-center"><b className="text-green">Reindert Beynaert</b> , geboren en getogen in Vlaanderen, ontwikkelde op jonge leeftijd een diepe liefde voor de natuur. 
          Na zijn opleiding in tuinarchitectuur en landschapsontwerp begon hij zijn carrière als tuinaannemer.
          In de afgelopen drie jaar heeft hij met zijn bedrijf 'Beynaert Groenaanleg & Tuinonderhoud' naam gemaakt als toegewijde tuinnaannemer.
          Zijn unieke benadering van tuinaanleg omvat esthetiek, harmonie met de natuur en duurzaamheid.
          Zowel bij het aanleggen van nieuwe tuinen als bij het onderhoud ervan streeft Reindert Beynaert naar het creëren van groene oases die rust en ontspanning bieden.
          Met zijn passie, talent en toewijding heeft hij niet alleen prachtige tuinen gecreëerd, maar ook een blijvende impact gehad op zijn gemeenschap.
          </p>
        </div>
=======
      <section className="h-screen flex w-screen">
        <div className="w-1/2 h-screen bg-yellow-700">

        </div>
        
        <div className="w-1/2 h-screen bg-purple-700"></div>
>>>>>>> Stashed changes
      </section>
    </body>
    </html>
  );
}
