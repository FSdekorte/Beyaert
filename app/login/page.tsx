import { login, signup } from './action'
import Image from 'next/image'
import loginLogo from '@/public/blad.svg'
import Navbar from '@/components/Navbar'

export default function LoginPage() {
  return (
    <html>
      <body className='overflow-hidden'>
        <Navbar />
        <section className="overflow-hidden h-screen w-screen items-center justify-center">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-[4em]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image className="mx-auto" width={40} height={40} src={loginLogo} alt="Your Company" />
              <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight  text-[#A6A6A6]">Inloggen</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6  text-[#A6A6A6]">Email-adres</label>
                  <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" required className="transition-all duration-300 block w-full rounded-md py-1.5 pl-2 bg-transparent text-green shadow-sm ring-2 ring-inset ring-white placeholder:text-gray-400 focus:outline-none focus:ring-3 focus:ring-inset focus:ring-green sm:text-base sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6  text-[#A6A6A6]">Wachtwoord</label>
                  </div>
                  <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="transition-all duration-300 block w-full rounded-md py-1.5 pl-2 bg-transparent text-green shadow-sm ring-2 ring-inset ring-white placeholder:text-gray-400 focus:outline-none focus:ring-3 focus:ring-inset focus:ring-green sm:text-base sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button type="submit" className="transition-all duration-500 flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" formAction={login}>Log in</button>
                </div>
                <p className="mt-10 text-center text-sm space-between text-[#A6A6A6]">
                Word nog vnadaag een lid? &nbsp;
                <button className="transition-all duration-500 font-semibold leading-6 text-white hover:text-green" formAction={signup}>Registreer account</button>
              </p>
              </form>
            </div>
          </div>
        </section>
        {/* <section className="h-screen w-screen flex items-center justify-center">
          <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
          </form>
        </section> */}
      </body>
    </html>
  )
}