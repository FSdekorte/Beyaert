import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {

  return (    
    <html>
    <body>    
      <Navbar /> 
      <section className="h-screen w-screen flex items-center justify-center">
        <h1 className="text-5xl font-medium text-white">Home</h1>
      </section>
      <section className="h-screen w-screen">
        &nbsp;
      </section>
    </body>
    </html>
  );
}
