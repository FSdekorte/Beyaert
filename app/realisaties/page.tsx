import Navbar from '@/components/Navbar'
import { 
  Breadcrumb, 
  BreadcrumbList,
  BreadcrumbLink, 
  BreadcrumbItem, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import React from 'react'

const realisaties = () => {
  return (
    <html>
      <body>
      <Navbar />      
      <Breadcrumb className='absolute ml-[2.5vw] mt-[120px]'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Realisaties</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="h-screen w-screen flex items-center justify-center">
          <h1 className="text-5xl font-medium text-white">Realisaties</h1>
          <Link href="/realisaties/groenaanleg" className='absolute mt-20 hover:text-green-500'>Groenaanleg</Link>
          <Link href="/realisaties/tuinonderhoud" className='absolute mt-40 hover:text-green-500'>Tuinonderhoud</Link>
          <Link href="/realisaties/boomverzorging" className='absolute mt-60 hover:text-green-500'>Boomverzorging</Link>
        </section>
      </body>
    </html>
  )
}

export default realisaties

