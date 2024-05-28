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


const Knokke = () => {
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
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
              <BreadcrumbLink href="/realisaties/groenaanleg">Groenaanleg</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Knokke</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="h-screen w-screen flex items-center justify-center">
          <h1 className="text-5xl font-medium">Knokke</h1>
        </section>
      </body>
    </html>
  )
}

export default Knokke