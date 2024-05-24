import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function AlertDestructive() {
  return (
    <section className="h-screen w-screen flex items-center justify-center">
    <Alert variant="destructive" className="w-fit text-red-700">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle >Error</AlertTitle>
      <AlertDescription className="text-green">
        Iets ging fout, Probeer opnieuw.
      </AlertDescription>
    </Alert>
  
    <BreadcrumbLink href="/" className="transition-all duration-300 absolute text-3xl text-red-700 hover:text-green mt-[6em]">
        Home
      </BreadcrumbLink>
    </section>
  )
}
