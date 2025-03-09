import { useState } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Image from 'next/image'

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const clients = [
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@email.com',
      phone: '123-456-7890',
      lastVisit: '2023-06-15',
      status: 'Activo'
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria@email.com',
      phone: '123-456-7891',
      lastVisit: '2023-06-14',
      status: 'Activo'
    },
    // Add more mock data as needed
  ]

  return (
    <DashboardLayout>
      <div className="w-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-[#252339]">Lista de clientes</h1>
          <button className="bg-[#C9BFE3] hover:bg-[#bab0d8] text-[#252339] font-medium py-2 px-6 rounded-xl flex items-center">
            <Image src="/images/Plus.png" alt="Add" width={20} height={20} className="mr-2" />
            Nuevo Cliente
          </button>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cliente..."
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-300 focus:outline-none focus:border-[#C9BFE3]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-2.5">
              <Image src="/images/Search.png" alt="Search" width={20} height={20} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-[#C9BFE3]">
              <tr>
                <th className="px-6 py-3 text-left text-[#252339] font-semibold">Nombre</th>
                <th className="px-6 py-3 text-left text-[#252339] font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-[#252339] font-semibold">Teléfono</th>
                <th className="px-6 py-3 text-left text-[#252339] font-semibold">Última visita</th>
                <th className="px-6 py-3 text-left text-[#252339] font-semibold">Estado</th>
                <th className="px-6 py-3 text-left text-[#252339] font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[#252339]">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.email}</td>
                  <td className="px-6 py-4">{client.phone}</td>
                  <td className="px-6 py-4">{client.lastVisit}</td>
                  <td className="px-6 py-4">{client.status}</td>
                  <td className="px-6 py-4">
                    <button className="text-[#252339] hover:text-[#C9BFE3] mr-3">
                      <Image src="/images/Edit.png" alt="Edit" width={20} height={20} />
                    </button>
                    <button className="text-[#252339] hover:text-[#C9BFE3]">
                      <Image src="/images/Delete.png" alt="Delete" width={20} height={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}