import Navbar from '@/components/Navbar'
import React from 'react'
import { 
  Breadcrumb, 
  BreadcrumbList,
  BreadcrumbLink, 
  BreadcrumbItem, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb'
import Link from 'next/link'


const Tuinonderhoud = () => {
  return (
    <html>
      <body>
      <Navbar />
      <Breadcrumb className='absolute ml-[2.5vw] mt-[120px]'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
              <BreadcrumbLink href="/realisaties">Realisaties</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tuinonderhoud</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
      </Breadcrumb>
      <section className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-5xl font-medium">Tuinonderhoud</h1>
            <Link href="/realisaties/tuinonderhoud/middelkerke" className='absolute mt-20 hover:text-green-500'>Middelkerke</Link>
      </section>
      </body>
    </html>
  )
}

export default Tuinonderhoud