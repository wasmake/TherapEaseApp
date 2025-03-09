import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    function handleHome(){
        window.location.href = '/next'
    }

    function handleClients(){
        window.location.href = '/clients'
    }

    function handleLogout() {
        window.location.href = '/home'
    }

    return (
        <React.Fragment>
            <Head>
                <title>Dashboard - TherapEase</title>
            </Head>
            <div className="flex min-h-screen bg-[#E4F3FB]">
                <nav className="w-[128px] ml-2 my-4 bg-[#C9BFE3] rounded-xl shadow-lg flex flex-col items-center py-6 space-y-8">
                    <div className="w-20 h-20">
                        <Image
                            src="/images/logo.png"
                            alt="TherapEase Logo"
                            width={120}
                            height={120}
                            priority
                        />
                    </div>

                    <div className="flex flex-col space-y-8 mt-8">
                        <button className="p-3 rounded-xl hover:bg-gray-100" onClick={() => handleHome()}>
                            <Image src="/images/Main.png" alt="Home" width={32} height={32} />
                        </button>
                        <button className="p-3 rounded-xl hover:bg-gray-100">
                            <Image src="/images/Gestion_Citas.png" alt="Calendar" width={32} height={32} />
                        </button>
                        <button className="p-3 rounded-xl hover:bg-gray-100" onClick={() => handleClients()}>
                            <Image src="/images/Lista_Clientes.png" alt="Users" width={32} height={32} />
                        </button>
                        <button className="p-3 rounded-xl hover:bg-gray-100">
                            <Image src="/images/Notas.png" alt="Notes" width={32} height={32} />
                        </button>
                        <button className="p-3 rounded-xl hover:bg-gray-100">
                            <Image src="/images/Imagenes.png" alt="Gallery" width={32} height={32} />
                        </button>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-[1px] bg-gray-300 mb-4"></div>
                        <button className="p-3 rounded-xl hover:bg-gray-100 mb-4">
                            <Image src="/images/Ajustes.png" alt="Settings" width={32} height={32} />
                        </button>
                        <button className="p-3 rounded-xl hover:bg-gray-100" onClick={() => handleLogout()}>
                            <Image src="/images/Cerrar_Sesión.png" alt="Logout" width={32} height={32} />
                        </button>
                    </div>
                </nav>

                <div className="flex-1 flex my-12 ml-16 mr-4">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}
