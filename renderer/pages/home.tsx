import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {

  // onClick function to redirect to next page
  function handleClick() {
    // Redirect to the next page
    window.location.href = '/next';
  }

  return (
    <React.Fragment>
      <Head>
        <title>Login - TherapEase</title>
      </Head>
      <div className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex items-center justify-center" 
           style={{ backgroundImage: 'url("/images/login_bg.png")' }}>
        <div className="bg-white p-8 rounded-[48px] shadow-lg w-96">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="TherapEase Logo"
              width={117}
              height={117}
              priority
            />
          </div>
          <div>
            <h2 className="text-lg font-normal mt-[-8px] mb-6 text-[#000000] text-center">Inicio Sesión</h2>
          </div>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full rounded-xl px-4 py-2 text-[#000000] bg-[#E9E1E1] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingrese su usuario"
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-xl px-4 py-2 text-[#000000] bg-[#E9E1E1] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="text-center">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
                ¿Ha olvidado su contraseña?
              </Link>
            </div>
            <button
              type="button"
              onClick={() => handleClick()}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-[#141128c2] bg-[#CDE2F2] hover:bg-[#b0c9dd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
