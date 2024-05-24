import Navbar from '@/components/Navbar'
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'


const diensten = () => {
  return (
    <html>
      <body>
        <Navbar />
        <section className="h-screen w-screen flex items-center justify-center">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Komt dadelijk</AlertTitle>
            <AlertDescription>
              <h1 className="text-5xl font-medium text-white">Diensten</h1>
            </AlertDescription>
          </Alert>
        </section>
      </body>
    </html>
  )
}

export default diensten
