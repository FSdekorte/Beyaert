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


const Groenaanleg = () => {
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
              <BreadcrumbPage>Groenaanleg</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-5xl font-medium">Groenaanleg</h1>
            <Link href="/realisaties/groenaanleg/knokke" className='absolute mt-20 hover:text-green-500'>Knokke</Link>
            <Link href="/realisaties/groenaanleg/sint-martens-latem" className='absolute mt-40 hover:text-green-500'>Sint-Martens-Latem</Link>
          </section>
      </body>
    </html>
  )
}

export default Groenaanleg