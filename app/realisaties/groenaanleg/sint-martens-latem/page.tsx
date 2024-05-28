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


const Sint_Martens_Latem = () => {
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
              <BreadcrumbPage>Sint-Martens-Latem</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="h-screen w-screen flex items-center justify-center">
          <h1 className="text-5xl font-medium">Sint-Martens-Latem</h1>
        </section>
      </body>
    </html>
  )
}

export default Sint_Martens_Latem