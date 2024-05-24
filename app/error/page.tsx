import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function ErrorPage() {
 return           <Alert>
 <Terminal className="h-4 w-4" />
 <AlertTitle>Komt dadelijk</AlertTitle>
 <AlertDescription>
   <h1 className="text-5xl font-medium text-white">404</h1>
 </AlertDescription>
</Alert>
}